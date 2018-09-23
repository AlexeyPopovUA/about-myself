window.JSX = require('hyperscript');

import Application from "./Application.jsx";

window.addEventListener("load", () => new Application().run());