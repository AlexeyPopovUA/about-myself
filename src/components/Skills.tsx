import React from "react";

import CVSection from "./CVSection";
import data from "../data/data";
import "../../styles/components/Skills.scss";

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
                            <ul className="item-value w3-ul w3-threequarter">
                                {Array.isArray(item.description) ? item.description.map(descr => <li key={descr.slice(0, 10)} className="description">{descr}</li>) : <li className="description">{item.description}</li>}
                            </ul>
                        </div>
                    ))}
                </div>
            </CVSection>
        );
    }
}
