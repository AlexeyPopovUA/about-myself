import React from "react";

import data from "../data/data";
import CVSection from "./CVSection";

type Props = {
    contacts: typeof data.contacts;
};

export default (props: Props) => (
    <CVSection title="Contact information" cls="contacts container">
        {Object.keys(props.contacts).map((key) => (
            <div key={key} className="grid grid-cols-4 py-2">
                <div className="text-teal-600">{key}</div>
                <div className="col-span-3">{ifLinkToLink(props.contacts[key])}</div>
            </div>
        ))}
    </CVSection>
)

const linkRegex = RegExp(
    /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9:%_\+.~#?&//=]*)/
);

/**
 * @param {string} text
 * @returns {HTMLElement|string}
 */
function ifLinkToLink(text) {
    return linkRegex.test(text) ? <a href={!text.startsWith("http") ? `http://${text}` : text} className="underline">{text}</a> : text;
}
