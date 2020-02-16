import preact from 'preact';
import BaseList from "./BaseList.jsx";
import "./../../styles/components/History.scss";

export default class History extends BaseList {
    /**
     * @param {{company: string, title: string, description: string, date: string}} item
     * @override
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="section-list-item columns">
                <div className="item-key column is-one-quarter">{item.date}</div>
                <div className="item-value column">
                    <div className="history-title">{item.title}</div>
                    <div className="company-name">{item.company}</div>
                    <div className="description">{item.description}</div>
                </div>
            </div>
        );
    }
}