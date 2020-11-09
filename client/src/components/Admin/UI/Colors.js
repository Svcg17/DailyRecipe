import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";

class UiColors extends Component {
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
                <h4 className="font-size-18">Colors</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Colors</li>
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
              <Card>
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-primary">
                    <h5 className="my-2 text-white">#626ed4</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-primary text-center font-size-18">
                    Primary
                  </h5>
                </div>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-success">
                    <h5 className="my-2 text-white">#02a499</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-success text-center font-size-18">
                    Success
                  </h5>
                </div>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-info">
                    <h5 className="my-2 text-white">#38a4f8</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-info text-center font-size-18">
                    Info
                  </h5>
                </div>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-warning">
                    <h5 className="my-2 text-white">#f8b425</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-warning text-center font-size-18">
                    Warning
                  </h5>
                </div>
              </Card>
            </Col>
          </Row>

          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-danger">
                    <h5 className="my-2 text-white">#ec4561</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-danger text-center font-size-18">
                    Danger
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-dark">
                    <h5 className="my-2 text-white">#343a40</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-dark text-center font-size-18">
                    Dark
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="color-box p-4 rounded bg-secondary">
                    <h5 className="my-2 text-white">#6c757d</h5>
                  </div>
                  <h5 className="mb-0 mt-4 text-muted text-center font-size-18">
                    Secondary
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiColors;
