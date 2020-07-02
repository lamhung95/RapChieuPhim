import React, { Component } from "react";
import "./../../SASS/Search-film.scss";
import { connect } from "react-redux";
import * as action from "../../Redux/action";
import { NavLink } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idMovie: [],
      Theater: [],
    };
  }
  componentDidMount() {
    this.props.getListMovie();
  }
  handleMovieName = () => {
    const getMovieName = this.props.listMovie;
    return getMovieName.map((item) => {
      return (
        <NavLink to={`/detail-movie/${item.maPhim}`}>
          <div>{item.tenPhim}</div>
        </NavLink>
      );
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="btn-group">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            Tìm nhanh...
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-item">
              {this.handleMovieName()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
    movie: state.movieReducer.listDetailMovie,
    //========== listTheater: state.movieReducer.listTheater,
    listTheater: state.movieReducer.listTheater,
    listTheaterCGV: state.movieReducer.listTheaterCGV,
    listTheaterCineStar: state.movieReducer.listTheaterCineStar,
    listTheaterGalaxy: state.movieReducer.listTheaterGalaxy,
    listTheaterLotte: state.movieReducer.listTheaterLotte,
    listTheaterMegaGS: state.movieReducer.listTheaterMegaGS,
    //=====================
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    },
    //================
    getTheater: () => {
      dispatch(action.actGetTheaterAPI());
    },
    getTheaterCGV: () => {
      dispatch(action.actGetTheaterCGVAPI());
    },
    getTheaterCineStar: () => {
      dispatch(action.actGetTheaterCineStarAPI());
    },
    getTheaterGalaxy: () => {
      dispatch(action.actGetTheaterGalaxyAPI());
    },
    getTheaterLotte: () => {
      dispatch(action.actGetTheaterLotteAPI());
    },
    getTheaterMegaGS: () => {
      dispatch(action.actGetTheaterMegaGSAPI());
    },
    //============================
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
