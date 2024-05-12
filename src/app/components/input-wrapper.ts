import { ITFInputProps } from '../interfaces/interfaces';
import { input } from './tags';

export default class InputWrapper {
  node: HTMLElement;

  inputField: HTMLInputElement;

  errorElement: HTMLElement;

  props: ITFInputProps;

  constructor(props: ITFInputProps) {
    const node = document.createElement('div');
    node.classList.add(props.inputWrapperSelector as string);
    const inputField = input(
      props.name as string,
      props.pattern as string,
      (props.minLength as number).toString(),
      props.placeHolder,
      props.type,
      props.title as string,
      props.inputSelector,
    );
    inputField.getElement().required = true;

    const errorElement = document.createElement('small');
    errorElement.classList.add(props.errSelector);
    errorElement.innerText = props.errMessage;

    node.appendChild(inputField.getElement());
    node.appendChild(errorElement);

    this.errorElement = errorElement;
    this.inputField = inputField.getElement();
    this.node = node;
    this.props = props;
  }

  public getNode() {
    return this.node;
  }
}
