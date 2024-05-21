import styles from './root.module.css';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import Header from './header/header';
import Landing from './landing/landing';

export default class Root extends ElementCreator {
  routing: Router;

  header: Header;

  landing: Landing;

  constructor(routing: Router) {
    const header = new Header(routing);
    const landing = new Landing();
    super({ tag: 'div', className: styles.root }, header, landing);
    this.routing = routing;
    this.header = header;
    this.landing = landing;
  }
}
