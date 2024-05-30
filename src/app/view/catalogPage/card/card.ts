import styles from './card.module.css';
import {
  div, image, input, paragraph,
} from '../../../components/tags';
import ElementCreator from '../../../util/elementCreator';
import { ITFCardData } from '../../../interfaces/interfaces';
import { FormatPrice } from '../../../util/helpers';

export default class Card extends ElementCreator {
  productData: any | null;

  data: ITFCardData;

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

    super({ tag: 'ul', className: styles.card }, img, name);

    this.setAttribute('data-id', data.id);
    this.data = data;
    const priceContainer = this.priceElement();
    this.append(priceContainer);
    this.appendChildren(...[description, expandBtn]);
  }

  private priceElement() {
    const fPrice = FormatPrice(
      this.data.currency,
      this.data.price as number,
    );

    let element = div({
      className: styles.card__price,
      textContent: `${fPrice}`,
    });

    if (this.data.discount) {
      const formatDiscount = FormatPrice(
        this.data.currency,
        this.data.discount,
      );

      const formatPrice = FormatPrice(
        this.data.currency,
        this.data.price as number,
      );

      const prevPrice = div({
        className: styles.card__price_prev,
        textContent: `${formatPrice}`,
      });
      prevPrice.setAttribute('title', this.data.discountName as string);

      const discountPrice = div({
        className: styles.card__discount,
        textContent: `${formatDiscount}`,
      });

      element = div(
        {
          className: styles['card__price-wrapper'],
        },
        discountPrice,
        prevPrice,
      );
    }
    return element;
  }
}
