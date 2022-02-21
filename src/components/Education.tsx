import React from "react";

import CVSection from "./CVSection";
import data from "../data/data";

import "../../styles/components/History.scss";

type Props = {
    education: typeof data.education;
};

export default class Education extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Education" cls="history">
                <div className="base-list">
                    {this.props.education.map((item) => (
                        <div key={`${item.company}-${item.title}`} className="list-item w3-row w3-margin-bottom">
                            <div className="item-key w3-text-teal w3-quarter">{item.date}</div>
                            <div className="item-value w3-threequarter">
                                <div className="title">{item.title}</div>
                                <div className="company-name">{item.company}</div>
                                <div className="description">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </CVSection>
        );
    }
}
