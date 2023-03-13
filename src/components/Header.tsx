import React from 'react';

import data from "../data/data";

type Props = {
    user: typeof data.user;
}

export default (props: Props) => {
    const websites = [props.user.Website, props.user.Blog, props.user.GitHub, props.user.LinkedIn];
    const contacts = [props.user.Email, props.user.Phone];

    return (
        <header className="header w-full top-0 bg-teal-600 text-white py-7">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="user-name font-bold text-3xl">{props.user.name} {props.user.surname}</h1>
                <div className="position text-xl text-center">{props.user.position}</div>
                <div className="websites text-left text-sm md:grid md:grid-cols-4 gap-20 pt-2 w-full">
                    {websites.map(site => (
                        <div className="md:col-span-1">
                            <a className="underline underline-offset-1" href={site.url}>{site.title}</a>
                        </div>
                    ))}
                </div>
                <div className="contacts text-left text-sm md:grid md:grid-cols-4 gap-20 pt-2 w-full">
                    {contacts.map(contact => (
                        <div className="md:col-span-1">{contact}</div>
                    ))}
                </div>
            </div>
        </header>
    );
};
