import preact from 'preact';
import BaseList from "./BaseList.jsx";
import "./../../styles/components/Contacts.scss";

export default class Contacts extends BaseList {
    /**
     * @param {{key: string, value: string}} item
     * @override
     * @returns {*}
     */
    renderItem(item) {
        return (
            <div className="section-list-item columns">
                <div className="item-key column is-one-quarter">{item.key}</div>
                <div className="item-value column">{ifLinkToLink(item.value)}</div>
            </div>
        );
    }
}

const linkRegex = RegExp(/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9:%_\+.~#?&//=]*)/);

/**
 * @param {string} text
 * @returns {HTMLElement|string}
 */
function ifLinkToLink(text) {
    return linkRegex.test(text) ? <a href={!text.startsWith("http") ? `http://${text}` : text}>{text}</a> : text;
}