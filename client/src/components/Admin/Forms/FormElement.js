import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody } from "reactstrap";

class FormElement extends Component {
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
                <h4 className="font-size-18">Form Elements</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Forms</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Elements</li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <Row>
            <div className="col-12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Textual inputs</h4>
                  <p className="card-title-desc">
                    Here are examples of{" "}
                    <code className="highlighter-rouge">.form-control</code>{" "}
                    applied to each textual HTML5{" "}
                    <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
                    <code className="highlighter-rouge">type</code>.
                  </p>

                  <Row className="form-group">
                    <label
                      htmlFor="example-text-input"
                      className="col-sm-2 col-form-label"
                    >
                      Text
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Artisanal kale"
                        id="example-text-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-search-input"
                      className="col-sm-2 col-form-label"
                    >
                      Search
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="search"
                        defaultValue="How do I shoot web"
                        id="example-search-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-email-input"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="email"
                        defaultValue="bootstrap@example.com"
                        id="example-email-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-url-input"
                      className="col-sm-2 col-form-label"
                    >
                      URL
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://getbootstrap.com"
                        id="example-url-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-tel-input"
                      className="col-sm-2 col-form-label"
                    >
                      Telephone
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="tel"
                        defaultValue="1-(555)-555-5555"
                        id="example-tel-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-password-input"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="password"
                        defaultValue="hunter2"
                        id="example-password-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-number-input"
                      className="col-sm-2 col-form-label"
                    >
                      Number
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="42"
                        id="example-number-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-datetime-local-input"
                      className="col-sm-2 col-form-label"
                    >
                      Date and time
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="datetime-local"
                        defaultValue="2011-08-19T13:45:00"
                        id="example-datetime-local-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-date-input"
                      className="col-sm-2 col-form-label"
                    >
                      Date
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="date"
                        defaultValue="2011-08-19"
                        id="example-date-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-month-input"
                      className="col-sm-2 col-form-label"
                    >
                      Month
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="month"
                        defaultValue="2011-08"
                        id="example-month-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-week-input"
                      className="col-sm-2 col-form-label"
                    >
                      Week
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="week"
                        defaultValue="2011-W33"
                        id="example-week-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-time-input"
                      className="col-sm-2 col-form-label"
                    >
                      Time
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="time"
                        defaultValue="13:45:00"
                        id="example-time-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-color-input"
                      className="col-sm-2 col-form-label"
                    >
                      Color
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control"
                        type="color"
                        defaultValue="#02a499"
                        id="example-color-input"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label className="col-sm-2 col-form-label">Select</label>
                    <Col sm={10}>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label className="col-sm-2 col-form-label">
                      Custom Select
                    </label>
                    <Col sm={10}>
                      <select className="custom-select">
                        <option defaultValue>Open this select menu</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <label
                      htmlFor="example-text-input-lg"
                      className="col-sm-2 col-form-label"
                    >
                      Large
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder=".form-control-lg"
                        id="example-text-input-lg"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group mb-0">
                    <label
                      htmlFor="example-text-input-sm"
                      className="col-sm-2 col-form-label"
                    >
                      Small
                    </label>
                    <Col sm={10}>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder=".form-control-sm"
                        id="example-text-input-sm"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default FormElement;
