import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UrlServer from "../../UrlServer";
import "./AddDevice.scss";
const AddDevice = () => {
  const [deviceName, setdeviceName] = useState("");
  const [deviceId, setdeviceId] = useState("");
  const [apiData, setapiData] = useState([]);

  const [submitArr, setsubmitArr] = useState({ name: "", id: "" });
  const submitData = () => {
    axios({
      method: "post",
      url: `${UrlServer}add_device/`,
      data: body,
    })
      .then((res) => {
        console.log(res.data);
        setapiData(res.data);
        toast.success(`Device Successfully added!`);
      })
      .catch((err) => {
        toast.warn(`${err}`);
      });
    // setsubmitArr({ name: deviceName, id: deviceId });
    // toast(`${submitArr.name} and ${submitArr.id}`);
    // setdeviceName("");
    // setdeviceId("");
  };

  const body = {
    device_name: `${deviceName}`,
    device_id: `${deviceId}`,
    applicationId: "XLJHSIUW",
    deviceProfileName: "device_profile_1_0_3",
  };

  // useEffect(() => {
  // axios({
  //   method: "post",
  //   url: `${UrlServer}/add_device/`,
  //   data: body,
  // });
  // .then((res) => {
  //   console.log(res.data);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // axios
  //   .get(`${UrlServer}/`)
  //   .then((res) => {
  //     console.log(res.data);
  //     setapiData(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     toast(`error is ${err}`);
  //   });
  // console.log(submitArr.name, submitArr.id);
  // toast(`${submitArr.name} and ${submitArr.id}`);
  // }, [submitArr]);

  return (
    <>
      <div className="container-fluid p-0 mt-1">
        <div className="row gy-4">
          <div className="col-12 bg_white box_shadow_new rounded-5">
            <div className="add_device_god">
              <div className="row">
                <div className="col-12 ms-auto">
                  <div className="row">
                    <div className="col-4 mx-auto">
                      <div className="input_wrapper text-center mt-3">
                        <label
                          style={{ background: "#CFE2FF" }}
                          className="text-center  border-info mb-1 py-0 w-100 "
                          htmlFor="device_name"
                        >
                          Enter Device Name
                        </label>
                        <input
                          className="border-primary my-1 border rounded text-center py-1"
                          type="text"
                          placeholder="Device Name"
                          value={deviceName}
                          onChange={(e) => setdeviceName(e.target.value)}
                          name=""
                          id="device_name"
                        />
                        <label
                          style={{ background: "#CFE2FF" }}
                          className="text-center  border-info mb-1 py-0 w-100 "
                          htmlFor="Device_id"
                        >
                          Enter Device Id
                        </label>
                        <input
                          className="border-primary my-1 border rounded text-center py-1"
                          type="text"
                          placeholder="Device Id"
                          value={deviceId}
                          onChange={(e) => setdeviceId(e.target.value)}
                          name=""
                          id="Device_id"
                        />
                        <button
                          onClick={() => submitData()}
                          type="button"
                          className="btn_submit btn btn-outline-primary mt-2 w-100 py-1"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="show_data">
                    <div className="row g-0 text-center">
                      {apiData?.length !== 0 && (
                        <div className="col">
                          <div className="device_data_1 my-3 text-nowrap">
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
                      )}
                      <div className="col">
                        {apiData?.map((elem) => {
                          return (
                            <div className="device_data_2 text-nowrap">
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
                        {/* {apiData?.map((elem, ind) => {
                            return (
                              <div className="device_data">
                                <h5>{elem.applicationId}</h5>
                                <h5>{elem.deviceDesc}</h5>
                                <h5>{elem.deviceEui}</h5>
                                <h5>{elem.deviceLastSeenAt}</h5>
                                <h5>{elem.deviceName}</h5>
                                <h5>{elem.deviceProfileName}</h5>
                                <h5>{elem.deviceStatusBattery}</h5>
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
      </div>
      <ToastContainer />
    </>
  );
};

export default AddDevice;
