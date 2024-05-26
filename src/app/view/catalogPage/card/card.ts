import styles from './card.module.css';
import {
  div, image, input, paragraph,
} from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import { ITFCardData } from '../../../interfaces/interfaces';

export default class Card extends ElementCreator {
  constructor(data: ITFCardData) {
    const img = image({
      className: styles.card__image,
      src: data.img,
    });
    const name = div({
      className: styles.card__name,
      textContent: data.name,
    });
    const description = paragraph({
      className: styles.card__description,
      textContent: data.description,
    });

    const expandBtn = input(
      '',
      '',
      '',
      '',
      'checkbox',
      '',
      styles['expand-btn'],
    );

    const price = div({
      className: styles.card__price,
      textContent: `${data.price}`,
    });
    const discount = div({
      className: styles.card__discount,
      textContent: `${data.discount}`,
    });

    super(
      { tag: 'ul', className: styles.card },
      img,
      name,
      description,
      expandBtn,
      price,
      discount,
    );
    this.setAttribute('data-id', data.id);
  }
}
