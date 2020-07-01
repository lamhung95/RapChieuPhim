import React from "react";
import Navbar from "./../Component/Navbar";
import Footer from "./../Page/Home/Footer";
import "./../SASS/Home-template.scss";
import { Route } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
