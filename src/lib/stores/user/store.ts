import { makeAutoObservable } from 'mobx';

const tokensLocalStorageKey = 'tokens';

class UserStore {
  public id: string = '';

  public userName: string =  '';

  public tokens: Tokens | null;

  public roles: Role[] = [];

  constructor() {
    makeAutoObservable(this);

    // const tokens = JSON.parse(localStorage.getItem(tokensLocalStorageKey) || '""') as Tokens | '';
    //
    // if (tokens) this.tokens = tokens;
    // else this.tokens = null;
    this.tokens = null;
  }
  public setData = ({id, userName, roles}: UserModel) => {
    this.id = id;
    this.userName = userName;
    this.roles = roles;
  };

  public setTokens = (tokens: Tokens) => {
    this.tokens = tokens;
    localStorage.setItem(tokensLocalStorageKey, JSON.stringify(tokens));
  };

  public removeTokens = () => {
    this.tokens = null;
    localStorage.removeItem(tokensLocalStorageKey);
  };

  public hasRole = (role: Role | null) => {
    if(!role) return true;
    return this.roles.some((value) => value === role || value === 'SUPER');
  }
}

export const userStore = new UserStore();
