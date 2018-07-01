import "./../../styles/components/CVSection.scss";

export default class CVSection {
    /**
     * @param {{title: string, cls: string, content: *}} data
     * @returns {*}
     */
    static render(data) {
        return (
            <div className={`cv-section ${data.cls}`}>
                <div className="cv-section-title">{data.title}</div>
                <div className="cv-section-content">{data.content}</div>
            </div>
        );
    }
}