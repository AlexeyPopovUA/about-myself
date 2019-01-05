import preact from 'preact';
import "./../../styles/components/Footer.scss";
import githubIcon from './../../images/GitHub-Mark-Light-120px-plus.png';

export default class Footer extends preact.Component {
    render() {
        return (
            <footer className="w3-container w3-teal w3-padding w3-center footer">
                <div className="author">Developed by O.Popov, 2018</div>
                <div className="sources">
                    <img src={githubIcon} className="github-icon" alt="github-icon"/>&nbsp;
                    <a href="https://github.com/AlexeyPopovUA/about-myself" className="github-link">GitHub sources</a>
                </div>
            </footer>
        );
    }
}