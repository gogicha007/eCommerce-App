import API_KEYS from './services/ct-constants';
import ElementCreator from './util/elementCreator';
import LoginPage from './view/loginPage/loginView';
import RegisterPage from './view/registerPage/registerView';
import Router from './util/router';
import LocalStorage from './services/local-storage';
import StartPage from './view/mainPage/mainView';
import FailPage from './view/failPage/failView';
import CatalogPage from './view/catalogPage/catalogView';
import Root from './view/root/root';

export default class App {
  routing: Router;

  root: Root;

  constructor() {
    const routes = this.createView();
    this.routing = new Router(routes);
    this.root = new Root(this.routing);
    this.appendRoot();
  }

  loadEntryPage() {
    const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    this.root.header.arrangeAuthButtons();
    if (storage.isLogged()) {
      console.log('is logged');
      this.routing.navigate('main-page');
    } else {
      console.log('not logged');
      this.routing.navigate('login-page');
    }
  }

  createView() {
    return [
      {
        path: '404',
        callback: () => {
          this.addContent(new FailPage(this.routing));
        },
      },
      {
        path: 'catalog-page',
        callback: () => {
          this.addContent(new CatalogPage(this.routing));
        },
      },
      {
        path: 'login-page',
        callback: () => {
          this.addContent(new LoginPage(this.routing));
        },
      },
      {
        path: 'main-page',
        callback: () => {
          this.addContent(new StartPage(this.routing));
        },
      },
      {
        path: 'register-page',
        callback: () => {
          this.addContent(new RegisterPage(this.routing));
        },
      },
    ];
  }

  public appendRoot() {
    document.body.innerHTML = '';
    document.body.append(this.root.getElement());
  }

  public addContent(content: ElementCreator) {
    this.root.header.arrangeAuthButtons();
    this.root.landing.getElement().innerHTML = '';
    this.root.landing.append(content.getElement());
  }
}
