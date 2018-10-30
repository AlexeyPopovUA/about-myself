import CVSection from "./CVSection.jsx";
import History from "./History.jsx";
import moment from "moment";

export default class HistorySection extends CVSection {
    /**
     * @param {Array} data
     * @returns {HTMLElement}
     */
    static render(data) {
        const cls = "history";
        const historyData = this.getHistoryData(data);
        const content = new History(historyData.historyItems).render();

        return (
            <div className={`cv-section ${cls} w3-card w3-white w3-container w3-margin-bottom`}>
                <h2 className="cv-section-title w3-text-teal">{`Work history (${historyData.total})`}</h2>
                <div className="cv-section-content w3-margin-bottom">{content}</div>
            </div>
        );
    }

    /**
     * Prepares data for rendering in the History component
     * @param {Array} items
     * @returns {{total: string, historyItems: Array}}
     */
    static getHistoryData(items) {
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
     * @param duration
     * @returns {string}
     */
    static getHumanizedDuration(duration) {
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