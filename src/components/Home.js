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
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { customers: [] };
        return _this;
    }
    Home.prototype.componentDidMount = function () {
        var _this = this;
        axios_1["default"].get("http://localhost:5000/customers").then(function (data) {
            _this.setState({ customers: data.data });
        });
    };
    Home.prototype.deleteCustomer = function (id) {
        var _this = this;
        axios_1["default"]["delete"]("http://localhost:5000/customers/".concat(id)).then(function (data) {
            var index = _this.state.customers.findIndex(function (customer) { return customer.id === id; });
            _this.state.customers.splice(index, 1);
            _this.props.history.push('/');
        });
    };
    Home.prototype.render = function () {
        var _this = this;
        var customers = this.state.customers;
        return (<div>
                {customers.length === 0 && (<div className="text-center">
                        <h2>No customer found at the moment</h2>
                    </div>)}
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers && customers.map(function (customer) {
                return <tr key={customer.id}>
                                        <td>{customer.first_name}</td>
                                        <td>{customer.last_name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.description}</td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <react_router_dom_1.Link to={"edit/".concat(customer.id)} className="btn btn-sm btn-outline-secondary">Edit Customer </react_router_dom_1.Link>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={function () { return _this.deleteCustomer(customer.id); }}>Delete Customer</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>;
            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>);
    };
    return Home;
}(React.Component));
exports["default"] = Home;
