import styles from './alert-modal.module.css';

class AlertModal {
  container: HTMLDivElement;

  node: HTMLDialogElement;

  constructor() {
    const modal = document.createElement('dialog');
    modal.classList.add(styles.modal);

    const modalContainer = document.createElement('div');
    modalContainer.classList.add(styles.modal__container);
    modal.onclick = this.closeModal.bind(this);

    modal.appendChild(modalContainer);

    this.container = modalContainer;
    this.node = modal;
  }

  public appendModal(element: HTMLElement) {
    this.node.innerHTML = '';
    this.container.appendChild(element);
  }

  public closeModal() {
    this.node.close();
  }

  public getNode() {
    return this.node;
  }

  public updateModal(msg: string) {
    this.container.innerHTML = msg;
  }
}

export default AlertModal;
