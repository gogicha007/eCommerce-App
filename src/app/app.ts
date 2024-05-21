import API_KEYS from './services/ct-constants';
import ElementCreator from './util/elementCreator';
import LoginPage from './view/loginPage/loginView';
import RegisterPage from './view/registerPage/retisterView';
import Router from './util/router';
import LocalStorage from './services/local-storage';
import StartPage from './view/mainPage/mainView';
import FailPage from './view/failPage/failView';

export default class App {
  routing: Router;

  constructor() {
    const routes = this.createView();
    this.routing = new Router(routes);
  }

  loadEntryPage() {
    const session = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    if (session.isLogged()) {
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
          App.addContent(new FailPage(this.routing));
        },
      },
      {
        path: 'login-page',
        callback: () => {
          App.addContent(new LoginPage(this.routing));
        },
      },
      {
        path: 'main-page',
        callback: () => {
          App.addContent(new StartPage(this.routing));
        },
      },
      {
        path: 'register-page',
        callback: () => {
          App.addContent(new RegisterPage(this.routing));
        },
      },
    ];
  }

  static addContent(content: ElementCreator) {
    document.body.innerHTML = '';
    document.body.append(content.getElement());
  }
}
