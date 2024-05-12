import { div } from '../../components/tags';
import ElementCreator from '../../util/elementCreator';
import RegForm from './form/reg-form';
import Router from '../../util/router';
// import SessionStorage from '../../services/session-storage';
import styles from './register.module.css';

export default class RegisterPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: 'div', className: styles['register-page'] },
      div({
        className: styles['register-page__title'],
        textContent: 'Register a User',
      }),
      new RegForm(routing),
    );
    this.routing = routing;
  }
}
