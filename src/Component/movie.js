import React, { Component } from "react";
import { Link } from "react-router-dom";
import Xx from "./xx";
class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <div className="movie-item">
          <Link to={`/detail-movie/${movie.maPhim}`}>
            <div className="img-content">
              <img className="img-fluid img-item" src={movie.hinhAnh} alt="" />
            </div>
          </Link>
        </div>
        <div><Xx/></div>
      </div>
    );
  }
}
export default Movie;
