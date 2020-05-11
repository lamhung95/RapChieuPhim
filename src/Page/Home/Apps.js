import React, { Component } from "react";


export default class Apps extends Component {
  render() {
    return (
      


      <div className="col-9 container">
        <div className="col-12 form-inline">
          <div className="col-9 ">
            <button className="seat">01</button>
            <button className="seat">01</button>
            <button className="seat">01</button>
            <button className="seat">01</button>
            <button className="seat">01</button>
            
          </div>

          <div className="col-3 border">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <h3>Tên Phim</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ngày giờ chiếu:</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Cụm rap:</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Rạp:</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Ghế chọn</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Ưu đãi:</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Tổng tiền:</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className="btn btn-seccess">BOOKING TICKET</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
