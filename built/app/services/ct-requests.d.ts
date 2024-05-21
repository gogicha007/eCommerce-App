import { ITFCreateCustomer, ITFLoginData, ITFUpdateAddress } from "../interfaces/interfaces";
export declare const getTokensByCredentials: () => Promise<Response>;
export declare const getTokensByPass: (data: ITFLoginData) => Promise<Response>;
export declare const createCustomer: (data: ITFCreateCustomer) => Promise<Response>;
export declare const updateCustomer: (data: ITFUpdateAddress) => Promise<Response>;
