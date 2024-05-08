import { notNullable } from "./isNull";

type Params<T extends HTMLElement = HTMLElement> = Partial<
  Omit<T, "tagName">
> & {
  tag: keyof HTMLElementTagNameMap;
  textContent?: string;
  className?: string;
  setInner?: string;
};

export type ParamsTags = Omit<Params, "tag">;

export default class ElementCreator<T extends HTMLElement = HTMLElement> {
  protected element: T;

  constructor(
    params: Params<T>,
    ...childs: (ElementCreator | HTMLElement | null)[]
  ) {
    const element = document.createElement(params.tag) as T;
    if (params.className) element.classList.add(params.className);
    if (params.textContent) element.textContent = params.textContent;
    Object.assign(element, params);
    this.element = element;
    if (childs) {
      childs.forEach((child) => {
        if (notNullable(child)) {
          this.append(child);
        }
      });
    }
  }

  setContent(text: string) {
    this.element.textContent = text;
  }

  setInnerHtml(setInner: string) {
    this.element.innerHTML = setInner;
  }

  addClass(className: string) {
    this.element.classList.add(className);
  }

  removeClass(className: string) {
    this.element.classList.remove(className);
  }

  getElement() {
    return this.element;
  }

  append(child: ElementCreator | HTMLElement) {
    if (child instanceof ElementCreator) {
      const elem = child.getElement();
      this.element.append(elem);
    } else {
      this.element.append(child);
    }
  }

  remove() {
    this.element.remove();
  }

  appendChildren(...children: (ElementCreator | HTMLElement | null)[]): void {
    children.filter(notNullable).forEach((elem) => {
      this.append(elem);
    });
  }

  addListener(event: string, callback: (e: Event) => void) {
    this.element.addEventListener(event, callback);
  }

  setAttribute(attribute: string, value: string) {
    this.element.setAttribute(attribute, value);
  }
}
