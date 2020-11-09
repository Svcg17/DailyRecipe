import React from "react";
import { Route, Redirect } from "react-router-dom";

//AUTH related methods
import { getFirebaseBackend } from "../helpers/authUtils";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const fireBaseBackend = getFirebaseBackend();

      if (isAuthProtected && !fireBaseBackend.getAuthenticatedUser()) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;
