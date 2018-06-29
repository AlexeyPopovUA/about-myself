export default class Header {
    static render(data) {
        return (
            <div className="header">
                <div className="delimeter-2"/>
                <div className="user-name">{data.name} {data.surname}</div>
                <div className="delimeter-3"/>
                <div className="photo">
                    <img src=""/>
                </div>
                <div className="position">Javascript developer</div>
            </div>
        );
    }
}