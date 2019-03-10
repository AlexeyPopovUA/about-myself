import Store from "./data/Store";
import MainView from "./MainView.jsx";
import preact from 'preact';

export default class Application {
    constructor() {
        this.store = new Store({url: "data.json"});
    }

    run() {
        this.store
            .load()
            .then(data => {
                preact.render(<MainView renderData={data}/>, document.body, document.querySelector('.main'))
            })
            .catch(error => console.error(error));
    }
}
