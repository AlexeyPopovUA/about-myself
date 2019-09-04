import preact from 'preact';
import CVSection from "./CVSection.jsx";
import History from "./History.jsx";
import moment from "moment";
import 'moment/locale/nl'

moment.locale("nl");

export default class HistorySection extends CVSection {
    render({renderData: props}) {
        const historyData = this.getHistoryData(props.data);
        props = Object.assign(props, {historyData});
        return (
            <div className={`cv-section ${props.cls} w3-card w3-white w3-container w3-margin-bottom`}>
                <h2 className="cv-section-title w3-text-teal">{`Werkervaring (${props.historyData.total})`}</h2>
                <div className="cv-section-content w3-margin-bottom">
                    <History renderData={historyData.historyItems}/>
                </div>
            </div>
        );
    }

    /**
     * Prepares data for rendering in the History component
     * @param {Array} items
     * @returns {{total: string, historyItems: Array}}
     */
    getHistoryData(items) {
        const historyDurations = items
            .map(item =>
                moment.duration(
                    (item.dateEnd ? moment(item.dateEnd, 'MMM YYYY', 'en') : moment())
                        .diff(moment(item.dateStart, 'MMM YYYY', 'en'))
                ));

        const historyDurationValues = historyDurations
            .map(duration => this.getHumanizedDuration(duration));

        const totalDuration = historyDurations.reduce((acc, item) => acc.add(item), moment.duration());

        //add rendering field
        items.forEach((item, index) => {
            item.date = `${item.dateStart} - ${item.dateEnd ? item.dateEnd : "Nu"} (${historyDurationValues[index]})`;
        });

        return {
            total: this.getHumanizedDuration(totalDuration),
            historyItems: items
        }
    }

    /**
     * Converts "moment" module duration object into the humanized string
     * @param duration {Duration}
     * @returns {string}
     */
    getHumanizedDuration(duration) {
        return duration.humanize();
    }
}