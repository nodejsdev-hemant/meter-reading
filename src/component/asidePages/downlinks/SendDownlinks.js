import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./GetAllDevices.scss";
const SendDownlinks = () => {
  //   const [input, setinput] = useState(10);
  //   const [offset, setoffset] = useState(1);
  //   const [apiData, setapiData] = useState([]);
  //   const [submitData, setsubmitData] = useState(5);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://jsonplaceholder.typicode.com/albums?_start=0&_limit=${submitData}`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setapiData(res.data);
  //       });
  //   }, [submitData]);
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
                          <input
                            type="text"
                            placeholder="Enter limit"
                            // value={input}
                            // onChange={(e) => setinput(e.target.value)}
                            name=""
                            id=""
                          />
                          <input
                            type="text"
                            placeholder="Offset"
                            // value={offset}
                            // onChange={(e) => setoffset(e.target.value)}
                            name=""
                            id=""
                          />
                          <button
                            // onClick={() => setsubmitData(input)}
                            type="button"
                            className="btn_submit btn btn-outline-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="show_data">
                      {/* {apiData?.map((elem, ind) => {
                        return (
                          <div className="title_wrapper ms-2 my-3 d-flex">
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
        </section>
      </div>
    </>
  );
};

export default SendDownlinks;
