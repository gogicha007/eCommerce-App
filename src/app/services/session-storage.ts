import { ITFUser, ITFSessionData } from '../interfaces/interfaces';

class SessionStorage {
  private storageKey: string;

  constructor(key: string) {
    this.storageKey = key;
  }

  public key(): string {
    return this.storageKey;
  }

  public getUser(key: string): string {
    const data = this.getData(key) || '';
    return `${data.login || null} ${data.password || null} ${data.isLogged || null}`;
  }

  public getLogin() {
    const data = JSON.parse(sessionStorage.getItem(this.storageKey) as string);
    return data.login;
  }

  public getPassword() {
    const data = JSON.parse(sessionStorage.getItem(this.storageKey) as string);
    return data.password;
  }

  public isLogged() {
    const data = JSON.parse(sessionStorage.getItem(this.storageKey) as string);
    return data ? data.isLogged : null;
  }

  public setUser(data: ITFSessionData) {
    const storedData = this.getData();
    if (storedData) {
      storedData.login = data.login;
      storedData.password = data.password;
      sessionStorage.setItem(this.storageKey, JSON.stringify(storedData));
    } else {
      const newData = data;
      newData.isLogged = false;
      sessionStorage.setItem(this.storageKey, JSON.stringify(newData));
    }
  }

  public setTokens(token: ITFUser) {
    const storageData = this.getData();
    if (storageData) {
      storageData.access_token = token.access_token;
      storageData.token_expires_in = token.expires_in;
      storageData.refresh_token = token.refresh_token;
      storageData.token_date = Date.now();
    }
  }

  public saveData(data: ITFUser): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  public setLogged(bool: boolean) {
    const data = JSON.parse(sessionStorage.getItem(this.storageKey) as string);
    data.isLogged = bool;
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  public setNull() {
    const data = JSON.parse(sessionStorage.getItem(this.storageKey) as string);
    data.login = null;
    data.password = null;
    data.isLogged = false;
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  public getData(key = this.storageKey): ITFUser {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}

export default SessionStorage;
