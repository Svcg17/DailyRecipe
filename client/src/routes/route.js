import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AdminContext from '../context/AdminContext';
//AUTH related methods
// import { getFirebaseBackend } from "../helpers/authUtils";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const { admin } = useContext(AdminContext);
  
  return (
    <Route
      {...rest}
      render={props => {
        // const fireBaseBackend = getFirebaseBackend();

        // if (isAuthProtected && !fireBaseBackend.getAuthenticatedUser()) {
        if (isAuthProtected && !admin) {
          return (
            <Redirect
              to={{ pathname: "/admin/login", state: { from: props.location } }}
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
  )
};

export default AppRoute;
