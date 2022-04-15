import React from "react";
import moment from "moment";

import CVSection from "./CVSection";
import data from "../data/data";

import "../../styles/components/History.scss";

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

        //add rendering field
        const historyItems = this.props.experience.map((item, index) => ({
            ...item,
            date: `${item.dateStart} - ${item.dateEnd ? item.dateEnd : "Present"} (${historyDurationValues[index]})`
        }));

        return (
            <CVSection cls={"history"} title={`Work history (${this.getHumanizedDuration(totalDuration)})`}>
                <div className="base-list">
                    {historyItems.map((item) => (
                        <section>
                            <div key={`${item.company}-${item.title}`} className="list-item w3-row">
                                <div className="item-key w3-quarter w3-text-teal">
                                    {item.date}
                                </div>
                                <div className="item-value w3-threequarter">
                                    <div className="title">{item.title}</div>
                                    <div className="company-name">{item.company}</div>
                                </div>
                            </div>
                            <div key={`${item.company}-${item.title}`} className="list-item w3-row w3-margin-bottom">
                                <div className="item-key w3-quarter">
                                    <div className="w3-padding-16 w3-margin-right">{item.stack}</div>
                                </div>
                                <div className="item-value w3-threequarter">

                                    {Array.isArray(item.description) ? item.description.map(descr => <p className="description">{descr}</p>) : <p className="description">{item.description}</p>}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
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
