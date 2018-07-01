import BaseList from "./BaseList.jsx";
import "./../../styles/components/History.scss";

export default class History extends BaseList {
    /**
     * @param {{company: string, jobTitle: string, description: string, dateRange: string}} item
     * @override
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="list-item">
                <div className="item-key">{item.dateRange}</div>
                <div className="item-value">
                    <div className="title">{item.jobTitle}</div>
                    <div className="company-name">{item.company}</div>
                    <div className="description">{item.description}</div>
                </div>
            </div>
        );
    }
}