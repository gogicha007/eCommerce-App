import ElementCreator from '../util/elementCreator';
interface PropsButton {
    txt: string;
    onClick?: () => void;
    className?: string;
}
declare const button: ({ txt, onClick, className }: PropsButton) => ElementCreator<HTMLElement>;
export default button;
