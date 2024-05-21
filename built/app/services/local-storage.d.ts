import { ITFSessionData } from "../interfaces/interfaces";
declare class LocalStorage {
    private storageKey;
    constructor(key: string);
    getUser(): string;
    getLogin(): any;
    isLogged(): boolean | null | undefined;
    setTokens(token: ITFSessionData): void;
    saveData(data: ITFSessionData): void;
    setNull(): void;
    getData(key?: string): ITFSessionData;
}
export default LocalStorage;
