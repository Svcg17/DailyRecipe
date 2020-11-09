import React, { Component } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody
} from "reactstrap";

// import images
import user1 from "../../../assets/images/users/user-1.jpg";
import user2 from "../../../assets/images/users/user-2.jpg";
import user3 from "../../../assets/images/users/user-3.jpg";
import user4 from "../../../assets/images/users/user-4.jpg";
import user6 from "../../../assets/images/users/user-6.jpg";

import img3 from "../../../assets/images/small/img-3.jpg";
import img4 from "../../../assets/images/small/img-4.jpg";

class EmailRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder_menu: false,
      tag_menu: false,
      more_menu: false
    };
    this.toggleFolder = this.toggleFolder.bind(this);
    this.toggleTag = this.toggleTag.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleFolder() {
    this.setState(prevState => ({
      folder_menu: !prevState.folder_menu
    }));
  }

  toggleTag() {
    this.setState(prevState => ({
      tag_menu: !prevState.tag_menu
    }));
  }

  toggleMore() {
    this.setState(prevState => ({
      more_menu: !prevState.more_menu
    }));
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Email Read</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Email</Link>
                  </li>
                  <li className="breadcrumb-item active">Email Read</li>
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
                      alt="veltrix"
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
                      alt="veltrix"
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
                      alt="veltrix"
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
                      alt="veltrix"
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
                  <div className="btn-toolbar p-3" role="toolbar">
                    <div className="btn-group mo-mb-2">
                      <button
                        type="button"
                        className="btn btn-primary waves-light waves-effect"
                      >
                        <i className="fa fa-inbox"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary waves-light waves-effect"
                      >
                        <i className="fa fa-exclamation-circle"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary waves-light waves-effect"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="btn-group ml-1 mo-mb-2">
                      <Dropdown
                        isOpen={this.state.folder_menu}
                        toggle={this.toggleFolder}
                      >
                        <DropdownToggle
                          tag="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          caret
                        >
                          <i className="fa fa-folder"></i>
                          <i className="mdi mdi-chevron-down ml-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a" href="#">
                            Updates
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Social
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Team Manage
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group ml-1 mo-mb-2">
                      <Dropdown
                        isOpen={this.state.tag_menu}
                        toggle={this.toggleTag}
                      >
                        <DropdownToggle
                          tag="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          caret
                        >
                          <i className="fa fa-tag"></i>
                          <i className="mdi mdi-chevron-down ml-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a" href="#">
                            Updates
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Social
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Team Manage
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="btn-group ml-1 mo-mb-2">
                      <Dropdown
                        isOpen={this.state.more_menu}
                        toggle={this.toggleMore}
                      >
                        <DropdownToggle
                          tag="button"
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                          caret
                        >
                          More
                          <i className="mdi mdi-chevron-down ml-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a" href="#">
                            Mark as Unread
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Mark as Important
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Add to Tasks
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Add Star
                          </DropdownItem>
                          <DropdownItem tag="a" href="#">
                            Mute
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>

                  <CardBody>
                    <div className="media mb-4">
                      <img
                        className="d-flex mr-3 rounded-circle avatar-sm"
                        src={user1}
                        alt="veltrix"
                      />
                      <div className="media-body">
                        <h4 className="font-size-15 m-0">
                          Humberto D. Champion
                        </h4>
                        <small className="text-muted">support@domain.com</small>
                      </div>
                    </div>

                    <h4 className="mt-0 font-size-16">
                      This Week's Top Stories
                    </h4>

                    <p>Dear Lorem Ipsum,</p>
                    <p>
                      Praesent dui ex, dapibus eget mauris ut, finibus
                      vestibulum enim. Quisque arcu leo, facilisis in fringilla
                      id, luctus in tortor. Nunc vestibulum est quis orci varius
                      viverra. Curabitur dictum volutpat massa vulputate
                      molestie. In at felis ac velit maximus convallis.
                    </p>
                    <p>
                      Sed elementum turpis eu lorem interdum, sed porttitor eros
                      commodo. Nam eu venenatis tortor, id lacinia diam. Sed
                      aliquam in dui et porta. Sed bibendum orci non tincidunt
                      ultrices. Vivamus fringilla, mi lacinia dapibus
                      condimentum, ipsum urna lacinia lacus, vel tincidunt mi
                      nibh sit amet lorem.
                    </p>
                    <p>Sincerly,</p>
                    <hr />

                    <Row>
                      <div className="col-xl-2 col-6">
                        <Card>
                          <img
                            className="card-img-top img-fluid"
                            src={img3}
                            alt="Card"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="font-weight-medium">
                              Download
                            </Link>
                          </div>
                        </Card>
                      </div>
                      <div className="col-xl-2 col-6">
                        <Card>
                          <img
                            className="card-img-top img-fluid"
                            src={img4}
                            alt="Card"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="font-weight-medium">
                              Download
                            </Link>
                          </div>
                        </Card>
                      </div>
                    </Row>
                    <Link
                      to="email-compose"
                      className="btn btn-secondary waves-effect mt-4"
                    >
                      <i className="mdi mdi-reply"></i> Reply
                    </Link>
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

export default EmailRead;
