import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action";
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
      // <div className="container">
      <div className="container login-content col-6">
        <h3>Đăng Nhập</h3>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <form className="form-content" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username..."
                  name="taiKhoan"
                  onChange={this.handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password..."
                  name="matKhau"
                  onChange={this.handleOnchange}
                />
              </div>
              <button type="submit" className="btn btn-success xx">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      // </div>
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
