import React, { Component } from "react";
import "./../../SASS/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="col-sx-12 footer">
        <div className="container">
          <div className="row footer-content">
            <div className="col-4">
              <span className="footer-text">TIX</span>
              <div className="row">
                <div className="col-6">
                  <span className="footer-text">FAQ</span>
                  <span className="footer-text">Brand Guidelines</span>
                </div>
                <div className="col-6">
                  <span className="footer-text">Thỏa thuận sử dụng</span>
                  <span className="footer-text">Chính sách bảo mật</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <span className="footer-text">ĐỐI TÁC</span>
              <div className="col-12 row">
                <span href="" className="col-12 row">
                  <img
                    className="iconConnect"
                    src="https://tix.vn/app/assets/img/icons/cgv.png"
                    alt=""
                  />
                  <img
                    className="iconConnect"
                    src="https://tix.vn/app/assets/img/icons/bhd.png"
                    alt=""
                  />
                  <img
                    className="iconConnect"
                    src="https://tix.vn/app/assets/img/icons/galaxycine.png"
                    alt=""
                  />
                  <img
                    className="iconConnect"
                    src="https://tix.vn/app/assets/img/icons/cinestar.png"
                    alt=""
                  />
                  <img
                    className="iconConnect"
                    src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt=""
                  />
                  <img
                    className="iconConnect"
                    src="https://tix.vn/app/assets/img/icons/megags.png"
                    alt=""
                  />
                </span>
              </div>
              <div className="col-12 row">
                <img
                  className="iconConnect"
                  src="https://tix.vn/app/assets/img/icons/bt.jpg"
                  alt=""
                />
                <img
                  className="iconConnect"
                  src="https://tix.vn/app/assets/img/icons/dongdacinema.png"
                  alt=""
                />
                <img
                  className="iconConnect"
                  src="https://tix.vn/app/assets/img/icons/dongdacinema.png"
                  alt=""
                />
                <img
                  className="iconConnect"
                  src="https://tix.vn/app/assets/img/icons/TOUCH.png"
                  alt=""
                />
                <img
                  className="iconConnect"
                  src="https://tix.vn/app/assets/img/icons/cnx.jpg"
                  alt=""
                />
                <img
                  className="iconConnect"
                  src="https://tix.vn/app/assets/img/icons/STARLIGHT.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4 col-xs-12">
              <div className="row">
                <div className="col-6">
                  <span className="footer-text">MOBILE APP</span>
                  <br />
                  <img
                    className="app-icon"
                    src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                    alt=""
                  />
                  <img
                    className="app-icon"
                    src="https://tix.vn/app/assets/img/icons/android-logo.png"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <span className="footer-text">SOCIAL</span>
                  <br />
                  <img
                    className="app-icon"
                    src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                    alt=""
                  />
                  <img
                    className="app-icon"
                    src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
