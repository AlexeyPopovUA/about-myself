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
                {this.props.skills.map((item) => (
                    <div key={item.name} className="cv-list-item sm:grid sm:grid-cols-4 mb-8">
                        <div className="text-teal-600 mr-2 mb-2">{item.name}</div>
                        <ul className="col-span-3">
                            {Array.isArray(item.description) ?
                                item.description.map((descr, i) => <li key={descr.slice(0, 10)}
                                                                       className={`description py-1 ${i !== item.description.length - 1 ? "border-b" : ""}`}>{descr}</li>) :
                                <li className="description py-1">{item.description}</li>}
                        </ul>
                    </div>
                ))}
            </CVSection>
        );
    }
}
