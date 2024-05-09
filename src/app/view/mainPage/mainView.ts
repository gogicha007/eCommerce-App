import button from "../../components/button";
import { div } from "../../components/tags";
import ElementCreator from "../../util/elementCreator";
import Router from "../../util/router";

export default class StartPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: "div", className: "startPage" },
      div({ className: "title-game", textContent: "E-COMM" }),
      button({
        txt: "Log Out",
        onClick: () => {
          window.localStorage.clear();
          this.routing.navigate("login-page");
        },
        className: "btn__start-page",
      }),
    );
    this.routing = routing;
  }
}
