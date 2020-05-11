import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Theater extends Component {
  render() {
    const { theater } = this.props;
    return (
      <div className="col-sm-3">
        <Link to={`/theater/${theater.maCumRap}`}>
          <h3>{theater.tenCumRap}</h3>
          <h3>{theater.diaChi}</h3>
        </Link>
      </div>
    );
  }
}
