import React, { Component } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import images
import user2 from "../../../../assets/images/users/user-2.jpg";
import user3 from "../../../../assets/images/users/user-3.jpg";
import user4 from "../../../../assets/images/users/user-4.jpg";
import user6 from "../../../../assets/images/users/user-6.jpg";

class EmailCompose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Email Compose</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Email</Link>
                  </li>
                  <li className="breadcrumb-item active">Email Compose</li>
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
            <div className="col-12">
              <div className="email-leftbar card">
                <Link
                  to="email-compose"
                  className="btn btn-danger rounded btn-custom btn-block waves-effect waves-light"
                >
                  Compose
                </Link>

                <div className="mail-list mt-4">
                  <Link to="email-inbox" className="active">
                    Inbox <span className="ml-1">(18)</span>
                  </Link>
                  <Link to="#">Starred</Link>
                  <Link to="#">Important</Link>
                  <Link to="#">Draft</Link>
                  <Link to="#">Sent Mail</Link>
                  <Link to="#">Trash</Link>
                </div>

                <h5 className="mt-4">Labels</h5>
                <div className="mail-list mt-4">
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>
                    Theme Support
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>
                    Freelance
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>
                    Social
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>
                    Friends
                  </Link>
                  <Link to="#">
                    <span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>
                    Family
                  </Link>
                </div>

                <h5 className="mt-4">Chat</h5>

                <div className="mt-4">
                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user2}
                      alt="Generic"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">Scott Median</p>
                      <p className="text-muted">Hello</p>
                    </div>
                  </Link>

                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user3}
                      alt="Generic"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">Julian Rosa</p>
                      <p className="text-muted">What about our next..</p>
                    </div>
                  </Link>

                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user4}
                      alt="Generic"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">David Medina</p>
                      <p className="text-muted">Yeah everything is fine</p>
                    </div>
                  </Link>

                  <Link to="#" className="media">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src={user6}
                      alt="Generic"
                      height="36"
                    />
                    <div className="media-body chat-user-box">
                      <p className="user-title m-0">Jay Baker</p>
                      <p className="text-muted">Wow that's great</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="email-rightbar mb-3">
                <Card>
                  <CardBody>
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="To"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group">
                        <div className="summernote">
                          <Editor
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                          />
                        </div>
                      </div>
                      <div className="btn-toolbar form-group mb-0">
                        <div className="">
                          <button
                            type="button"
                            className="btn btn-success waves-effect waves-light mr-1"
                          >
                            <i className="far fa-save"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-success waves-effect waves-light mr-1"
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                          <button className="btn btn-primary waves-effect waves-light">
                            {" "}
                            <span>Send</span>{" "}
                            <i className="fab fa-telegram-plane ml-1"></i>{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default EmailCompose;
