import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import UrlServer from "../../UrlServer";

const DeleteDevice = () => {
  const [deviceId, setdeviceId] = useState("");
  const [serverResponse, setserverResponse] = useState();

  const submitData = () => {
    // axios({
    //   method: "delete",
    //   url: `${UrlServer}/delete_device/${deviceId}`,
    //   // data: body,
    // })
    axios
      .delete(`${UrlServer}/delete_device/${deviceId}`)
      .then((res) => {
        console.log(res.data);
        setserverResponse(res.data);
        toast.success(`Device Successfully Deleted!`);
      })
      .catch((err) => {
        toast.warn(`${err}`);
      });
  };
  return (
    <>
      <div className="container-fluid p-0 mt-1">
        <section className="">
          <div className="row gy-4">
            <div className="col-12 bg_white box_shadow_new rounded-5">
              <div className="edit_device_god">
                <div className="row">
                  <div className="col-4 mx-auto">
                    <div className="input_wrapper">
                      {/* <input
                        className="text-center"
                        type="text"
                        placeholder="Delete_id"
                        // value={deviceName}
                        // onChange={(e) => setdeviceName(e.target.value)}
                        name=""
                        id=""
                      /> */}
                      <label
                        style={{ background: "#CFE2FF" }}
                        className="text-center  border-info mb-1 py-0 w-100 ms-1"
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
                        className="btn_submit btn btn-outline-primary w-100 py-1 ms-1"
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
                            <h5>applicationId</h5>
                            <h5>deviceDesc</h5>
                            <h5>deviceEui</h5>
                            <h5>deviceLastSeenAt</h5>
                            <h5>deviceName</h5>
                            <h5>deviceProfileName</h5>
                            <h5>deviceStatusBattery</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="show_data">
                          <div className="device_data_2 my-3">
                            <h5>applicationId</h5>
                            <h5>deviceDesc</h5>
                            <h5>deviceEui</h5>
                            <h5>deviceLastSeenAt</h5>
                            <h5>deviceName</h5>
                            <h5>deviceProfileName</h5>
                            <h5>deviceStatusBattery</h5>
                          </div>
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
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default DeleteDevice;
