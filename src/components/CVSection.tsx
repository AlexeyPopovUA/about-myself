import React, { PropsWithChildren } from 'react';

import "./../../styles/components/CVSection.scss";

export type CVSectionProps =  PropsWithChildren<{
    title: string;
    cls: string;
}>;

export default class CVSection extends React.Component<CVSectionProps> {
    render() {
        return (
            <div className={`cv-section ${this.props.cls} w3-card w3-white w3-container w3-margin-bottom`}>
                <h2 className="cv-section-title w3-text-teal">{this.props.title}</h2>
                <div className="cv-section-content w3-margin-bottom">{this.props.children}</div>
            </div>
        );
    }
}