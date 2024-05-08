import { input } from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';

interface inputData {
  name: FormDataEntryValue | null | void;
  surname: FormDataEntryValue | null | void;
}
export default class Form extends ElementCreator<HTMLFormElement> {
  routing: Router;

  inputData: inputData;

  constructor(routing: Router) {
    const inputName = input(
      'userName',
      '^[A-Z][\\-a-zA-z]+$',
      '3',
      'E-mail',
      'text',
      'Only english first word uppercase, min 3 char',
      'input_name'
    );

    const inputSurname = input(
      'userSurname',
      '^[A-Z][\\-a-zA-z]+$',
      '4',
      'Password',
      'password',
      'Only english, first word uppercase, min 4 char',
      'input_password'
    );

    const inputBtn = input('', '', '', '', 'submit', '', 'input_check');

    super(
      { tag: 'form', className: 'form_content' },
      inputName,
      inputSurname,
      inputBtn
    );

    this.inputData = {
      name: '',
      surname: '',
    };

    this.routing = routing;

    const handler = this.submitHandler.bind(this);
    this.element.addEventListener('submit', handler);
    this.element.addEventListener('keydown', (e) => {
      if (e.code != 'Enter') {
        return;
      } else handler;
    });
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    this.setData();
    this.saveData();
    this.validateFillForm();
  }

  setData() {
    const data = new FormData(this.getElement());
    this.inputData.name = data.get('userName');
    this.inputData.surname = data.get('userSurname');
  }

  validateFillForm() {
    if (this.inputData.name !== '' && this.inputData.surname !== '') {
        this.routing.navigate('main-page');
      };
    }

  saveData() {
    window.localStorage.setItem('logData', JSON.stringify(this.inputData));
  }
}
