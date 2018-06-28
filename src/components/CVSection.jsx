export default class CVSection {
    static render(data) {
        return (
            <div className="cv-section">
                <div className="cv-section-title">{data.title}</div>
                <div className="cv-section-content">{data.content}</div>
            </div>
        );
    }
}