import { ITFSessionData } from "../interfaces/interfaces";

class LocalStorage {
  private storageKey: string;

  constructor(key: string) {
    this.storageKey = key;
  }

  public getUser(): string {
    const data = this.getData() || "";
    return `${data.login || null} ${data.password || null} ${data.isLogged || null}`;
  }

  public getLogin() {
    const data = JSON.parse(localStorage.getItem(this.storageKey) as string);
    return data.login;
  }

  public isLogged() {
    const data = this.getData();
    return data ? data.isLogged : null;
  }

  public setTokens(token: ITFSessionData) {
    const storageData = this.getData();
    if (storageData) {
      storageData.access_token = token.access_token as string;
      storageData.token_expires_in = token.token_expires_in as number;
      storageData.refresh_token = token.refresh_token as string;
      storageData.token_start = Date.now();
      localStorage.setItem(this.storageKey, JSON.stringify(storageData));
    } else {
      localStorage.setItem(this.storageKey, JSON.stringify(token));
    }
  }

  public saveData(data: ITFSessionData): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  public setNull() {
    const data = JSON.parse(localStorage.getItem(this.storageKey) as string);
    data.login = null;
    data.password = null;
    data.isLogged = false;
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  public getData(key = this.storageKey): ITFSessionData {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}

export default LocalStorage;
