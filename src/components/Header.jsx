import preact from 'preact';
import "./../../styles/components/Header.scss";

export default class Header extends preact.Component {
    render({renderData: props}) {
        return (
            <header className="header hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <div className="user-name">{props.name} {props.surname}</div>
                        <div className="position">{props.position}</div>
                    </div>
                </div>
            </header>
        );
    }
}