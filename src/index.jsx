window.JSX = require('hyperscript');
import Header from "./components/Header.jsx";
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
import History from "./components/History.jsx";
import Certificates from "./components/Certificates.jsx";
import AdditionalInfo from "./components/AdditionalInfo.jsx";
import "./../styles/index.scss";

const fetchUrl = "https://api.github.com/gists/cc3095560d8b1335675c8f38b17ec06b";

window.addEventListener("load", () => {
    fetch(fetchUrl)
        .then(result => result.json())
        .then(json => {
            const data = JSON.parse(json.files["my-profile.json"].content);
            const contacts = data.contacts;
            //console.warn("fetch", data);

            document.body.appendChild(
                <div className="main">
                    {Header.render(data.user)}
                    <div className="sections">
                        {CVSection.render({
                            title: "Contact information",
                            cls: "contacts",
                            content: new Contacts(Object.keys(contacts).map(key => ({key, value: contacts[key]})))
                                .render()
                        })}
                        {CVSection.render({
                            title: "Skills",
                            cls: "skills",
                            content: new Skills(data.skills.map(item => ({key: item.name, value: item.description})))
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
                            cls: "history certifications",
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
            );
        })
        .catch(error => console.error(error));
});