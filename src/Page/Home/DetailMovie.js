import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action";
import { Link } from "react-router-dom";
// import Calendar from "../Home/Calendar";

// import moment from "moment"
import dayjs from "dayjs";
import range from "lodash-es/range";

import "./../../SASS/Details-movie.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

class DetailMovie extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      setday: [this.getToDay()],
      // active: false,
    };
  }

  getToDay() {
    const d = new Date();
    return d.getDate();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailMovie(id);
    this.props.getTheaterLogo();
  }

  renderlogo = (id) => {
    const theaterLogo = this.props.listTheaterLogo;
    // console.log(this.state);
    // console.log(this.state)
    if (theaterLogo.length > 0) {
      const getLogo = theaterLogo.find((item) => item.maHeThongRap === id);
      return (
        <div>
          <img className="img-fluid logo-img" src={getLogo.logo} alt="" />
        </div>
      );
    }
  };
  renderHTML = (id) => {
    const { movie } = this.props;
    // const dd = dayjs();
    const xx = "1/2/2019";
    if (movie.lichChieu && movie.lichChieu !== -1) {
      return movie.lichChieu.map((item) => {
        const getDatetime = new Date(
          item.ngayChieuGioChieu
        ).toLocaleDateString();
        if (
          (item.thongTinRap.maHeThongRap === id) === true &&
          getDatetime === xx
        ) {
          return (
            <div key={item.maLichChieu} className="show-time-theater row">
              <div className="show-time-details">
                {/* <div>{item.thongTinRap.tenRap}</div> */}
                <h6 className="movie-title" key={item.maCumRap}>
                  {item.thongTinRap.tenCumRap}
                </h6>
                <div>{item.thoiLuong} Phút</div>
                <div>
                  <Link to={`/booking-ticket/${item.maLichChieu}`}>
                    {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      });
    }
  };
  renderHTML = (id) => {
    const { movie } = this.props;
    const xx = "1/2/2019";
    // console.log(movie);
    if (movie.lichChieu && movie.lichChieu !== -1) {
      return movie.lichChieu.map((item) => {
        const getDatetime = new Date(
          item.ngayChieuGioChieu
        ).toLocaleDateString();
        if (
          (item.thongTinRap.maHeThongRap === id) === true &&
          getDatetime === xx
        ) {
          console.log(item);
          return (
            <div key={item.maLichChieu} className="show-time-theater row">
              <div className="show-time-details">
                <h6 className="movie-title">{item.thongTinRap.tenCumRap}</h6>
                <div>
                  {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
                </div>
                <div>{item.thoiLuong} Phút</div>
                <div>{item.thongTinRap.tenRap}</div>
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

  renderDayOfWeek = () => {
    const dd = dayjs();
    // const boxClass = ["day-cell"];
    console.log(dd.date());
    const mm = dd.daysInMonth();
    return range(mm).map((item) => {
      const day = item + 1;
      while (day >= dd.date() && day <= dd.date() + 6) {
        return (
          <div
            className={`day-cell${
              day === dd.date() ? " day-cell--today" : " day-cell--faded"
            }`}
            key={item}
            onClick={() => {
              this.setState({ setday: day });
            }}
          >
            {day}
          </div>
        );
      }
    });
  };

  componentWillUnmount() {
    this.props.resetDetailMovie();
  }
  render() {
    const { movie } = this.props;
    console.log(movie);
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
                  <div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        TRAILLER
                      </button>
                      <div className="modal" id="myModal">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                ×
                              </button>
                              <iframe
                                title="trailer"
                                width="420"
                                height="315"
                                src={movie.trailer}
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
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
                  {this.renderlogo("BHDStar")}
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
                  {this.renderlogo("CineStar")}
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
              <div className="cld">{this.renderDayOfWeek()}</div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderHTML("CGV")}
                  </SimpleBar>
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderHTML("BHDStar")}
                  </SimpleBar>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderHTML("CineStar")}
                  </SimpleBar>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderHTML("Galaxy")}
                  </SimpleBar>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-lotte"
                  role="tabpanel"
                  aria-labelledby="v-pills-lotte-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderHTML("LotteCinima")}
                  </SimpleBar>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-mega"
                  role="tabpanel"
                  aria-labelledby="v-pills-mega-tab"
                >
                  <SimpleBar style={{ height: 500 }}>
                    {this.renderHTML("MegaGS")}
                  </SimpleBar>
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
