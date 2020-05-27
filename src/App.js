import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hometemplate from "./Template/HomeTemplate";
import AdminTemplate from "./Template/AdminTemplate";
import Login from "./Page/Home/Login";
import { RouterHome, RouterAddmin } from "./routes";

const ShowMenuHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Hometemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  }
};
const showMenuAdmin = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {ShowMenuHome(RouterHome)}
          {showMenuAdmin(RouterAddmin)}
          <Route exact={false} path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
