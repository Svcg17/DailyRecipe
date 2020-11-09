import React, { Component } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = item => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
          }
        }
      }
    }
    return false;
  };
  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
              >
                <div id="navigation">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">
                        <i className="ti-home mr-2"></i>Dashboard
                      </Link>
                    </li>

                    <li className="nav-item dropdown mega-dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/#"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({ uiState: !this.state.uiState });
                        }}
                      >
                        <i className="ti-package mr-2"></i>UI Elements
                      </Link>

                      <div
                        className={classname(
                          "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                          { show: this.state.uiState }
                        )}
                      >
                        <div className="row">
                          <div className="col-lg-4">
                            <div>
                              <Link to="ui-alerts" className="dropdown-item">
                                Alerts
                              </Link>
                              <Link to="ui-buttons" className="dropdown-item">
                                Buttons
                              </Link>
                              <Link to="ui-cards" className="dropdown-item">
                                Cards
                              </Link>
                              <Link to="ui-carousel" className="dropdown-item">
                                Carousel
                              </Link>
                              <Link to="ui-dropdowns" className="dropdown-item">
                                Dropdowns
                              </Link>
                              <Link to="ui-grid" className="dropdown-item">
                                Grid
                              </Link>
                              <Link to="ui-images" className="dropdown-item">
                                Images
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div>
                              <Link to="ui-lightbox" className="dropdown-item">
                                Lightbox
                              </Link>
                              <Link to="ui-modals" className="dropdown-item">
                                Modals
                              </Link>
                              <Link
                                to="ui-rangeslider"
                                className="dropdown-item"
                              >
                                Range Slider
                              </Link>
                              <Link
                                to="ui-session-timeout"
                                className="dropdown-item"
                              >
                                Session Timeout
                              </Link>
                              <Link
                                to="ui-progressbars"
                                className="dropdown-item"
                              >
                                Progress Bars
                              </Link>
                              <Link
                                to="ui-sweet-alert"
                                className="dropdown-item"
                              >
                                Sweet-Alert
                              </Link>
                              <Link
                                to="ui-tabs-accordions"
                                className="dropdown-item"
                              >
                                Tabs & Accordions
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div>
                              <Link
                                to="ui-typography"
                                className="dropdown-item"
                              >
                                Typography
                              </Link>
                              <Link to="ui-video" className="dropdown-item">
                                Video
                              </Link>
                              <Link to="ui-general" className="dropdown-item">
                                General
                              </Link>
                              <Link to="ui-colors" className="dropdown-item">
                                Colors
                              </Link>
                              <Link to="ui-rating" className="dropdown-item">
                                Rating
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/#"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({ CompoState: !this.state.CompoState });
                        }}
                      >
                        <i className="ti-harddrives mr-2"></i>Components
                      </Link>

                      <div
                        className={classname("dropdown-menu", {
                          show: this.state.CompoState
                        })}
                      >
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            onClick={e => {
                              e.preventDefault();
                              this.setState({
                                EmailState: !this.state.EmailState
                              });
                            }}
                          >
                            Email <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.EmailState
                            })}
                            aria-labelledby="topnav-email"
                          >
                            <Link to="email-inbox" className="dropdown-item">
                              Inbox
                            </Link>
                            <Link to="email-read" className="dropdown-item">
                              Email Read
                            </Link>
                            <Link to="email-compose" className="dropdown-item">
                              Email Compose
                            </Link>
                          </div>
                        </div>

                        <Link to="calendar" className="dropdown-item">
                          Calendar
                        </Link>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              this.setState({
                                FormState: !this.state.FormState
                              });
                            }}
                          >
                            Forms <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.FormState
                            })}
                          >
                            <Link to="form-elements" className="dropdown-item">
                              Form Elements
                            </Link>
                            <Link
                              to="form-validation"
                              className="dropdown-item"
                            >
                              Form Validation
                            </Link>
                            <Link to="form-advanced" className="dropdown-item">
                              Form Advanced
                            </Link>
                            <Link to="form-editors" className="dropdown-item">
                              Form Editors
                            </Link>
                            <Link to="form-uploads" className="dropdown-item">
                              Form File Upload
                            </Link>
                            <Link to="form-xeditable" className="dropdown-item">
                              Form Xeditable
                            </Link>
                            <Link to="form-repeater" className="dropdown-item">
                              Form Repeater
                            </Link>
                            <Link to="form-wizard" className="dropdown-item">
                              Form Wizard
                            </Link>
                            <Link to="form-mask" className="dropdown-item">
                              Form Mask
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              this.setState({
                                ChartState: !this.state.ChartState
                              });
                            }}
                          >
                            Charts <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.ChartState
                            })}
                          >
                            <Link
                              className="dropdown-item"
                              to="charts-chartist"
                            >
                              Chartist Chart
                            </Link>
                            <Link className="dropdown-item" to="e-charts">
                              E Chart
                            </Link>
                            <Link className="dropdown-item" to="charts-chartjs">
                              Chartjs Chart
                            </Link>
                            <Link className="dropdown-item" to="apex-chart">
                              Apex Chart
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="charts-sparkline"
                            >
                              Sparkline Chart
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              this.setState({
                                TableState: !this.state.TableState
                              });
                            }}
                          >
                            Tables <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.TableState
                            })}
                          >
                            <Link to="tables-basic" className="dropdown-item">
                              Basic Tables
                            </Link>
                            <Link
                              to="tables-datatable"
                              className="dropdown-item"
                            >
                              Data Table
                            </Link>
                            <Link
                              to="tables-responsive"
                              className="dropdown-item"
                            >
                              Responsive Table
                            </Link>
                            <Link
                              to="tables-editable"
                              className="dropdown-item"
                            >
                              Editable Table
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              this.setState({
                                IconState: !this.state.IconState
                              });
                            }}
                          >
                            Icons <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.IconState
                            })}
                          >
                            <Link to="icons-material" className="dropdown-item">
                              Material Design
                            </Link>
                            <Link
                              to="icons-fontawesome"
                              className="dropdown-item"
                            >
                              Font Awesome
                            </Link>
                            <Link to="icons-ion" className="dropdown-item">
                              Ion Icons
                            </Link>
                            <Link to="icons-themify" className="dropdown-item">
                              Themify Icons
                            </Link>
                            <Link
                              to="icons-dripicons"
                              className="dropdown-item"
                            >
                              Dripicons
                            </Link>
                            <Link to="icons-typicons" className="dropdown-item">
                              Typicons Icons
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            onClick={e => {
                              e.preventDefault();
                              this.setState({
                                MapsState: !this.state.MapsState
                              });
                            }}
                          >
                            Maps <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: this.state.MapsState
                            })}
                          >
                            <Link to="maps-google" className="dropdown-item">
                              {" "}
                              Google Map
                            </Link>
                            <Link to="maps-vector" className="dropdown-item">
                              {" "}
                              Vector Map
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown mega-dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/#"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            AuthState: !this.state.AuthState
                          });
                        }}
                      >
                        <i className="ti-archive mr-2"></i> Authentication
                      </Link>

                      <div
                        className={classname("dropdown-menu", {
                          show: this.state.AuthState
                        })}
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div>
                              <Link
                                to="pages-login-2"
                                className="dropdown-item"
                              >
                                Login 2
                              </Link>
                              <Link
                                to="pages-register-2"
                                className="dropdown-item"
                              >
                                Register 2
                              </Link>
                              <Link
                                to="pages-recoverpw-2"
                                className="dropdown-item"
                              >
                                Recover Password 2
                              </Link>
                              <Link
                                to="pages-lock-screen-2"
                                className="dropdown-item"
                              >
                                Lock Screen 2
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown mega-dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/#"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            ExtraState: !this.state.ExtraState
                          });
                        }}
                      >
                        <i className="ti-support mr-2"></i> Extra Pages
                      </Link>

                      <div
                        className={classname(
                          "dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg",
                          {
                            show: this.state.ExtraState
                          }
                        )}
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div>
                              <Link
                                to="pages-timeline"
                                className="dropdown-item"
                              >
                                Timeline
                              </Link>
                              <Link
                                to="pages-invoice"
                                className="dropdown-item"
                              >
                                Invoice
                              </Link>
                              <Link
                                to="pages-directory"
                                className="dropdown-item"
                              >
                                Directory
                              </Link>
                              <Link to="pages-blank" className="dropdown-item">
                                Blank Page
                              </Link>
                              <Link to="pages-404" className="dropdown-item">
                                Error 404
                              </Link>
                              <Link to="pages-500" className="dropdown-item">
                                Error 500
                              </Link>
                              <Link
                                to="pages-pricing"
                                className="dropdown-item"
                              >
                                Pricing
                              </Link>
                              <Link
                                to="pages-gallery"
                                className="dropdown-item"
                              >
                                Gallery
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div>
                              <Link
                                to="pages-maintenance"
                                className="dropdown-item"
                              >
                                Maintenance
                              </Link>
                              <Link
                                to="pages-comingsoon"
                                className="dropdown-item"
                              >
                                Coming Soon
                              </Link>
                              <Link to="pages-faq" className="dropdown-item">
                                FAQs
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown mega-dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/#"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            EtState: !this.state.EtState
                          });
                        }}
                      >
                        <i className="ti-bookmark-alt mr-2"></i> Email Templates
                      </Link>

                      <div
                        className={classname("dropdown-menu", {
                          show: this.state.EtState
                        })}
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div>
                              <Link
                                to="email-template-basic"
                                className="dropdown-item"
                              >
                                Basic Action Email
                              </Link>
                              <Link
                                to="email-template-Alert"
                                className="dropdown-item"
                              >
                                Alert Email
                              </Link>
                              <Link
                                to="email-template-Billing"
                                className="dropdown-item"
                              >
                                Billing Email
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
