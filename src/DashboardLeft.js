import React, { Component } from "react";
import logo from "./Notable_logo.png";
import "./DashboardLeft.css";

export default class DashboardLeft extends Component {
  render() {
    const {
      columnTitle,
      physicians,
      setSelectedPhysician,
      selectedPhysician,
      setLoggedIn,
    } = this.props;
    return (
      <div className="dash_left_container">
        <div className="image_container">
          <img src={logo} className="Notable-logo" alt="logo" />
        </div>
        <div className="column_title">{columnTitle.toUpperCase()}</div>
        <div className="physician_container">
          {physicians.map((doc) => {
            return (
              <div
                className={`${
                  selectedPhysician === doc.Doctor_ID ? "active" : ""
                }`}
                onClick={() => setSelectedPhysician(doc.Doctor_ID)}
              >{`ο  ${doc.Doctor.LastName}, ${doc.Doctor.FirstName}`}</div>
            );
          })}
        </div>
        <div>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      </div>
    );
  }
}
