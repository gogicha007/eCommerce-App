import ElementCreator from '../../util/elementCreator';
import Router from '../../util/router';
import Header from './header/header';
import Landing from './landing/landing';
export default class Root extends ElementCreator {
    routing: Router;
    header: Header;
    landing: Landing;
    constructor(routing: Router);
}
