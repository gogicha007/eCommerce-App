export interface ITFInputProps {
  inputWrapperSelector?: string;
  inputSelector: string;
  label?: string;
  labelSelector?: string;
  name?: string;
  pattern?: string;
  minLength?: number;
  placeHolder: string;
  type: string;
  title?: string;
  errSelector: string;
  errMessage: string;
}

export interface ITFLoginData {
  login: string;
  password: string;
}

export interface ITFUser {
  [index: string]: string | number;
}

export interface ITFSessionData {
  login?: string;
  password?: string;
  isLogged?: boolean;
  access_token?: string;
  refresh_token?: string;
  token_start?: number;
  token_expires_in?: number;
}

export interface ITFCreateCustomer {
  token: string;
  login: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ITFUpdateAddress {
  token: string;
  version: number;
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface ITFMap {
  [key: string]: string[];
}
