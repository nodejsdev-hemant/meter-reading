import React from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <header className="bg_white box_shadow">
        <div className="container-fluid header_space">
          <div className="row row-cols-sm-">
            <div className="col-12 col-sm-6 col-md-6">
              <div className="logo_name_wrapper">
                <img src={logo} alt="" />
                <h1 className="ms-3">VGL-Automated Gas Reading</h1>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <div className="select_columns">
                <div className="row">
                  <div className="col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Shashank Jayakumar</option>
                      <option value="1">Shashank Jayakumar</option>
                      <option value="2">Shashank Jayakumar</option>
                      <option value="3">Shashank Jayakumar</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
