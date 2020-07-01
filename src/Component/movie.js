import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../SASS/Movie.scss";

class Movie extends Component {
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <div className="movie-item">
        <div className="film">
          <div className="film-img">
            <Link to={`/detail-movie/${movie.maPhim}`}>
              <img className="img-fluid img-item" src={movie.hinhAnh} alt="" />
            </Link>
          </div>
          <div className="info">
            <div className="movie-name">
              <b>{movie.tenPhim}</b>
            </div>
            <div className="movie-button">
              <Link to={`/detail-movie/${movie.maPhim}`}>
                <button className="btn btn-danger btn-booking">Mua Vé</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
