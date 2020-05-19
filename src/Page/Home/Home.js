import React, { Component } from "react";
import CalendaSreening from "./CalendarScreening";
import TheaterList from "./TheaterList";
import SearchBar from "./SearchBar";
// import Xx from "./../../Component/xx";

// import "./../../SASS/Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="col-sm-9 container">
        <div>
          <SearchBar />
          <CalendaSreening />
          <TheaterList />
        </div>
      </div>
    );
  }
}
