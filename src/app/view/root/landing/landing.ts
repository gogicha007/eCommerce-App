import styles from './landing.module.css';
import ElementCreator from '../../../util/elementCreator';

export default class Landing extends ElementCreator {
  constructor() {
    super({
      tag: 'div',
      className: styles.landing,
      textContent: 'landing page',
    });
  }
}
