import Header from "./components/Header.jsx";
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
import HistorySection from "./components/HistorySection.jsx";
import History from "./components/History.jsx";
import Certificates from "./components/Certificates.jsx";
import AdditionalInfo from "./components/AdditionalInfo.jsx";
import OwnProjects from "./components/OwnProjects.jsx";
import Footer from "./components/Footer.jsx";
import "../styles/MainView.scss";

import preact from 'preact';

export default class MainView extends preact.Component {
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