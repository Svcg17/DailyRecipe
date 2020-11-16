import React, { Component, useContext } from "react";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import Loader from "../../../components/Loader";
// actions
import { loginUser } from "../../../store/actions";

// import images
import logoSm from "../../../assets/images/logo-sm.png";

import AdminContext from '../../../context/AdminContext';
import axios from 'axios';

const Login = ({ history }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {};

  //   // handleValidSubmit
  //   this.handleValidSubmit = this.handleValidSubmit.bind(this);
  // }

  // handleValidSubmit
  // const handleValidSubmit = (event, values) => {
  //   this.props.loginUser(values, this.props.history);
  // }
  const { setAdmin } = useContext(AdminContext);
  const handleValidSubmit = (event, values) => {
    axios.post(`${process.env.REACT_APP_HOST}/api/auth/adminLogin`, values).then(res => {
      if(res.status != 200) console.log('error logging in', res);
      else {
        setAdmin(res.data.token);
        history.push('/admin/meals');
      }
    });
  };

    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2"></i>
          </Link>
        </div>
        <div className="account-pages my-5 pt-5">
          <div className="container">
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <div className="position-relative">
                  {/* {this.props.loading ? <Loader /> : null} */}

                  <Card className="overflow-hidden">
                    <div className="bg-primary">
                      <div className="text-primary text-center p-4">
                        <h5 className="text-white font-size-20">
                          Welcome Back !
                        </h5>
                        <p className="text-white-50">
                          Sign in to continue to Veltrix.
                        </p>
                        <Link to="/admin/dashboard" className="logo logo-admin">
                          <img src={logoSm} height="24" alt="logo" />
                        </Link>
                      </div>
                    </div>

                    <CardBody className="p-4">
                      <div className="p-3">
                        <AvForm
                          className="form-horizontal mt-4"
                          onValidSubmit={handleValidSubmit}
                        >
                          {/* {this.props.error ? (
                            <Alert color="danger">{this.props.error}</Alert>
                          ) : null} */}

                          <div className="form-group">
                            <AvField
                              name="email"
                              label="Email"
                              className="form-control"
                              // value="admin@themesbrand.com"
                              placeholder="Enter email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <AvField
                              name="password"
                              label="Password"
                              type="password"
                              required
                              // value="123456"
                              placeholder="Enter Password"
                            />
                          </div>

                          <Row className="form-group">
                            <Col sm={6}>
                              &nbsp;
                              {/* <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                                                        </div> */}
                            </Col>
                            <Col sm={6} className="text-right">
                              <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                              >
                                Log In
                              </button>
                            </Col>
                          </Row>
                          <Row className="form-group mt-2 mb-0">
                            <div className="col-12 mt-4">
                              <Link to="/admin/forget-password">
                                <i className="mdi mdi-lock"></i> Forgot your
                                password?
                              </Link>
                            </div>
                          </Row>
                        </AvForm>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="mt-5 text-center">
                  <p>
                    Don't have an account ?{" "}
                    <Link
                      to="/admin/pages-register"
                      className="font-weight-medium text-primary"
                    >
                      {" "}
                      Signup now{" "}
                    </Link>{" "}
                  </p>
                  <p className="mb-0">
                    © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
};

// const mapStatetoProps = state => {
//   const { error, loading } = state.Login;
//   return { error, loading };
// };

// export default withRouter(connect(mapStatetoProps, { loginUser })(Login));

export default Login;
