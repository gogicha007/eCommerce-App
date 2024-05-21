import styles from "./fail.module.css";
import { div } from "../../components/tags";
import ElementCreator from "../../util/elementCreator";
import Router from "../../util/router";

export default class FailPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: "div", className: "failPage" },
      div({
        className: styles.main__title,
        textContent: "404: Page not found please enter correct path",
      }),
    );
    this.routing = routing;
  }
}
