import React, { Component } from "react";
import CalendaSreening from "./CalendarScreening";
import TheaterList from "./TheaterList";
import SearchBar from "./SearchBar";
import Carousel from "./../Home/Carousel";
// import Navbar from "./../../Component/Navbar"
// import Xx from "./../../Component/xx";

import "./../../SASS/Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="">
          <Carousel />
        </div>
        <div className="col-sm-8 container">
          <div className="search">
            <SearchBar />
          </div>
          <div className="calendar">
            <CalendaSreening />
          </div>
          <div className="theater-list">
            <TheaterList />
          </div>
        </div>
      </div>
    );
  }
}
