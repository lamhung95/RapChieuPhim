import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../SASS/Movie.scss";

export default class Movie extends Component {


  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <div className="movie-item">
          <div className="img-content">
            <img className="img-fluid img-item" src={movie.hinhAnh} alt="" />
          </div>
          <div className="movie-title">
            <Link to={`/detail-movie/${movie.maPhim}`}>
              <p className="movie-text">{movie.tenPhim}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
