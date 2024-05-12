import styles from './form.module.css';
import { input } from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
import InputWrapper from '../../../components/input-wrapper';
import { getTokensByPass } from '../../../services/ct-requests';
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

  constructor(routing: Router) {
    const alertModal = new AlertModal();
    const spinner = new Spinner();

    const loginWrapper = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__login,
      name: 'userEmail',
      pattern: '',
      minLength: 6,
      placeHolder: 'Email...',
      type: 'email',
      title: '',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const passwordWrapper = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__password,
      name: 'userPassword',
      pattern: '',
      minLength: 8,
      placeHolder: '',
      type: 'password',
      title: '',
      errSelector: styles['login-error'],
      errMessage:
        'Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters',
    });

    const inputBtn = input('', '', '', '', 'submit', '', styles.input__submit);

    super(
      { tag: 'form', className: styles.login__form },
      loginWrapper.getNode(),
      passwordWrapper.getNode(),
      inputBtn,
      alertModal.getNode(),
      spinner.getNode(),
    );

    this.inputData = {
      email: '',
      password: '',
    };

    this.alertModal = alertModal;
    this.loginInput = loginWrapper;
    this.passwordInput = passwordWrapper;
    this.routing = routing;
    this.spinner = spinner;

    const handler = this.submitHandler.bind(this);
    this.element.addEventListener('submit', handler);
  }

  private async submitHandler(event: Event) {
    event.preventDefault();
    this.spinner.show()
    this.setData();
    this.saveData();
    if (this.validateFillForm()) {
      const res = await getTokensByPass({
        login: this.loginInput.inputField.value,
        password: this.passwordInput.inputField.value,
      });
      this.spinner.hide()
      if (res.status === 200) {
        const credentials = await res.json();
        console.log(credentials.access_token);
        this.routing.navigate('main-page');
      } else {
        this.alertModal.getNode().showModal();
        this.alertModal.updateModal(
          'Please enter correct email and/or password',
        );
      }
    }
  }

  setData() {
    const data = new FormData(this.getElement());
    this.inputData.email = data.get('userEmail');
    this.inputData.password = data.get('userPassword');
  }

  validateFillForm() {
    function setErrorFor(inputEl: InputWrapper) {
      inputEl.errorElement.classList.add(styles.show);
    }
    const emailRegx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passRegx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    let valid = true;
    if (!emailRegx.test(this.loginInput.inputField.value)) {
      setErrorFor(this.loginInput);
      valid = false;
    } else {
      this.loginInput.errorElement.classList.remove(styles.show);
    }
    if (!passRegx.test(this.passwordInput.inputField.value)) {
      setErrorFor(this.passwordInput);
      valid = false;
    } else {
      this.passwordInput.errorElement.classList.remove(styles.show);
    }

    return valid;
  }

  saveData() {
    window.localStorage.setItem('logData', JSON.stringify(this.inputData));
  }
}
