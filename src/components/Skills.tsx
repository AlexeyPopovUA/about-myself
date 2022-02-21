import React from "react";

import CVSection from "./CVSection";
import data from "../data/data";

type Props = {
    skills: typeof data.skills;
};

export default class Skills extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Skills" cls="skills">
                <div className="base-list">
                    {this.props.skills.map((item) => (
                        <div key={item.name} className="list-item w3-row w3-margin-bottom">
                            <div className="item-key w3-text-teal w3-quarter">{item.name}</div>
                            <div className="item-value w3-threequarter">{item.description}</div>
                        </div>
                    ))}
                </div>
            </CVSection>
        );
    }
}
