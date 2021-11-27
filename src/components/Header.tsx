import React from 'react';
import "./../../styles/components/Header.scss";

export default class Header extends React.Component {
    render({renderData: props}) {
        return (
            <header className="header w3-container w3-padding w3-teal w3-margin-bottom">
                <div className="user-name">{props.name} {props.surname}</div>
                <div className="position">{props.position}</div>
            </header>
        );
    }
}