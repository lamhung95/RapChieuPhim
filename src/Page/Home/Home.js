import React, { Component } from "react";
import CalendaSreening from "./CalendarScreening";
import "./../../SASS/Home.scss";

export default class Home extends Component {
  render() {
    return (

        <div className="col-sm-9 container">
          <div className="xx">
            <CalendaSreening className="xxx" />
          </div>
        </div>
    );
  }
}
