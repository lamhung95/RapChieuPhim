import React, { Component, lazy, Suspense } from "react";
// import CalendaSreening from "./CalendarScreening";
import TheaterList from "./TheaterList";
import SearchBar from "./SearchBar";
import Carousel from "./../Home/Carousel";
import Apps from "./Apps";
// import Navbar from "./../../Component/Navbar"
// import Xx from "./../../Component/xx";

import "./../../SASS/Home.scss";

const CalendaSreening=lazy(()=>import("./CalendarScreening"));

export default class Home extends Component {
  render() {
    return (
      <div className="home-body">
      <Suspense fallback={<div className="lazy-load">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>}>
      
        <div className="">
          <Carousel />
        </div>
        <div className="col-sm-8 container title-fix">
          <h3>LỊCH CHIẾU</h3>
          <div className="form-movie-show">
            <div className="calendar">
              <SearchBar />
              {/* <span>Đang Chiếu</span> */}
              <CalendaSreening />
            </div>
          </div>
          <div className="theater-list">
            <h3>CỤM RẠP</h3>
            <TheaterList />
          </div>
        </div>
        <div>
          <Apps />
        </div>
      
      </Suspense>
      </div>
    );
  }
}
