/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { RequestError } from '../errors';

type ApiFunction = (...args: any[]) => Promise<unknown>;

type Data<SubmitFuncType extends ApiFunction> = Awaited<ReturnType<SubmitFuncType>> | null;

type SubmitFunction<SubmitFuncType extends ApiFunction> = (
  ...args: Parameters<SubmitFuncType>
) => Promise<Data<SubmitFuncType>>;

type Callbacks<SubmitFuncType extends ApiFunction> = {
  onSuccess: (data: NonNullable<Data<SubmitFuncType>>) => Promise<void> | void;
  onFail: (error: RequestError) => Promise<void> | void;
};

type Params<SubmitFuncType extends ApiFunction> = {
  api: SubmitFuncType;
} & Partial<Callbacks<SubmitFuncType>>;

const useSubmit = <SubmitFuncType extends ApiFunction>({
  api,

  onSuccess,
  onFail,
}: Params<SubmitFuncType>) => {
  const onSuccessRef = useRef<Callbacks<SubmitFuncType>['onSuccess']>();
  const onFailRef = useRef<Callbacks<SubmitFuncType>['onFail']>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { onSuccessRef.current = onSuccess; }, [onSuccess]);
  useEffect(() => { onFailRef.current = onFail; }, [onFail]);

  const submit = useCallback<SubmitFunction<SubmitFuncType>>(
    async (...args) => {
      setIsSubmitting(true);

      try {
        const resp = await api(...args) as Data<SubmitFuncType>;

        if (resp !== null) {
          if (onSuccessRef.current) await onSuccessRef.current(resp);

          setIsSubmitting(false);

          return resp;
        }

        return null;
      } catch (e) {
        const error = e as RequestError;

        if (onFailRef.current) await onFailRef.current(error);

        setIsSubmitting(false);

        return null;
      }
    },
    [api],
  );

  return {
    submit,
    isSubmitting,
  };
};

export default useSubmit;
