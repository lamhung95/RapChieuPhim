import React, { Component } from "react";
import "./../../SASS/App.scss";
import xx from "./../../img/mobile.jpg";
// import SliderApps from "./../../Component/sliderApps";
// import s1 from "./../../img/slider/slide1.jpg";
// import s2 from "./../../img/slider/slide2.jpg";
// import s3 from "./../../img/slider/slide3.jpg";

export default class Apps extends Component {
  render() {
    return (
      <div className="app-body">
        <div className="row app-content">
          <div className="col-md-6 app-text">
            <span className="text-left">Ứng dụng tiện lợi dành cho</span>
            <br/>
            <span className="text-left">người yêu điện ảnh</span>
            <br />
            <span className="text-small">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hâp dẫn.
            </span>
            <br />
            <button
              className="btn btn-danger"
              href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
            >
              App miễn phí - Tải về ngay
            </button>
          </div>
          <div className="col-md-6 phone-body">
            <img className="img-phone" src={xx} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
