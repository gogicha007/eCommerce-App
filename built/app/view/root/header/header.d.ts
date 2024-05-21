import ElementCreator from '../../../util/elementCreator';
import Router from '../../../util/router';
export default class Header extends ElementCreator {
    routing: Router;
    catalogBtn: ElementCreator<HTMLElement>;
    loginBtn: ElementCreator<HTMLElement>;
    logoutBtn: ElementCreator<HTMLElement>;
    mainBtn: ElementCreator<HTMLElement>;
    signupBtn: ElementCreator<HTMLElement>;
    constructor(routing: Router);
    arrangeButtons(): void;
}
