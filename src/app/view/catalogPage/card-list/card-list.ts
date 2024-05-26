import styles from './cart-list.module.css';
import ElementCreator from '../../../util/elementCreator';
import { ITFCardData, ITFProdQuery } from '../../../interfaces/interfaces';
import AlertModal from '../../../components/alert-modal/alert-modal';
import { getProdList } from '../../../services/data-handling';
import Card from '../card/card';
import Spinner from '../../../components/spinner/spinner';

export default class CardList extends ElementCreator {
  alert: AlertModal;

  data: any | null;

  spinner: Spinner;
  constructor(data: Pick<ITFProdQuery, 'results'>) {
    const alert = new AlertModal();
    const spinner = new Spinner();
    super({ tag: 'li', className: styles['card-list'] });

    this.alert = alert;
    this.spinner = spinner;
    this.data = data;
    this.makeList(data);
  }

  private makeList(data: Pick<ITFProdQuery, 'results'>) {
    const prodList = getProdList(data);
    this.spinner.show();
    if (prodList) {
    } else {
      const errResponse = {
        error: '',
        message: 'Oops, something went wrong...',
      };
      this.alert.getNode().showModal();
      this.alert.updateModal(
        `Error: ${errResponse.error}, ${errResponse.message}`
      );
    }
    this.spinner.hide();
    console.log(prodList);
  }
}
