import React, { Component } from "react";
import s1 from "./../img/slider/slide1.jpg";
import s2 from "./../img/slider/slide1.jpg";
import s3 from "./../img/slider/slide1.jpg";
import s4 from "./../img/slider/slide1.jpg";
import s5 from "./../img/slider/slide1.jpg";

class SliderApps extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={s1} alt="" />
          </div>
          <div className="carousel-item">
            <img src={s2} alt="" />
          </div>
          <div className="carousel-item">
            <img src={s3} alt="" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}
export default SliderApps;
