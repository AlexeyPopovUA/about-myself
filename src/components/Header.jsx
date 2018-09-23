import "./../../styles/components/Header.scss";

export default class Header {
    static render(data) {
        return (
            <header className="header w3-container w3-teal">
                <div className="user-name">{data.name} {data.surname}</div>
                <div className="position">JavaScript developer</div>
            </header>
        );
    }
}