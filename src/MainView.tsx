import Header from "./components/Header.js";
import CVSection from "./components/CVSection.js";
import Contacts from "./components/Contacts.js";
import Skills from "./components/Skills.js";
import HistorySection from "./components/HistorySection.js";
import History from "./components/History.js";
import Certificates from "./components/Certificates.js";
import AdditionalInfo from "./components/AdditionalInfo.js";
import OwnProjects from "./components/OwnProjects.js";
import Footer from "./components/Footer.js";
import "../styles/MainView.scss";

import React from 'react';

export default class MainView extends React.Component {
    render({renderData: props}) {
        return (
            <div className="main">
                <Header renderData={props.user}/>
                <div className="w3-content">
                    <div className="w3-container sections">
                        <CVSection renderData={({title: "Contact information", cls: "contacts"})}>
                            <Contacts renderData={Object.keys(props.contacts).map(key => ({key, value: props.contacts[key]}))}/>
                        </CVSection>
                        <CVSection renderData={({title: "Skills", cls: "skills"})}>
                            <Skills renderData={props.skills.map(item => ({key: item.name, value: item.description}))}/>
                        </CVSection>
                        <HistorySection renderData={({data: props.experience, cls: "history"})}/>
                        <CVSection renderData={({title: "Education", cls: "history"})}>
                            <History renderData={props.education}/>
                        </CVSection>
                        <CVSection renderData={({title: "Certifications", cls: "certificates"})}>
                            <Certificates renderData={props.certificates}/>
                        </CVSection>
                        <CVSection renderData={({title: "Own projects", cls: "own-projects"})}>
                            <OwnProjects renderData={props.ownProjects}/>
                        </CVSection>
                        <CVSection renderData={({title: "Additional information", cls: "more"})}>
                            <AdditionalInfo renderData={props.additionalInfo.map(item => ({key: item.name, value: item.description}))}/>
                        </CVSection>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}