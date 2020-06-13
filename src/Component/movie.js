import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../SASS/Movie.scss";

class Movie extends Component {
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <div className="movie-item">
        <Link to={`/detail-movie/${movie.maPhim}`}>
            <img className="img-fluid img-item" src={movie.hinhAnh} alt="" />
        </Link>
        <div className="movie-name">
          <b>{movie.tenPhim}</b>
        </div>
      </div>
    );
  }
}
export default Movie;
