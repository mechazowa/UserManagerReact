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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var React = require("react");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var Create = /** @class */ (function (_super) {
    __extends(Create, _super);
    function Create(props) {
        var _this = _super.call(this, props) || this;
        _this.processFormSubmission = function (e) {
            e.preventDefault();
            _this.setState({ loading: true });
            var formData = {
                first_name: _this.state.first_name,
                last_name: _this.state.last_name,
                email: _this.state.email,
                phone: _this.state.phone,
                address: _this.state.address,
                description: _this.state.description
            };
            _this.setState({ submitSuccess: true, values: __spreadArray(__spreadArray([], _this.state.values, true), [formData], false), loading: false });
            axios_1["default"].post("http://localhost:5000/customers", formData).then(function (data) { return [
                setTimeout(function () {
                    _this.props.history.push('/');
                }, 1500)
            ]; });
        };
        _this.handleInputChanges = function (e) {
            var _a;
            e.preventDefault();
            _this.setState((_a = {},
                _a[e.currentTarget.name] = e.currentTarget.value,
                _a));
        };
        _this.state = { first_name: '', last_name: '', email: '', phone: '',
            address: '', description: '', values: [], loading: false, submitSuccess: false
        };
        return _this;
    }
    Create.prototype.render = function () {
        var _this = this;
        var _a = this.state, submitSuccess = _a.submitSuccess, loading = _a.loading;
        return (<div>
              <div className={"col-md-12 form-wrapper"}>
                  <h2> Create Post </h2>
                  {!submitSuccess && (<div className="alert alert-info" role="alert">
                          Fill the form below to create a new post
                  </div>)}
                  {submitSuccess && (<div className="alert alert-info" role="alert">
                          The form was successfully submitted!
                          </div>)}
                  <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                      <div className="form-group col-md-12">
                          <label htmlFor="first_name"> First Name </label>
                          <input type="text" id="first_name" onChange={function (e) { return _this.handleInputChanges(e); }} name="first_name" className="form-control" placeholder="Enter customer's first name"/>
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="last_name"> Last Name </label>
                          <input type="text" id="last_name" onChange={function (e) { return _this.handleInputChanges(e); }} name="last_name" className="form-control" placeholder="Enter customer's last name"/>
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="email"> Email </label>
                          <input type="email" id="email" onChange={function (e) { return _this.handleInputChanges(e); }} name="email" className="form-control" placeholder="Enter customer's email address"/>
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="phone"> Phone </label>
                          <input type="text" id="phone" onChange={function (e) { return _this.handleInputChanges(e); }} name="phone" className="form-control" placeholder="Enter customer's phone number"/>
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="address"> Address </label>
                          <input type="text" id="address" onChange={function (e) { return _this.handleInputChanges(e); }} name="address" className="form-control" placeholder="Enter customer's address"/>
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="description"> Description </label>
                          <input type="text" id="description" onChange={function (e) { return _this.handleInputChanges(e); }} name="description" className="form-control" placeholder="Enter Description"/>
                      </div>
                      <div className="form-group col-md-4 pull-right">
                          <button className="btn btn-success" type="submit">
                              Create Customer
                          </button>
                          {loading &&
                <span className="fa fa-circle-o-notch fa-spin"/>}
                      </div>
                  </form>
              </div>
          </div>);
    };
    return Create;
}(React.Component));
exports["default"] = (0, react_router_dom_1.withRouter)(Create);
