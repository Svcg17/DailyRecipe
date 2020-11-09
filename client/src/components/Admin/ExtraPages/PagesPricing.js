import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class PagesPricing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Pricing</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Extra Pages</Link>
                  </li>
                  <li className="breadcrumb-item active">Pricing</li>
                </ol>
              </div>
            </Col>

            <Col sm={6}>
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={3} md={6}>
              <Card className="pricing-box">
                <CardBody className="p-4">
                  <div className="media mt-2">
                    <i className="ion ion-ios-airplane h2 align-self-center"></i>
                    <div className="media-body text-right">
                      <h4 className="mt-0">Starter</h4>
                      <p className="text-muted mb-0">Sed ut neque unde</p>
                    </div>
                  </div>
                  <div className="pricing-features mt-5 pt-2">
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> Free
                      Live Support
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i>{" "}
                      Unlimited User
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> No
                      Time Tracking
                    </p>
                    <p>
                      <i className="mdi mdi-close text-primary mr-2"></i> Free
                      Setup
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <h1 className="mb-0">
                      <sup>
                        <small>$</small>
                      </sup>
                      19/<span className="font-size-16">Per month</span>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="#"
                      className="btn btn-primary btn-block waves-effect waves-light"
                    >
                      Sign up Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="pricing-box">
                <CardBody className="p-4">
                  <div className="media mt-2">
                    <i className="ion ion-ios-trophy h2 align-self-center"></i>
                    <div className="media-body text-right">
                      <h4 className="mt-0">Professional</h4>
                      <p className="text-muted mb-0">Sed ut neque unde</p>
                    </div>
                  </div>
                  <div className="pricing-features mt-5 pt-2">
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> Free
                      Live Support
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i>{" "}
                      Unlimited User
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> No
                      Time Tracking
                    </p>
                    <p>
                      <i className="mdi mdi-close text-primary mr-2"></i> Free
                      Setup
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <h1 className="mb-0">
                      <sup>
                        <small>$</small>
                      </sup>
                      29/<span className="font-size-16">Per month</span>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="#"
                      className="btn btn-primary btn-block waves-effect waves-light"
                    >
                      Sign up Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="pricing-box">
                <CardBody className="p-4">
                  <div className="media mt-2">
                    <i className="ion ion-ios-umbrella h2 align-self-center"></i>
                    <div className="media-body text-right">
                      <h4 className="mt-0">Enterprise</h4>
                      <p className="text-muted mb-0">Sed ut neque unde</p>
                    </div>
                  </div>
                  <div className="pricing-features mt-5 pt-2">
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> Free
                      Live Support
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i>{" "}
                      Unlimited User
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> No
                      Time Tracking
                    </p>
                    <p>
                      <i className="mdi mdi-close text-primary mr-2"></i> Free
                      Setup
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <h1 className="mb-0">
                      <sup>
                        <small>$</small>
                      </sup>
                      39/<span className="font-size-16">Per month</span>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="#"
                      className="btn btn-primary btn-block waves-effect waves-light"
                    >
                      Sign up Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3} md={6}>
              <Card className="pricing-box">
                <CardBody className="p-4">
                  <div className="media mt-2">
                    <i className="ion ion-ios-cube h2 align-self-center"></i>
                    <div className="media-body text-right">
                      <h4 className="mt-0">Unlimited</h4>
                      <p className="text-muted mb-0">Sed ut neque unde</p>
                    </div>
                  </div>
                  <div className="pricing-features mt-5 pt-2">
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> Free
                      Live Support
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i>{" "}
                      Unlimited User
                    </p>
                    <p>
                      <i className="mdi mdi-check text-primary mr-2"></i> No
                      Time Tracking
                    </p>
                    <p>
                      <i className="mdi mdi-close text-primary mr-2"></i> Free
                      Setup
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <h1 className="mb-0">
                      <sup>
                        <small>$</small>
                      </sup>
                      49/<span className="font-size-16">Per month</span>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="#"
                      className="btn btn-primary btn-block waves-effect waves-light"
                    >
                      Sign up Now
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesPricing;
