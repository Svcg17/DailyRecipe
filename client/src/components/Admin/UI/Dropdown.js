import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown
} from "reactstrap";

class Dropdown1 extends Component {
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
                <h4 className="font-size-18">Dropdowns</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Dropdowns</li>
                </ol>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Single button dropdowns</h4>
                  <p className="card-title-desc">
                    Any single <code className="highlighter-rouge">.btn</code>{" "}
                    can be turned into a dropdown toggle with some markup
                    changes. Here’s how you can put them to work with either{" "}
                    <code className="highlighter-rouge">&lt;button&gt;</code>
                    elements:
                  </p>

                  <div className="row">
                    <div className="col-sm-6">
                      <Dropdown
                        isOpen={this.state.singlebtn}
                        toggle={() =>
                          this.setState({ singlebtn: !this.state.singlebtn })
                        }
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropdown button{" "}
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="col-sm-6">
                      <Dropdown
                        isOpen={this.state.singlebtn1}
                        toggle={() =>
                          this.setState({ singlebtn1: !this.state.singlebtn1 })
                        }
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropdown Link <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Variant</h4>
                  <p className="card-title-desc">
                    The best part is you can do this with any button variant,
                    too:
                  </p>

                  <div className="d-flex">
                    <Dropdown
                      isOpen={this.state.btnprimary1}
                      toggle={() =>
                        this.setState({ btnprimary1: !this.state.btnprimary1 })
                      }
                    >
                      <DropdownToggle tag="button" className="btn btn-primary">
                        Primary
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>{" "}
                    &nbsp;
                    <Dropdown
                      isOpen={this.state.btnsuccess1}
                      toggle={() =>
                        this.setState({ btnsuccess1: !this.state.btnsuccess1 })
                      }
                    >
                      <DropdownToggle tag="button" className="btn btn-success">
                        Success
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown
                      isOpen={this.state.btnInfo1}
                      toggle={() =>
                        this.setState({ btnInfo1: !this.state.btnInfo1 })
                      }
                    >
                      <DropdownToggle tag="button" className="btn btn-info">
                        Info
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown
                      isOpen={this.state.btnWarning1}
                      toggle={() =>
                        this.setState({ btnWarning1: !this.state.btnWarning1 })
                      }
                    >
                      <DropdownToggle tag="button" className="btn btn-warning">
                        Warning
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown
                      isOpen={this.state.btnDanger1}
                      toggle={() =>
                        this.setState({ btnDanger1: !this.state.btnDanger1 })
                      }
                    >
                      <DropdownToggle tag="button" className="btn btn-danger">
                        Danger
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Split button dropdowns</h4>
                  <p className="card-title-desc">
                    The best part is you can do this with any button variant,
                    too:
                  </p>
                  <div className="d-flex">
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_primary1}
                        toggle={() =>
                          this.setState({
                            drp_primary1: !this.state.drp_primary1
                          })
                        }
                      >
                        <Button id="caret" color="primary">
                          Primary
                        </Button>
                        <DropdownToggle caret color="primary">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_secondary1}
                        toggle={() =>
                          this.setState({
                            drp_secondary1: !this.state.drp_secondary1
                          })
                        }
                      >
                        <Button id="caret" color="secondary">
                          Secondary
                        </Button>
                        <DropdownToggle caret color="secondary">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_success1}
                        toggle={() =>
                          this.setState({
                            drp_success1: !this.state.drp_success1
                          })
                        }
                      >
                        <Button id="caret" color="success">
                          Success
                        </Button>
                        <DropdownToggle caret color="success">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_info1}
                        toggle={() =>
                          this.setState({ drp_info1: !this.state.drp_info1 })
                        }
                      >
                        <Button id="caret" color="info">
                          Info
                        </Button>
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_warning1}
                        toggle={() =>
                          this.setState({
                            drp_warning1: !this.state.drp_warning1
                          })
                        }
                      >
                        <Button id="caret" color="warning">
                          Warning
                        </Button>
                        <DropdownToggle caret color="warning">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    &nbsp;
                    <div className="btn-group mb-2">
                      <ButtonDropdown
                        isOpen={this.state.drp_danger1}
                        toggle={() =>
                          this.setState({
                            drp_danger1: !this.state.drp_danger1
                          })
                        }
                      >
                        <Button id="caret" color="danger">
                          Danger
                        </Button>
                        <DropdownToggle caret color="danger">
                          <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Sizing</h4>
                  <p className="card-title-desc">
                    Button dropdowns work with buttons of all sizes, including
                    default and split dropdown buttons.
                  </p>
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={this.state.drp_secondary}
                      toggle={() =>
                        this.setState({
                          drp_secondary: !this.state.drp_secondary
                        })
                      }
                    >
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-lg"
                      >
                        Large button &nbsp;{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={this.state.drp_secondary_lg}
                      toggle={() =>
                        this.setState({
                          drp_secondary_lg: !this.state.drp_secondary_lg
                        })
                      }
                    >
                      <Button className="btn btn-secondary">
                        {" "}
                        Large button &nbsp;
                      </Button>
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-lg"
                      >
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={this.state.drp_secondary_sm}
                      toggle={() =>
                        this.setState({
                          drp_secondary_sm: !this.state.drp_secondary_sm
                        })
                      }
                    >
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-sm"
                      >
                        Small button &nbsp;{" "}
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={this.state.drp_secondary_sm1}
                      toggle={() =>
                        this.setState({
                          drp_secondary_sm1: !this.state.drp_secondary_sm1
                        })
                      }
                    >
                      <Button className="btn btn-secondary btn-sm">
                        {" "}
                        Small button &nbsp;
                      </Button>
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Dropup variation</h4>
                  <p className="card-title-desc">
                    Trigger dropdown menus above elements by adding
                    <code className="highlighter-rouge">
                      {" "}
                      direction = "up"{" "}
                    </code>{" "}
                    to the parent element.
                  </p>

                  <div className="d-flex">
                    <Dropdown
                      isOpen={this.state.dropup1}
                      direction="up"
                      toggle={() =>
                        this.setState({ dropup1: !this.state.dropup1 })
                      }
                    >
                      <DropdownToggle className="btn btn-secondary" caret>
                        Dropup <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                      direction="up"
                      isOpen={this.state.drp_up11}
                      toggle={() =>
                        this.setState({
                          drp_up11: !this.state.drp_up11
                        })
                      }
                    >
                      <Button id="caret" color="secondary">
                        Split dropup
                      </Button>
                      <DropdownToggle caret color="secondary">
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Menu alignment</h4>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      {" "}
                      direction = "right"{" "}
                    </code>
                    to right align the dropdown menu.
                  </p>

                  <ButtonDropdown
                    isOpen={this.state.drop_align}
                    direction="right"
                    toggle={() =>
                      this.setState({ drop_align: !this.state.drop_align })
                    }
                  >
                    <DropdownToggle
                      caret
                      color="secondary"
                      className="btn btn-secondary"
                    >
                      Menu is right-aligned{" "}
                      <i className="mdi mdi-chevron-right"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-right-custom">
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Dropright variation</h4>
                  <p className="card-title-desc">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>direction = "right" </code> to the parent
                    element.
                  </p>

                  <div className="d-flex">
                    <Dropdown
                      isOpen={this.state.info_dropup1}
                      direction="right"
                      toggle={() =>
                        this.setState({
                          info_dropup1: !this.state.info_dropup1
                        })
                      }
                    >
                      <DropdownToggle className="btn btn-info" caret>
                        Dropright <i className="mdi mdi-chevron-right"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                      direction="right"
                      isOpen={this.state.infodrp_up11}
                      toggle={() =>
                        this.setState({
                          infodrp_up11: !this.state.infodrp_up11
                        })
                      }
                    >
                      <Button id="caret" color="info">
                        Split dropright
                      </Button>
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-right"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Dropleft variation</h4>
                  <p className="card-title-desc">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>direction = "left" </code> to the parent
                    element.
                  </p>

                  <div className="d-flex">
                    <Dropdown
                      isOpen={this.state.info_dropup111}
                      direction="up"
                      toggle={() =>
                        this.setState({
                          info_dropup111: !this.state.info_dropup111
                        })
                      }
                    >
                      <DropdownToggle className="btn btn-info" caret>
                        Dropleft <i className="mdi mdi-chevron-left"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                      direction="up"
                      isOpen={this.state.infodrp_up1111}
                      toggle={() =>
                        this.setState({
                          infodrp_up1111: !this.state.infodrp_up1111
                        })
                      }
                    >
                      <Button id="caret" color="info">
                        Split dropleft
                      </Button>
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-left"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dropdown1;
