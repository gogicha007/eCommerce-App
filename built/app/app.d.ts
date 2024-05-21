import ElementCreator from './util/elementCreator';
import Router from './util/router';
import Root from './view/root/root';
export default class App {
    routing: Router;
    root: Root;
    constructor();
    loadEntryPage(): void;
    createView(): {
        path: string;
        callback: () => void;
    }[];
    appendRoot(): void;
    addContent(content: ElementCreator): void;
}
