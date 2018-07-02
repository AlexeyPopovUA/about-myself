import "./../../styles/components/Header.scss";

export default class Header {
    static render(data) {
        return (
            <div className="header">
                <div className="user-name">{data.name} {data.surname}</div>
                <div className="position">Senior JavaScript developer</div>
            </div>
        );
    }
}