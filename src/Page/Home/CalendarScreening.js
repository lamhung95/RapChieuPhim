import React, { Component } from "react";
import Movie from "./../../Component/movie";
import { connect } from "react-redux";
import * as action from "../../Redux/action";
// import MovieShow from "./../../Component/MovieShow"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./../../SASS/Calendar-screening.scss";

class CalendarScreening extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }
  nowPlaying = () => {
    const getListMovie = this.props;
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const dayObject = month + "/" + day + "/" + year;
    console.log(dayObject);

    return getListMovie.listMovie.map((item) => {
      const yy = new Date(item.ngayKhoiChieu).toLocaleDateString();
      if (yy <= dayObject) {
        return (
          <div key={item}>
            <Movie key={item.maPhim} movie={item} />
          </div>
        );
      }
    });
  };

  waiting=()=>{
    const getListMovie = this.props;
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const dayObject = month + "/" + day + "/" + year;
    return getListMovie.listMovie.map((item) => {
      const yy = new Date(item.ngayKhoiChieu).toLocaleDateString();
      if (yy > dayObject) {
        return (
          <div key={item}>
            <Movie key={item.maPhim} movie={item} />
          </div>
        );
      }
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 1,
    };
    return (
      <div className="show-list-movie">
        <div className="nowPlaying">
          <span>Đang chiếu</span>
          <Slider {...settings}>{this.nowPlaying()}</Slider>
        </div>
        <div className="waiting">
          <span>Sắp chiếu</span>
          <Slider {...settings}>{this.waiting()}</Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreening);
