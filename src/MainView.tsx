import React from "react";

import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import History from "./components/History";
import OwnProjects from "./components/OwnProjects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import data from "./data/data";

import "../styles/MainView.scss";

type Props = {
    renderData: typeof data;
};

export default class MainView extends React.Component<Props> {
    render() {
        return (
            <div className="font-mono">
                <Header
                    name={this.props.renderData.user.name}
                    position={this.props.renderData.user.position}
                    surname={this.props.renderData.user.surname}
                />
                <div className="container mx-auto px-2 pt-4">
                    <Contacts contacts={this.props.renderData.contacts} />
                    <Skills skills={this.props.renderData.skills} />
                    <History experience={this.props.renderData.experience} />
                    <OwnProjects projects={this.props.renderData.ownProjects} />
                    <Education education={this.props.renderData.education} />
                </div>
                <Footer />
            </div>
        );
    }
}
