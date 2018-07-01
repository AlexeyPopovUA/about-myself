window.JSX = require('hyperscript');
import Header from "./components/Header.jsx";
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
import History from "./components/History.jsx";
import AdditionalInfo from "./components/AdditionalInfo.jsx";
import "./../styles/index.scss";

const fetchUrl = "https://api.github.com/gists/cc3095560d8b1335675c8f38b17ec06b";

window.addEventListener("load", () => {
    fetch(fetchUrl)
        .then(result => result.json())
        .then(json => {
            const data = JSON.parse(json.files["my-profile.json"].content);
            const contacts = data.contacts;
            console.warn("fetch", data);

            document.body.appendChild(
                <div className="main">
                    {Header.render(data.user)}
                    <div className="sections">
                        {CVSection.render({
                            title: "Contact information",
                            cls: "contacts",
                            content: new Contacts()
                                .render(Object.keys(contacts).map(key => ({key, value: contacts[key]})))
                        })}
                        {CVSection.render({
                            title: "Skills",
                            cls: "skills",
                            content: new Skills()
                                .render(data.skills.map(item => ({key: item.name, value: item.description})))
                        })}
                        {CVSection.render({
                            title: "Work history",
                            cls: "history",
                            content: new History().render(data.experience)
                        })}
                        {CVSection.render({
                            title: "Education",
                            cls: "history",
                            content: new History().render(data.education)
                        })}
                        {CVSection.render({
                            title: "Certifications",
                            cls: "history",
                            content: new History().render(data.certificates)
                        })}
                        {CVSection.render({
                            title: "Additional information",
                            cls: "more",
                            content: new AdditionalInfo().render(data.additionalInfo.map(item => ({key: item.name, value: item.description})))
                        })}
                    </div>
                </div>
            );
        })
        .catch(error => console.error(error));
});