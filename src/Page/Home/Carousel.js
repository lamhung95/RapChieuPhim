import React, { Component } from "react";
import "./../../SASS/Carousel.scss"

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel-content">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://s3img.vcdn.vn/123phim/2020/05/8-15894431015434.png" alt="Los Angeles" />
            </div>
            <div className="carousel-item">
              <img src="https://s3img.vcdn.vn/123phim/2020/05/noi-doi-lam-trai-tim-dau-15899694899787.png" alt="Chicago" />
            </div>
            <div className="carousel-item">
              <img src="https://s3img.vcdn.vn/123phim/2020/05/sugar-daddy-15894440672175.jpg" alt="New York" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
        ;
      </div>
    );
  }
}
