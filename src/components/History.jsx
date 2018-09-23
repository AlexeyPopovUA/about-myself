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
            <div className="list-item">
                <div className="item-key w3-text-teal">{item.date}</div>
                <div className="item-value">
                    <div className="title">{item.title}</div>
                    <div className="company-name">{item.company}</div>
                    <div className="description">{item.description}</div>
                </div>
            </div>
        );
    }
}