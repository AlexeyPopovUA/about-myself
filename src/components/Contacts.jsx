export default class Contacts {
    /**
     * @param {{contacts: {key: string, value: string}[]}} data
     * @returns {*}
     */
    static render(data) {
        return (
            Object.keys(data.contacts).map(key => Contacts.renderContact({key, value: data.contacts[key]}))
        );
    }

    /**
     * @param {{key: string, value: string}} contactItem
     * @returns {*}
     */
    static renderContact(contactItem) {
        return (
            <div className="contact-item">
                <div className="contact-item-key">{contactItem.key} :</div>
                <div className="contact-item-value">{ifLinkToLink(contactItem.value)}</div>
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