import Home from "./Page/Home/Home";
import CalendarScreening from "./Page/Home/CalendarScreening";
import News from "./Page/Home/News";
import Apps from "./Page/Home/Apps";
import TheaterList from "./Page/Home/TheaterList";
import DetailMovie from "./Page/Home/DetailMovie";
import SeatSelect from "./Page/Home/BookingTicket/SeatSelect";

// import Login from "./Page/Home/Login";

import DashBoard from "./Page/Admin/DashBoard";

const RouterHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/CalendarScreening",
    exact: false,
    component: CalendarScreening,
  },
  {
    path: "/theater",
    exact: false,
    component: TheaterList,
  },
  {
    path: "/news",
    exact: false,
    component: News,
  },
  {
    path: "/apps",
    exact: false,
    component: Apps,
  },
  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie,
  },
  {
    path: "/booking-ticket/:id",
    exact: false,
    component: SeatSelect,
  },
];

const RouterAddmin = [
  {
    path: "/login/dashboard",
    exact: false,
    component: DashBoard,
  },
];

export { RouterHome, RouterAddmin };
