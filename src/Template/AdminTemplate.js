import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const AdminLayout = (props) => {
  return (
    <div>
      <div>NAVBAR ADMIN</div>
      {props.children}
    </div>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("user")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
