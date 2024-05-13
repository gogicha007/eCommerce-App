import ElementCreator, { ParamsTags } from '../util/elementCreator';

export const div = (
  props: ParamsTags,
  ...childs: (ElementCreator | HTMLElement | null)[]
) => new ElementCreator<HTMLDivElement>({ tag: 'div', ...props }, ...childs);

export const ul = (
  props: ParamsTags,
  ...childs: (ElementCreator | HTMLElement | null)[]
) => new ElementCreator<HTMLDivElement>({ tag: 'ul', ...props }, ...childs);

export const label = (
  props: ParamsTags,
  ...childs: (ElementCreator | HTMLElement | null)[]
) => new ElementCreator<HTMLDivElement>({ tag: 'label', ...props }, ...childs);

export const input = (
  name: string,
  pattern: string,
  min: string,
  placeholder: string,
  type: string,
  title: string,
  className: string,
) => {
  const inputComponent = new ElementCreator<HTMLInputElement>({
    tag: 'input',
  });
  inputComponent.setAttribute('type', type);
  if (name) inputComponent.setAttribute('name', name);
  if (pattern) inputComponent.setAttribute('pattern', pattern);
  if (placeholder) inputComponent.setAttribute('placeholder', placeholder);
  if (min) inputComponent.setAttribute('minlength', min);
  if (title) inputComponent.setAttribute('title', title);
  if (className) inputComponent.addClass(className);
  return inputComponent;
};

export const select = (
  props: ParamsTags,
  ...children: (ElementCreator | HTMLElement | null)[]
) => new ElementCreator<HTMLSelectElement>(
  {
    tag: 'select',
    className: props.className,
  },
  ...children,
);

export const option = (
  props: ParamsTags,
  ...children: (ElementCreator | HTMLElement | null)[]
) => new ElementCreator<HTMLDivElement>({ tag: 'option', ...props }, ...children);
