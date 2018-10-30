import "./../../styles/components/Header.scss";

export default class Header {
    constructor(props) {
        this.props = props;
    }

    render() {
        return (
            <header className="header w3-container w3-padding w3-teal w3-margin-bottom">
                <div className="user-name">{this.props.name} {this.props.surname}</div>
                <div className="position">{this.props.position}</div>
            </header>
        );
    }
}