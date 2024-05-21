type Routing = {
  path: string;
  callback: () => void;
};

export default class Router {
  routes: Routing[];

  constructor(routes: Routing[]) {
    this.routes = routes;
    const handler = this.navigate.bind(this);
    window.addEventListener('hashchange', handler);
  }

  navigate(url: string | HashChangeEvent) {
    if (typeof url === 'string') {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${url}`;
    }
    const hash = window.location.hash.slice(1);
    let route = this.routes.find((item) => item.path === hash);

    console.log(route);

    if (!route) {
      route = this.routes.find((item) => item.path === '404') as Routing;
    }

    route.callback();
  }
}
