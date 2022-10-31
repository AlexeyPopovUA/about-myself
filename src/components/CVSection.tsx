import React, {PropsWithChildren} from 'react';

export type CVSectionProps =  PropsWithChildren<{
    title: string;
    cls: string;
}>;

export default (props: CVSectionProps) => (
    <div className={`cv-section ${props.cls} container py-2`}>
        <h2 className="cv-section-title text-teal-600 py-2 text-center text-lg">{props.title}</h2>
        <div className="cv-section-content container">{props.children}</div>
    </div>
);
