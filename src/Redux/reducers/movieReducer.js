import * as ActionType from "../constant/ActionType";

let initialState = {
  listMovie: [],
  listTheaterLogo: [],
  //=======
  listTheater: [],
  listTheaterCGV: [],
  listTheaterCineStar: [],
  listTheaterGalaxy: [],
  listTheaterLotte: [],
  listTheaterMegaGS: [],
  //=======
  listCinemaMovieShow: [],
  listDetailMovie: {},
  listSeat: {},
  //======
  listAccounts: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    case ActionType.GET_THEATER_LOGO:
      state.listTheaterLogo = action.data;
      return { ...state };
    //============
    case ActionType.GET_THEATER:
      state.listTheater = action.data;
      return { ...state };
    case ActionType.GET_THEATER_CGV:
      state.listTheaterCGV = action.data;
      return { ...state };
    case ActionType.GET_THEATER_CINESTAR:
      state.listTheaterCineStar = action.data;
      return { ...state };
    case ActionType.GET_THEATER_GALAXY:
      state.listTheaterGalaxy = action.data;
      return { ...state };
    case ActionType.GET_THEATER_LOTTE:
      state.listTheaterLotte = action.data;
      return { ...state };
    case ActionType.GET_THEATER_MAGAGS:
      state.listTheaterMegaGS = action.data;
      return { ...state };
    //================
    case ActionType.GET_CINEMA_MOVIE_SHOW:
      state.listCinemaMovieShow = action.data;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.listDetailMovie = action.data;
      return { ...state };
    case ActionType.GET_LIST_SEAT:
      state.listSeat = action.data;
      return { ...state };
    default:
      return { ...state };
    //========
    case ActionType.GET_ACCOUNTS:
      state.listAccounts = action.data;
      return { ...state };
  }
};
export default movieReducer;
