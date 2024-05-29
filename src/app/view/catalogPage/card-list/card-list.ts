import styles from './cart-list.module.css';
import ElementCreator from '../../../util/elementCreator';
import { ITFProdQuery, ITFMap } from '../../../interfaces/interfaces';
import AlertModal from '../../../components/alert-modal/alert-modal';
import { getProdList } from '../../../services/data-handling';
import Spinner from '../../../components/spinner/spinner';
import Card from '../card/card';

export default class CardList extends ElementCreator {
  alert: AlertModal;

  data: any | null;

  spinner: Spinner;

  constructor(data: Pick<ITFProdQuery, 'results'>, categoryObj: ITFMap) {
    const alert = new AlertModal();
    const spinner = new Spinner();
    super({ tag: 'li', className: styles['card-list'] });

    this.alert = alert;
    this.spinner = spinner;

    this.data = data;
    this.makeList(data, categoryObj);
  }

  private makeList(data: Pick<ITFProdQuery, 'results'>, categoryObj: ITFMap) {
    console.log(data);
    const prodList = getProdList(data, categoryObj);
    this.spinner.show();
    if (prodList) {
      const cardList = prodList.map((val) => new Card(val).getElement());
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
