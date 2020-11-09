import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// Charts
import Gauge from "../AllCharts/echart/gaugechart";
import Line from "../AllCharts/echart/linechart";
import LineBar from "../AllCharts/echart/linebarchart";
import Doughnut from "../AllCharts/echart/doughnutchart";
import Pie from "../AllCharts/echart/piechart";
import Scatter from "../AllCharts/echart/scatterchart";
import Bubble from "../AllCharts/echart/bubblechart";
import Candlestick from "../AllCharts/echart/candlestickchart";

class EChartChart extends Component {
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
                  <li className="breadcrumb-item active">E Charts</li>
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
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Line Chart</h4>
                  <div id="line-chart" className="e-chart">
                    <Line />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Mix Line-Bar</h4>
                  <div id="mix-line-bar" className="e-chart">
                    <LineBar />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Doughnut Chart</h4>
                  <div id="doughnut-chart" className="e-chart">
                    <Doughnut />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Pie Chart</h4>
                  <div id="pie-chart" className="e-chart">
                    <Pie />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Scatter Chart</h4>
                  <div id="scatter-chart" className="e-chart">
                    <Scatter />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Bubble Chart</h4>
                  <div id="bubble-chart" className="e-chart">
                    <Bubble />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Candlestick Chart</h4>
                  <div id="candlestick-chart" className="e-chart">
                    <Candlestick />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title mb-4">Gauge Chart</h4>
                  <div id="gauge-chart" className="e-chart">
                    <Gauge />
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

export default EChartChart;
