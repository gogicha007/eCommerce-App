import ElementCreator from "../util/elementCreator";

interface PropsButton {
  txt: string;
  onClick?: () => void;
  className?: string;
}

const button = ({ txt, onClick, className }: PropsButton) =>
  new ElementCreator({
    tag: "button",
    className: `${className || ""}`,
    onclick: () => {
      onClick?.();
    },
    textContent: txt,
  });

export default button;
