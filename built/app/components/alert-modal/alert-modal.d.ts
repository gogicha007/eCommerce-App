declare class AlertModal {
    container: HTMLDivElement;
    node: HTMLDialogElement;
    constructor();
    appendModal(element: HTMLElement): void;
    closeModal(): void;
    getNode(): HTMLDialogElement;
    updateModal(msg: string): void;
}
export default AlertModal;
