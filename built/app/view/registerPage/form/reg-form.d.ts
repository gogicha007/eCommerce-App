import AlertModal from "../../../components/alert-modal/alert-modal";
import ElementCreator from "../../../util/elementCreator";
import InputWrapper from "../../../components/input-wrapper";
import Router from "../../../util/router";
import Spinner from "../../../components/spinner/spinner";
export default class RegForm extends ElementCreator<HTMLFormElement> {
    addressInput: InputWrapper;
    alertModal: AlertModal;
    billAddress: ElementCreator<HTMLFieldSetElement>;
    birthDate: InputWrapper;
    cityInput: InputWrapper;
    checkInput: ElementCreator<HTMLInputElement>;
    countryInput: ElementCreator<HTMLSelectElement>;
    emailInput: InputWrapper;
    firstNameInpput: InputWrapper;
    lastNameInput: InputWrapper;
    passwordInput: InputWrapper;
    postalInput: InputWrapper;
    routing: Router;
    spinner: Spinner;
    constructor(routing: Router);
    private getAccTokenByCredentials;
    private reqCreateCustomer;
    private reqTokensByPass;
    private submitHandler;
    validateFillForm(): boolean;
}
