import React from 'react';

import "./../../styles/components/Header.scss";

type Props = {
    name: string;
    surname: string;
    position: string;
}

export default class Header extends React.Component<Props> {
    render() {
        return (
            <header className="header w3-container w3-padding w3-teal w3-margin-bottom">
                <h1 className="user-name">{this.props.name} {this.props.surname}</h1>
                <div className="position">{this.props.position}</div>
            </header>
        );
    }
}