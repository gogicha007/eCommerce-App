import { InputProps } from '../interfaces/interfaces';

export default class InputWrapper {
  node: HTMLElement;

  inputField: HTMLInputElement;

  errorElement: HTMLElement;

  props: InputProps;

  constructor(props: InputProps, loginInput: HTMLInputElement) {
    const node = document.createElement('div');
    node.classList.add(props.inputWrapperSelector as string);
    const input = loginInput;
    input.classList.add(props.inputSelector);
    input.type = props.type;
    input.placeholder = props.placeHolder;
    input.minLength = props.minLength as number;
    input.required = true;

    const errorElement = document.createElement('small');
    errorElement.classList.add(props.errSelector);
    errorElement.innerText = props.errMessage;

    node.appendChild(input);
    node.appendChild(errorElement);

    this.errorElement = errorElement;
    this.inputField = input;
    this.node = node;
    this.props = props;
  }

  public getNode() {
    return this.node;
  }
}
