export default class Header {
    static render(data) {
        return (
            <div className="header">
                <div className="user-name">{data.name} {data.surname}</div>
                <div className="photo">
                    <img src=""/>
                </div>
                <div className="position">Javascript developer</div>
            </div>
        );
    }
}