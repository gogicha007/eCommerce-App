type Routing = {
    path: string;
    callback: () => void;
};
export default class Router {
    routes: Routing[];
    constructor(routes: Routing[]);
    navigate(url: string | HashChangeEvent): void;
}
export {};
