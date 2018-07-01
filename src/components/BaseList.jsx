import "./../../styles/components/BaseList.scss";

export default class BaseList {
    /**
     * @param {{key: string, value: string}[]} itemList
     * @returns {*}
     */
    render(itemList) {
        return itemList.map(item => this.renderItem(item));
    }

    /**
     * @param {{key: string=, value: string=}} item
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="list-item">
                <div className="item-key">{item.key}</div>
                <div className="item-value">{item.value}</div>
            </div>
        );
    }
}