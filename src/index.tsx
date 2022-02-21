import React from "react";
import { render } from "react-dom";

import data from "./data/data";
import MainView from "./MainView";

if (!DEBUG && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

render(<MainView renderData={data}/>, window.document.querySelector(".main"));

// eslint-disable-next-line
(module as any).hot?.accept();
