import styles from "./form.module.css";
import { input } from "../../../components/tags";
import ElementCreator from "../../../util/elementCreator";
import Router from "../../../util/router";
import { InputProps } from "../../../interfaces/interfaces";

interface inputData {
  email: FormDataEntryValue | null | void;
  password: FormDataEntryValue | null | void;
}
export default class Form extends ElementCreator<HTMLFormElement> {
  loginInput: InputWrapper;
  passwordInput: InputWrapper;
  routing: Router;
  inputData: inputData;
  constructor(routing: Router) {
    const inputLogin = input(
      "userEmail",
      "",
      "",
      "E-mail",
      "email",
      "Please enter valid email",
      styles["input__login"],
    );
    const loginWrapper = new InputWrapper(
      {
        inputSelector: styles["input__login"],
        placeHolder: "Email...",
        type: "email",
        errSelector: styles["login-error"],
        errMessage: "Enter valid email...",
      },
      inputLogin.getElement(),
    );

    const inputPassword = input(
      "userPassword",
      "^[A-Z][\\-a-zA-z]+$",
      "4",
      "Password",
      "password",
      "Only english, first word uppercase, min 4 char",
      styles["input__password"],
    );

    const passwordWrapper = new InputWrapper(
      {
        inputSelector: styles["input__password"],
        placeHolder: "",
        type: "password",
        errSelector: styles["login-error"],
        errMessage: "Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters",
      },
      inputPassword.getElement(),
    )
    const inputBtn = input(
      "",
      "",
      "",
      "",
      "submit",
      "",
      styles["input__submit"],
    );

    super(
      { tag: "form", className: styles["login__form"] },
      loginWrapper.getNode(),
      passwordWrapper.getNode(),
      inputBtn,
    );

    this.inputData = {
      email: "",
      password: "",
    };

    this.loginInput = loginWrapper;
    this.passwordInput = passwordWrapper;
    this.routing = routing;

    const handler = this.submitHandler.bind(this);
    this.element.addEventListener("submit", handler);
    this.element.addEventListener("keydown", (e) => {
      if (e.code != "Enter") {
        return;
      } else handler;
    });
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    this.setData();
    this.saveData();
    if (this.validateFillForm()) {
      this.routing.navigate("main-page");
    };
  }

  setData() {
    const data = new FormData(this.getElement());
    this.inputData.email = data.get("userEmail");
    this.inputData.password = data.get("userPassword");
  }

  validateFillForm() {
    console.log(this.loginInput)
    const emailRegx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passRegx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    let valid = true;
        if (!emailRegx.test(this.loginInput.inputField.value)) {
            setErrorFor(this.loginInput);
            valid = false;
        } else {
            this.loginInput.errorElement.classList.remove(styles["show"]);
        }
        if (!passRegx.test(this.passwordInput.inputField.value)) {
            setErrorFor(this.passwordInput);
            valid = false;
        } else {
            this.passwordInput.errorElement.classList.remove(styles["show"]);
        }

        function setErrorFor(inputEl: InputWrapper) {
            inputEl.errorElement.classList.add(styles["show"]);
        }
        return valid;
    // if (this.inputData.email !== "" && this.inputData.password !== "") {
    //   this.routing.navigate("main-page");
    // }
  }

  saveData() {
    window.localStorage.setItem("logData", JSON.stringify(this.inputData));
  }
}

class InputWrapper {
  node: HTMLElement;
  inputField: HTMLInputElement;
  errorElement: HTMLElement;
  props: InputProps;
  constructor(props: InputProps, loginInput: HTMLInputElement) {
    const node = document.createElement("div");
    node.classList.add(styles["form-control"]);
    const input = loginInput;
    input.classList.add(props.inputSelector);
    input.type = props.type;
    input.placeholder = props.placeHolder;
    input.minLength = props.minLength as number;
    input.required = true;

    const errorElement = document.createElement("small");
    errorElement.classList.add(props.errSelector);
    errorElement.innerText = props.errMessage;

    node.appendChild(input);
    node.appendChild(errorElement);

    this.errorElement = errorElement;
    this.inputField = input;
    this.node = node;
    this.props = props;
  }
  public getNode() {
    return this.node;
  }
}
