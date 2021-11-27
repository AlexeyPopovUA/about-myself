import React from 'react';
import "./../../styles/components/CVSection.scss";

export default class CVSection extends React.Component {
    /**
     * @param {{renderData: {title: string, cls: string, content: *}}} data
     * @returns {HTMLElement}
     */
    render({renderData: props, children}) {
        return (
            <div className={`cv-section ${props.cls} w3-card w3-white w3-container w3-margin-bottom`}>
                <h2 className="cv-section-title w3-text-teal">{props.title}</h2>
                <div className="cv-section-content w3-margin-bottom">{children}</div>
            </div>
        );
    }
}