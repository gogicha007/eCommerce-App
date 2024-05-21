import styles from "./main.module.css";
import button from "../../components/button";
import { div } from "../../components/tags";
import ElementCreator from "../../util/elementCreator";
import Router from "../../util/router";
import LocalStorage from "../../services/local-storage";
import API_KEYS from "../../services/ct-constants";

export default class StartPage extends ElementCreator {
  routing: Router;

  constructor(routing: Router) {
    super(
      { tag: "div", className: "startPage" },
      div({ className: styles.main__title, textContent: "E-COMM MAIN PAGE" }),
      button({
        txt: "Log Out",
        onClick: () => {
          const session = new LocalStorage(API_KEYS.CTP_CLIENT_ID);
          session.setNull();
          window.localStorage.clear();
          this.routing.navigate("login-page");
        },
        className: "btn__start-page",
      }),
    );
    this.routing = routing;
  }
}
