import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action";

class RegistereAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    };
  }
  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.RegistereAccount(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div className="RegistereAccount">
        <form onSubmit={this.handleSubmit} className="container">
          <h3>ĐĂNG KÝ</h3>
          <div className="form-group">
            <input
              className="form-control"
              name="taiKhoan"
              placeholder="Tài Khoản..."
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="matKhau"
              placeholder="Mật Khẩu..."
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="hoTen"
              placeholder="Họ Tên..."
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              placeholder="Email..."
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="soDt"
              placeholder="Sô điện thoại..."
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Đăng Ký
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (disptach) => {
  return {
    RegistereAccount: (user) => {
      disptach(action.actRegistereAccountAPI(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(RegistereAccount);
