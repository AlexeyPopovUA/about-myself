import React from "react";

import data from "../data/data";
import CVSection from "./CVSection";

import "./../../styles/components/OwnProjects.scss";

type Props = {
    projects: typeof data.ownProjects;
};

export default class OwnProjects extends React.Component<Props> {
    render() {
        return (
            <CVSection title="Own projects" cls="own-projects">
                <div className="base-list">
                    {this.props.projects.map((project) => (
                        <div key={project.name} className="cv-list-item w3-row w3-margin-bottom">
                            <div className="item-key w3-text-teal w3-quarter">{project.name}</div>
                            <div className="item-value w3-threequarter">
                                {project.links.map((link) => (
                                    <div key={link.name} className="link">
                                        <span>
                                            {link.name}: <a href={link.link}>{link.link}</a>
                                        </span>
                                    </div>
                                ))}
                                <div className="description w3-margin-top">{project.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </CVSection>
        );
    }
}
