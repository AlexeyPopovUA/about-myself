import Store from "./data/Store";
import MainView from "./MainView.jsx";

export default class Application {
    constructor() {
        const fetchUrl = "https://api.github.com/gists/cc3095560d8b1335675c8f38b17ec06b";
        this.store = new Store({url: fetchUrl});
        this.view = new MainView();
    }

    run() {
        this.store
            .load()
            .then(data => document.body.appendChild(this.view.render(data)))
            .catch(error => console.error(error));
    }
}