import logo from "./Notable_logo.png";
import "./App.css";
import { useState } from "react";
import DashboardContainer from "./DashboardContainer";
import "./Splash.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  /**
   * Note: I am looking for a Front-End dev position so the Backend part was restricted to dummy data
   */
  return (
    <div className="App">
      {!loggedIn ? (
        <div className="splash fade-in">
          <div>
            <img src={logo} className="Notable-logo" alt="logo" />
          </div>
          <div>
            <button onClick={() => setLoggedIn(true)}>Login</button>
          </div>
        </div>
      ) : (
        <DashboardContainer setLoggedIn={setLoggedIn}></DashboardContainer>
      )}
    </div>
  );
}

export default App;
