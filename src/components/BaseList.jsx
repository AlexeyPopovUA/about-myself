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
            <div className="section-list-item columns">
                <div className="item-key column is-one-quarter">{item.key}</div>
                <div className="item-value column">{item.value}</div>
            </div>
        );
    }
}