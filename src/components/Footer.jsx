import "./../../styles/components/Footer.scss";

export default class Footer {
    static render() {
        return (
            <footer className="w3-container w3-teal w3-padding w3-center footer">
                <div className="author">Developed by O.Popov, 2018</div>
                <div className="sources">
                    <a href="https://github.com/AlexeyPopovUA/about-myself">GitHub sources</a>
                </div>
            </footer>
        );
    }
}