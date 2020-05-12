import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as action from "./../../../Redux/action";
// import TicketSelect from "./TicketSelect";
// import "./../../../SASS/Booking.scss";
import "./../../../SASS/CheckboxBooking/seat-item.scss";

class SeatSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkingSeat: [],
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
            <td>TÊN PHIM:</td>
            <td>{movie.thongTinPhim.tenPhim}</td>
          </tr>
          <tr>
            <td>Ngày chiếu:</td>
            <td>{movie.thongTinPhim.ngayChieu}</td>
          </tr>
          <tr>
            <td>Giờ chiếu:</td>
            <td>{movie.thongTinPhim.gioChieu}</td>
          </tr>
          <tr>
            <td>Cụm rap:</td>
            <td>{movie.thongTinPhim.tenCumRap}</td>
          </tr>
          <tr>
            <td>Rạp:</td>
            <td>{movie.thongTinPhim.tenRap}</td>
          </tr>
        </tbody>
      );
    }
  };
  handleClick = (stt) => {
    const { danhSachGhe } = this.props.Seat;
    const checking = danhSachGhe.find((item) => {
      return item.stt === stt;
    });
    if (checking) {
      this.setState({
        checkingSeat: [...this.state.checkingSeat, checking],
      });
    }
    // console.log(this.state.checkingSeat);
  };
  seatChecking = () => {
    const getSeat = this.state.checkingSeat;
    return getSeat.map((item) => {
      return <td key={item.maGhe}>{item.tenGhe}</td>;
    });
  };
  totalTicket = () => {
    const getPrice = this.state.checkingSeat.map((item) => item.giaVe);
    const total = getPrice.reduce((x,y)=>x+y,0)
    return (
    <td>{total}</td>
    )
  };

  render() {
    return (
      <div className="container">
        <div className="col-12 border form-inline">
          <div className="col-8 ">
            <div className="form-check-inline">
              <span>A </span>
              <div id="ck-button">
                <label>
                  <input
                    id="1"
                    type="checkbox"
                    value="1"
                    hidden
                    onChange={() => this.handleClick("01")}
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
                    onChange={() => this.handleClick("02")}
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
                    onChange={() => this.handleClick("03")}
                  />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
              <div id="ck-button">
                <label>
                  <input type="checkbox" value="1" hidden />
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          <div className="col-4 border-left">
            <table className="table">{this.renderMovie()}</table>
            <table>
              <tbody>
                <tr>
                  <td>Ghế chọn:</td>
                  {this.seatChecking()}
                </tr>
                <tr>
                  <td>Tổng tiền:</td>
                  {this.totalTicket()}
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className="btn btn-success btn-block" type="submit">
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatSelect);
