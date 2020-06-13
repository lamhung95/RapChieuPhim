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
//==================RENDER THEATER=======================
export const actGetTheaterAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar",
    })
      .then((rs) => {
        dispatch(actGetTheater(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetTheaterCGVAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=cgv",
    })
      .then((rs) => {
        dispatch(actGetTheaterCGV(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetTheaterCineStarAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=CineStar",
    })
      .then((rs) => {
        dispatch(actGetTheaterCineStar(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetTheaterGalaxyAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=Galaxy",
    })
      .then((rs) => {
        dispatch(actGetTheaterGalaxy(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetTheaterLotteAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=LotteCinima",
    })
      .then((rs) => {
        dispatch(actGetTheaterLotteAPI(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetTheaterMegaGSAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=MegaGS",
    })
      .then((rs) => {
        dispatch(actGetTheaterMegaGS(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//=================================================================
export const actGetCinemaMovieShowAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
    })
      .then((rs) => {
        dispatch(actgetCinemaMovieShow(rs.data));
        console.log(rs.data)
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
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    })
      .then((rs) => {
        dispatch(actGetListSeat(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actLoginAPI = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        localStorage.setItem("user", JSON.stringify(rs.data));
        history.push("/");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

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
//==============
export const actGetTheater = (listTheater) => {
  return {
    type: ActionType.GET_THEATER,
    data: listTheater,
  };
};
export const actGetTheaterCGV = (listTheaterCGV) => {
  return {
    type: ActionType.GET_THEATER_CGV,
    data: listTheaterCGV,
  };
};
export const actGetTheaterCineStar = (listTheaterCineStar) => {
  return {
    type: ActionType.GET_THEATER_CINESTAR,
    data: listTheaterCineStar,
  };
};
export const actGetTheaterGalaxy = (listTheaterGalaxy) => {
  return {
    type: ActionType.GET_THEATER_GALAXY,
    data: listTheaterGalaxy,
  };
};
export const actGetTheaterLotte = (listTheaterLotte) => {
  return {
    type: ActionType.GET_THEATER_LOTTE,
    data: listTheaterLotte,
  };
};
export const actGetTheaterMegaGS = (listTheaterMegaGS) => {
  return {
    type: ActionType.GET_THEATER_MAGAGS,
    data: listTheaterMegaGS,
  };
};
//====================
export const actgetCinemaMovieShow = (listCinemaMovieShow) => {
  return {
    type: ActionType.GET_CINEMA_MOVIE_SHOW,
    data: listCinemaMovieShow,
  };
};
export const actGetDetailMovie = (listDetailMovie) => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: listDetailMovie,
  };
};
export const actGetListSeat = (listSeat) => {
  return {
    type: ActionType.GET_LIST_SEAT,
    data: listSeat,
  };
};
