window.JSX = require('hyperscript');
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import "./../styles/index.scss";

const fetchUrl = "https://api.github.com/gists/cc3095560d8b1335675c8f38b17ec06b";

window.addEventListener("load", () => {
    fetch(fetchUrl)
        .then(result => result.json())
        .then(json => {
            const content = JSON.parse(json.files["my-profile.json"].content);
            console.warn("fetch", content);

            document.body.appendChild(
                <div className="main">
                    <div className="delimeter-2"/>
                    <div className="title">Oleksii Popov</div>
                    <div className="delimeter-3"/>
                    <div className="photo">
                        <img src=""/>
                    </div>
                    <div className="position">Javascript developer</div>
                    <div className="sections">
                        {CVSection.render({title: "Contact information", content: Contacts.render(content)})}
                        {CVSection.render({title: "Skills"})}
                        {CVSection.render({title: "Work history"})}
                        {CVSection.render({title: "Education"})}
                        {CVSection.render({title: "Certifications"})}
                        {CVSection.render({title: "Additional information"})}
                    </div>
                </div>
            );
        })
        .catch(error => console.error(error));
});