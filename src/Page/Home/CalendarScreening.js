import React, { Component } from "react";
import Movie from "./../../Component/movie";
import { connect } from "react-redux";
import * as action from "../../Redux/action";
import Xx from "./../../Component/xx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./../../SASS/Calendar-screening.scss";

class CalendarScreening extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <Slider {...settings}>
          {this.props.listMovie.map((item) => {
            return (
              <div key={item}>
                <Movie key={item.maPhim} movie={item} />
                {/* <Xx /> */}
              </div>
            );
          })}
      </Slider>
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
