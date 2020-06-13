import * as ActionType from "../constant/ActionType";

let initialState = {
  listMovie: [],
  listTheaterLogo: [],
  listTheater: [],
  listDetailMovie: {},
  listSeat:{},
  login:{
    isLogin:false,
    tenTaiKhoan:"",
  }
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    case ActionType.GET_THEATER_LOGO:
      state.listTheaterLogo = action.data;
      return { ...state };
    case ActionType.GET_THEATER:
      state.listTheater = action.data;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.listDetailMovie = action.data;
      return { ...state };
      case ActionType.GET_LIST_SEAT:
        state.listSeat=action.data;
        return {...state};
    default:
      return { ...state };
  }
};
export default movieReducer;
