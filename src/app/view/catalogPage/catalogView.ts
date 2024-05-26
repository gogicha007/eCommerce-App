import styles from './catalog.module.css';
import { div } from '../../components/tags';
import button from '../../components/button';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import Spinner from '../../components/spinner/spinner';
import LocalStorage from '../../services/local-storage';
import API_KEYS from '../../services/ct-constants';
import { queryProducts } from '../../services/ct-requests';
import AlertModal from '../../components/alert-modal/alert-modal';
import CardList from './card-list/card-list';

export default class CatalogPage extends ElementCreator {
  alert: AlertModal;

  data: any | null;

  prodList: CardList | null;

  routing: Router;

  spinner: Spinner;

  constructor(routing: Router) {
    const alert = new AlertModal();
    const spinner = new Spinner();

    super(
      { tag: 'div', className: styles.catalog },
      div({ className: styles.catalog__title, textContent: 'Catalog Page' }),
      button({
        txt: 'get the list',
        onClick: () => {
          this.getProdList();
        },
        className: styles.catalog__btn,
      }),
      alert.getNode(),
      spinner.getNode(),
    );
    this.alert = alert;
    this.data = null;
    this.prodList = null;
    this.routing = routing;
    this.spinner = spinner;
  }

  private async getProdList() {
    this.spinner.show();
    const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    const token = storage.getData().access_token;
    const res = await queryProducts(token as string);
    if (res.status === 200) {
      this.data = await res.json();
      this.prodList = new CardList(this.data);
      this.append(this.prodList);
    } else {
      const errResponse = await res.json();
      this.alert.getNode().showModal();
      this.alert.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`,
      );
    }
    this.spinner.hide();
  }
}
