export default class Store {
    constructor(config) {
        this.url = config.url;
    }

    load() {
        return window.fetch(this.url)
            .then(result => result.json())
            .then(json => JSON.parse(json.files["my-profile.json"].content));
    }
}