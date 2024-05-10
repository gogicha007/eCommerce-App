import { div } from "../../components/tags";
import ElementCreator from "../../util/elementCreator";
import Router from "../../util/router";
import Form from "./form/form";

export default class LoginPage extends ElementCreator {
  constructor(routing: Router) {
    super(
      { tag: "div", className: "entryPage" },
      div({ className: "title-game", textContent: "E-Commerce" }),
      new Form(routing),
    );
  }
}
