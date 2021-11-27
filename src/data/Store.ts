export default class Store {
    url: string;

    constructor(config) {
        this.url = config.url;   
    }

    load() {
        if (typeof global !== 'undefined') {
            // code is being run in prerender-loader
            return Promise.resolve(require('./../../data/data.json'));
        } else {
            // code is being run in browser
            return window.fetch(this.url)
                .then(result => result.json());
        }
    }
}
