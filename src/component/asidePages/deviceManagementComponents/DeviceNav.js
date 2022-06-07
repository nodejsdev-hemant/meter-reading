import React from "react";
import { NavLink } from "react-router-dom";

const DeviceNav = () => {
  return (
    <>
      <section className="data_show">
        <div className="container-fluid p-0">
          <div className="row gy-4">
            <div className="col-12 bg_white box_shadow rounded-5">
              <div className="text-center">
                <h4 className="fw-bold my-3 mx-auto">Device Management</h4>
              </div>
            </div>
            <div className="col-12 bg_white box_shadow_new rounded-5 py-3">
              <div className="rounded-5 ">
                <div className="row">
                  <div className="col">
                    <div className="device_column_1">
                      <NavLink
                        exact
                        activeClassName="selected"
                        className="link_component"
                        to="/DeviceManagement"
                      >
                        <h6 className="fw-bold">Get device</h6>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col">
                    <div className="device_column_2">
                      <NavLink
                        exact
                        activeClassName="selected"
                        className="link_component"
                        to="/DeviceManagement/get-all-devices"
                      >
                        <h6 className="fw-bold">Get all devices</h6>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col">
                    <div className="device_column_3">
                      <NavLink
                        exact
                        activeClassName="selected"
                        className="link_component"
                        to="/DeviceManagement/add-devices"
                      >
                        <h6 className="fw-bold">Add device</h6>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col">
                    <NavLink
                      exact
                      activeClassName="selected"
                      className="link_component"
                      to="/DeviceManagement/edit-devices"
                    >
                      <h6 className="fw-bold">Edit device</h6>
                    </NavLink>
                  </div>
                  <div className="col">
                    <NavLink
                      exact
                      activeClassName="selected"
                      className="link_component"
                      to="/DeviceManagement/delete-devices"
                    >
                      <h6 className="fw-bold">Delete device</h6>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceNav;
