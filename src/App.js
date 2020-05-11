import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Hometemplate from "./Template/HomeTemplate";
import { RouterHome } from "./routes";

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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>{ShowMenuHome(RouterHome)}</Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
