import React from "react";
import classNames from "classnames";

import CVSection from "./CVSection";
import data from "../data/data";

type Props = {
    skills: typeof data.skills;
};

export default class Skills extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Skills" cls="skills pt-4">
                {this.props.skills.map((item) => (
                    <div key={item.name} className="cv-list-item sm:grid sm:grid-cols-4 py-2">
                        <div className="col-span-1 text-teal-600 pr-4 mb-2">{item.name}</div>
                        <ul className="col-span-3">
                            {Array.isArray(item.description) ? item.description.map((descr, i) => <li
                                    key={descr.slice(0, 20)}
                                    className={classNames("description", {
                                        "border-b": i !== item.description.length - 1,
                                        "pb-2": i === 0,
                                        "py-2": i !== 0 && i !== item.description.length - 1,
                                        "pt-2":  i === item.description.length - 1
                                    })}>{descr}</li>) :
                                <li className="description py-2">{item.description}</li>}
                        </ul>
                    </div>
                ))}
            </CVSection>
        );
    }
}
