export default class Contacts {
    /**
     * @param {{contacts: {key: string, value: string}[]}} data
     * @returns {*}
     */
    static render(data) {
        return (
            <div className="contacts">
                {Object.keys(data.contacts).map(key => Contacts.renderContact({key, value: data.contacts[key]}))}
            </div>
        );
    }

    /**
     * @param {{key: string, value: string}} contactItem
     * @returns {*}
     */
    static renderContact(contactItem) {
        return (
            <div className="contact-item">
                <span className="contact-item-key">{contactItem.key} : </span>
                <span className="contact-item-value">{contactItem.value}</span>
            </div>
        );
    }
}