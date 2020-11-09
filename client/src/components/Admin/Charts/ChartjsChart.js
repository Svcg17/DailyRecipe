import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// import chartJs
import LineChart from "../AllCharts/chartjs/linechart";
import DountChart from "../AllCharts/chartjs/dountchart";
import PieChart from "../AllCharts/chartjs/piechart";
import BarChart from "../AllCharts/chartjs/barchart";
import RadarChart from "../AllCharts/chartjs/radarchart";
import PolarChart from "../AllCharts/chartjs/polarchart";

class ChartjsChart extends Component {
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
                <h4 className="font-size-18">Chartjs Chart</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/#">Charts</Link>
                  </li>
                  <li className="breadcrumb-item active">Chartjs Chart</li>
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
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Line Chart</h4>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">86541</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2541</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">102030</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <LineChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Bar Chart</h4>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2541</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">84845</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">12001</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>

                  <BarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Pie Chart</h4>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2536</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">69421</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">89854</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>

                  <PieChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Donut Chart</h4>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">9595</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">36524</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">62541</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>

                  <DountChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Polar Chart</h4>
                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">4852</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">3652</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">85412</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>
                  <PolarChart />
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Radar Chart</h4>

                  <Row className="justify-content-center">
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">694</h5>
                        <p className="text-muted">Activated</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">55210</h5>
                        <p className="text-muted">Pending</p>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">489498</h5>
                        <p className="text-muted">Deactivated</p>
                      </div>
                    </Col>
                  </Row>

                  <RadarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ChartjsChart;
