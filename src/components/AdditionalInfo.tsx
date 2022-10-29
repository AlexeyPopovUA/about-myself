import React from "react";

import CVSection from "./CVSection";
import data from "../data/data";

type Props = {
    records: typeof data.additionalInfo;
};

export default class AdditionalInfo extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Additional information" cls="more">
                <div className="base-list">
                    {this.props.records.map(record => (
                        <div key={record.name} className="cv-list-item w3-row w3-margin-bottom">
                            <div className="item-key w3-text-teal w3-quarter">{record.name}</div>
                            <div className="item-value w3-threequarter">{record.description}</div>
                        </div>
                    ))}
                </div>
            </CVSection>
        );
    }
}
