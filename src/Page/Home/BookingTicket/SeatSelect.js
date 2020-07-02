import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as action from "./../../../Redux/action";
import "./../../../SASS/Booking.scss";
import CountDownTime from "./CountDownTime";

class SeatSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkingSeat: [],
      datVe: {
        maLichChieu: "",
        danhSachVe: [
          {
            maGhe: "",
            giaVe: "",
          },
        ],
        taiKhoanNguoiDung: "",
      },
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getList(id);
  }

  renderMovie = () => {
    const movie = this.props.Seat;
    if (movie.thongTinPhim) {
      return (
        <tbody>
          <tr>
            <td className="movie-text-name">
              <b>TÊN PHIM:</b>
            </td>
            <td>{movie.thongTinPhim.tenPhim}</td>
          </tr>
          <tr>
            <td className="movie-text">Ngày Chiếu:</td>
            <td>{movie.thongTinPhim.ngayChieu}</td>
          </tr>
          <tr>
            <td className="movie-text">Giờ Chiếu:</td>
            <td className="show-time-text">{movie.thongTinPhim.gioChieu}</td>
          </tr>
          <tr>
            <td className="movie-text">Cụm Rạp:</td>
            <td>{movie.thongTinPhim.tenCumRap}</td>
          </tr>
          <tr>
            <td className="movie-text">Rạp:</td>
            <td>{movie.thongTinPhim.tenRap}</td>
          </tr>
        </tbody>
      );
    }
  };

  renderTheater = () => {
    const theater = this.props.Seat;
    if (theater.thongTinPhim) {
      return (
        <div className="booking-theater">
          <div className="booking-theater-name">
            {theater.thongTinPhim.tenCumRap}
          </div>
          <div className="booking-theater-address">
            {theater.thongTinPhim.diaChi}
          </div>
        </div>
      );
    }
  };

  handleClick = (event, sttt) => {
    const { danhSachGhe } = this.props.Seat;
    const checking = danhSachGhe.find((item) => {
      return item.stt === sttt;
    });
    if (event.target.checked === true) {
      this.setState({
        checkingSeat: [...this.state.checkingSeat, checking],
      });
    } else {
      const seatUncheck = [...this.state.checkingSeat];
      const getIndex = seatUncheck.findIndex((item) => {
        return item.stt === sttt;
      });
      seatUncheck.splice(getIndex, 1);
      this.setState({
        checkingSeat: seatUncheck,
      });
    }
  };
  seatChecking = () => {
    const getSeat = this.state.checkingSeat;
    if (getSeat) {
      return getSeat.map((item) => {
        return (
          <td className="seat-checking" key={item.maGhe}>
            {item.tenGhe},{" "}
          </td>
        );
      });
    }
  };

  totalTicket = () => {
    const getPrice = this.state.checkingSeat.map((item) => item.giaVe);
    const total = getPrice.reduce((x, y) => x + y, 0);
    return <td className="total-ticket">{total} VNĐ</td>;
  };

  handleBook = () => {
    const showTimeID = this.props.Seat.thongTinPhim.maLichChieu;
    const getUserAccount = JSON.parse(localStorage.getItem("user"));
    const listSeat = this.state.checkingSeat;
    const getState = this.state.datVe;
    const getTicket = listSeat.map((item) => {
      const ticketItem = { maGhe: item.maGhe, giaVe: item.giaVe };
      return ticketItem;
    });
    getState.maLichChieu = showTimeID;
    getState.danhSachVe = getTicket;
    getState.taiKhoanNguoiDung = getUserAccount.taiKhoan;
    this.setState({
      datVe: getState,
    });
    if (this.state.checkingSeat.length < 1) {
      alert("Bạn chưa chọn ghế!");
    } else {
      this.props.booked(this.state.datVe);
    }
  };
  render() {
    return (
      <div className="col-12 booking">
        <div className="container col-9 border form-inline booking-content">
          <div className="col-8 container booking-list-seat ">
            <div>
              <div>{this.renderTheater()}</div>
              <div>
                <CountDownTime />
              </div>
            </div>
            <div className="screen-item">
              <h6>Screen</h6>
            </div>
            <div className="seat-content">
              <div className="seatList">
                <div className="seat-inline">
                  <span>A </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "01")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "02")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "03")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "04")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "05")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "06")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "07")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "08")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "09")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "10")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "11")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "12")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "13")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>B </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "14")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "15")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "16")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "17")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "17")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "19")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "20")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "21")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "22")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "23")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "24")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "25")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "26")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>C </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "27")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "28")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "29")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "30")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "31")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "32")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "33")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "34")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "35")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "36")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "37")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "38")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "39")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>D </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "40")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "41")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "42")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "43")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "44")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "45")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "46")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "47")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "48")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "49")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "50")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "51")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "52")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>E </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "53")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "54")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "55")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "56")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "57")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "58")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "59")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "60")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "61")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "62")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "63")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "64")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "65")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>F </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "66")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "67")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "68")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "69")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "70")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "71")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "72")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "73")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "74")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "75")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "76")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "77")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "78")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>G </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "79")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "80")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "81")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "82")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "83")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "84")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "85")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "86")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "87")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "88")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "89")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "90")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "91")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>H </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "92")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "93")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "94")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "95")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "96")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "97")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "98")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "99")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "100")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "101")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "102")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "103")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "104")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>I </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "105")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "106")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "107")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "108")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "109")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "110")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "111")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "112")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "113")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "114")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "115")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "116")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "117")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="seat-inline">
                  <span>J </span>
                  <div id="ck-button">
                    <label>
                      <input
                        id="1"
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "118")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "119")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "200")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "201")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "202")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "203")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "204")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "205")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "206")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "207")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "208")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "209")}
                      />
                      <span></span>
                    </label>
                  </div>
                  <div id="ck-button">
                    <label>
                      <input
                        type="checkbox"
                        value="1"
                        hidden
                        onChange={(event) => this.handleClick(event, "210")}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 border-left">
            <table className="table">{this.renderMovie()}</table>
            <table>
              <tbody>
                <tr>
                  <td>Ghế chọn:</td>
                  <td>{this.seatChecking()}</td>
                </tr>
                <tr>
                  <td className="movie-text">Tổng tiền:</td>
                  {this.totalTicket()}
                </tr>
              </tbody>
            </table>
            <div>
              <button
                className="btn btn-success btn-block"
                // className={this.state.datVe.length}
                type="submit"
                onClick={() => this.handleBook()}
              >
                BOOKING TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Seat: state.movieReducer.listSeat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList: (id) => {
      dispatch(action.actGetListSeatAPI(id));
    },
    booked: (listBooked) => {
      dispatch(action.actBookedApi(listBooked));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatSelect);
