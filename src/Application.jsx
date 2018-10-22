import Store from "./data/Store";
import MainView from "./MainView.jsx";

export default class Application {
    constructor() {
        this.store = new Store({url: "data.json"});
        this.view = new MainView();
    }

    run() {
        this.store
            .load()
            .then(data => document.body.appendChild(this.view.render(data)))
            .catch(error => console.error(error));
    }
}