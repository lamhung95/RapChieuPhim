import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Redux/action";
// import UpdateModal from "../../Component/UpdateModal";
// import SimpleBar from "simplebar-react";
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "lamhung",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
    };
  }
  componentDidMount() {
    this.props.getAccounts();
  }
  Accounts = () => {
    const get = this.props.listAccounts;
    console.log(get);
    return get.map((item) => {
      return (
        <tr key={item.taiKhoan}>
          <td>
            <button type="button" onClick={this.handleDeleteUser}>
              xx
            </button>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() =>
                  this.setState({
                    taiKhoan: item.taiKhoan,
                    matKhau: item.matKhau,
                    hoTen: item.hoTen,
                    email: item.email,
                    soDt: item.soDt,
                    maNhom: item.maNhom,
                    maLoaiNguoiDung: item.maLoaiNguoiDung,
                  })
                }
              >
                Open modal
              </button>
              {/* The Modal */}
              <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-body" key={item}>
                      <form onSubmit={this.handleUpdate} className="container">
                        <h3>Thêm người dùng</h3>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                        <div className="form-group">
                          <span>Tài khoản</span>
                          <input
                            className="form-control"
                            name="taiKhoan"
                            defaultValue={this.state.taiKhoan}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <span>Mật khẩu</span>
                          <input
                            className="form-control"
                            name="matKhau"
                            defaultValue={this.state.matKhau}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <span>Họ tên</span>
                          <input
                            className="form-control"
                            name="hoTen"
                            defaultValue={this.state.hoTen}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <span>Email</span>
                          <input
                            className="form-control"
                            name="email"
                            defaultValue={this.state.email}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <span>Số điện thoại</span>
                          <input
                            className="form-control"
                            name="soDt"
                            defaultValue={this.state.soDt}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <span>Mã loại người dùng</span>
                          <input
                            className="form-control"
                            name="maLoaiNguoiDung"
                            defaultValue={this.state.maLoaiNguoiDung}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <span>Mã Nhóm</span>
                          <input
                            className="form-control"
                            name="maNhom"
                            defaultValue={this.state.maNhom}
                            onChange={this.onChangeUpdate}
                          />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-success">
                            Thêm người dùng
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
                  </div>
                </div>
              </div>
            </div>
          </td>

          <td>{item.taiKhoan}</td>
          <td>{item.matKhau}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td>{item.maLoaiNguoiDung}</td>
        </tr>
      );
    });
  };
  handleDeleteUser = () => {
    this.props.deleteUser(this.state.taiKhoan);
  };
  handleUpdate = () => {
    // event.preventDefault()
    this.props.updateUser(this.state);
  };
  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onChangeUpdate=(event)=>{
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Accounts
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Movies
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Orders
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Report
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-lotte"
              role="tab"
              aria-controls="v-pills-lotte"
              aria-selected="false"
            >
              Integrations
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-mega"
              role="tab"
              aria-controls="v-pills-mega"
              aria-selected="false"
            >
              f
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div>
                <div className="form-group">
                  <label htmlFor="usr">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usr"
                    placeholder="Search..."
                  />
                </div>
                <form onSubmit={this.handleSubmit}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="collapse"
                    data-target="#demo"
                  >
                    Thêm Tài Khoản
                  </button>
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Tài Khoản"
                    name="taiKhoan"
                    onChange={this.handleOnchange}
                  />
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Mật Khẩu"
                    name="matKhau"
                    onChange={this.handleOnchange}
                  />
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Họ Tên"
                    name="hoTen"
                    onChange={this.handleOnchange}
                  />
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleOnchange}
                  />
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Số Điện Thoại"
                    name="soDt"
                    onChange={this.handleOnchange}
                  />
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Mã Nhóm"
                    name="maNhom"
                    onChange={this.handleOnchange}
                  />
                  <input
                    id="demo"
                    className="collapse"
                    placeholder="Loại nguoid dùng"
                    name="maLoaiNguoiDung"
                    onChange={this.handleOnchange}
                  />
                  <button
                    id="demo"
                    type="submit"
                    className="collapse btn btn-success"
                  >
                    Thêm
                  </button>
                </form>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Tài Khoản</th>
                    <th>Mật Khẩu</th>
                    <th>Họ Tên</th>
                    <th>Email</th>
                    <th>Số Điện Thoại</th>
                    <th>Mã Loại Người Dùng</th>
                  </tr>
                </thead>
                <tbody>{this.Accounts()}</tbody>
              </table>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            ></div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              4
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              5
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-lotte"
              role="tabpanel"
              aria-labelledby="v-pills-lotte-tab"
            >
              6
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-mega"
              role="tabpanel"
              aria-labelledby="v-pills-mega-tab"
            >
              7
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listAccounts: state.movieReducer.listAccounts,
  };
};
const mapDispatchToProps = (disptach) => {
  return {
    getAccounts: () => {
      disptach(action.actGetAccountsAPI());
    },
    addUser: (user) => {
      disptach(action.actAdduserAPI(user));
    },
    deleteUser: (taiKhoan) => {
      disptach(action.actDeleteUser(taiKhoan));
    },
    updateUser: (user) => {
      disptach(action.actUpdateUserAPI(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
