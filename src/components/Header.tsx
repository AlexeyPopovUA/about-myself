import React from 'react';

type Props = {
    name: string;
    surname: string;
    position: string;
}

export default (props: Props) => (
    <header className="header flex flex-col items-center w-full top-0 bg-teal-600 text-white p-7">
        <h1 className="user-name font-bold text-3xl">{props.name} {props.surname}</h1>
        <div className="position text-xl text-center">{props.position}</div>
    </header>
);
