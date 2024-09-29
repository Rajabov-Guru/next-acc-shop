/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { useErrorBoundary } from 'react-error-boundary';

type ApiFunction = (...args: any[]) => Promise<unknown>;

type Data<FetchFuncType extends ApiFunction> = Awaited<ReturnType<FetchFuncType>> | null;

type FetchFunction<FetchFuncType extends ApiFunction> = (
  ...args: Parameters<FetchFuncType>
) => Promise<Data<FetchFuncType>>;

type FetchState<FetchFuncType extends ApiFunction> = {
  data: Data<FetchFuncType>;
  loading: boolean;
};

type Callbacks<FetchFuncType extends ApiFunction> = {
  onSuccess: (data: NonNullable<Data<FetchFuncType>>) => Promise<void> | void;
  onFail: (err?: Error) => Promise<void> | void;
};

type Params<FetchFuncType extends ApiFunction> = {
  api: FetchFuncType;
  defaultData?: Data<FetchFuncType>;
  fetchFromStart?: boolean;
  showBoundaryOnError?: boolean;
} & Partial<Callbacks<FetchFuncType>>;

const useFetch = <FetchFuncType extends ApiFunction>({
  api,
  defaultData = null,
  fetchFromStart = false,
  showBoundaryOnError = true,

  onSuccess,
  onFail,
}: Params<FetchFuncType>) => {
  const onSuccessRef = useRef<Callbacks<FetchFuncType>['onSuccess']>();
  const onFailRef = useRef<Callbacks<FetchFuncType>['onFail']>();

  const { showBoundary } = useErrorBoundary();
  const [state, setState] = useState<FetchState<FetchFuncType>>({
    data: defaultData,
    loading: Boolean(fetchFromStart),
  });

  useEffect(() => { onSuccessRef.current = onSuccess; }, [onSuccess]);
  useEffect(() => { onFailRef.current = onFail; }, [onFail]);

  const fetch = useCallback<FetchFunction<FetchFuncType>>(
    async (...args) => {
      setState((val) => ({ ...val, loading: true }));

      try {
        const resp = await api(...args) as Data<FetchFuncType>;

        if (resp) {
          if (onSuccessRef.current) await onSuccessRef.current(resp);

          setState({ data: resp, loading: false });

          return resp;
        }

        if (onFailRef.current) await onFailRef.current();

        setState({ data: null, loading: false });

        // TODO: заменить текст, который показывается при ошибке во время загрузки данных
        if (showBoundaryOnError) showBoundary('Unknown error during fetching');

        return null;
      } catch (e) {
        const error = e as Error;

        if (onFailRef.current) await onFailRef.current(error);

        setState({ data: null, loading: false });

        if (showBoundaryOnError) showBoundary(error.message);

        return null;
      }
    },
    [api, showBoundary, showBoundaryOnError],
  );

  const setData = useCallback(
    (data: Data<FetchFuncType>) => {
      setState((val) => ({
        ...val,
        data,
      }));
    },
    [],
  );

  return {
    ...state,
    fetch,
    setData,
  };
};

export default useFetch;
