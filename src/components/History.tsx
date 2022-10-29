import React from "react";
import moment from "moment";

import CVSection from "./CVSection";
import data from "../data/data";

type Props = {
    experience: typeof data.experience;
};

export default class History extends React.Component<Props> {
    render() {
        const historyDurations = this.props.experience.map((item) =>
            moment.duration(
                (item.dateEnd ? moment(item.dateEnd, "MMM YYYY", "en") : moment()).diff(
                    moment(item.dateStart, "MMM YYYY", "en")
                )
            )
        );
        const historyDurationValues = historyDurations.map((duration) => this.getHumanizedDuration(duration));

        let totalDuration = historyDurations[0];
        for (let i = 1; i < historyDurations.length - 1; i++) {
            totalDuration = totalDuration.add(historyDurations[i]);
        }

        return (
            <CVSection cls="history" title={`Work history (${this.getHumanizedDuration(totalDuration)})`}>
                {this.props.experience.map((item, index) => (
                    <section key={`${item.company}-${item.title}`} className="history-section mb-8">
                        <div className="cv-list-item sm:grid sm:grid-cols-4 mb-2">
                            <div className="item-key text-teal-600 mr-2 mb-2">
                                <div>{`${item.dateStart} - ${item.dateEnd ? item.dateEnd : "Present"}`}</div>
                                <div>({historyDurationValues[index]})</div>
                            </div>
                            <div className="item-value col-span-3">
                                <div className="title underline">{item.title}</div>
                                <div className="company-name">{item.company}</div>
                            </div>
                        </div>
                        <div className="cv-list-item sm:grid sm:grid-cols-4">
                            <div className="item-key mr-2 mb-2">
                                <em>{item.stack}</em>
                            </div>
                            <ul className="item-value col-span-3">
                                {Array.isArray(item.description) ? item.description.map((descr, i) => <li
                                        key={descr.slice(0, 20)} className={`description py-1 ${i !== item.description.length - 1 ? "border-b" : ""}`}>{descr}</li>) :
                                    <li className="description py-1">{item.description}</li>}
                            </ul>
                        </div>
                    </section>
                ))}
            </CVSection>
        );
    }

    /**
     * Converts "moment" module duration object into the humanized string
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
