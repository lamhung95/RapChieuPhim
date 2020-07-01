import Axios from "axios";
import * as ActionType from "./../constant/ActionType";
import { urlAPI } from "./urlAPI";

export const actGetListMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `${urlAPI}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    }).then((rs) => {
      dispatch(actGetListMovie(rs.data));
    });
  };
};

export const actGetTheaterLogoAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `${urlAPI}/QuanLyRap/LayThongTinHeThongRap`,
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
      url: `${urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar`,
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
      url: `${urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=cgv`,
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
      url: `${urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=CineStar`,
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
      url: `${urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=Galaxy`,
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
      url: `${urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=LotteCinima`,
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
      url: `${urlAPI}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=MegaGS`,
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
export const actGetCinemaMovieShowAPI = (id) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `${urlAPI}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
    })
      .then((rs) => {
        dispatch(actgetCinemaMovieShow(rs.data));
        // console.log(rs.data)
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
      url: `${urlAPI}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
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
      url: `${urlAPI}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    })
      .then((rs) => {
        dispatch(actGetListSeat(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actBookedApi = (listBooked) => {
  const userAccount = JSON.parse(localStorage.getItem("user"));
  return (dispatch) => {
    Axios({
      method: "POST",
      url: `${urlAPI}/QuanLyDatVe/DatVe`,
      headers: {
        Authorization: `Bearer ${userAccount.accessToken}`,
      },
      data: listBooked,
    })
      .then((rs) => {
        alert(rs.data);
        window.location.reload();
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
      url: `${urlAPI}/QuanLyNguoiDung/DangNhap`,
      data: user,
    })
      .then((rs) => {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(rs.data.accessToken)
        );
        localStorage.setItem("user", JSON.stringify(rs.data));

        history.push("/");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actGetAccountsAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `${urlAPI}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      // data:current,
    })
      .then((rs) => {
        dispatch(actGetAccounts(rs.data));
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
};
export const actAdduserAPI = (user) => {
  const userAccount = JSON.parse(localStorage.getItem("user"));
  return () => {
    Axios({
      method: "POST",
      url: `${urlAPI}/QuanLyNguoiDung/ThemNguoiDung`,
      data: user,
      headers: {
        Authorization: `Bearer ${userAccount.accessToken}`,
      },
    })
      .then((rs) => {
        console.log(rs.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
export const actUpdateUserAPI = (user) => {
  const userAccount = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return () => {
    Axios({
      method: "PUT",
      url: `${urlAPI}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data: user,
      headers: {
        Authorization: `Bearer ${userAccount.accessToken}`,
      },
    })
      .then((rs) => {
        console.log(rs.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const actDeleteUser = (taiKhoan) => {
  const userAccount = JSON.parse(localStorage.getItem("user"));
  return () => {
    Axios({
      method: "DELETE",
      url: `${urlAPI}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      headers: {
        Authorization: `Bearer ${userAccount.accessToken}`,
      },
    });
  };
};

export const actRegistereAccountAPI = (user) => {
  return ()=> {
    Axios({
      method: "POST",
      url: `${urlAPI}/api/QuanLyNguoiDung/DangKy`,
      data: user,
    })
      .then(rs=>{
        console.log(rs.data)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

//=========================////////////////

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
//===========
export const actGetAccounts = (listAccounts) => {
  return {
    type: ActionType.GET_ACCOUNTS,
    data: listAccounts,
  };
};
