import styles from './header.module.css';
import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
import button from '../../../components/button';
import LocalStorage from '../../../services/local-storage';
import API_KEYS from '../../../services/ct-constants';

export default class Header extends ElementCreator {
  routing: Router;

  catalogBtn: ElementCreator<HTMLElement>;

  loginBtn: ElementCreator<HTMLElement>;

  logoutBtn: ElementCreator<HTMLElement>;

  mainBtn: ElementCreator<HTMLElement>;

  signupBtn: ElementCreator<HTMLElement>;

  constructor(routing: Router) {
    const catalogBtn = button({
      txt: 'Catalog',
      onClick: () => {
        this.routing.navigate('catalog-page');
      },
      className: styles.nav__btn,
    });

    const loginBtn = button({
      txt: 'Log in',
      onClick: () => {
        this.routing.navigate('login-page');
      },
      className: styles.nav__btn,
    });

    const logoutBtn = button({
      txt: 'Log Out',
      onClick: () => {
        const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
        storage.setNull();
        window.localStorage.clear();
        this.routing.navigate('login-page');
      },
      className: styles.nav__btn,
    });

    const mainBtn = button({
      txt: 'Main',
      onClick: () => {
        this.routing.navigate('main-page');
      },
      className: styles.nav__btn,
    });

    const signupBtn = button({
      txt: 'Sign Up',
      onClick: () => {
        this.routing.navigate('register-page');
      },
      className: styles.nav__btn,
    });
    super(
      {
        tag: 'div',
        className: styles.header,
      },
      mainBtn,
      catalogBtn,
      loginBtn,
      logoutBtn,
      signupBtn,
    );

    this.catalogBtn = catalogBtn;
    this.loginBtn = loginBtn;
    this.logoutBtn = logoutBtn;
    this.mainBtn = mainBtn;
    this.routing = routing;
    this.signupBtn = signupBtn;
  }

  public arrangeButtons() {
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
