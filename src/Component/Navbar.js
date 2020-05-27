import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../SASS/Nav-bar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="home-fix">
          <div className="nav-item active">
            <NavLink activeClassName="active" className="nav-link" to="/">
              HOME
            </NavLink>
          </div>
        </div>
        <div className="row head-menu">
          <div className="nav-item nav-menu">
            <NavLink className="nav-link" to="/CalendarScreening">
              <span>Lịch Chiếu</span>
            </NavLink>
          </div>
          <div className="nav-item nav-menu">
            <NavLink className="nav-link" to="/theater">
              <span>Cụm Rạp</span>
            </NavLink>
          </div>
          <div className="nav-item nav-menu">
            <NavLink className="nav-link" to="/news">
              <span>Tin Tức</span>
            </NavLink>
          </div>
          <div className="nav-item nav-menu">
            <NavLink className="nav-link" to="/Login">
              <span>Ứng dụng</span>
            </NavLink>
          </div>
        </div>
        <div className="nav-login">
          <div className="nav-item nav-menu">
            <NavLink activeClassName="active" className="nav-link" to="/login">
              <span>Đăng Nhập</span>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
