"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./components/Home");
var Create_1 = require("./components/customer/Create");
var Edit_1 = require("./components/customer/Edit");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<div>
        <nav>
          <ul>
            <li>
              <react_router_dom_1.Link to={'/'}> Home </react_router_dom_1.Link>
            </li>
            <li>
              <react_router_dom_1.Link to={'/create'}> Create Customer </react_router_dom_1.Link>
            </li>
          </ul>
        </nav>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route path={'/'} exact component={Home_1["default"]}/>
          <react_router_dom_1.Route path={'/create'} exact component={Create_1["default"]}/>
          <react_router_dom_1.Route path={'/edit/:id'} exact component={Edit_1["default"]}/>
        </react_router_dom_1.Switch>
      </div>);
    };
    return App;
}(React.Component));
exports["default"] = (0, react_router_dom_1.withRouter)(App);
