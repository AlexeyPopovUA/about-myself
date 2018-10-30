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

export default class MainView {
    constructor() {}

    render(data) {
        return (
            <div className="main">
                {(new Header(data.user)).render()}
                <div className="w3-content">
                    <div className="w3-container sections">
                        {(new CVSection({
                            title: "Contact information",
                            cls: "contacts",
                            content: new Contacts(Object.keys(data.contacts).map(key => ({
                                key,
                                value: data.contacts[key]
                            }))).render()
                        })).render()}
                        {(new CVSection({
                            title: "Skills",
                            cls: "skills",
                            content: new Skills(data.skills.map(item => ({
                                key: item.name,
                                value: item.description
                            }))).render()
                        })).render()}
                        {(new HistorySection({
                            data: data.experience,
                            cls: "history"
                        })).render()}
                        {(new CVSection({
                            title: "Education",
                            cls: "history",
                            content: new History(data.education).render()
                        })).render()}
                        {(new CVSection({
                            title: "Certifications",
                            cls: "certificates",
                            content: new Certificates(data.certificates).render()
                        })).render()}
                        {(new CVSection({
                            title: "Own projects",
                            cls: "own-projects",
                            content: new OwnProjects(data.ownProjects).render()
                        })).render()}
                        {(new CVSection({
                            title: "Additional information",
                            cls: "more",
                            content: new AdditionalInfo(data.additionalInfo
                                .map(item => ({key: item.name, value: item.description}))).render()
                        })).render()}
                    </div>
                </div>
                {(new Footer()).render()}
            </div>
        );
    }
}