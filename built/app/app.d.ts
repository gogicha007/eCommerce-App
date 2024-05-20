import ElementCreator from "./util/elementCreator";
import Router from "./util/router";
export default class App {
    routing: Router;
    constructor();
    loadEntryPage(): void;
    createView(): {
        path: string;
        callback: () => void;
    }[];
    static addContent(content: ElementCreator): void;
}
