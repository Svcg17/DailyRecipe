import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from "reactstrap";

class UiButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: true,
      radio2: false,
      radio3: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title-box">
                <h4 className="font-size-18">Buttons</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Buttons</li>
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
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    Reactstarp includes six predefined button styles, each
                    serving its own semantic purpose.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Primary
                    </Button>
                    <Button
                      color="secondary"
                      className="btn btn-secondary waves-effect"
                    >
                      Secondary
                    </Button>
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >
                      Success
                    </Button>
                    <Button
                      color="info"
                      className="btn btn-info waves-effect waves-light"
                    >
                      Info
                    </Button>
                    <Button
                      color="warning"
                      className="btn btn-warning waves-effect waves-light"
                    >
                      Warning
                    </Button>
                    <Button
                      color="danger"
                      className="btn btn-danger waves-effect waves-light"
                    >
                      Danger
                    </Button>
                    <Button
                      color="dark"
                      className="btn btn-dark waves-effect waves-light"
                    >
                      Dark
                    </Button>
                    <Button color="link" className="btn btn-link waves-effect">
                      Link
                    </Button>
                    <Button
                      color="light"
                      className="btn btn-light waves-effect"
                    >
                      Light
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Outline buttons</h4>
                  <p className="card-title-desc">
                    Replace the default modifier classes with the{" "}
                    <code className="highlighter-rouge">outline</code> ones to
                    remove all background images and colors on any button.
                  </p>
                  <div className="button-items">
                    <Button
                      color="primary"
                      outline
                      className="waves-effect waves-light"
                    >
                      Primary
                    </Button>
                    <Button color="secondary" outline className="waves-effect">
                      Secondary
                    </Button>
                    <Button
                      color="success"
                      outline
                      className="waves-effect waves-light"
                    >
                      Success
                    </Button>
                    <Button
                      color="info"
                      outline
                      className="waves-effect waves-light"
                    >
                      Info
                    </Button>
                    <Button
                      color="warning"
                      outline
                      className="waves-effect waves-light"
                    >
                      Warning
                    </Button>
                    <Button
                      color="danger"
                      outline
                      className="waves-effect waves-light"
                    >
                      Danger
                    </Button>
                    <Button
                      color="dark"
                      outline
                      className="waves-effect waves-light"
                    >
                      Dark
                    </Button>
                    <Button color="light" outline className="waves-effect">
                      Light
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Button tags</h4>
                  <p className="card-title-desc ">
                    The <code className="highlighter-rouge">.btn </code>
                    classes are designed to be used with the{" "}
                    <code className="highlighter-rouge">
                      &lt;button&gt;
                    </code>{" "}
                    element. However, you can also use these classes on{" "}
                    <code className="highlighter-rouge">&lt;a&gt;</code> or{" "}
                    <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
                    elements (though some browsers may apply a slightly
                    different rendering).
                  </p>

                  <div className="button-items">
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="#"
                      role="button"
                    >
                      Link
                    </Link>
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                      type="submit"
                    >
                      Button
                    </Button>
                    <input
                      className="btn btn-info"
                      type="button"
                      value="Input"
                    />
                    <input
                      className="btn btn-danger"
                      type="submit"
                      value="Submit"
                    />
                    <input
                      className="btn btn-warning"
                      type="reset"
                      value="Reset"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Sizes</h4>
                  <p className="card-title-desc">
                    Fancy larger or smaller buttons? Add
                    <code className="highlighter-rouge">.btn-lg</code> or{" "}
                    <code className="highlighter-rouge">.btn-sm</code> for
                    additional sizes.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary btn-lg waves-effect waves-light"
                    >
                      Large button
                    </Button>
                    <Button
                      color="secondary"
                      className="btn btn-secondary btn-lg waves-effect"
                    >
                      Large button
                    </Button>
                    <Button
                      color="primary"
                      className="btn btn-primary btn-sm waves-effect waves-light"
                    >
                      Small button
                    </Button>
                    <Button
                      color="secondary"
                      className="btn btn-secondary btn-sm waves-effect"
                    >
                      Small button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Block Buttons</h4>
                  <p className="card-title-desc ">
                    Create block level buttons—those that span the full width of
                    a parent—by adding{" "}
                    <code className="highlighter-rouge">.btn-block</code>.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary btn-lg btn-block waves-effect waves-light"
                    >
                      Block level button
                    </Button>
                    <Button
                      color="secondary"
                      className="btn btn-secondary btn-sm btn-block waves-effect"
                    >
                      Block level button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Toggle states</h4>
                  <p className="card-title-desc ">
                    Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="button"
                    </code>
                    to toggle a button’s{" "}
                    <code className="highlighter-rouge">active</code>
                    state. If you’re pre-toggling a button, you must manually
                    add the <code className="highlighter-rouge">
                      .active
                    </code>{" "}
                    className
                    <strong>and</strong>{" "}
                    <code className="highlighter-rouge">
                      aria-pressed="true"
                    </code>{" "}
                    to the
                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                  </p>

                  <div className="button-items">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="button"
                      aria-pressed="false"
                    >
                      Single toggle
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Checkbox buttons</h4>
                  <p className="card-title-desc">
                    Bootstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="buttons"
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-secondary active">
                      <input type="checkbox" defaultChecked /> Checked-1
                    </label>
                    <label className="btn btn-secondary">
                      <input type="checkbox" /> Checked-2
                    </label>
                    <label className="btn btn-secondary">
                      <input type="checkbox" /> Checked-3
                    </label>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Radio buttons</h4>
                  <p className="card-title-desc">
                    Bootstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle="buttons"
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <label
                      className={
                        this.state.radio1
                          ? "btn btn-primary active"
                          : "btn btn-primary"
                      }
                    >
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        onClick={() =>
                          this.setState({
                            radio1: true,
                            radio2: false,
                            radio3: false
                          })
                        }
                      />{" "}
                      Active
                    </label>
                    <label
                      className={
                        this.state.radio2
                          ? "btn btn-primary active"
                          : "btn btn-primary"
                      }
                    >
                      <input
                        type="radio"
                        name="options"
                        id="option2"
                        onClick={() =>
                          this.setState({
                            radio2: true,
                            radio1: false,
                            radio3: false
                          })
                        }
                      />{" "}
                      Radio
                    </label>
                    <label
                      className={
                        this.state.radio3
                          ? "btn btn-primary active"
                          : "btn btn-primary"
                      }
                    >
                      <input
                        type="radio"
                        name="options"
                        id="option3"
                        onClick={() =>
                          this.setState({
                            radio3: true,
                            radio2: false,
                            radio1: false
                          })
                        }
                      />{" "}
                      Radio
                    </label>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Button group</h4>
                  <p className="card-title-desc">
                    Wrap a series of buttons with{" "}
                    <code className="highlighter-rouge">.btn</code> in{" "}
                    <code className="highlighter-rouge">.btn-group</code>.
                  </p>

                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="secondary" className="btn btn-secondary">
                      Left
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Middle
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Right
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Button toolbar</h4>
                  <p className="card-title-desc">
                    Combine sets of button groups into button toolbars for more
                    complex components. Use utility classes as needed to space
                    out groups, buttons, and more.
                  </p>

                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        1
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        2
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        3
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        4
                      </Button>
                    </div>
                    <div
                      className="btn-group mr-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        5
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        6
                      </Button>
                      <Button color="secondary" className="btn btn-secondary">
                        7
                      </Button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Third group"
                    >
                      <Button color="secondary" className="btn btn-secondary">
                        8
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Sizing</h4>
                  <p className="card-title-desc">
                    Instead of applying button sizing classes to every button in
                    a group, just add{" "}
                    <code className="highlighter-rouge">.btn-group-*</code> to
                    each <code className="highlighter-rouge">.btn-group</code>,
                    including each one when nesting multiple groups.
                  </p>

                  <div
                    className="btn-group btn-group-lg"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="secondary" className="btn btn-secondary">
                      Left
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Middle
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Right
                    </Button>
                  </div>

                  <br />

                  <div
                    className="btn-group mt-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="secondary" className="btn btn-secondary">
                      Left
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Middle
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Right
                    </Button>
                  </div>

                  <br />

                  <div
                    className="btn-group btn-group-sm mt-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button color="secondary" className="btn btn-secondary">
                      Left
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Middle
                    </Button>
                    <Button color="secondary" className="btn btn-secondary">
                      Right
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Vertical variation</h4>
                  <p className="card-title-desc">
                    Make a set of buttons appear vertically stacked rather than
                    horizontally. Split button dropdowns are not supported here.
                  </p>

                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    <Button
                      type="button"
                      color="secondary"
                      className="btn btn-secondary"
                    >
                      Button
                    </Button>

                    <ButtonDropdown
                      isOpen={this.state.drp_link}
                      toggle={() =>
                        this.setState({ drp_link: !this.state.drp_link })
                      }
                    >
                      <DropdownToggle caret color="secondary">
                        Dropdown <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Dropdown link</DropdownItem>
                        <DropdownItem>Dropdown link</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <Button
                      color="secondary"
                      type="button"
                      className="btn btn-secondary"
                    >
                      Button
                    </Button>
                    <Button
                      color="secondary"
                      type="button"
                      className="btn btn-secondary"
                    >
                      Button
                    </Button>
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

export default UiButtons;
