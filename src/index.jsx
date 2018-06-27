import CVSection from "./components/CVSection.jsx";
window.JSX = require('hyperscript');

const fetchUrl = "https://gist.githubusercontent.com/AlexeyPopovUA/cc3095560d8b1335675c8f38b17ec06b/raw/56cc2a2310d56166949539545183ffbaee6631fa/my-profile.json";

window.addEventListener("load", () => {
    fetch(fetchUrl)
        .then(result => result.json())
        .then(json => {
            console.warn("fetch", json);

            document.querySelector(".sections").appendChild(CVSection.render({title: "Contact information"}));
            document.querySelector(".sections").appendChild(CVSection.render({title: "Skills"}));
            document.querySelector(".sections").appendChild(CVSection.render({title: "Work history"}));
            document.querySelector(".sections").appendChild(CVSection.render({title: "Education"}));
            document.querySelector(".sections").appendChild(CVSection.render({title: "Certifications"}));
            document.querySelector(".sections").appendChild(CVSection.render({title: "Additional information"}));
        })
        .catch(error => console.error(error));
});