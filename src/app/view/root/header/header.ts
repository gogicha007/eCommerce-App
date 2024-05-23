import styles from './header.module.css';
import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
import anchor from '../../../components/anchor';
import LocalStorage from '../../../services/local-storage';
import API_KEYS from '../../../services/ct-constants';
import { div, image } from '../../../components/tags';

export default class Header extends ElementCreator {
  routing: Router;

  catalogBtn: ElementCreator<HTMLElement>;

  loginBtn: ElementCreator<HTMLElement>;

  logoutBtn: ElementCreator<HTMLElement>;

  mainBtn: ElementCreator<HTMLElement>;

  signupBtn: ElementCreator<HTMLElement>;

  constructor(routing: Router) {
    const logo = image({
      className: styles.logo,
      src: 'https://i.postimg.cc/v8XtFQKv/logo1.png'}
    );

    const catalogBtn = anchor({
      txt: 'Catalog',
      onClick: () => {
        this.routing.navigate('catalog-page');
      },
      className: styles.header__btn,
    });

    const loginBtn = anchor({
      txt: 'Log in',
      onClick: () => {
        this.routing.navigate('login-page');
      },
      className: styles.header__btn,
    });

    const logoutBtn = anchor({
      txt: 'Log Out',
      onClick: () => {
        const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
        storage.setNull();
        window.localStorage.clear();
        this.routing.navigate('login-page');
      },
      className: styles.header__btn,
    });

    const mainBtn = anchor({
      txt: 'Main',
      onClick: () => {
        this.routing.navigate('main-page');
      },
      className: styles.header__btn,
    });

    const signupBtn = anchor({
      txt: 'Sign Up',
      onClick: () => {
        this.routing.navigate('register-page');
      },
      className: styles.header__btn,
    });

    const navButtons = div(
      { className: styles.header__nav },
      mainBtn,
      catalogBtn
    );

    const authButtons = div(
      { className: styles.header__auth },
      loginBtn,
      logoutBtn,
      signupBtn
    );

    const headerContent = div(
      { className: styles.header__content },
      logo,
      navButtons,
      authButtons
    );
    super(
      {
        tag: 'div',
        className: styles.header,
      },
      headerContent
    );

    this.catalogBtn = catalogBtn;
    this.loginBtn = loginBtn;
    this.logoutBtn = logoutBtn;
    this.mainBtn = mainBtn;
    this.routing = routing;
    this.signupBtn = signupBtn;
  }

  public arrangeAuthButtons() {
    const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    if (storage.isLogged()) {
      this.loginBtn.getElement().style.display = 'none';
      this.signupBtn.getElement().style.display = 'none';
      this.logoutBtn.getElement().style.display = 'block';
    } else {
      this.loginBtn.getElement().style.display = 'block';
      this.signupBtn.getElement().style.display = 'block';
      this.logoutBtn.getElement().style.display = 'none';
    }
  }
}
