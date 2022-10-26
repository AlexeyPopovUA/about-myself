import React from 'react';

import "./../../styles/components/Footer.scss";

import githubIcon from './../../images/GitHub-Mark-Light-120px-plus.png';

export default () => (
    <footer className="footer flex flex-col items-center w-full top-0 bg-teal-600 text-white p-4">
        <div className="author">Developed by O.Popov, 2022</div>
        <div className="sources flex justify-center items-center">
            <img src={githubIcon} className="github-icon mx-2" alt="github icon"/>
            <a href="https://github.com/AlexeyPopovUA/about-myself" className="github-link underline">GitHub
                sources</a>
        </div>
    </footer>
)