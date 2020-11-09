import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

class UiAlerts extends Component {
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
                <h4 className="font-size-18">Alerts</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Alerts</li>
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
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Alerts are available for any length of text, as well as an
                    optional dismiss button. For proper styling, for Example,{" "}
                    <strong>color = </strong>{" "}
                    <code className="highlighter-rouge">"success"</code>
                  </p>

                  <div className="">
                    <Alert color="success">
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </Alert>

                    <Alert color="info">
                      <strong>Heads up!</strong> This alert needs your
                      attention, but it's not super important.
                    </Alert>

                    <Alert color="warning">
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </Alert>

                    <Alert color="danger" className="mb-0">
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Link color</h4>
                  <p className="card-title-desc">
                    Use the{" "}
                    <code className="highlighter-rouge">.alert-link</code>{" "}
                    utility className to quickly provide matching colored links
                    within any alert.
                  </p>

                  <div className="">
                    <Alert color="success">
                      <strong>Well done!</strong> You successfully read{" "}
                      <Link to="#" className="alert-link">
                        this important alert message
                      </Link>
                      .
                    </Alert>
                    <Alert color="info">
                      <strong>Heads up!</strong> This{" "}
                      <Link to="#" className="alert-link">
                        alert needs your attention
                      </Link>
                      , but it's not super important.
                    </Alert>
                    <Alert color="warning">
                      <strong>Warning!</strong> Better check yourself, you're{" "}
                      <Link to="#" className="alert-link">
                        not looking too good
                      </Link>
                      .
                    </Alert>
                    <Alert color="danger" className="mb-0">
                      <strong>Oh snap!</strong>{" "}
                      <Link to="#" className="alert-link">
                        Change a few things up
                      </Link>{" "}
                      and try submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Dismissing</h4>
                  <p className="card-title-desc">
                    You can see this in action with a live demo:
                  </p>

                  <div className="">
                    <Alert
                      color="success"
                      isOpen={this.state.alert1}
                      toggle={() =>
                        this.setState({ alert1: !this.state.alert1 })
                      }
                    >
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </Alert>

                    <Alert
                      color="info"
                      isOpen={this.state.alert2}
                      toggle={() =>
                        this.setState({ alert2: !this.state.alert2 })
                      }
                    >
                      <strong>Heads up!</strong> This alert needs your
                      attention, but it's not super important.
                    </Alert>

                    <Alert
                      color="warning"
                      isOpen={this.state.alert3}
                      toggle={() =>
                        this.setState({ alert3: !this.state.alert3 })
                      }
                    >
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </Alert>

                    <Alert
                      color="danger"
                      className="mb-0"
                      isOpen={this.state.alert4}
                      toggle={() =>
                        this.setState({ alert4: !this.state.alert4 })
                      }
                    >
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Additional content</h4>
                  <p className="card-title-desc">
                    Alerts can also contain additional HTML elements like
                    headings and paragraphs.
                  </p>

                  <div className="">
                    <div className="alert alert-success mb-0" role="alert">
                      <h4 className="alert-heading font-18">Well done!</h4>
                      <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                      </p>
                      <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Alerts are available for any length of text, as well as an
                    optional dismiss button. For proper styling, for Example,{" "}
                    <strong>color = </strong>{" "}
                    <code className="highlighter-rouge">"success"</code> with
                    different class as background.
                  </p>

                  <div className="">
                    <Alert color="success" className="bg-success text-white">
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </Alert>

                    <Alert color="info" className="bg-info text-white">
                      <strong> Heads up!</strong> Better check yourself, you're
                      not looking too good.
                    </Alert>

                    <Alert color="warning" className="bg-warning text-white">
                      <strong>Warning!</strong> Better check yourself, you're
                      not looking too good.
                    </Alert>

                    <Alert color="danger" className="bg-danger text-white mb-0">
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </Alert>
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

export default UiAlerts;
