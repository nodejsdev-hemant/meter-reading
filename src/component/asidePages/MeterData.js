import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataCommonCss.scss";
import UrlServer from "../UrlServer";
const MeterData = () => {
  const [apidata, setapidata] = useState(null);
  const axiosGet = async () => {
    await axios
      .get(`${UrlServer}meter-data/`)
      .then((res) => {
        setapidata(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axiosGet();
  }, []);
  return (
    <>
      <section className="data_show">
        <div className="container-fluid p-0">
          <div className="row gy-4">
            <div className="col-12 bg_white box_shadow rounded-5">
              <div className="text-center">
                <h4 className="fw-bold my-3 mx-auto">Meter Data</h4>
              </div>
            </div>
            <div className="col-12 bg_white box_shadow_new rounded-5 py-4">
              <div className="table-responsive rounded-5 ">
                <table className="table">
                  <thead>
                    <tr className="thead-dark text-center text-nowrap">
                      <th>Id.</th>
                      <th>Battery</th>
                      <th>CRC Status</th>
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
                      <th>Customer</th>
                      <div className="border_bottom_thead"></div>
                    </tr>
                  </thead>
                  <tbody className="text-center text-nowrap">
                    {apidata ? (
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
                            <td>
                              {/* CRC Status */}
                              {elem?.crc_status && elem?.crc_status}
                              {elem?.crc_status === true && "true"}
                              {elem?.crc_status === false && "-"}
                              {elem?.crc_status === null && "-"}
                            </td>
                            <td>
                              {/* pulse count */}
                              {elem?.Pulse_count && elem?.Pulse_count}
                              {elem?.Pulse_count === true && "true"}
                              {elem?.Pulse_count === false && "-"}
                              {elem?.Pulse_count === null && "-"}
                            </td>
                            <td>
                              {/* status_data  */}
                              {elem?.status_data && elem?.status_data}
                              {elem?.status_data === true && "true"}
                              {elem?.status_data === false && "-"}
                              {elem?.status_data === null && "-"}
                            </td>
                            <td>
                              {/* status_magnet_temper  */}
                              {elem?.status_magnet_temper &&
                                elem?.status_magnet_temper}
                              {elem?.status_magnet_temper === true && "true"}
                              {elem?.status_magnet_temper === false && "-"}
                              {elem?.status_magnet_temper === null && "-"}
                            </td>
                            <td>
                              {/* status_switch_temper  */}
                              {elem?.status_switch_temper &&
                                elem?.status_switch_temper}
                              {elem?.status_switch_temper === true && "true"}
                              {elem?.status_switch_temper === false && "-"}
                              {elem?.status_switch_temper === null && "-"}
                            </td>
                            <td>
                              {/* status_voltage_level  */}
                              {elem?.status_voltage_level &&
                                elem?.status_voltage_level}
                              {elem?.status_voltage_level === true && "true"}
                              {elem?.status_voltage_level === false && "-"}
                              {elem?.status_voltage_level === null && "-"}
                            </td>
                            <td>
                              {/* uplink_type  */}
                              {elem?.uplink_type && elem?.uplink_type}
                              {elem?.uplink_type === true && "true"}
                              {elem?.uplink_type === false && "-"}
                              {elem?.uplink_type === null && "-"}
                            </td>
                            <td>
                              {/* confirmed_uplink  */}
                              {elem?.confirmed_uplink && elem?.confirmed_uplink}
                              {elem?.confirmed_uplink === true && "true"}
                              {elem?.confirmed_uplink === false && "-"}
                              {elem?.confirmed_uplink === null && "-"}
                            </td>
                            <td>
                              {/* tx_info_frequency  */}
                              {elem?.tx_info_frequency &&
                                elem?.tx_info_frequency}
                              {elem?.tx_info_frequency === true && "true"}
                              {elem?.tx_info_frequency === false && "-"}
                              {elem?.tx_info_frequency === null && "-"}
                            </td>
                            <td>
                              {/* dr  */}
                              {elem?.dr && elem?.dr}
                              {elem?.dr === true && "true"}
                              {elem?.dr === false && "-"}
                              {elem?.dr === null && "-"}
                            </td>
                            <td>
                              {/* date_received  */}
                              {elem.date_received && elem.date_received}
                              {elem.date_received === true && "true"}
                              {elem.date_received === false && "-"}
                              {elem.date_received === null && "-"}
                            </td>
                            <td>
                              {/* meter  */}
                              {elem.meter && elem.meter}
                              {elem.meter === true && "true"}
                              {elem.meter === false && "-"}
                              {elem.meter === null && "-"}
                            </td>
                            <td>
                              {/* device  */}
                              {elem.device && elem.device}
                              {elem.device === true && "true"}
                              {elem.device === false && "-"}
                              {elem.device === null && "-"}
                            </td>
                            <td>
                              {/* customer  */}
                              {elem.customer && elem.customer}
                              {elem.customer === true && "true"}
                              {elem.customer === false && "-"}
                              {elem.customer === null && "-"}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <div className="loader_animation">
                        <div className="spinner-border text-info" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeterData;
