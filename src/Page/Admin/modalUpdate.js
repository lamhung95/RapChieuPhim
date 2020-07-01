import React, { Component } from "react";

class modalUpdate extends Component {
  handleUpdate = () => {
    const user = this.props;
    console.log(user);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <h3>Thêm người dùng</h3>
        <button type="button" className="close" data-dismiss="modal">
          ×
        </button>
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            className="form-control"
            name="taiKhoan"
            //   value={item.taiKhoan}
            onChange={this.hanldeOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            className="form-control"
            name="matKhau"
            //   value={item.matKhau}
            onChange={this.hanldeOnChange}
          />
        </div>
        <div className="form-group">
          <span>Họ tên</span>
          <input
            className="form-control"
            name="hoTen"
            //   value={item.hoTen}
            onChange={this.hanldeOnChange}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            onChange={this.hanldeOnChange}
          />
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input
            className="form-control"
            name="soDt"
            onChange={this.hanldeOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã nhóm</span>
          <input
            className="form-control"
            name="maNhom"
            onChange={this.hanldeOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã loại người dùng</span>
          <input
            className="form-control"
            name="maLoaiNguoiDung"
            onChange={this.hanldeOnChange}
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
    );
  }
}
export default modalUpdate;
