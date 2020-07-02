import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action";
import { Link } from "react-router-dom";
import "./../../SASS/Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
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
    this.props.login(this.state, this.props.history);
  };
  render() {
    return (
      <div className="login">
        <div className="container login-content col-6">
          <h3>Đăng Nhập</h3>
          <div className="col-sm-6 mx-auto">
            <form className="form-content" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username..."
                  name="taiKhoan"
                  onChange={this.handleOnchange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password..."
                  name="matKhau"
                  onChange={this.handleOnchange}
                />
              </div>
              <div className="registere-account">
                <Link to="/registereAccount">
                  <span>Chưa có tài khoản?</span>
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-success"
              >
                Đăng Nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, history) => {
      dispatch(action.actLoginAPI(user, history));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login);
