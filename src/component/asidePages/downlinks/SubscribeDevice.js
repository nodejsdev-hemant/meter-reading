import React, { useState } from "react";
import "./SubscribeDevices.scss";
const SubscribeDevice = () => {
  const [apidata, setapidata] = useState();
  return (
    <>
      <div className="container-fluid p-0 mt-1">
        <div className="row ">
          <div className="col-12 bg_white box_shadow_new rounded-5 py-1">
            <div className="subscribe_content_god">
              <div className="row">
                <div className="col-4 mx-auto">
                  <div className="input_wrapper w-100">
                    <label
                      style={{ background: "#CFE2FF" }}
                      className="text-center  border-info mb-1 py-0 w-100 ms-1"
                      htmlFor="Device_name"
                    >
                      Enter Device Name
                    </label>
                    <input
                      className="border-primary my-1 border rounded text-center py-1 w-100"
                      type="text"
                      // placeholder=""
                      placeholder="Device Name"
                      // value={deviceName}
                      // onChange={(e) => setdeviceName(e.target.value)}
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
                      // onClick={() => submitData()}
                      type="button"
                      className="btn_submit btn w-100 py-1 ms-1 btn-outline-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr className="thead-dark text-center text-nowrap">
                        <th>battery</th>
                        <th>Battery</th>
                        {/* <th>CRC Status</th>
                    <th>Pulse Count </th>
                    <th>Status Data</th>
                    <th>Status Magnet Temper</th>
                    <th>Status Switch Temper</th>
                    <th>Status Voltage level</th>
                    <th>Uplink Type</th>
                    <th>Confirmed Uplink</th>
                    <th>TX Info Frequency</th>
                    <th>Dr</th>
                    <th>Date Received</th>
                    <th>Meter</th>
                    <th>Device</th>
                    <th>Customer</th> */}
                        {/* <div className="border_bottom_thead"></div> */}
                      </tr>
                    </thead>
                    <tbody className="text-center text-nowrap">
                      {apidata &&
                        apidata.map((elem, ind) => {
                          return (
                            <tr key={elem.id}>
                              <td>
                                {/* Id. using index */}
                                {ind + 1}
                              </td>
                              <td>
                                {/* Battery */}
                                {elem?.battery && elem?.battery}
                                {elem?.battery === true && "true"}
                                {elem?.battery === false && "-"}
                                {elem?.battery === null && "-"}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeDevice;
