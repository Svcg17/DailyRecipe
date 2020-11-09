import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Sparklines,
  SparklinesLine,
  SparklinesBars,
  SparklinesSpots,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesCurve
} from "react-sparklines";

class SarklineChart extends Component {
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
                <h4 className="font-size-18">Sparkline Chart</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Charts</Link>
                  </li>
                  <li className="breadcrumb-item active">Sparkline Chart</li>
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
            <Col sm={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Spots Chart</h4>
                  <Sparklines
                    height={100}
                    data={[5, 10, 5, 20, 18, 17, 29, 10, 18]}
                    margin={6}
                  >
                    <SparklinesLine
                      style={{
                        strokeWidth: 1,
                        stroke: "#336aff",
                        fill: "none"
                      }}
                    />
                    <SparklinesSpots
                      size={4}
                      style={{
                        stroke: "#336aff",
                        strokeWidth: 1,
                        fill: "white"
                      }}
                    />
                  </Sparklines>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Bar Chart</h4>
                  <div className="text-center">
                    <Sparklines
                      height={100}
                      data={[5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 4, 7, 10]}
                    >
                      <SparklinesBars
                        style={{ fill: "#02a499" }}
                        barWidth={5}
                      />
                    </Sparklines>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardBody className="analytics-info">
                  <h4 className="card-title">Line Chart</h4>
                  <Sparklines
                    height={100}
                    data={[0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10]}
                  >
                    <SparklinesLine
                      color="#3c4ccf"
                      lineWidth={1}
                      style={{ fill: "transparent" }}
                    />
                  </Sparklines>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Composite Bar Chart</h4>
                  <Sparklines
                    height={100}
                    data={[5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10]}
                  >
                    <SparklinesCurve
                      style={{
                        strokeWidth: 0.8,
                        stroke: "#02a499",
                        fill: "transparent"
                      }}
                    />
                    <SparklinesBars style={{ fill: "#3c4ccf" }} barWidth={8} />
                  </Sparklines>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Reference Line Charts</h4>
                  <Sparklines
                    height={100}
                    data={[
                      5,
                      10,
                      5,
                      20,
                      18,
                      17,
                      29,
                      10,
                      18,
                      15,
                      20,
                      18,
                      17,
                      29,
                      10,
                      18
                    ]}
                  >
                    <SparklinesBars
                      style={{ fill: "#02a499", fillOpacity: ".5" }}
                    />
                    <SparklinesReferenceLine />
                  </Sparklines>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="bg-success mb-4">
                <CardBody>
                  <h4 className="card-title text-white">Real World Chart</h4>
                  <Sparklines
                    height={82}
                    data={[
                      4,
                      6,
                      7,
                      7,
                      4,
                      3,
                      2,
                      1,
                      4,
                      4,
                      5,
                      6,
                      3,
                      4,
                      5,
                      8,
                      7,
                      6,
                      9,
                      3,
                      2,
                      4,
                      1,
                      5,
                      6,
                      4,
                      3,
                      7
                    ]}
                    width={200}
                  >
                    <SparklinesLine
                      style={{ stroke: "#fff", fill: "transparent" }}
                    />
                    <SparklinesSpots />
                    <SparklinesNormalBand
                      style={{ fill: "#336aff", fillOpacity: 1 }}
                    />
                  </Sparklines>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Normal Band</h4>
                  <Sparklines
                    height={80}
                    data={[5, 10, 5, 20, 18, 17, 29, 10, 18]}
                  >
                    <SparklinesLine
                      style={{
                        strokeWidth: 0.8,
                        stroke: "#6d60b0",
                        fill: "transparent"
                      }}
                    />
                    <SparklinesNormalBand />
                    <SparklinesReferenceLine type="mean" />
                  </Sparklines>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default SarklineChart;
