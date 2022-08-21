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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var EditCustomer = /** @class */ (function (_super) {
    __extends(EditCustomer, _super);
    function EditCustomer(props) {
        var _this = _super.call(this, props) || this;
        _this.processFormSubmission = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                e.preventDefault();
                this.setState({ loading: true });
                axios_1["default"].patch("http://localhost:5000/customers/".concat(this.state.id), this.state.values).then(function (data) {
                    _this.setState({ submitSuccess: true, loading: false });
                    setTimeout(function () {
                        _this.props.history.push('/');
                    }, 1500);
                });
                return [2 /*return*/];
            });
        }); };
        _this.setValues = function (values) {
            _this.setState({ values: __assign(__assign({}, _this.state.values), values) });
        };
        _this.handleInputChanges = function (e) {
            var _a;
            e.preventDefault();
            _this.setValues((_a = {}, _a[e.currentTarget.id] = e.currentTarget.value, _a));
        };
        _this.state = { id: _this.props.match.params.id, customer: {}, values: [],
            loading: false, submitSuccess: false
        };
        return _this;
    }
    EditCustomer.prototype.componentDidMount = function () {
        var _this = this;
        axios_1["default"].get("http://localhost:5000/customers/".concat(this.state.id)).then(function (data) {
            _this.setState({ customer: data.data });
        });
    };
    EditCustomer.prototype.render = function () {
        var _this = this;
        var _a = this.state, submitSuccess = _a.submitSuccess, loading = _a.loading;
        return (<div className="App">
                {this.state.customer &&
                <div>
                        <h1> Customer List Management App</h1>
                        <p> Built with React.js and TypeScript </p>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit Customer </h2>
                                {submitSuccess && (<div className="alert alert-info" role="alert">
                                        Customer's details has been edited successfully </div>)}
                                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="first_name"> First Name </label>
                                        <input type="text" id="first_name" defaultValue={this.state.customer.first_name} onChange={function (e) { return _this.handleInputChanges(e); }} name="first_name" className="form-control" placeholder="Enter customer's first name"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="last_name"> Last Name </label>
                                        <input type="text" id="last_name" defaultValue={this.state.customer.last_name} onChange={function (e) { return _this.handleInputChanges(e); }} name="last_name" className="form-control" placeholder="Enter customer's last name"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="email"> Email </label>
                                        <input type="email" id="email" defaultValue={this.state.customer.email} onChange={function (e) { return _this.handleInputChanges(e); }} name="email" className="form-control" placeholder="Enter customer's email address"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="phone"> Phone </label>
                                        <input type="text" id="phone" defaultValue={this.state.customer.phone} onChange={function (e) { return _this.handleInputChanges(e); }} name="phone" className="form-control" placeholder="Enter customer's phone number"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="address"> Address </label>
                                        <input type="text" id="address" defaultValue={this.state.customer.address} onChange={function (e) { return _this.handleInputChanges(e); }} name="address" className="form-control" placeholder="Enter customer's address"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="description"> Description </label>
                                        <input type="text" id="description" defaultValue={this.state.customer.description} onChange={function (e) { return _this.handleInputChanges(e); }} name="description" className="form-control" placeholder="Enter Description"/>
                                    </div>
                                    <div className="form-group col-md-4 pull-right">
                                        <button className="btn btn-success" type="submit">
                                            Edit Customer </button>
                                        {loading &&
                        <span className="fa fa-circle-o-notch fa-spin"/>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>}
            </div>);
    };
    return EditCustomer;
}(React.Component));
exports["default"] = (0, react_router_dom_1.withRouter)(EditCustomer);
