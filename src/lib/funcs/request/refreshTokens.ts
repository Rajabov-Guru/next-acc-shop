import { userStore } from '@/lib/stores/user/store';
import makeRequest from './makeRequest';

const api = () => (
  makeRequest({
    path: 'auth/refresh',
    method: 'GET',
  })
);

const refreshApiToken = async () => {
  const refreshTokenResp = await api();

  if (!refreshTokenResp || refreshTokenResp.status > 401) {
    userStore.removeTokens();

    return false;
  }

  try {
    const refreshedTokens = await refreshTokenResp.json() as Tokens;

    userStore.setTokens(refreshedTokens);

    return true;
  } catch (e) {
    console.log(e);
    userStore.removeTokens();

    return false;
  }
};

export default refreshApiToken;
