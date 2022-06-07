import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataCommonCss.scss";
import UrlServer from "../UrlServer";
const Customer = () => {
  const [apidata, setapidata] = useState([]);
  const axiosGet = async () => {
    await axios
      .get(`${UrlServer}customer/`)
      .then((res) => {
        setapidata(res.data);
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
                <h4 className="fw-bold my-3 mx-auto">Customer Data</h4>
              </div>
            </div>
            <div className="col-12 bg_white box_shadow_new rounded-5 py-4">
              <div className="table-responsive rounded-5 ">
                <table className="table">
                  <thead>
                    <tr className="thead-dark text-center text-nowrap">
                      <th>Id.</th>
                      <th>Meter Data</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Address</th>
                      <th>Contact No.</th>
                      <th>Meter No.</th>
                      <th>Consumer No.</th>
                      <th>Device UID</th>
                      <th>Range from Surya Palace</th>
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
                              {/* meter_data */}
                              {elem?.meter_data && elem?.meter_data}
                              {elem?.meter_data === true && "true"}
                              {elem?.meter_data === false && "-"}
                              {elem?.meter_data === null && "-"}
                              {elem?.meter_data?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* name */}
                              {elem?.name && elem?.name}
                              {elem?.name === true && "true"}
                              {elem?.name === false && "-"}
                              {elem?.name === null && "-"}
                              {elem?.name?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* city */}
                              {elem?.city && elem?.city}
                              {elem?.city === true && "true"}
                              {elem?.city === false && "-"}
                              {elem?.city === null && "-"}
                              {elem?.city?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* address */}
                              {elem?.address && elem?.address}
                              {elem?.address === true && "true"}
                              {elem?.address === false && "-"}
                              {elem?.address === null && "-"}
                              {elem?.address?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* contact_no */}
                              {elem?.contact_no && elem?.contact_no}
                              {elem?.contact_no === true && "true"}
                              {elem?.contact_no === false && "-"}
                              {elem?.contact_no === null && "-"}
                              {elem?.contact_no?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* meter_number */}
                              {elem?.meter_number && elem?.meter_number}
                              {elem?.meter_number === true && "true"}
                              {elem?.meter_number === false && "-"}
                              {elem?.meter_number === null && "-"}
                              {elem?.meter_number?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* consumer_no */}
                              {elem?.consumer_no && elem?.consumer_no}
                              {elem?.consumer_no === true && "true"}
                              {elem?.consumer_no === false && "-"}
                              {elem?.consumer_no === null && "-"}
                              {elem?.consumer_no?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* device_uid */}
                              {elem?.device_uid && elem?.device_uid}
                              {elem?.device_uid === true && "true"}
                              {elem?.device_uid === false && "-"}
                              {elem?.device_uid === null && "-"}
                              {elem?.device_uid?.length === 0 && "-"}
                            </td>
                            <td>
                              {/* range_from_surya_palace */}
                              {elem?.range_from_surya_palace &&
                                elem?.range_from_surya_palace}
                              {elem?.range_from_surya_palace === true && "true"}
                              {elem?.range_from_surya_palace === false && "-"}
                              {elem?.range_from_surya_palace === null && "-"}
                              {elem?.range_from_surya_palace?.length === 0 &&
                                "-"}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <div
                        style={{
                          height: "50vh",
                          width: "150vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
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

export default Customer;
