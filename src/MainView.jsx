import Header from "./components/Header.jsx";
import CVSection from "./components/CVSection.jsx";
import Contacts from "./components/Contacts.jsx";
import Skills from "./components/Skills.jsx";
import History from "./components/History.jsx";
import Certificates from "./components/Certificates.jsx";
import AdditionalInfo from "./components/AdditionalInfo.jsx";
import OwnProjects from "./components/OwnProjects.jsx";
import Footer from "./components/Footer.jsx";
import moment from "moment";
import "../styles/MainView.scss";

export default class MainView {
    constructor() {}

    render(data) {
        const historyData = this.getHistoryData(data.experience);

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
                            title: `Work history (${historyData.total})`,
                            cls: "history",
                            content: new History(historyData.historyItems).render()
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
                            title: "Own projects",
                            cls: "own-projects",
                            content: new OwnProjects(data.ownProjects).render()
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

    /**
     * Prepares data for rendering in the History component
     * @todo Should be inside History component
     * @param {Array} items
     * @returns {{total: string, historyItems: Array}}
     */
    getHistoryData(items) {
        const historyDurations = items
            .map(item => {
                return moment.duration(
                    (item.dateEnd ? moment(item.dateEnd, 'MMM YYYY', 'en') : moment())
                        .diff(moment(item.dateStart, 'MMM YYYY', 'en'))
                );
            });
        const historyDurationValues = historyDurations
            .map(duration => this.getHumanizedDuration(duration));

        let totalDuration = historyDurations[0];
        for (let i = 1; i < historyDurations.length - 1; i++) {
            totalDuration = totalDuration.add(historyDurations[i]);
        }

        //add rendering field
        items.forEach((item, index) => {
            item.date = `${item.dateStart} - ${item.dateEnd ? item.dateEnd : "Present"} (${historyDurationValues[index]})`;
        });

        return {
            total: this.getHumanizedDuration(totalDuration),
            historyItems: items
        }
    }

    /**
     * Converts "moment" module duration object into the humanized string
     * @todo Should be inside History component
     * @param duration
     * @returns {string}
     */
    getHumanizedDuration(duration) {
        const years = duration.years();
        let months = duration.months();
        const days = duration.days();

        //correction takes days into account
        if (days / 31 > 0.75) {
            months = months + 1;
        }

        //formatted output
        const result = [];
        if (years > 0) {
            result.push(years === 1 ? `${years} year` : `${years} years`);
        }
        if (months > 0) {
            result.push(months === 1 ? `${months} month` : `${months} months`);
        }
        return result.join(" ");
    }
}