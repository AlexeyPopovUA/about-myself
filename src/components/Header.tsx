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
                <div className="user-name">{this.props.name} {this.props.surname}</div>
                <div className="position">{this.props.position}</div>
            </header>
        );
    }
}