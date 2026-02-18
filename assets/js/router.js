export class Router {
    constructor(routes) {
        this.routes = routes;
        this.container = document.querySelector('#view-container');
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    handleRoute() {
        const hash = window.location.hash || '#/';
        const route = this.routes[hash] || this.routes['#/'];
        
        if (route) {
            this.container.innerHTML = route.template;
            if (route.init) route.init();
        }
    }

    navigate(path) {
        window.location.hash = path;
    }
}
