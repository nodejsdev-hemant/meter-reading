import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Aside from "./component/Aside";
import Dashboard from "./component/asidePages/Dashboard";
import MeterData from "./component/asidePages/MeterData";
import Customer from "./component/asidePages/Customer";
import DeviceNav from "./component/asidePages/deviceManagementComponents/DeviceNav";
import GetDevice from "./component/asidePages/deviceManagementComponents/GetDevice";
import GetAllDevices from "./component/asidePages/deviceManagementComponents/GetAllDevices";
import AddDevice from "./component/asidePages/deviceManagementComponents/AddDevice";
import EditDevice from "./component/asidePages/deviceManagementComponents/EditDevice";
import DeleteDevice from "./component/asidePages/deviceManagementComponents/DeleteDevice";
import NavDownlink from "./component/asidePages/downlinks/NavDownlink";
import SendDownlinks from "./component/asidePages/downlinks/SendDownlinks";
import SubscribeDevice from "./component/asidePages/downlinks/SubscribeDevice";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="container-fluid mt-4">
              <div className="row gy-5">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <Dashboard />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/MeterData">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12  col-sm-3  mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <MeterData />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/CustomerData">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3  mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <Customer />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/CustomerReport">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  {/* <Customer /> */}
                </div>
              </div>
            </div>
          </Route>
          {/* ---------------device management start------------------------ */}
          {/* Default page with GetDevice start */}
          <Route exact path="/DeviceManagement/">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <DeviceNav />
                  <GetDevice />
                </div>
              </div>
            </div>
          </Route>
          {/* Default page with GetDevice end */}

          {/* get all devices start */}
          <Route exact path="/DeviceManagement/get-all-devices">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <DeviceNav />
                  <GetAllDevices />
                </div>
              </div>
            </div>
          </Route>
          {/* get all devices end */}
          {/*  Add devices start */}
          <Route exact path="/DeviceManagement/add-devices">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <DeviceNav />
                  <AddDevice />
                </div>
              </div>
            </div>
          </Route>
          {/*  Add devices end */}
          {/* Edit devices start */}
          <Route exact path="/DeviceManagement/edit-devices">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <DeviceNav />
                  <EditDevice />
                </div>
              </div>
            </div>
          </Route>
          {/* Edit devices end */}
          {/* Delete device start */}
          <Route exact path="/DeviceManagement/delete-devices">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <DeviceNav />
                  <DeleteDevice />
                </div>
              </div>
            </div>
          </Route>
          {/* Delete device end */}

          {/* ---------------device management end------------------------ */}

          {/* downlinks------------------------------ */}
          <Route exact path="/DeviceDownlinks">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <NavDownlink />
                  <SendDownlinks />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/DeviceDownlinks/get-device-download">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <NavDownlink />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/DeviceDownlinks/delete-downlinks">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <NavDownlink />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/DeviceDownlinks/subsribe-topics">
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 col-sm-3 mx-auto ">
                  <Aside />
                </div>
                <div className="col-12 col-sm-8 mx-auto">
                  <NavDownlink />
                  <SubscribeDevice />
                </div>
              </div>
            </div>
          </Route>
          {/* downlinks------------------------------ */}
        </Switch>
      </Router>
    </>
  );
};
export default App;
