import preact from 'preact';
import BaseList from "./BaseList.jsx";
import "./../../styles/components/Certificates.scss";

export default class Certificates extends BaseList {
    /**
     * @param {{company: string, title: string, link: string, date: string}} item
     * @override
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="list-item w3-row w3-margin-bottom">
                <div className="item-key w3-text-teal w3-quarter">{item.date}</div>
                <div className="item-value w3-threequarter">
                    <div className="title">
                        <a href={item.link}>{item.title}</a>
                    </div>
                    <div className="company-name">{item.company}</div>
                </div>
            </div>
        );
    }
}