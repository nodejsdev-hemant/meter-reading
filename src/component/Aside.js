import React from "react";
import { NavLink } from "react-router-dom";
import "./Aside.scss";

const Aside = () => {
  return (
    <>
      <aside className="bg_white box_shadow_new rounded-5">
        <div className="container-fluid ">
          <div className="aside_wrapper">
            <NavLink
              exact
              activeClassName="selected"
              to="/"
              className="link_component"
            >
              <h3>Dashboard</h3>
            </NavLink>

            <NavLink
              exact
              activeClassName="selected"
              to="/CustomerData"
              className="link_component"
            >
              <h3>Customer Data</h3>
            </NavLink>

            <NavLink
              exact
              activeClassName="selected"
              to="/MeterData"
              className="link_component"
            >
              <h3>Meter Data</h3>
            </NavLink>

            <NavLink
              exact
              activeClassName="selected"
              to="/DeviceManagement"
              className="link_component"
            >
              <h3>Device Management</h3>
            </NavLink>

            <NavLink
              exact
              activeClassName="selected"
              to="/DeviceDownlinks"
              className="link_component"
            >
              <h3>Device downlinks </h3>
            </NavLink>

            <NavLink
              exact
              activeClassName="selected"
              to="/CustomerReport"
              className="link_component"
            >
              <h3>Customer Report</h3>
            </NavLink>

            {/* <NavLink exact activeClassName="selected"  to="" className="link_component"> */}
            <h3>Manage Users</h3>
            {/* </NavLink > */}
            {/* <NavLink exact activeClassName="selected"  to="" className="link_component"> */}
            <h3>Contact Us</h3>
            {/* </NavLink > */}
            {/* <NavLink exact activeClassName="selected"  to="" className="link_component"> */}
            <h3>Logout</h3>
            {/* </NavLink > */}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
