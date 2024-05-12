import ElementCreator from './util/elementCreator';
import Router from './util/router';
import LoginPage from './view/loginPage/loginView';
import StartPage from './view/mainPage/mainView';
import SessionStorage from './services/session-storage';
import API_KEYS from './services/ct-constants';

export default class App {
  routing: Router;

  constructor() {
    const routes = this.createView();
    this.routing = new Router(routes);
  }

  loadEntryPage() {
    const session = new SessionStorage(API_KEYS.CTP_CLIENT_ID)
    if (session.isLogged()) {
      console.log('is logged')
      this.routing.navigate('main-page');
    } else {
      console.log('not logged')
      this.routing.navigate('login-page');
    }
  }

  createView() {
    return [
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
    ];
  }

  static addContent(content: ElementCreator) {
    document.body.innerHTML = '';
    document.body.append(content.getElement());
  }
}
