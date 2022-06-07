import axios from "axios";
import React, { useEffect, useState } from "react";
import "./GetDevice.scss";
import UrlServer from "../../UrlServer";
const GetDevice = () => {
  const [input, setinput] = useState("");
  const [apiData, setapiData] = useState([]);
  // console.log(apiData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(apiData);
    getApi();
  };
  // --------------------------------------
  const getApi = async () => {
    await axios.get(`${UrlServer}get_device/${input}`).then((res) => {
      setapiData([res.data.data.data]);
      console.log(res.data.data.data);
    });
  };
  // useEffect(() => {
  //   getApi();
  // }, []);

  return (
    <>
      <div className="container-fluid p-0 mt-1">
        <div className="row gy-4">
          <div className="col-12 bg_white box_shadow_new rounded-5">
            <div className="get_device_wrapper">
              <div className="row">
                <div className="col-4 mx-auto">
                  <form className=" mx-auto" onSubmit={(e) => handleSubmit(e)}>
                    <label
                      style={{ background: "#CFE2FF" }}
                      className="text-center  border-info mb-2 py-0 bg- text-"
                      htmlFor="deviceid"
                    >
                      Enter Device ID
                    </label>
                    <input
                      id="deviceid"
                      className="rounded-3 border-primary"
                      type="text"
                      placeholder="Device Id"
                      value={input}
                      onChange={(e) => setinput(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-primary mt-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-12">
                  <div className="given_data my-5">
                    <div className="row g-0 text-center border">
                      {apiData?.length !== 0 && (
                        <div className="col">
                          <div className="device_data_1 text-nowrap">
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
                    {/* <table>
                  <thead>
                    <tr className="text-nowrap text-center">
                      <th>applicationId</th>
                      <th>deviceDesc</th>
                      <th>deviceEui</th>
                      <th>deviceLastSeenAt</th>
                      <th>deviceName</th>
                      <th>deviceProfileName</th>
                      <th>deviceStatusBattery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData?.map((elem, ind) => {
                      console.log(elem.applicationId);
                      return (
                        <tr className="text-nowrap text-center">
                          <td>{elem.applicationId}</td>
                          <td>{elem.deviceDesc}</td>
                          <td>{elem.deviceEui}</td>
                          <td>{elem.deviceLastSeenAt}</td>
                          <td>{elem.deviceName}</td>
                          <td>{elem.deviceProfileName}</td>
                          <td>{elem.deviceStatusBattery}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table> */}
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

export default GetDevice;
