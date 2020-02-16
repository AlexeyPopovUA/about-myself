import preact from 'preact';
import "./../../styles/components/CVSection.scss";

export default class CVSection extends preact.Component {
    /**
     * @param {{renderData: {title: string, cls: string, content: *}}} data
     * @returns {HTMLElement}
     */
    render({renderData: props, children}) {
        return (
            <div className={`cv-section ${props.cls} tile is-child box`}>
                <h2 className="cv-section-title title">{props.title}</h2>
                <div className="cv-section-content">{children}</div>
            </div>
        );
    }
}