import React from "react";

import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import History from "./components/History";
import AdditionalInfo from "./components/AdditionalInfo";
import OwnProjects from "./components/OwnProjects";
import Footer from "./components/Footer";
import data from "./data/data";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

import "../styles/MainView.scss";

type Props = {
    renderData: typeof data;
};

export default class MainView extends React.Component<Props> {
    render() {
        return (
            <>
                <Header
                    name={this.props.renderData.user.name}
                    position={this.props.renderData.user.position}
                    surname={this.props.renderData.user.surname}
                />
                <div className="w3-content">
                    <div className="w3-container sections">
                        <Contacts contacts={this.props.renderData.contacts} />
                        <Skills skills={this.props.renderData.skills} />
                        <History experience={this.props.renderData.experience} />
                        <OwnProjects projects={this.props.renderData.ownProjects} />
                        <Education education={this.props.renderData.education} />
                        <Certifications certificates={this.props.renderData.certificates} />
                        <AdditionalInfo records={this.props.renderData.additionalInfo} />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
