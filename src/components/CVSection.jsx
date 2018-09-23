import "./../../styles/components/CVSection.scss";

export default class CVSection {
    /**
     * @param {{title: string, cls: string, content: *}} data
     * @returns {*}
     */
    static render(data) {
        return (
            <div className={`cv-section ${data.cls} w3-card w3-white w3-container w3-margin-bottom`}>
                <h2 className="cv-section-title w3-text-teal">{data.title}</h2>
                <div className="cv-section-content w3-margin-bottom">{data.content}</div>
            </div>
        );
    }
}