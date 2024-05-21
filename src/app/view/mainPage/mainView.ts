import styles from './main.module.css';
import button from '../../components/button';
import { div } from '../../components/tags';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import SessionStorage from '../../services/session-storage';
import API_KEYS from '../../services/ct-constants';

export default class StartPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: 'div', className: 'startPage' },
      div({ className: styles.main__title, textContent: 'E-COMM' }),
      button({
        txt: 'Log Out',
        onClick: () => {
          const session = new SessionStorage(API_KEYS.CTP_CLIENT_ID);
          session.setNull();
          window.localStorage.clear();
          this.routing.navigate('login-page');
        },
        className: 'btn__start-page',
      }),
    );
    this.routing = routing;
  }
}
