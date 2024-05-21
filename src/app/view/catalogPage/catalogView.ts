import styles from './catalog.module.css';
import { div } from '../../components/tags';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';

export default class CatalogPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: 'div', className: 'catalog' },
      div({ className: styles.main__title, textContent: 'Catalog Page' }),
    );
    this.routing = routing;
  }
}
