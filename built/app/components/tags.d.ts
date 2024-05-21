import ElementCreator, { ParamsTags } from "../util/elementCreator";
export declare const div: (props: ParamsTags, ...childs: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLDivElement>;
export declare const ul: (props: ParamsTags, ...childs: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLDivElement>;
export declare const label: (props: ParamsTags, ...childs: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLDivElement>;
export declare const input: (name: string, pattern: string, min: string, placeholder: string, type: string, title: string, className: string) => ElementCreator<HTMLInputElement>;
export declare const select: (props: ParamsTags, ...children: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLSelectElement>;
export declare const option: (props: ParamsTags, ...children: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLOptionElement>;
export declare const fieldset: (props: ParamsTags, ...children: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLFieldSetElement>;
export declare const legend: (props: ParamsTags, ...children: (ElementCreator | HTMLElement | null)[]) => ElementCreator<HTMLOptionElement>;
