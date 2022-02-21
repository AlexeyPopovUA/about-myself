import React from "react";

import data from "../data/data";
import CVSection from "./CVSection";

import "./../../styles/components/Contacts.scss";

type Props = {
    contacts: typeof data.contacts;
};

export default class Contacts extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Contact information" cls="contacts">
                {Object.keys(this.props.contacts).map((key) => (
                    <div key={key} className="list-item w3-row w3-margin-bottom">
                        <div className="item-key w3-text-teal w3-quarter">{key}</div>
                        <div className="item-value w3-threequarter">{ifLinkToLink(this.props.contacts[key])}</div>
                    </div>
                ))}
            </CVSection>
        );
    }
}

const linkRegex = RegExp(
    /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9:%_\+.~#?&//=]*)/
);

/**
 * @param {string} text
 * @returns {HTMLElement|string}
 */
function ifLinkToLink(text) {
    return linkRegex.test(text) ? <a href={!text.startsWith("http") ? `http://${text}` : text}>{text}</a> : text;
}
