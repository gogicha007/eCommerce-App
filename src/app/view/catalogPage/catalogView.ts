import styles from './catalog.module.css';
import button from '../../components/button';
import { div } from '../../components/tags';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import LocalStorage from '../../services/local-storage';
import API_KEYS from '../../services/ct-constants';

export default class StartPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: 'div', className: 'catalog' },
      div({ className: styles.main__title, textContent: 'Catalog Page' }),
      
    );
    this.routing = routing;
  }
}