"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
var serviceWorker = require("./serviceWorker");
react_dom_1["default"].render(<react_router_dom_1.BrowserRouter>
        <App_1["default"] />
    </react_router_dom_1.BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
