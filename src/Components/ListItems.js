import React, { Component } from "react";

// Use of `props`

export default class ListItems extends Component {
  render() {
    console.log("I'm in ListItems", this.props.trips);
    return (
      <div>
        <ul>
          {this.props.trips.map((trip) => (
            <li key={trip.id}>
              {trip.country}{" "}
              <button onClick={() => this.props.deleteTrip(trip.id)}>
                Remove
              </button>
              <button onClick={() => {}}>Check</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
