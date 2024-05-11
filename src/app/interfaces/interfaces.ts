export interface InputProps {
  inputWrapperSelector?: string;
  inputSelector: string;
  placeHolder: string;
  type: string;
  minLength?: number;
  errSelector: string;
  errMessage: string;
}

export interface ITFLoginData {
  login: string;
  password: string;
}
