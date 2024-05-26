import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
import InputWrapper from '../../../components/input-wrapper';
import AlertModal from '../../../components/alert-modal/alert-modal';
import Spinner from '../../../components/spinner/spinner';
interface InputData {
    email: FormDataEntryValue | null | void;
    password: FormDataEntryValue | null | void;
}
export default class Form extends ElementCreator<HTMLFormElement> {
    alertModal: AlertModal;
    inputData: InputData;
    loginInput: InputWrapper;
    passwordInput: InputWrapper;
    routing: Router;
    spinner: Spinner;
    constructor(routing: Router);
    private submitHandler;
    setData(): void;
    validateFillForm(): boolean;
    saveData(): void;
}
export {};
