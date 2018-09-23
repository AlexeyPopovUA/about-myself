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
            <div className="list-item w3-row">
                <div className="item-key w3-text-teal w3-third">{item.key}</div>
                <div className="item-value w3-twothird">{ifLinkToLink(item.value)}</div>
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