import React, { Component } from "react";
import TripsList from "./Components/TripsList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TripsList />
        </div>
      </div>
    );
  }
}

export default App;
