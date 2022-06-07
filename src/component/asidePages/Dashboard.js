import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataCommonCss.scss";
import UrlServer from "../UrlServer";
import BarChart from "../BarChart";
import faker from "faker";
const Dashboard = () => {
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    axios.get(`${UrlServer}dashboard/`).then((res) => {
      console.log(res.data.results);
      setapidata(res.data.results);
    });
  }, []);
  return (
    <>
      <section className="data_show">
        <div className="container-fluid p-0">
          <div className="row gy-4">
            <div className="col-12 bg_white box_shadow rounded-5">
              <div className="text-center">
                <h4 className="fw-bold my-3 mx-auto">Dashboard</h4>
              </div>
            </div>
            <div className="col-12">
              <div className="row gx-3 gy-2 char_heading_wrapper">
                <div className="col-12 col-sm-4 ">
                  <div className="chart_data bg_white box_shadow rounded-5">
                    <h6 className="chart_data_heading">Live Customer Report</h6>
                    <h6 className="chart_data_value">
                      {faker.datatype.number({ min: 0, max: 1000 })}
                    </h6>
                  </div>
                </div>
                <div className="col-12 col-sm-4 ">
                  <div className="chart_data bg_white box_shadow rounded-5">
                    <h6 className="chart_data_heading">Consumed Units (MTD)</h6>
                    <h6 className="chart_data_value">
                      {faker.datatype.number({ min: 0, max: 1000 })}
                    </h6>
                  </div>
                </div>
                <div className="col-12 col-sm-4 ">
                  <div className="chart_data bg_white box_shadow rounded-5">
                    <h6 className="chart_data_heading">Meter Issues</h6>
                    <h6 className="chart_data_value">
                      {faker.datatype.number({ min: 0, max: 1000 })}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 bg_white box_shadow rounded-5">
              <BarChart />
            </div>
            <div className="col-12 bg_white box_shadow_new rounded-5 py-4">
              <div className="table-responsive rounded-5 ">
                <table className="table">
                  <thead>
                    <tr className="thead-dark text-center text-nowrap">
                      <th>Id.</th>
                      <th>Current Meter Reading</th>
                      <th>Consumer number</th>
                      <th>Meter number</th>
                      <th>Date Received</th>
                      <th>Consumer name</th>
                      <th>Address </th>
                      <th>Last bill date</th>
                      <th>Last bill meter reading</th>
                      <th>Units consumed from last bill till date</th>
                      <div className="border_bottom_thead"></div>
                    </tr>
                  </thead>
                  <tbody className="text-center text-nowrap">
                    {apidata ? (
                      apidata.map((elem, ind) => {
                        return (
                          <tr>
                            <td>
                              {/* Id. using index */}
                              {ind + 1}
                            </td>
                            <td>
                              {/* Current Meter Reading */}
                              {elem?.meter_reading && elem?.meter_reading}
                              {elem?.meter_reading === true && "true"}
                              {elem?.meter_reading === false && "-"}
                              {elem?.meter_reading === null && "-"}
                              {elem?.meter_reading?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* Consumer number */}
                              {elem?.customer?.consumer_no &&
                                elem?.customer?.consumer_no}
                              {elem?.customer?.consumer_no === true && "true"}
                              {elem?.customer?.consumer_no === false && "-"}
                              {elem?.customer?.consumer_no === null && "-"}
                              {elem?.customer?.consumer_no?.length === 0 && "-"}
                              {elem?.customer === null && "-"}
                            </td>
                            <td>
                              {/* Meter number */}
                              {elem?.meter_number && elem?.meter_number}
                              {elem?.meter_number === true && "true"}
                              {elem?.meter_number === false && "-"}
                              {elem?.meter_number === null && "-"}
                              {elem?.meter_number?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* Date Recevied */}
                              {elem?.date_received &&
                                elem?.date_received
                                  ?.slice(0, 10)
                                  .replace("T", "")}
                              {elem?.date_received === true && "true"}
                              {elem?.date_received === false && "-"}
                              {elem?.date_received === null && "-"}
                              {elem?.date_received?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* Consumer name	 */}
                              {"-"}
                            </td>
                            <td>
                              {/* Address */}
                              {elem?.customer?.address &&
                                elem?.customer?.address}
                              {elem?.customer?.address === true && "true"}
                              {elem?.customer?.address === false && "-"}
                              {elem?.customer?.address === null && "-"}
                              {elem?.customer?.address?.length === 0 && "-"}
                              {elem?.customer === null && "-"}
                            </td>
                            <td>
                              {/* Last bill date*/}
                              {elem?.customer?.Last_bill_date &&
                                elem?.customer?.Last_bill_date}
                              {elem?.customer?.Last_bill_date === true &&
                                "true"}
                              {elem?.customer?.Last_bill_date === false && "-"}
                              {elem?.customer?.Last_bill_date === null && "-"}
                              {elem?.customer?.Last_bill_date?.length === 0 &&
                                "-"}
                              {elem?.customer === null && "-"}
                            </td>
                            <td>
                              {/* Last bill meter reading*/}
                              {elem?.customer?.Last_bill_meter &&
                                elem?.customer?.Last_bill_meter}
                              {elem?.customer?.Last_bill_meter === true &&
                                "true"}
                              {elem?.customer?.Last_bill_meter === false && "-"}
                              {elem?.customer?.Last_bill_meter === null && "-"}
                              {elem?.customer?.Last_bill_meter?.length === 0 &&
                                "-"}
                              {elem?.customer === null && "-"}
                            </td>
                            <td>
                              {/* Units consumed from last bill till date*/}
                              {/* {elem?.customer?.device_uid && elem?.customer?.device_uid}
                    {elem?.customer?.device_uid === true && "true"}
                    {elem?.customer?.device_uid === false && "-"}
                    {elem?.customer?.device_uid === null && "-"}
                    {elem?.customer?.device_uid?.length === 0 && "-"} */}
                              {"-"}
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

export default Dashboard;
