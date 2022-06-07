import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditDevice.scss";
import UrlServer from "../../UrlServer";
const EditDevice = () => {
  const [deviceName, setdeviceName] = useState("");
  const [deviceId, setdeviceId] = useState("");
  const [apiData, setapiData] = useState([]);

  // const [submitArr, setsubmitArr] = useState({ name: "", id: "" });
  const submitData = () => {
    // setsubmitArr({ name: deviceName, id: deviceId });
    // toast(`${submitArr.name} and ${submitArr.id}`);
  };

  // useEffect(() => {
  //   axios
  //     .get(`${UrlServer}${deviceName}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setapiData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast(`error is ${err}`);
  //     });
  //   // console.log(submitArr.name, submitArr.id);
  //   // toast(`${submitArr.name} and ${submitArr.id}`);
  // }, [submitArr]);
  return (
    <>
      <div className="container-fluid p-0 mt-1">
        <div className="row gy-4">
          <div className="col-12 bg_white box_shadow_new rounded-5">
            <div className="edit_device_god">
              <div className="row">
                <div className="col-4 mx-auto">
                  <div className="input_wrapper">
                    <label
                      style={{ background: "#CFE2FF" }}
                      className="text-center  border-info mb-1 py-0 w-100 ms-1"
                      htmlFor="Device_name"
                    >
                      Enter Device Name
                    </label>
                    <input
                      className="border-primary my-1 border rounded text-center py-1"
                      type="text"
                      // placeholder=""
                      placeholder="Device Name"
                      value={deviceName}
                      onChange={(e) => setdeviceName(e.target.value)}
                      name=""
                      id="Device_name"
                    />
                    {/* <input
                        className="text-center"
                        type="text"
                        placeholder="Device_id"
                        value={deviceId}
                        onChange={(e) => setdeviceId(e.target.value)}
                        name=""
                        id=""
                      /> */}
                    <button
                      onClick={() => submitData()}
                      type="button"
                      className="btn_submit btn w-100 py-1 ms-1 btn-outline-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row g-0 text-center">
                    <div className="col">
                      <div className="show_data">
                        <div className="device_data_1 my-3">
                          <h5>Application Id</h5>
                          <h5>Device Description</h5>
                          <h5>Device EUI</h5>
                          <h5>Device Last Seen At</h5>
                          <h5>Device Name</h5>
                          <h5>Device Profile Name</h5>
                          <h5>Device Status Battery</h5>
                          <h5>Frame Counter Check</h5>
                          <h5>Is Disabled</h5>
                          <h5>Mac Version</h5>
                          <h5>Organization Name</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="show_data">
                        {apiData?.length !== 0 &&
                          apiData?.map((elem) => {
                            return (
                              <div className="device_data_2 my-3 text-nowrap">
                                <h5>
                                  {elem?.applicationId && elem?.applicationId}
                                  {elem?.applicationId === true && "true"}
                                  {elem?.applicationId === false && "-"}
                                  {elem?.applicationId === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.deviceDesc && elem?.deviceDesc}
                                  {elem?.deviceDesc === true && "true"}
                                  {elem?.deviceDesc === false && "-"}
                                  {elem?.deviceDesc === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.deviceEui && elem?.deviceEui}
                                  {elem?.deviceEui === true && "true"}
                                  {elem?.deviceEui === false && "-"}
                                  {elem?.deviceEui === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.deviceLastSeenAt &&
                                    elem?.deviceLastSeenAt}
                                  {elem?.deviceLastSeenAt === true && "true"}
                                  {elem?.deviceLastSeenAt === false && "-"}
                                  {elem?.deviceLastSeenAt === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.deviceName && elem?.deviceName}
                                  {elem?.deviceName === true && "true"}
                                  {elem?.deviceName === false && "-"}
                                  {elem?.deviceName === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.deviceProfileName &&
                                    elem?.deviceProfileName}
                                  {elem?.deviceProfileName === true && "true"}
                                  {elem?.deviceProfileName === false && "-"}
                                  {elem?.deviceProfileName === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.deviceStatusBattery &&
                                    elem?.deviceStatusBattery}
                                  {elem?.deviceStatusBattery === true && "true"}
                                  {elem?.deviceStatusBattery === false && "-"}
                                  {elem?.deviceStatusBattery === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.frameCounterCheck &&
                                    elem?.frameCounterCheck}
                                  {elem?.frameCounterCheck === true && "true"}
                                  {elem?.frameCounterCheck === false && "-"}
                                  {elem?.frameCounterCheck === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.isDisabled && elem?.isDisabled}
                                  {elem?.isDisabled === true && "true"}
                                  {elem?.isDisabled === false && "-"}
                                  {elem?.isDisabled === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.macVersion && elem?.macVersion}
                                  {elem?.macVersion === true && "true"}
                                  {elem?.macVersion === false && "-"}
                                  {elem?.macVersion === null && "-"}
                                </h5>
                                <h5>
                                  {elem?.organizationName &&
                                    elem?.organizationName}
                                  {elem?.organizationName === true && "true"}
                                  {elem?.organizationName === false && "-"}
                                  {elem?.organizationName === null && "-"}
                                </h5>
                              </div>
                            );
                          })}
                        {/* <div className="device_data_2 my-3">
                          <h5>applicationId</h5>
                          <h5>deviceDesc</h5>
                          <h5>deviceEui</h5>
                          <h5>deviceLastSeenAt</h5>
                          <h5>deviceName</h5>
                          <h5>deviceProfileName</h5>
                          <h5>deviceStatusBattery</h5>
                        </div> */}
                      </div>
                      {/* {apiData?.map((elem, ind) => {
                        return (
                          <div
                            key={elem.id}
                            className="title_wrapper ms-2 my-3 d-flex"
                          >
                            <h6 className="me-2 fw-bold">{ind + 1}.</h6>
                            <h5>{elem.title}</h5>
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditDevice;
