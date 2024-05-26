import styles from './main.module.css';
import { div } from '../../components/tags';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';

export default class StartPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: 'div', className: styles.main },
      div({ className: styles.main__title, textContent: 'E-COMM MAIN PAGE' }),
    );
    this.routing = routing;
  }
}
