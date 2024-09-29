import qs from 'qs';
import isEmpty from 'lodash-es/isEmpty';


import { RequestFuncParams } from './utils/types';
import getBackendURL from '../getBackendURL';

const pathWithSearchParams = (
  path: string,
  params: RequestFuncParams['searchParams'],
): string => {
  if (!params || isEmpty(params)) {
    return path;
  }

  return `${path}?${qs.stringify(params, { encode: false })}`;
};

const makeRequest = async ({
  path,
  method = 'GET',
  // withToken = true,
  body,
  searchParams,
  signal,
}: RequestFuncParams) => {
  // const { tokens } = userStore;
  const requestHeaders: HeadersInit = {};

  // if (withToken) {
  //   if (tokens === null) {
  //     userStore.removeTokens();
  //
  //     return null;
  //   }
  //
  //   requestHeaders = {
  //     ...requestHeaders,
  //     Authorization: `Bearer ${tokens.accessToken}`,
  //   };
  // }

  if (typeof body === 'string') {
    requestHeaders['Content-Type'] = 'application/json';
  }

  return fetch(
    pathWithSearchParams(`${getBackendURL()}${path}`, searchParams),
    {
      method,
      headers: requestHeaders,
      body,
      signal,
      credentials: 'include'
    },
  );
};

export default makeRequest;
