import React from "react";

import data from "../data/data";
import CVSection from "./CVSection";

type Props = {
    projects: typeof data.ownProjects;
};

export default class OwnProjects extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Own projects" cls="own-projects">
                {this.props.projects.map((project) => (
                    <div key={project.name} className="cv-list-item sm:grid sm:grid-cols-4 py-4">
                        <div className="item-key text-teal-600 pr-4 mb-2 font-bold">{project.name}</div>
                        <div className="item-value col-span-3">
                            {project.links.map((link) => (
                                <div key={link.name} className="link mb-2">
                                    <span>
                                        <span className="font-bold">{link.name}</span>: <a href={link.link} className="underline">{link.link}</a>
                                    </span>
                                </div>
                            ))}
                            <div className="description">{project.description}</div>
                        </div>
                    </div>
                ))}
            </CVSection>
        );
    }
}
