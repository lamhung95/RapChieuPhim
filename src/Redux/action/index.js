import Axios from "axios";
import * as ActionType from "./../constant/ActionType";

export const actGetListMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    }).then((rs) => {
      dispatch(actGetListMovie(rs.data));
    });
  };
};

export const actGetTheaterLogoAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((rs) => {
        dispatch(actGetTheaterLogo(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetTheaterAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
    })
      .then((rs) => {
        dispatch(actGetTheater(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetDetailMovieAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((rs) => {
        // console.log(rs.data)
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetListSeatAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
      `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    })
      .then((rs) => {
        dispatch(actGetListSeat(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actLoginAPI =(user,history)=>{
  return dispatch =>{
    Axios({
      method:"POST",
      url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data:user,
    }).then (rs=>{
      if(rs.data.maLoaiNguoiDung === "QuanTri"){
        localStorage.setItem("userAdmin", JSON.stringify(rs.data));
        history.push("/login/dashboard")
      }
      else {
        alert("Khong co quyen truy cap")
      }
    }).catch(err=>{
      console.log(err.response.data)
    })
  }
}

export const actGetListMovie = (listMovie) => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie,
  };
};

export const actGetTheaterLogo = (listTheaterLogo) => {
  return {
    type: ActionType.GET_THEATER_LOGO,
    data: listTheaterLogo,
  };
};
export const actGetTheater = (listTheater) => {
  return {
    type: ActionType.GET_THEATER,
    data: listTheater,
  };
};

export const actGetDetailMovie = (listDetailMovie) => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: listDetailMovie,
  };
};
export const actGetListSeat =(listSeat)=>{
  return {
    type:ActionType.GET_LIST_SEAT,
    data:listSeat,
  }
}