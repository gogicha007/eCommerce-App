import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
interface inputData {
    name: FormDataEntryValue | null | void;
    surname: FormDataEntryValue | null | void;
}
export default class Form extends ElementCreator<HTMLFormElement> {
    routing: Router;
    inputData: inputData;
    constructor(routing: Router);
    private submitHandler;
    setData(): void;
    validateFillForm(): void;
    saveData(): void;
}
export {};
