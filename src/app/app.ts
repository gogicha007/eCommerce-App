import ElementCreator from './util/elementCreator';
import Router from './util/router';
import LoginPage from './view/loginPage/loginView';
import StartPage from './view/mainPage/mainView';

export default class App {
  routing: Router;

  constructor() {
    const routes = this.createView();
    this.routing = new Router(routes);
  }

  loadEntryPage() {
    this.routing.navigate('login-page');
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
