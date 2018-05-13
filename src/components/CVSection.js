import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class CVSection extends PolymerElement {
    static get template() {
        return html`
            <div class="delimeter-1">-</div>
            <h2>String template</h2>
            <div class="delimeter-1">-</div>`;
    }
}

customElements.define('cv-section', CVSection);