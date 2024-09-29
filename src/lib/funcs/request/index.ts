import makeRequest from './makeRequest';
import { RequestFuncParams } from './utils/types';
import { RequestError } from '@/lib/errors';


const request = async <DataType>(params: RequestFuncParams): Promise<DataType | null> => {
  const resp = await makeRequest(params);

  if (!resp) return null;

  // if (resp.status === 401 && userStore.tokens) {
  //   console.log('HERE', 401);
  //   if (!refreshingAwait) refreshingAwait = refreshToken();
  //
  //   const respRefresh = await refreshingAwait;
  //
  //   console.log({respRefresh});
  //
  //   refreshingAwait = null;
  //
  //   if (!respRefresh) {
  //     userStore.removeTokens();
  //
  //     return null;
  //   }
  //
  //   resp = await makeRequest(params);
  //
  //   if (!resp) return null;
  // }

  if (resp.status >= 400) {
    const causeText = await resp.text();

    const errorText = `Request failed. Status: ${resp.status}. Text: ${resp.statusText}`;

    if (!causeText) throw new RequestError(errorText);

    try {
      const cause = JSON.parse(causeText) as ErrorModel;

      throw new RequestError(errorText, cause);
    } catch (e) {
      console.log(e);

      if (e instanceof RequestError) throw e;

      throw new RequestError(errorText, causeText);
    }
  }

  // 204 means no content so we don't need to parse it
  if (resp.status === 204) return '' as DataType;

  const fetchedData = await resp.json() as DataType;

  return fetchedData;
};

export default request;
