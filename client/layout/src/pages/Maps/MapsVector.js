import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Vector from "./Vectormap";

class MapsVector extends Component {
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
                <h4 className="font-size-18">Vector Map</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Maps</Link>
                  </li>
                  <li className="breadcrumb-item active">Vector Map</li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <div className="row">
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">World Map</h4>
                  <p className="card-title-desc">Example of vector map.</p>

                  <div id="world-map-markers" class="vector-map-height">
                    <Vector
                      value="world_mill"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">USA Map</h4>
                  <p className="card-title-desc">Example of vector map.</p>

                  <div id="usa" class="vector-map-height">
                    <Vector
                      value="us_aea"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </div>

          <div className="row">
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Canada Map</h4>
                  <p className="card-title-desc">Example of vector map.</p>

                  <div id="uk" class="vector-map-height">
                    <Vector
                      value="ca_lcc"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Asia Vector Map</h4>
                  <p className="card-title-desc">Example of vector map.</p>

                  <div id="chicago" class="vector-map-height">
                    <Vector
                      value="asia_mill"
                      width="500"
                      color="rgb(98, 110, 212)"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MapsVector;
