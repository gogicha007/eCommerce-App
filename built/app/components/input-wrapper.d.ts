import { ITFInputProps } from "../interfaces/interfaces";
export default class InputWrapper {
    node: HTMLElement;
    inputField: HTMLInputElement;
    errorElement: HTMLElement;
    props: ITFInputProps;
    constructor(props: ITFInputProps);
    getNode(): HTMLElement;
}
