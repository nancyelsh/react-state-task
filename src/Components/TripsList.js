import React, { Component } from "react";
import ListItems from "./ListItems";

// Use of `state`

export default class TripsList extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      trips: [],
      text: "",
    };

    // Event Handler Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkTrip = this.checkTrip.bind(this);
    this.updateWishlistTrips = this.updateWishlistTrips.bind(this);
    this.updateAccomplishedTrips = this.updateAccomplishedTrips.bind(this);
  }

  updateWishlistTrips = () => {}; // Complete

  updateAccomplishedTrips = (status) => {
    const filteredTrips = this.state.trips.filter(
      (trip) => trip.status !== status
    );
    this.setState({ accomplishedTrips: filteredTrips });
  };

  // async await (Very Important)
  checkTrip = async (id, status) => {
    await this.setState((prevState) => ({
      // Complete me
    }));
    if (status === true) {
      this.updateWishlistTrips(status);
    }
    if (status === false) {
      this.updateAccomplishedTrips(status);
    }
  };

  deleteTrip = (id) => {
    "Complete Me";
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) return; // ==
    const newItem = {
      country: this.state.text,
      // >>>>>>>>>>> Missing Field
      id: new Date(),
    };
    this.setState((state) => ({
      trips: state.trips.concat(newItem),
      text: "",
    }));
  }

  render() {
    return (
      <div>
        <h2>Trip Tracker</h2>
        <p>New Trip</p>
        <form id="" onSubmit={this.handleSubmit}>
          <input
            id=""
            name=""
            placeholder="Add a trip..."
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button id="" type="submit">
            Add
          </button>
        </form>
        <ListItems
          trips={this.state.trips}
          deleteTrip={this.deleteTrip}
          checkTrip={this.checkTrip}
        />
        <button id="" onClick={() => {}}>
          Trips Wishlist
        </button>
        <button id="" onClick={() => {}}>
          Trips Accomplished
        </button>
      </div>
    );
  }
}
