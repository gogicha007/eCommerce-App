import styles from "./login.module.css";
import { div } from "../../components/tags";
import ElementCreator from "../../util/elementCreator";
import Router from "../../util/router";
import Form from "./form/form";

export default class LoginPage extends ElementCreator {
    constructor(routing: Router) {
        super(
            { tag: "div", className: styles["login-page"] },
            div({ className: styles["login-page__title"], textContent: "Login" }),
            new Form(routing)
        );
    }
}
