import preact from 'preact';
import "./../../styles/components/BaseList.scss";

export default class BaseList extends preact.Component {
    /**
     * @returns {HTMLElement[]}
     */
    render({renderData: items}) {
        return <div className="base-list">{items.map(item => this.renderItem(item))}</div>;
    }

    /**
     * @protected
     * @param {{key: string=, value: string=}} item
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="list-item w3-row w3-margin-bottom">
                <div className="item-key w3-text-teal w3-quarter">{item.key}</div>
                <div className="item-value w3-threequarter">{item.value}</div>
            </div>
        );
    }
}