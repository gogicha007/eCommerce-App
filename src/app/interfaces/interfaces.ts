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
  login?: string | null;
  password?: string | null;
  isLogged?: boolean | null;
  access_token?: string | null;
  refresh_token?: string | null;
  token_start?: number | null;
  token_expires_in?: number | null;
  customer_id?: string | null;
  customer_name?: string | null;
  version?: number | null;
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

export interface ITFCardData {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number | null;
  discount?: number | null;
}

export interface ITFProdQuery {
  count: number;
  limit: number;
  offset: number;
  results: any[];
  total: number;
}
