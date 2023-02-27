import React, { Component } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardMain from "./DashboardMain";
import doctors from "./doctors.json";
import appointments from "./appointments.json";

export default class Dashboard extends Component {
  construction() {
    this.state = {
      physicians: [],
      appointments: [],
      title: "",
      selectedPhysician: "",
      activeAppointments: null,
    };
  }
  componentWillMount() {
    // Fetch Physicians
    let res = doctors;
    this.setState(
      {
        title: res.Collection,
        physicians: [...res.Physicians],
        selectedPhysician: res.Physicians[0].Doctor_ID,
      },
      () => {
        this.setPhysiciansAppointments(this.state.selectedPhysician);
      }
    );

    // Fetch Appointments
    let resApps = appointments;
    this.setState({ appointments: resApps });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedPhysician !== this.state.selectedPhysician) {
      this.setPhysiciansAppointments(this.state.selectedPhysician);
    }
  }
  setSelectedPhysician = (id) => {
    this.setState({ selectedPhysician: id });
  };
  setPhysiciansAppointments = (id) => {
    const { appointments } = this.state;

    let active = appointments.Physicians.filter((app) => {
      return id === app.Doctor_ID;
    });
    this.setState({ activeAppointments: active[0] });
  };
  render() {
    const { title, physicians, selectedPhysician, activeAppointments } =
      this.state;

    return (
      <div className="dashboard_container">
        <DashboardLeft
          columnTitle={title}
          physicians={physicians}
          setSelectedPhysician={this.setSelectedPhysician}
          selectedPhysician={selectedPhysician}
          setLoggedIn={this.props.setLoggedIn}
        />
        <DashboardMain
          activeAppointments={activeAppointments}
          selectedPhysician={selectedPhysician}
        />
      </div>
    );
  }
}
