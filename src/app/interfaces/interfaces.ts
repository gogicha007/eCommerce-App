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
