import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action/index";
// import Theater from "./../../Component/Theater";

import "./../../SASS/Theater.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

class TheaterList extends Component {
  componentDidMount() {
    this.props.getTheater();
    this.props.getTheaterLogo();
    // console.log(this.props);
  }

  renderlogo = (id) => {
    const theaterLogo = this.props.listTheaterLogo;
    // console.log(theaterLogo)
    if (theaterLogo.length > 0) {
      const getLogo = theaterLogo.find((item) => item.maHeThongRap === id);
      return (
        <div>
          <img className="img-fluid logo-img" src={getLogo.logo} alt="" />
        </div>
      );
    }
  };

  renderTheater = () => {
    const theater = this.props.listTheater;
    // console.log(theater);
    // if (theater) {
    //   return theater.map((item) => {
    //     // console.log(item.lstCumRap)
    //     // return (
    //     //   <div key={item.maHeThongRap}>
    //     //     <div>{item.lstCumRap.tenCumRap}</div>
    //     //   </div>
    //     // );
    //   });
    // }

    //   return theater.listTheater.map((item) => {
    //     console.log(item)
    //     return <Theater key={item.maHeThongRap} theater={item} />;
    //   });
  };

  render() {
    return (
      <div className="container">
        <div className="theater-content">
          <div className="row">
            <div className="col-4 theater-nav logo-content">
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
                <SimpleBar style={{ height: 500 }}>
                  <div
                    style={{ height: 500 }}
                    className="tab-pane fade show active theater-nav-item"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    {this.renderTheater()}
                  </div>
                </SimpleBar>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  {this.renderTheater()}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
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
    listTheater: state.movieReducer.listTheater,
    listTheaterLogo: state.movieReducer.listTheaterLogo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTheater: () => {
      dispatch(action.actGetTheaterAPI());
    },
    getTheaterLogo: () => {
      dispatch(action.actGetTheaterLogoAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheaterList);
