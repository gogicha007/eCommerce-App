import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import styles from './profile.module.css';

export default class ProfilePage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super({ tag: 'a', className: styles['.header__btn'] });
    this.routing = routing;
  }
}
