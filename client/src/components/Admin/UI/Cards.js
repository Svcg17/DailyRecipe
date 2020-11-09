import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img4 from "../../../assets/images/small/img-4.jpg";
import img5 from "../../../assets/images/small/img-5.jpg";
import img6 from "../../../assets/images/small/img-6.jpg";
import img7 from "../../../assets/images/small/img-7.jpg";

class UiCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title-box">
                <h4 className="font-size-18">Cards</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Cards</li>
                </ol>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </div>
          </div>

          <Row>
            <Col md={6} lg={6} xl={3}>
              <Card>
                <img
                  className="card-img-top img-fluid"
                  src={img1}
                  alt="veltrix"
                />
                <CardBody>
                  <h4 className="card-title  mt-0">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Button
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} lg={6} xl={3}>
              <Card>
                <img
                  className="card-img-top img-fluid"
                  src={img2}
                  alt="veltrix"
                />
                <CardBody>
                  <h4 className="card-title  mt-0">Card title</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                </ul>
                <CardBody>
                  <Link to="#" className="card-link">
                    Card link
                  </Link>
                  <Link to="#" className="card-link">
                    Another link
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} lg={6} xl={3}>
              <Card>
                <img
                  className="card-img-top img-fluid"
                  src={img3}
                  alt="veltrix"
                />
                <CardBody>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={6} lg={6} xl={3}>
              <Card>
                <CardBody>
                  <h4 className="card-title  mt-0">Card title</h4>
                  <h6 className="card-subtitle font-14 text-muted">
                    Support card subtitle
                  </h6>
                </CardBody>
                <img className="img-fluid" src={img4} alt="veltrix" />
                <CardBody>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" className="card-link">
                    Card link
                  </Link>
                  <Link to="#" className="card-link">
                    Another link
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="card card-body">
                <h3 className="card-title mt-0">Special title treatment</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="card card-body">
                <h3 className="card-title mt-0">Special title treatment</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className="card card-body">
                <h4 className="card-title mt-0">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card card-body text-center">
                <h4 className="card-title mt-0">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card card-body text-right">
                <h4 className="card-title mt-0">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="#"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Go somewhere
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className="card">
                <h4 className="card-header mt-0">Featured</h4>
                <div className="card-body">
                  <h4 className="card-title mt-0">Special title treatment</h4>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card">
                <div className="card-header">Quote</div>
                <div className="card-body">
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h4 className="card-title mt-0">Special title treatment</h4>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Go somewhere
                  </Link>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Card>
                <img
                  className="card-img-top img-fluid"
                  src={img5}
                  alt="veltrix"
                />
                <div className="card-body">
                  <h4 className="card-title mt-0">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title mt-0">Card title</h4>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </CardBody>
                <img
                  className="card-img-bottom img-fluid"
                  src={img7}
                  alt="veltrix"
                />
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <img className="card-img img-fluid" src={img6} alt="Card" />
                <div className="card-img-overlay">
                  <h4 className="card-title text-white mt-0">Card title</h4>
                  <p className="card-text text-light">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-white">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Card className="text-white bg-secondary">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="text-white bg-primary">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="text-white bg-success">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className="card text-white bg-info">
                <div className="card-body">
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <Card className="text-white bg-danger">
                <CardBody>
                  <blockquote className="card-blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer text-white font-12">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <div className="col-12">
              <h4 className="my-3">Decks</h4>
              <div className="card-deck-wrapper">
                <div className="card-deck">
                  <Card className="mb-4">
                    <img
                      className="card-img-top img-fluid"
                      src={img4}
                      alt="veltrix"
                    />
                    <CardBody>
                      <h4 className="card-title mt-0">Card title</h4>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="mb-4">
                    <img
                      className="card-img-top img-fluid"
                      src={img5}
                      alt="veltrix"
                    />
                    <CardBody>
                      <h4 className="card-title mt-0">Card title</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="mb-4">
                    <img
                      className="card-img-top img-fluid"
                      src={img6}
                      alt="veltrix"
                    />
                    <CardBody>
                      <h4 className="card-title mt-0">Card title</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default UiCards;
