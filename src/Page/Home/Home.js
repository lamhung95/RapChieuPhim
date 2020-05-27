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
        <div className="col-sm-8 container title-fix">
          <h3>LỊCH CHIẾU</h3>
          <div className="form-movie-show">
            <div className="calendar">
              <SearchBar />
              <span>Đang Chiếu</span>
              <CalendaSreening />
            </div>
          </div>
          <h3>CỤM RẠP</h3>
          <div className="theater-list">
            <TheaterList />
          </div>
        </div>
      </div>
    );
  }
}
