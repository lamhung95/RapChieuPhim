import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action/index";
// import { NavLink } from "react-router-dom";
import MovieShow from "./../../Component/MovieShow";

import "./../../SASS/Theater.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

class TheaterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCinema: [],
    };
  }
  componentDidMount() {
    //==========
    this.props.getTheater();
    this.props.getTheaterCGV();
    this.props.getTheaterCineStar();
    this.props.getTheaterGalaxy();
    this.props.getTheaterLotte();
    this.props.getTheaterMegaGS();
    //==============
    this.props.getTheaterLogo();
    this.props.getCinemaMovieShow();
    this.props.getListMovie();
  }

  renderlogo = (id) => {
    const theaterLogo = this.props.listTheaterLogo;
    if (theaterLogo.length > 0) {
      const getLogo = theaterLogo.find((item) => item.maHeThongRap === id);
      return (
        <div>
          <img className="img-fluid logo-img" src={getLogo.logo} alt="" />
        </div>
      );
    }
  };
  getid = () => {
    console.log(this.props.listTheater);
  };
  //=====================================
  renderTheaterBHDStar = () => {
    const theater = this.props.listTheater;
    if (theater) {
      return theater.map((item) => {
        return (
          <div
            key={item.maCumRap}
            onClick={() => {
              this.setState({ idCinema: item.maCumRap });
            }}
          >
            <MovieShow cinema={item} />
          </div>
        );
      });
    }
  };
  renderTheaterCGV = () => {
    const theater = this.props.listTheaterCGV;
    if (theater) {
      return theater.map((item) => {
        return (
          <div key={item.maCumRap}>
            <MovieShow cinema={item} />
          </div>
        );
      });
    }
  };
  renderTheaterCineStar = () => {
    const theater = this.props.listTheaterCineStar;
    if (theater) {
      return theater.map((item) => {
        return (
          <div key={item.maCumRap}>
            <MovieShow cinema={item} />
          </div>
        );
      });
    }
  };
  renderTheaterGalaxy = () => {
    const theater = this.props.listTheaterGalaxy;
    if (theater) {
      return theater.map((item) => {
        return (
          <div key={item.maCumRap}>
            <MovieShow cinema={item} />
          </div>
        );
      });
    }
  };
  renderTheaterLotte = () => {
    const theater = this.props.listTheaterLotte;
    if (theater) {
      return theater.map((item) => {
        return (
          <div key={item.maCumRap}>
            <div>{item.tenCumRap}</div>
            <div>{item.diaChi}</div>
          </div>
        );
      });
    }
  };
  renderTheaterMegaGS = () => {
    const theater = this.props.listTheaterMegaGS;
    if (theater) {
      return theater.map((item) => {
        return (
          <div key={item.maCumRap}>
            <div>{item.tenCumRap}</div>
            <div>{item.diaChi}</div>
          </div>
        );
      });
    }
  };
  //==============================

  render() {
    return (
      <div className="container">
        <div className="theater-content">
          <div className="row">
            <div className="col-4 logo-content">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  {this.renderlogo("BHDStar")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  {this.renderlogo("CGV")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  {this.renderlogo("CineStar")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  {this.renderlogo("Galaxy")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  {this.renderlogo("LotteCinima")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  {this.renderlogo("MegaGS")}
                </a>
              </div>
            </div>
            <div className="col-4 theater-nav">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  style={{ height: 500 }}
                  className="tab-pane fade show active theater-nav-item"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderTheaterBHDStar()}
                  </SimpleBar>
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderTheaterCGV()}
                  </SimpleBar>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  {this.renderTheaterCineStar()}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  {this.renderTheaterGalaxy()}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  {this.renderTheaterLotte()}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  {this.renderTheaterMegaGS()}
                </div>
              </div>
            </div>
            <div className="col-4">{/* {this.renderMovie()} */}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //==========
    listTheater: state.movieReducer.listTheater,
    listTheaterCGV: state.movieReducer.listTheaterCGV,
    listTheaterCineStar: state.movieReducer.listTheaterCineStar,
    listTheaterGalaxy: state.movieReducer.listTheaterGalaxy,
    listTheaterLotte: state.movieReducer.listTheaterLotte,
    listTheaterMegaGS: state.movieReducer.listTheaterMegaGS,
    //==============
    listCinemaMovieShow: state.movieReducer.listCinemaMovieShow,
    listTheaterLogo: state.movieReducer.listTheaterLogo,

    listMovie: state.movieReducer.listMovie,
    listDetailsMovie: state.movieReducer.listDetailMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
    //=====================
    getTheaterLogo: () => {
      dispatch(action.actGetTheaterLogoAPI());
    },
    getCinemaMovieShow: () => {
      dispatch(action.actGetCinemaMovieShowAPI());
    },
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    },
    getDetailMovie: (id) => {
      dispatch(action.actGetDetailMovieAPI(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheaterList);
