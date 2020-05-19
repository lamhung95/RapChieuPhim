import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/action";
import { Link } from "react-router-dom";

class DetailMovie extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailMovie(id);
    console.log(this.props)
  }
 
  renderHTML = () => {
    const { movie } = this.props;
    console.log(this.props)
    if (movie.lichChieu) {
      return movie.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>

            <td>
              <Link to={`/booking-ticket/${item.maLichChieu}`}>
                <button className="btn btn-success">Chọn ghế</button>
              </Link>
            </td>
          </tr>
        );
      });
    }
  };
  componentWillUnmount() {
    this.props.resetDetailMovie();
  }
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={movie.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên Phim</td>
                  <td>{movie.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{movie.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Cụm Rạp</th>
                  <th>Tên Rạp</th>
                  <th>Ngày Chiếu</th>
                  <th>Giờ Chiếu</th>
                </tr>
              </thead>
              <tbody>{this.renderHTML()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieReducer.listDetailMovie,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(action.actGetDetailMovieAPI(id));
    },
    resetDetailMovie: () => {
      dispatch(action.actGetDetailMovie({}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
