import ElementCreator from '../util/elementCreator';

interface PropsButton {
  txt: string;
  onClick?: () => void;
  className?: string;
}

const anchor = ({ txt, onClick, className }: PropsButton) =>
  new ElementCreator({
    tag: 'a',
    className: `${className || ''}`,
    onclick: () => {
      onClick?.();
    },
    textContent: txt,
  });

export default anchor;
