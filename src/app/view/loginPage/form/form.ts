import styles from './form.module.css';
import { input, div } from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
import InputWrapper from '../../../components/input-wrapper';
import { getTokensByPass } from '../../../services/ct-requests';
import AlertModal from '../../../components/alert-modal/alert-modal';
import Spinner from '../../../components/spinner/spinner';
import LocalStorage from '../../../services/local-storage';
import API_KEYS from '../../../services/ct-constants';

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

    const signUpAnchor = document.createElement('a');
    signUpAnchor.textContent = 'Register';
    signUpAnchor.href = '#register-page';
    signUpAnchor.onclick = (e) => {
      e.preventDefault();
      this.routing.navigate('register-page');
    };
    const signUp = div(
      { className: styles['sign-up'], textContent: "Don't have an account?" },
      signUpAnchor,
    );

    super(
      { tag: 'form', className: styles.login__form },
      loginWrapper.getNode(),
      passwordWrapper.getNode(),
      inputBtn,
      signUp,
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
    this.spinner.show();
    this.setData();
    this.saveData();
    if (this.validateFillForm()) {
      const res = await getTokensByPass({
        login: this.loginInput.inputField.value,
        password: this.passwordInput.inputField.value,
      });
      this.spinner.hide();
      if (res.status === 200) {
        const credentials = await res.json();
        const userData = {
          login: this.loginInput.inputField.value,
          password: this.passwordInput.inputField.value,
          isLogged: true,
        };
        const tokens = {
          access_token: credentials.access_token,
          token_expires_in: credentials.expires_in,
          refresh_token: credentials.refresh_token,
        };
        const session = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
        session.saveData(userData);
        session.setTokens(tokens);
        this.routing.navigate('main-page');
      } else {
        const errResponse = await res.json();
        this.alertModal.getNode().showModal();
        this.alertModal.updateModal(
          `Error: ${errResponse.error}, ${errResponse.message}`,
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
