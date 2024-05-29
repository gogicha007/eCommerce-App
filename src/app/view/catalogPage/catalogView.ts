import styles from './catalog.module.css';
import button from '../../components/button';
import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import Spinner from '../../components/spinner/spinner';
import LocalStorage from '../../services/local-storage';
import API_KEYS from '../../services/ct-constants';
import {
  queryCategories,
  queryProducts,
  queryProductDiscounts,
} from '../../services/ct-requests';
import AlertModal from '../../components/alert-modal/alert-modal';
import CardList from './card-list/card-list';
import { ITFMap } from '../../interfaces/interfaces';

export default class CatalogPage extends ElementCreator {
  alert: AlertModal;

  categories: any | null;

  prodData: any | null;

  discounts: any[] | null;

  prodList: CardList | null;

  routing: Router;

  spinner: Spinner;

  constructor(routing: Router) {
    const alert = new AlertModal();
    const spinner = new Spinner();

    super(
      { tag: 'div', className: styles.catalog },
      button({
        txt: 'get the list',
        onClick: () => {
          this.getProdList();
        },
        className: styles.catalog__btn,
      }),
      alert.getNode(),
      spinner.getNode()
    );
    this.alert = alert;
    this.prodData = null;
    this.discounts = null;
    this.categories = null;
    this.prodList = null;
    this.routing = routing;
    this.spinner = spinner;
    this.getCategories(500);
    this.getDiscounts();
  }

  private async getCategories(limit?: null | number) {
    this.spinner.show();
    const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    const token = storage.getData().access_token;
    const res = await queryCategories(token as string, limit);
    if (res.status === 200) {
      const categ = await res.json();
      this.categories = categ.results.reduce(
        (obj: any, item: ITFMap) => ({
          ...obj,
          [item.id as string]: item.key,
        }),
        {}
      );
    } else {
      const errResponse = await res.json();
      this.alert.getNode().showModal();
      this.alert.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`
      );
    }
    this.spinner.hide();
  }

  private async getDiscounts() {
    this.spinner.show();
    const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    const token = storage.getData().access_token;
    const res = await queryProductDiscounts(token as string);
    if (res.status === 200) {
      const discounts = await res.json();
      if (discounts.results.length !== 0) this.discounts = discounts.results;
      console.log(this.discounts);
    } else {
      const errResponse = await res.json();
      this.alert.getNode().showModal();
      this.alert.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`
      );
    }
    this.spinner.hide();
  }

  private async getProdList() {
    this.spinner.show();
    const storage = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
    const token = storage.getData().access_token;
    const res = await queryProducts(token as string);
    if (res.status === 200) {
      this.prodData = await res.json();
      this.prodList = new CardList(
        this.prodData,
        this.categories,
        this.discounts as any[]
      );
      this.append(this.prodList);
    } else {
      const errResponse = await res.json();
      this.alert.getNode().showModal();
      this.alert.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`
      );
    }
    this.spinner.hide();
  }
}
