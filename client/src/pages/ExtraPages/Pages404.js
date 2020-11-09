import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// img
import errorImg from "../../assets/images/error.png";

class Pages404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="authentication-bg d-flex align-items-center pb-0 vh-100">
          <div className="content-center w-100">
            <div className="container">
              <Card className="mo-mt-2">
                <CardBody>
                  <Row className="align-items-center">
                    <Col lg="4" className="ml-auto">
                      <div className="ex-page-content">
                        <h1 className="text-dark display-1 mt-4">404!</h1>
                        <h4 className="mb-4">Sorry, page not found</h4>
                        <p className="mb-5">
                          It will be as simple as Occidental in fact, it will be
                          Occidental to an English person
                        </p>
                        <Link
                          className="btn btn-primary mb-5 waves-effect waves-light"
                          to="/"
                        >
                          <i className="mdi mdi-home"></i> Back to Dashboard
                        </Link>
                      </div>
                    </Col>
                    <Col lg="5" className="mx-auto">
                      <img
                        src={errorImg}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pages404;
