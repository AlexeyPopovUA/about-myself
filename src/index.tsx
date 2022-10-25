import React from "react";
import { createRoot } from 'react-dom/client';

import data from "./data/data";

import MainView from "./MainView";

if (!DEBUG && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
const container = window.document.querySelector(".main");
const root = createRoot(container);
root.render(<MainView renderData={data}/>);

// eslint-disable-next-line
(module as any).hot?.accept();
