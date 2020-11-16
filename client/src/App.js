import React, { useState, useEffect } from "react";
import { Cookies } from 'react-cookie';
import { Switch, useHistory, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import AdminContext from './context/AdminContext';

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

// Import Firebase Configuration file
import { initFirebaseBackend } from "./helpers/authUtils";
import ViewMeals from "./components/Admin/Meals/ViewMeals";
import EditMeal from "./components/Admin/Meals/EditMeal";

const firebaseConfig = {
  apiKey: "AIzaSyBUctS2mlPY58Y-E1AypSUz7OO0zhlBLC8",
  authDomain: "themesbrand-admin.firebaseapp.com",
  databaseURL: "https://themesbrand-admin.firebaseio.com",
  projectId: "themesbrand-admin",
  storageBucket: "themesbrand-admin.appspot.com",
  messagingSenderId: "427667224207",
  appId: "1:427667224207:web:3b97af80b8b4824619a2fa",
  measurementId: "G-S4LDYNV7FY"
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

const App = () => {
  const [state, setState] = useState();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
      const c = new Cookies();
      const cookie = c.get('token');
      if (cookie) {
        console.log('set login cookie', cookie);
        setAdmin(cookie);
      }
  }, []);

  /**
   * Returns the layout
   */
  const getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (state) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  const Layout = getLayout();
  const history = useHistory();

  return (
    <React.Fragment>
      <Router history={history}>
        <AdminContext.Provider value={{ admin, setAdmin }}>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
              />
            ))}

            {authProtectedRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={true}
              />
            ))}
          </Switch>
        </AdminContext.Provider>
      </Router>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    layout: state.Layout
  };
};

export default connect(mapStateToProps, null)(App);
