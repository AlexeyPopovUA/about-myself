import Header from "./components/Header.jsx";
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
import History from "./components/History.jsx";
import Certificates from "./components/Certificates.jsx";
import AdditionalInfo from "./components/AdditionalInfo.jsx";
import Footer from "./components/Footer.jsx";
import "../styles/MainView.scss";

export default class MainView {
    constructor() {}

    render(data) {
        return (
            <div className="main">
                {Header.render(data.user)}
                <div className="w3-content">
                    <div className="w3-container sections">
                        {CVSection.render({
                            title: "Contact information",
                            cls: "contacts",
                            content: new Contacts(Object.keys(data.contacts).map(key => ({
                                key,
                                value: data.contacts[key]
                            })))
                                .render()
                        })}
                        {CVSection.render({
                            title: "Skills",
                            cls: "skills",
                            content: new Skills(data.skills.map(item => ({
                                key: item.name,
                                value: item.description
                            })))
                                .render()
                        })}
                        {CVSection.render({
                            title: "Work history",
                            cls: "history",
                            content: new History(data.experience).render()
                        })}
                        {CVSection.render({
                            title: "Education",
                            cls: "history",
                            content: new History(data.education).render()
                        })}
                        {CVSection.render({
                            title: "Certifications",
                            cls: "certificates",
                            content: new Certificates(data.certificates).render()
                        })}
                        {CVSection.render({
                            title: "Additional information",
                            cls: "more",
                            content: new AdditionalInfo(data.additionalInfo
                                .map(item => ({key: item.name, value: item.description})))
                                .render()
                        })}
                    </div>
                </div>
                {Footer.render()}
            </div>
        );
    }
}