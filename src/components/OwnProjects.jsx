import preact from 'preact';
import BaseList from "./BaseList.jsx";
import "./../../styles/components/OwnProjects.scss";

export default class OwnProjects extends BaseList {
    /**
     * @param {{name: string, description: string, links: string}} item
     * @override
     * @returns {HTMLElement}
     */
    renderItem(item) {
        return (
            <div className="section-list-item columns">
                <div className="item-key column is-one-quarter">{item.name}</div>
                <div className="item-value column">
                    {item.links.map(this.renderLink)}
                    <div className="description">{item.description}</div>
                </div>
            </div>
        );
    }

    /**
     * @private
     * @param {{name: string, link: string}} linkData
     * @returns {HTMLElement}
     */
    renderLink(linkData) {
        return (
            <div className="link">
                <span>{linkData.name}: <a href={linkData.link}>{linkData.link}</a></span>
            </div>
        );
    }
}