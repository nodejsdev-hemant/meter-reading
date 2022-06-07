import React from "react";
import { NavLink } from "react-router-dom";

const DeviceDownlinks = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row gy-4">
          <div className="col-12 bg_white box_shadow rounded-5">
            <div className="text-center">
              <h4 className="fw-bold my-3 mx-auto">Device Downlinks</h4>
            </div>
          </div>
          <div className="col-12 bg_white box_shadow_new rounded-5 py-3">
            <div className="rounded-5 text-center">
              <div className="row">
                <div className="col">
                  <div className="device_column_1">
                    <NavLink
                      exact
                      activeClassName="selected"
                      className="link_component"
                      to="/DeviceDownlinks"
                    >
                      <h6 className="fw-bold">Send downlink </h6>
                    </NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="device_column_2">
                    <NavLink
                      exact
                      activeClassName="selected"
                      className="link_component"
                      to="/DeviceDownlinks/get-device-download"
                    >
                      <h6 className="fw-bold">Get Device Downlinks</h6>
                    </NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="device_column_3">
                    <NavLink
                      exact
                      activeClassName="selected"
                      className="link_component"
                      to="/DeviceDownlinks/delete-downlinks"
                    >
                      <h6 className="fw-bold">Delete Downlinks </h6>
                    </NavLink>
                  </div>
                </div>
                <div className="col">
                  <div className="device_column_3">
                    <NavLink
                      exact
                      activeClassName="selected"
                      className="link_component"
                      to="/DeviceDownlinks/subsribe-topics"
                    >
                      <h6 className="fw-bold">Subscribe Devices </h6>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceDownlinks;
