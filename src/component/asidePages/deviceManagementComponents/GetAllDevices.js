import axios from "axios";
import React, { useEffect, useState } from "react";
import UrlServer from "../../UrlServer";
import "./GetAllDevices.scss";
const GetAllDevices = () => {
  const [input, setinput] = useState(10);
  const [offset, setoffset] = useState(1);
  const [apidata, setapidata] = useState([]);
  const [submitData, setsubmitData] = useState(5);

  // const addDeviceCall = async() ?

  useEffect(() => {
    axios
      .get(`${UrlServer}devices/?limit=${input}&offset=${offset}`)
      .then((res) => {
        console.log(res.data.data);
        setapidata(res.data.data);
      });
  }, [submitData]);

  console.log(apidata);
  return (
    <>
      <div className="container-fluid p-0 mt-1">
        <section className="">
          <div className="row gy-4">
            <div className="col-12 bg_white box_shadow_new rounded-5">
              <div className="get_all_device_god">
                <div className="row">
                  <div className="col-12 ms-auto">
                    <div className="row">
                      <div className="col-4 mx-auto">
                        <div className="input_wrapper">
                          <label
                            style={{ background: "#CFE2FF" }}
                            className="text-center  border-info mb-1 py-0 "
                            htmlFor="Limit"
                          >
                            Enter Device Limit
                          </label>
                          <input
                            className="border-primary my-1 border rounded"
                            type="text"
                            placeholder=" Limit"
                            value={input}
                            onChange={(e) => setinput(e.target.value)}
                            name=""
                            id="Limit"
                          />
                          <label
                            style={{ background: "#CFE2FF" }}
                            className="text-center  border-info mb-1 py-0 "
                            htmlFor="Limit"
                          >
                            Enter Offset
                          </label>
                          <input
                            className="border-primary mt-0 border rounded"
                            type="text"
                            placeholder="Offset"
                            value={offset}
                            onChange={(e) => setoffset(e.target.value)}
                            name=""
                            id="offset"
                          />
                          <button
                            onClick={() => setsubmitData(input)}
                            type="button"
                            className="btn_submit mt-2 btn btn-outline-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 mx-3">
                    <div className="show_data rounded-5 ">
                      <table className="table rounded-5 ">
                        <thead className="rounded-5 ">
                          <tr className="thead-dark text-center text-nowrap rounded-5 ">
                            <th>applicationId</th>
                            <th>deviceDesc</th>
                            <th>deviceEui</th>
                            <th>deviceLastSeenAt</th>
                            <th>deviceName</th>
                            <th>deviceProfileName</th>
                            <th>deviceStatusBattery</th>
                            <div className="border_bottom_thead"></div>
                          </tr>
                        </thead>
                        <tbody className="text-center text-nowrap">
                          {apidata && apidata ? (
                            apidata.map((elem, ind) => {
                              return (
                                <tr
                                  key={elem.id}
                                  className="text-nowrap text-center"
                                >
                                  <td>{elem.applicationId}</td>
                                  <td>{elem.deviceDesc}</td>
                                  <td>{elem.deviceEui}</td>
                                  <td>{elem.deviceLastSeenAt}</td>
                                  <td>{elem.deviceName}</td>
                                  <td>{elem.deviceProfileName}</td>
                                  <td>{elem.deviceStatusBattery}</td>
                                </tr>
                              );
                            })
                          ) : (
                            <div className="loader_animation">
                              <div
                                className="spinner-border text-info"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </div>
                          )}
                        </tbody>
                      </table>
                      {/* -----------old table---------- */}
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
                          {apidata?.map((elem, ind) => {
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
        </section>
      </div>
    </>
  );
};

export default GetAllDevices;
