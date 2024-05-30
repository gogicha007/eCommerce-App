import styles from './cart-list.module.css';
import ElementCreator from '../../../util/elementCreator';
import { ITFProdQuery, ITFMap } from '../../../interfaces/interfaces';
import AlertModal from '../../../components/alert-modal/alert-modal';
import { getProdList } from '../../../services/data-handling';
import Spinner from '../../../components/spinner/spinner';
import Card from '../card/card';

export default class CardList extends ElementCreator {
  alert: AlertModal;

  cardsList: Card[] | null;

  data: Pick<ITFProdQuery, 'results'> | null;

  spinner: Spinner;

  constructor(
    data: Pick<ITFProdQuery, 'results'>,
    categoryObj: ITFMap,
    discounts: any[],
  ) {
    const alert = new AlertModal();
    const spinner = new Spinner();
    super({ tag: 'li', className: styles['card-list'] });

    this.alert = alert;
    this.spinner = spinner;

    this.data = data;
    this.cardsList = null;
    this.makeList(data, categoryObj, discounts);
  }

  private makeList(
    data: Pick<ITFProdQuery, 'results'>,
    categoryObj: ITFMap,
    discounts: any[],
  ) {
    const prodList = getProdList(data, categoryObj, discounts);
    this.spinner.show();
    if (prodList) {
      this.cardsList = prodList.map((val) => new Card(val));
      const cardList = this.cardsList.map((val) => val.getElement());
      this.appendChildren(...cardList);
    } else {
      const errResponse = {
        error: '',
        message: 'Oops, something went wrong...',
      };
      this.alert.getNode().showModal();
      this.alert.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`,
      );
    }
    this.spinner.hide();
  }
}
