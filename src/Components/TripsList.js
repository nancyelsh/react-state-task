import React, { Component } from "react";
import ListItems from "./ListItems";

// Use of `state`

export default class TripsList extends Component {
  constructor(props) {
    super(props); // Use of super()

    // State
    this.state = {
      trips: [],
      text: "",
      wishlistTrips: [],
      accomplishedTrips: [],
      // clickedList: "", Next Level
    };

    // Event Handler Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // `this` must be bound so that those methods
    // correctly update the overall component state
    this.checkTrip = this.checkTrip.bind(this);
    this.updateWishlistTrips = this.updateWishlistTrips.bind(this);
    this.updateAccomplishedTrips = this.updateAccomplishedTrips.bind(this);
  }

  updateWishlistTrips = (status) => {
    const filteredTrips = this.state.trips.filter(
      (trip) => trip.status !== status
    );
    this.setState({ wishlistTrips: filteredTrips });
  };

  updateAccomplishedTrips = (status) => {
    const filteredTrips = this.state.trips.filter(
      (trip) => trip.status !== status
    );
    this.setState({ accomplishedTrips: filteredTrips });
  };

  // async await (Very Important)
  checkTrip = async (id, status) => {
    await this.setState((prevState) => ({
      trips: prevState.trips.map((trip) =>
        trip.id === id ? { ...trip, status: !status } : trip
      ),
    }));
    if (status === true) {
      this.updateWishlistTrips(status);
    }
    if (status === false) {
      this.updateAccomplishedTrips(status);
    }
  };

  deleteTrip = (id) => {
    const newTrips = this.state.trips.filter((trip) => trip.id !== id);
    this.setState({ trips: newTrips });
  };

  handleChange(e) {
    // Why did I not have to use `this` here?
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) return; // ==
    const newItem = {
      country: this.state.text,
      status: false,
      id: new Date(),
    };
    // Why did I have to use `this` here?
    this.setState((state) => ({
      trips: state.trips.concat(newItem),
      text: "",
    }));
    // this.updateAccomplishedTrips(status); Complete
  }

  render() {
    console.log("STATUS", this.state);
    console.log("updatedWishlistTrips", this.state.wishlistTrips);
    console.log("updatedAccomplishedTrips", this.state.accomplishedTrips);

    // Next Level
    /*
    if (this.state.checkedList) {
      if (this.state.checkedList === true) {
        const listOfTrips = this.state.accomplishedTrips;
      } else {
        const listOfTrips = this.state.wishlistTrips;
      }
      return listOfTrips;
    }
    */

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
        {/* What happens if I forget to add the subsequent line? */}
        {/* Forget to pass props */}
        <ListItems
          trips={this.state.trips}
          deleteTrip={this.deleteTrip}
          checkTrip={this.checkTrip}
        />
        <button
          id=""
          onClick={() => {
            this.updateWishlistTrips(true);
            // this.setState({checkedList: false}) Next Level
          }}
        >
          Trips Wishlist
        </button>
        <button
          id=""
          onClick={() => {
            this.updateAccomplishedTrips(false);
            // this.setState({checkedList: true}) Next Level
          }}
        >
          Trips Accomplished
        </button>
      </div>
    );
  }
}
