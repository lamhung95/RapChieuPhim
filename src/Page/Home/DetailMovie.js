import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action";
import { Link } from "react-router-dom";

import "./../../SASS/Details-movie.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

class DetailMovie extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailMovie(id);
    this.props.getTheaterLogo();
    console.log(this.props);
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

  renderHTML = () => {
    const { movie } = this.props;
    // console.log(movie.lichChieu);
    if (movie.lichChieu) {
      return movie.lichChieu.map((item) => {
        console.log(item.thoiLuong)
        if ((item.thongTinRap.maHeThongRap === "CGV") === true) {
          return (
            <div key={item.maLichChieu} className="show-time-theater row">
              <div className="show-time-details">
                <h6 className="movie-title">{item.thongTinRap.tenCumRap}</h6>
                {/* <div>{item.thongTinRap.tenRap}</div> */}
                <div>
                  {new Date(item.ngayChieuGioChieu).toLocaleDateString()}
                </div>
                <div>
                  {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
                </div>
                <div>{item.thoiLuong} Phút</div>
              </div>

              <Link to={`/booking-ticket/${item.maLichChieu}`}>
                <button className="btn btn-success">Chọn Ghế</button>
              </Link>
            </div>
          );
        }
      });
    }
  };
  componentWillUnmount() {
    this.props.resetDetailMovie();
  }
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div className="bg-content">
          <div
            style={{ backgroundImage: `url(${movie.hinhAnh})` }}
            className="bg-blur"
          ></div>
          <div className="col-8 detailsMovie">
            <div className="row">
              <div className="col-sm-6 row detailsMovie-content">
                <img
                  className="img-fluid detailsMovie-img"
                  src={movie.hinhAnh}
                  alt=""
                />
                <div className="detailsMovie-content-left">
                  <h3 className="movie-title">{movie.tenPhim}</h3>
                  <div>
                    {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                  </div>
                  <button className="btn btn-success">TRAILLER</button>
                </div>
              </div>
              <div className="col-sm-6 detailsMovie-content-right">
                <h6>MÔ TẢ</h6>
                <div>{movie.moTa}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-8 title-fix">
          <h3>LỊCH CHIẾU</h3>
          <div className="row detailsMovie-showTheater">
            <div className="col-3 detailsMovie-logo-content">
              <div
                className="nav flex-column nav-pills detailsMovie-logo"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-cgv"
                  role="tab"
                  aria-controls="v-pills-cgv"
                  aria-selected="true"
                >
                  {this.renderlogo("CGV")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-bhdstar"
                  role="tab"
                  aria-controls="v-pills-bhdstar"
                  aria-selected="false"
                >
                  {this.renderlogo("BHDStar")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-cinestar"
                  role="tab"
                  aria-controls="v-pills-cinestar"
                  aria-selected="false"
                >
                  {this.renderlogo("CineStar")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-galaxy"
                  role="tab"
                  aria-controls="v-pills-galaxy"
                  aria-selected="false"
                >
                  {this.renderlogo("Galaxy")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-lotte"
                  role="tab"
                  aria-controls="v-pills-lotte"
                  aria-selected="false"
                >
                  {this.renderlogo("LotteCinima")}
                </a>
                <a
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-mega"
                  role="tab"
                  aria-controls="v-pills-mega"
                  aria-selected="false"
                >
                  {this.renderlogo("MegaGS")}
                </a>
              </div>
            </div>
            <div className="col-9 detailsMovie-listMovie">
              <div className="tab-content" id="v-pills-tabContent">
                <SimpleBar style={{ height: 500 }}>
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-cgv"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    {this.renderHTML()}
                  </div>
                </SimpleBar>
                <div
                  className="tab-pane fade"
                  id="v-pills-bhdstar"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-cinestar"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-galaxy"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-lotte"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-mega"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieReducer.listDetailMovie,
    listTheaterLogo: state.movieReducer.listTheaterLogo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(action.actGetDetailMovieAPI(id));
    },
    resetDetailMovie: () => {
      dispatch(action.actGetDetailMovie({}));
    },
    getTheaterLogo: () => {
      dispatch(action.actGetTheaterLogoAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
