import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../SASS/Nav-bar.scss";
// import Login from "./../Page/Home/Login/Login"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink activeClassName="active" className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item nav-menu">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/CalendarScreening"
            >
              Calendar Screeaning
            </NavLink>
          </li>
          <li className="nav-item nav-menu">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/theater"
            >
              Theater
            </NavLink>
          </li>
          <li className="nav-item nav-menu">
            <NavLink activeClassName="active" className="nav-link" to="/news">
              News
            </NavLink>
          </li>
          <li className="nav-item nav-menu">
            <NavLink activeClassName="active" className="nav-link" to="/Login">
              Apps
            </NavLink>
          </li>
          <li><NavLink activeClassName="active" className="nav-link" to="/Login">Đăng Nhập</NavLink></li>
        </ul>
      </nav>
    );
  }
}
