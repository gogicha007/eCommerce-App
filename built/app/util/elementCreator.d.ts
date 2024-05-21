type Params<T extends HTMLElement = HTMLElement> = Partial<Omit<T, "tagName">> & {
    tag: keyof HTMLElementTagNameMap;
    textContent?: string;
    className?: string;
    setInner?: string;
};
export type ParamsTags = Omit<Params, "tag">;
export default class ElementCreator<T extends HTMLElement = HTMLElement> {
    protected element: T;
    constructor(params: Params<T>, ...childs: (ElementCreator | HTMLElement | null)[]);
    setContent(text: string): void;
    setInnerHtml(setInner: string): void;
    addClass(className: string): void;
    removeClass(className: string): void;
    getElement(): T;
    append(child: ElementCreator | HTMLElement): void;
    remove(): void;
    appendChildren(...children: (ElementCreator | HTMLElement | null)[]): void;
    addListener(event: string, callback: (e: Event) => void): void;
    setAttribute(attribute: string, value: string): void;
}
export {};
