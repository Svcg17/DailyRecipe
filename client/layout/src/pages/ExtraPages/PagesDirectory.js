import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// import images
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import user7 from "../../assets/images/users/user-7.jpg";
import user8 from "../../assets/images/users/user-8.jpg";
import user9 from "../../assets/images/users/user-9.jpg";
import user10 from "../../assets/images/users/user-10.jpg";

class PagesDirectory extends Component {
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
                <h4 className="font-size-18">Directory</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Extra Pages</Link>
                  </li>
                  <li className="breadcrumb-item active">Directory</li>
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
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user2}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Jerome A. Hebert
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Jerome@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user3}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Adam V. Acker
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Adam@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user4}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Stanley M. Dyke
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Stanley@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user5}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Ben J. Mathison
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Ben@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user6}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        John V. Bailey
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">John@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user7}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Antonio J. Thomas
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Antonio@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user8}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Jerome A. Hebert
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Jerome@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user9}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font-size-18 mt-0 mb-1">
                        Adam V. Acker
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Adam@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="directory-card">
                <CardBody>
                  <div className="media">
                    <img
                      src={user10}
                      alt=""
                      className="img-fluid img-thumbnail rounded-circle avatar-lg"
                    />
                    <div className="media-body ml-3">
                      <h5 className="text-primary font--size18 mt-0 mb-1">
                        Stanley M. Dyke
                      </h5>
                      <p className="font-size-12 mb-2">Creative Director</p>
                      <p className="mb-0">Stanley@veltrix.com</p>
                    </div>
                    <ul className="list-unstyled social-links float-right">
                      <li>
                        <Link to="#" className="btn-primary">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn-info">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <p className="mb-0">
                    <b>Intro : </b>At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis atque corrupti quos
                    dolores et...{" "}
                    <Link to="#" className="text-primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesDirectory;
