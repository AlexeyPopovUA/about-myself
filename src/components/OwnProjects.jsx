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
            <div className="list-item w3-row w3-margin-bottom">
                <div className="item-key w3-text-teal w3-quarter">{item.name}</div>
                <div className="item-value w3-threequarter">
                    {item.links.map(this.renderLink)}
                    <div className="description w3-margin-top">{item.description}</div>
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