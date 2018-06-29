window.JSX = require('hyperscript');
import Header from "./components/Header.jsx";
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
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
                            content: new Skills().render([])
                        })}
                        {CVSection.render({title: "Work history", cls: "history"})}
                        {CVSection.render({title: "Education", cls: "education"})}
                        {CVSection.render({title: "Certifications", cls: "certificates"})}
                        {CVSection.render({title: "Additional information", cls: "more"})}
                    </div>
                </div>
            );
        })
        .catch(error => console.error(error));
});