import React from "react";

import data from "../data/data";
import CVSection from "./CVSection";

type Props = {
    intro: typeof data.intro;
};

export default (props: Props) => (
    <CVSection title={props.intro.title} cls="intro container">
        <div className="py-4">
            {props.intro.description.map(item => <p className="pb-2" key={item}>{item}</p>)}
        </div>
    </CVSection>
);
