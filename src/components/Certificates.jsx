import BaseList from "./BaseList.jsx";
import "./../../styles/components/History.scss";

export default class Certificates extends BaseList {
    /**
     * @param {{company: string, title: string, link: string, date: string}} item
     * @override
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="list-item">
                <div className="item-key">{item.date}</div>
                <div className="item-value">
                    <div className="title">
                        <a href={item.link}>{item.title}</a>
                    </div>
                    <div className="company-name">{item.company}</div>
                </div>
            </div>
        );
    }
}