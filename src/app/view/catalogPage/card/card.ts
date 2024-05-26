import styles from './card.module.css';
import { div, image } from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import { ITFCardData } from '../../../interfaces/interfaces';

export default class Card extends ElementCreator {
  constructor(cardData: ITFCardData) {
    const img = image({
      className: styles.card__image,
      src: cardData.img,
    });
    const name = div({
      className: styles.card__name,
      textContent: cardData.name,
    });
    const description = div({
      className: styles.card__description,
      textContent: cardData.description,
    });
    const price = div({
      className: styles.card__price,
      textContent: `${cardData.price}`,
    });
    const discount = div({
      className: styles.card__discount,
      textContent: `${cardData.discount}`,
    });

    super(
      { tag: 'ul', className: styles.card },
      img,
      name,
      description,
      price,
      discount,
    );
  }
}
