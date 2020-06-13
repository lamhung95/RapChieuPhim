import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./../SASS/Theater.scss"

export default class Theater extends Component {
  render() {
    const  {theater}  = this.props;
    console.log(theater)
    return (
      <div className="col-sm-3">
        {/* <div className="theater-item">
          <Link to={`/theater/${theater.maCumRap}`}>
            <span>{theater.tenCumRap}</span>
          </Link>
          <span>{theater.diaChi}</span>
        </div> */}
      </div>
    );
  }
}
