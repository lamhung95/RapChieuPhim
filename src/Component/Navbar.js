import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./../Page/Home/Logout";
import "./../SASS/Nav-bar.scss";

export default class Navbar extends Component {
  handleLogin = () => {
    const getAccount = JSON.parse(localStorage.getItem("user"));
    if (getAccount !== null && getAccount.maLoaiNguoiDung === "KhachHang") {
      return (
        <div className="dropdown">
          <div type="button" className="nameAccount" data-toggle="dropdown">
            <span>{getAccount.taiKhoan}</span>
          </div>
          <div className="dropdown-menu">
            <span className=" dropdown-item">
              <Logout />
            </span>
          </div>
        </div>
      );
    } else if (
      getAccount !== null &&
      getAccount.maLoaiNguoiDung === "QuanTri"
    ) {
      return (
        <div className="dropdown">
          <div type="button" className="nameAccount" data-toggle="dropdown">
            <span>{getAccount.taiKhoan}</span>
          </div>
          <div className="dropdown-menu">
            <span className="dropdown-item">
              <NavLink className="nav-link" to="/dashboard">
                <span className="nav-login-dashboard-text">DashBoard</span>
              </NavLink>
            </span>
            <span className="dropdown-item">
              <Logout />
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <NavLink className="nav-link" to="/login">
          <span className="nav-login-text">Đăng Nhập</span>
        </NavLink>
      );
    }
  };
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
            <NavLink className="nav-link" to="/apps">
              <span>Ứng dụng</span>
            </NavLink>
          </div>
        </div>
        <div className="nav-login">
          <div className="nav-item nav-menu">{this.handleLogin()}</div>
        </div>
      </nav>
    );
  }
}
