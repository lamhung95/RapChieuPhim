import React from "react";
import Navbar from "./../Component/Navbar";
import SearchBar from "./../Page/Home/SearchBar";
import CalendaSreening from "./../Page/Home/CalendarScreening";
import TheaterList from "./../Page/Home/TheaterList";
import Carousel from "./../Page/Home/Carousel"
import CalendaSreeningTabs from "./../Page/Home/CalendarScreeningTabs"

import "./../SASS/Home-template.scss";

import { Route } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <div>
      {/* <div className=""> */}
        <Navbar />
        <div><Carousel/></div>
      {/* </div> */}
      <div className="container col-8">
        
        <div className="search">
          <SearchBar />
        </div>
        <div className="calendar">
          <CalendaSreening />
        </div>
        <div className="theater-list">
          <TheaterList />
        </div>
        <div><CalendaSreeningTabs/></div>
      </div>

      {/* {props.children} */}
    </div>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
