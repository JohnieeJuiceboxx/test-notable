import React, { Component } from "react";
import "./DashboardMain.css";

export default class DashboardMain extends Component {
  render() {
    const { activeAppointments } = this.props;

    return (
      <>
        {activeAppointments && (
          <div className="dash_main_container">
            <div className="dash_main_header">
              <h1>
                {`${activeAppointments.Doctor.Title} ${activeAppointments.Doctor.FirstName} ${activeAppointments.Doctor.LastName}`}
              </h1>
              <div className="dash_main_email">{activeAppointments.Email}</div>
            </div>

            <div>
              <table>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Kind</th>
                  <th>Issue</th>
                </tr>
                {activeAppointments.Appointments.map((app, idx) => {
                  return (
                    <tr>
                      <td>{(idx += 1)}</td>
                      <td>{app.Patient}</td>
                      <td>{app.Time}</td>
                      <td>{app.Kind}</td>
                      <td>{app.Issue}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        )}
      </>
    );
  }
}
