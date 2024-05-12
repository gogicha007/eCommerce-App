import styles from './reg-form.module.css';
import AlertModal from '../../../components/alert-modal/alert-modal';
import API_KEYS from '../../../services/ct-constants';
import { div, input } from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import { getTokensByPass } from '../../../services/ct-requests';
import InputWrapper from '../../../components/input-wrapper';
import Router from '../../../util/router';
import SessionStorage from '../../../services/session-storage';
import Spinner from '../../../components/spinner/spinner';

export default class RegForm extends ElementCreator<HTMLFormElement> {
  addressInput: InputWrapper;

  alertModal: AlertModal;

  emailInput: InputWrapper;

  firstNameInpput: InputWrapper;

  lastNameInput: InputWrapper;

  passwordInput: InputWrapper;

  routing: Router;

  spinner: Spinner;

  constructor(routing: Router) {
    const alertModal = new AlertModal();
    const spinner = new Spinner();

    const addressInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      name: 'userAddress',
      pattern: '',
      minLength: 6,
      placeHolder: 'Address...',
      type: 'text',
      title: '',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const emailInput = new InputWrapper({
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

    const firstNameInpput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__fname,
      name: 'userEmail',
      pattern: '',
      minLength: 2,
      placeHolder: 'First Name...',
      type: 'email',
      title: '',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const lastNameInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__lname,
      name: 'userFirstName',
      pattern: '',
      minLength: 2,
      placeHolder: 'Last Name...',
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

    const loginAnchor = document.createElement('a');
    loginAnchor.textContent = 'Log In';
    loginAnchor.href = '#login-page';
    loginAnchor.onclick = (e) => {
      e.preventDefault();
      this.routing.navigate('login-page');
    };
    const loginLink = div(
      { className: styles['login-link'], textContent: 'Have an account?' },
      loginAnchor,
    );

    super(
      { tag: 'form', className: styles.register__form },
      emailInput.getNode(),
      passwordWrapper.getNode(),
      inputBtn,
      loginLink,
      alertModal.getNode(),
      spinner.getNode(),
    );

    this.addressInput = addressInput;
    this.alertModal = alertModal;
    this.emailInput = emailInput;
    this.firstNameInpput = firstNameInpput;
    this.lastNameInput = lastNameInput;
    this.passwordInput = passwordWrapper;
    this.routing = routing;
    this.spinner = spinner;

    const handler = this.submitHandler.bind(this);
    this.element.addEventListener('submit', handler);
  }

  private async submitHandler(event: Event) {
    event.preventDefault();
    this.spinner.show();
    if (this.validateFillForm()) {
      const res = await getTokensByPass({
        login: this.emailInput.inputField.value,
        password: this.passwordInput.inputField.value,
      });
      this.spinner.hide();
      if (res.status === 200) {
        const credentials = await res.json();
        const userData = {
          login: this.emailInput.inputField.value,
          password: this.passwordInput.inputField.value,
          isLogged: true,
        };
        const tokens = {
          access_token: credentials.access_token,
          token_expires_in: credentials.expires_in,
          refresh_token: credentials.refresh_token,
        };
        const session = new SessionStorage(API_KEYS.CTP_CLIENT_ID);
        session.saveData(userData);
        session.setTokens(tokens);
        this.routing.navigate('main-page');
      } else {
        this.alertModal.getNode().showModal();
        this.alertModal.updateModal(
          'Please enter correct email and/or password',
        );
      }
    }
  }

  validateFillForm() {
    function setErrorFor(inputEl: InputWrapper) {
      inputEl.errorElement.classList.add(styles.show);
    }
    const emailRegx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passRegx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    let valid = true;
    if (!emailRegx.test(this.emailInput.inputField.value)) {
      setErrorFor(this.emailInput);
      valid = false;
    } else {
      this.emailInput.errorElement.classList.remove(styles.show);
    }
    if (!passRegx.test(this.passwordInput.inputField.value)) {
      setErrorFor(this.passwordInput);
      valid = false;
    } else {
      this.passwordInput.errorElement.classList.remove(styles.show);
    }

    return valid;
  }
}
