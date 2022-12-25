import React from 'react';

import data from "../data/data";

type Props = {
    user: typeof data.user;
}

export default (props: Props) => {
    const websites = [props.user.Website, props.user.GitHub, props.user.LinkedIn].filter(Boolean);
    const contacts = [props.user.Email, props.user.Phone];

    return (
        <header className="header flex flex-col items-center w-full top-0 bg-teal-600 text-white py-7 px-2">
            <h1 className="user-name font-bold text-3xl">{props.user.name} {props.user.surname}</h1>
            <div className="position text-xl text-center">{props.user.position}</div>
            <div className="websites text-center text-sm md:grid md:grid-cols-3 gap-1 pt-2 w-full">
                {websites.map(site => (
                    <div className="md:col-span-1">
                        <a className="underline underline-offset-1" href={site.url}>{site.title}</a>
                    </div>
                ))}
            </div>
            <div className="contacts text-center text-sm md:grid md:grid-cols-3 gap-1 pt-2 w-full">
                {contacts.map(contact => (
                    <div key={contact} className="md:col-span-1">{contact}</div>
                ))}
            </div>
        </header>
    );
};
