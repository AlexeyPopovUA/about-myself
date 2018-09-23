import "./../../styles/components/Header.scss";

export default class Header {
    static render(data) {
        return (
            <header className="header w3-container w3-padding w3-teal w3-margin-bottom">
                <div className="user-name">{data.name} {data.surname}</div>
                <div className="position">JavaScript developer</div>
            </header>
        );
    }
}