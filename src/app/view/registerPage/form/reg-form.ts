import styles from './reg-form.module.css';
import AlertModal from '../../../components/alert-modal/alert-modal';
import API_KEYS from '../../../services/ct-constants';
import {
  div,
  input,
  select,
  option,
  fieldset,
  label,
} from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import {
  createCustomer,
  getTokensByCredentials,
  getTokensByPass,
} from '../../../services/ct-requests';
import InputWrapper from '../../../components/input-wrapper';
import Router from '../../../util/router';
import LocalStorage from '../../../services/local-storage';
import Spinner from '../../../components/spinner/spinner';
import CountryList from '../../../util/helpers';
import POSTALS from '../../../services/postal-codes';
import { ITFLoginData } from '../../../interfaces/interfaces';

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

  constructor(routing: Router) {
    const alertModal = new AlertModal();
    const spinner = new Spinner();

    const emailInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__login,
      labelSelector: styles.label,
      label: 'Email',
      name: 'userEmail',
      minLength: 6,
      placeHolder: 'Email...',
      type: 'email',
      errSelector: styles['login-error'],
      errMessage: 'Enter correct email...',
    });

    const passwordWrapper = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__password,
      labelSelector: styles.label,
      label: 'Password',
      name: 'userPassword',
      minLength: 8,
      placeHolder: 'Password...',
      type: 'password',
      errSelector: styles['login-error'],
      errMessage:
        'Min 8 characters, at least 1 uppercase, 1 lowercase letter and 1 number',
    });

    const firstNameInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__fname,
      labelSelector: styles.label,
      label: 'First name',
      name: 'fName',
      pattern: '[a-zA-Z]+',
      minLength: 1,
      placeHolder: 'First Name...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Only charachters allowed',
    });

    const lastNameInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__lname,
      labelSelector: styles.label,
      label: 'Last name',
      name: 'userFirstName',
      pattern: '[a-zA-Z]+',
      minLength: 1,
      placeHolder: 'Last Name...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Only charachters allowed',
    });

    const birthDate = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      labelSelector: styles.label,
      name: 'birthDate',
      label: 'Date of birth',
      placeHolder: '',
      type: 'date',
      errSelector: styles['login-error'],
      errMessage: 'User must be 13 years old or older...',
    });

    const streetInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      labelSelector: styles.label,
      name: 'userAddress',
      label: 'Shipping Address',
      minLength: 1,
      placeHolder: 'Street...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const cityInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      name: 'userCity',
      pattern: '[a-zA-Z]+',
      minLength: 1,
      placeHolder: 'City...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const postalInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      name: 'userPostal',
      pattern: '',
      minLength: 1,
      placeHolder: 'Postal...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid postal code...',
    });

    const firstOption = option({
      className: styles.input__option,
      textContent: 'Country',
    });
    firstOption.setAttribute('value', '');

    const countryInput = select(
      {
        className: styles.input__country,
      },
      firstOption,
    );

    const options = CountryList().map((val) => {
      const anOption = option({
        className: styles.input__option,
        textContent: val[1],
      });
      anOption.setAttribute('value', val[0]);
      return anOption.getElement();
    });

    countryInput.getElement().required = true;
    countryInput.appendChildren(...options);

    const checkLabel = label({
      className: styles.label,
      textContent: 'same as shipping address',
    });

    const checkInput = input(
      'checkAddress',
      '',
      '',
      '',
      'checkbox',
      '',
      styles.input__check,
    );
    checkInput.getElement().checked = true;
    checkInput.getElement().addEventListener('change', (e) => {
      if ((e.target as HTMLInputElement).checked) {
        this.billAddress.getElement().childNodes.forEach((item) => {
          if (item instanceof HTMLDivElement) (item.childNodes[0] as HTMLInputElement).required = false;
          if (item instanceof HTMLSelectElement) item.required = false;
        });
        this.billAddress.getElement().style.display = 'none';
      } else {
        this.billAddress.getElement().childNodes.forEach((item) => {
          if (item instanceof HTMLDivElement) (item.childNodes[0] as HTMLInputElement).required = true;
          if (item instanceof HTMLSelectElement) item.required = true;
        });
        this.billAddress.getElement().style.display = 'block';
      }
    });

    const checkBox = div(
      {
        className: styles.check__box,
      },
      checkInput,
      checkLabel,
    );
    const checkAddress = div(
      { className: styles.check__address, textContent: 'Billing Address' },
      checkBox,
    );

    const billStreetInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      labelSelector: styles.label,
      name: 'billStreet',
      minLength: 1,
      placeHolder: 'Street...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const billCityInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      name: 'billCity',
      pattern: '[a-zA-Z]+',
      minLength: 1,
      placeHolder: 'City...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid email...',
    });

    const billPostalInput = new InputWrapper({
      inputWrapperSelector: styles.input__wrapper,
      inputSelector: styles.input__address,
      name: 'billPostal',
      pattern: '',
      minLength: 1,
      placeHolder: 'Postal...',
      type: 'text',
      errSelector: styles['login-error'],
      errMessage: 'Enter valid postal code...',
    });

    const billFirstOption = option({
      className: styles.input__option,
      textContent: 'Country',
    });
    billFirstOption.setAttribute('value', '');

    const billCountryInput = select(
      {
        className: styles.input__country,
      },
      billFirstOption,
    );

    const billOptions = CountryList().map((val) => {
      const anOption = option({
        className: styles.input__option,
        textContent: val[1],
      });
      anOption.setAttribute('value', val[0]);
      return anOption.getElement();
    });

    billCountryInput.getElement().required = true;
    billCountryInput.appendChildren(...billOptions);

    const billAddress = fieldset(
      {
        className: styles['form__bill-address'],
      },
      billStreetInput.getNode(),
      billCityInput.getNode(),
      billPostalInput.getNode(),
      billCountryInput,
    );

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
      firstNameInput.getNode(),
      lastNameInput.getNode(),
      birthDate.getNode(),
      streetInput.getNode(),
      cityInput.getNode(),
      postalInput.getNode(),
      countryInput,
      checkAddress,
      billAddress,
      inputBtn,
      loginLink,
      alertModal.getNode(),
      spinner.getNode(),
    );

    this.addressInput = streetInput;
    this.alertModal = alertModal;
    this.billAddress = billAddress;
    this.birthDate = birthDate;
    this.checkInput = checkInput;
    this.cityInput = cityInput;
    this.countryInput = countryInput;
    this.emailInput = emailInput;
    this.firstNameInpput = firstNameInput;
    this.lastNameInput = lastNameInput;
    this.passwordInput = passwordWrapper;
    this.postalInput = postalInput;
    this.routing = routing;
    this.spinner = spinner;
    console.log(this.billAddress.getElement().childNodes);
    const handler = this.submitHandler.bind(this);
    this.element.addEventListener('submit', handler);
    this.billAddress.getElement().childNodes.forEach((item) => {
      if (item instanceof HTMLDivElement) (item.childNodes[0] as HTMLInputElement).required = false;
      if (item instanceof HTMLSelectElement) item.required = false;
    });
  }

  private async getAccTokenByCredentials() {
    const resToken = await getTokensByCredentials();
    let result = null;
    if (resToken.status === 200) {
      const tokenData = await resToken.json();
      result = {
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token || null,
        token_start: null,
        token_expires_in: tokenData.expires_in || null,
      };
    } else {
      this.spinner.hide();
      const errResponse = await resToken.json();
      this.alertModal.getNode().showModal();
      this.alertModal.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`,
      );
    }
    return result;
  }

  private async reqCreateCustomer(accToken: string) {
    const resCreateCustomer = await createCustomer({
      token: accToken,
      login: this.emailInput.inputField.value,
      firstName: this.firstNameInpput.inputField.value,
      lastName: this.lastNameInput.inputField.value,
      password: this.passwordInput.inputField.value,
    });
    let result = null;
    if (resCreateCustomer.status === 201) {
      const customerData = await resCreateCustomer.json();
      result = {
        login: this.emailInput.inputField.value,
        password: this.passwordInput.inputField.value,
        isLogged: true,
        customer_id: customerData.customer.id,
        customer_name: this.firstNameInpput.inputField.value,
        version: customerData.customer.version,
      };
    } else {
      this.spinner.hide();
      const errResponse = await resCreateCustomer.json();
      this.alertModal.getNode().showModal();
      this.alertModal.updateModal(
        `Error: ${errResponse.error || 'error message'}, ${errResponse.message}`,
      );
    }
    return result;
  }

  private async reqTokensByPass(data: ITFLoginData) {
    const resTokensByPass = await getTokensByPass({
      login: data.login,
      password: data.password,
    });
    let result = null;
    if (resTokensByPass.status === 200) {
      const credentials = await resTokensByPass.json();
      result = {
        access_token: credentials.access_token as string,
        token_expires_in: credentials.expires_in as number,
        refresh_token: credentials.refresh_token as string,
      };
    } else {
      const errResponse = await resTokensByPass.json();
      this.alertModal.getNode().showModal();
      this.alertModal.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`,
      );
    }
    return result;
  }

  private async submitHandler(event: Event) {
    event.preventDefault();

    this.spinner.show();
    if (this.validateFillForm()) {
      const accTokenData = await this.getAccTokenByCredentials();
      if (!accTokenData) {
        this.spinner.hide();
        return;
      }
      const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);

      const customerData = await this.reqCreateCustomer(
        accTokenData.access_token,
      );
      if (!customerData) {
        this.spinner.hide();
        return;
      }
      storage.saveData(customerData);

      const tokensByPass = await this.reqTokensByPass({
        login: this.emailInput.inputField.value,
        password: this.passwordInput.inputField.value,
      });
      if (!tokensByPass) {
        this.spinner.hide();
        return;
      }
      storage.setTokens(tokensByPass);
      this.spinner.hide();
      this.routing.navigate('main-page');
      return;
    }
    this.spinner.hide();
  }

  validateFillForm() {
    function setErrorFor(inputEl: InputWrapper) {
      inputEl.errorElement.classList.add(styles.show);
    }
    const today = new Date();
    const age = today.getFullYear()
      - new Date(this.birthDate.inputField.value).getFullYear();
    const country = this.countryInput.getElement().value;
    const postalRegx = new RegExp(POSTALS[country][1]);
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
    if (age < 13) {
      setErrorFor(this.birthDate);
      valid = false;
    } else {
      this.birthDate.errorElement.classList.remove(styles.show);
    }
    if (!postalRegx.test(this.postalInput.inputField.value)) {
      this.postalInput.errorElement.innerText = `Valid format - ${POSTALS[country][2]}`;
      setErrorFor(this.postalInput);
      valid = false;
    } else {
      this.postalInput.errorElement.classList.remove(styles.show);
    }
    return valid;
  }
}
