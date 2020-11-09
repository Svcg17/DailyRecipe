import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import maintenanceImg from "../../assets/images/maintenance.png";
import logoDark from "../../assets/images/logo-dark.png";

class PagesMaintenance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2"></i>
          </Link>
        </div>

        <section className="my-5">
          <div className="container-alt container">
            <Row>
              <div className="col-12 text-center">
                <div className="home-wrapper mt-5">
                  <div className="mb-4">
                    <img src={logoDark} alt="logo" height="22" />
                  </div>

                  <div className="maintenance-img">
                    <img
                      src={maintenanceImg}
                      alt=""
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <h3 className="mt-4">Site is Under Maintenance</h3>
                  <p>Please check back in sometime.</p>

                  <Row>
                    <Col md="4" className="text-center">
                      <Card className="mt-4 maintenance-box">
                        <CardBody>
                          <i className="mdi mdi-airplane-takeoff h2"></i>
                          <h6 className="text-uppercase mt-3">
                            Why is the Site Down?
                          </h6>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="4" className="text-center">
                      <Card className="mt-4 maintenance-box">
                        <CardBody>
                          <i className="mdi mdi-clock-alert h2"></i>
                          <h6 className="text-uppercase mt-3">
                            What is the Downtime?
                          </h6>
                          <p className="text-muted mt-3">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classNameical.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="4" className="text-center">
                      <Card className="mt-4 maintenance-box">
                        <CardBody>
                          <i className="mdi mdi-email h2"></i>
                          <h6 className="text-uppercase mt-3">
                            Do you need Support?
                          </h6>
                          <p className="text-muted mt-3">
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embar..{" "}
                            <Link
                              to="mailto:no-reply@domain.com"
                              className="text-decoration-underline"
                            >
                              no-reply@domain.com
                            </Link>
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PagesMaintenance;
