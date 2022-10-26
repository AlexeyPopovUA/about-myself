import React, {PropsWithChildren} from 'react';

export type CVSectionProps =  PropsWithChildren<{
    title: string;
    cls: string;
}>;

export default (props: CVSectionProps) => (
    <div className={`cv-section ${props.cls} w3-card w3-white w3-container w3-margin-bottom`}>
        <h2 className="cv-section-title text-teal-600 p-4 text-center font-bold">{props.title}</h2>
        <div className="cv-section-content container">{props.children}</div>
    </div>
);
