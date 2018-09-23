import "./../../styles/components/BaseList.scss";

export default class BaseList {
    constructor(config) {
        this.config = config;
    }

    /**
     * @returns {HTMLElement[]}
     */
    render() {
        return this.config.map(item => this.renderItem(item));
    }

    /**
     * @param {{key: string=, value: string=}} item
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="list-item w3-row">
                <div className="item-key w3-text-teal w3-third">{item.key}</div>
                <div className="item-value w3-twothird">{item.value}</div>
            </div>
        );
    }
}