import "./../../styles/components/CVSection.scss";

export default class CVSection {
    constructor(data) {
        this.props = data;
    }
    /**
     * @param {{title: string, cls: string, content: *}} data
     * @returns {HTMLElement}
     */
    render() {
        return (
            <div className={`cv-section ${this.props.cls} w3-card w3-white w3-container w3-margin-bottom`}>
                <h2 className="cv-section-title w3-text-teal">{this.props.title}</h2>
                <div className="cv-section-content w3-margin-bottom">{this.props.content}</div>
            </div>
        );
    }
}