import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

import logosm from "../../../assets/images/logo-sm.png";

import SweetAlert from "react-bootstrap-sweetalert";

class UiSweetAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: false,
      with_title: false,
      success_msg: false,
      confirm_msg: false,
      success_dlg: false,
      error_dlg: false,
      dynamic_title: "",
      dynamic_description: "",
      confirm_both: false,
      img_header: false,
      img_html: false,
      custom_div: false,
      emailtxt: "",
      emailerr: "",
      step1: false,
      step1_txt: "",
      step2: false,
      step2_txt: "",
      step3: false,
      step3_txt: "",
      step_queue: false,
      final_queue: false,
      current_ip: "219.91.239.22",
      close_timer: false,
      timeralert: null
    };

    this.handleStep1Change = this.handleStep1Change.bind(this);
    this.handleStep2Change = this.handleStep2Change.bind(this);
    this.handleStep3Change = this.handleStep3Change.bind(this);
  }

  handleStep1Change(e) {
    this.setState({ step1_txt: e.target.value });
  }

  handleStep2Change(e) {
    this.setState({ step2_txt: e.target.value });
  }

  handleStep3Change(e) {
    this.setState({ step3_txt: e.target.value });
  }

  stimer() {
    const getTimer = () => (
      <SweetAlert
        title={
          <span>
            HTML <small>AutoClose Timer</small>!
          </span>
        }
        onConfirm={() => this.hideTimeAlert()}
      >
        {" "}
        <span>Timer Will Expire after 3 Seconds.</span>
      </SweetAlert>
    );
    this.setState({ timeralert: getTimer() });
    setTimeout(
      function() {
        this.setState({ timeralert: null });
      }.bind(this),
      3000
    );
  }
  hideTimeAlert() {
    this.setState({ timeralert: null });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">SweetAlert 2</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">SweetAlert 2</li>
                </ol>
              </div>
            </Col>

            <Col sm={6}>
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          {this.state.timeralert}
          {this.state.success_dlg ? (
            <SweetAlert
              success
              title={this.state.dynamic_title}
              onConfirm={() => this.setState({ success_dlg: false })}
            >
              {this.state.dynamic_description}
            </SweetAlert>
          ) : null}

          {this.state.error_dlg ? (
            <SweetAlert
              error
              title={this.state.dynamic_title}
              onConfirm={() => this.setState({ error_dlg: false })}
            >
              {this.state.dynamic_description}
            </SweetAlert>
          ) : null}

          <div class="card">
            <div class="card-body">
              <Row className="text-center">
                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>A basic message</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ basic: true })}
                    id="sa-basic"
                  >
                    Click me
                  </Button>
                  {this.state.basic ? (
                    <SweetAlert
                      title="Any fool can use a computer"
                      onConfirm={() => this.setState({ basic: false })}
                    ></SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>A title with a text under</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ with_title: true })}
                    id="sa-title"
                  >
                    Click me
                  </Button>
                  {this.state.with_title ? (
                    <SweetAlert
                      title="The Internet?"
                      warning
                      onConfirm={() => this.setState({ with_title: false })}
                    >
                      That thing is still around?
                    </SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>A success message!</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ success_msg: true })}
                    id="sa-success"
                  >
                    Click me
                  </Button>
                  {this.state.success_msg ? (
                    <SweetAlert
                      title="Good job!"
                      success
                      showCancel
                      confirmBtnBsStyle="success"
                      cancelBtnBsStyle="danger"
                      onConfirm={() => this.setState({ success_msg: false })}
                      onCancel={() => this.setState({ success_msg: false })}
                    >
                      You clicked the button!
                    </SweetAlert>
                  ) : null}
                </Col>

                {/* <Col xl="3" lg="4" sm="6" className="m-b-30">
                                            <p>A warning message, with a function attached to the "Confirm"-button...</p>
                                            <Button color="primary">Click me</Button>
                                        </Col> */}

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>
                    By passing a parameter, you can execute something else for
                    "Cancel".
                  </p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ confirm_both: true })}
                    id="sa-params"
                  >
                    Click me
                  </Button>
                  {this.state.confirm_both ? (
                    <SweetAlert
                      title="Are you sure?"
                      warning
                      showCancel
                      confirmBtnBsStyle="success"
                      cancelBtnBsStyle="danger"
                      onConfirm={() =>
                        this.setState({
                          confirm_both: false,
                          success_dlg: true,
                          dynamic_title: "Deleted",
                          dynamic_description: "Your file has been deleted."
                        })
                      }
                      onCancel={() =>
                        this.setState({
                          confirm_both: false,
                          error_dlg: true,
                          dynamic_title: "Cancelled",
                          dynamic_description: "Your imaginary file is safe :)"
                        })
                      }
                    >
                      You won't be able to revert this!
                    </SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>A message with custom Image Header</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ img_header: true })}
                    id="sa-image"
                  >
                    Click me
                  </Button>
                  {this.state.img_header ? (
                    <SweetAlert
                      title="Sweet!"
                      custom
                      customIcon={logosm}
                      onConfirm={() => this.setState({ img_header: false })}
                    >
                      Modal with a custom image.
                    </SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>Custom HTML description and buttons</p>
                  <Button
                    color="primary"
                    className="mb-md-4"
                    onClick={() => this.setState({ img_html: true })}
                    id="custom-html-alert"
                  >
                    Click me
                  </Button>
                  {this.state.img_html ? (
                    <SweetAlert
                      title={
                        <span>
                          HTML <u>example</u>!
                        </span>
                      }
                      warning
                      onConfirm={() => this.setState({ img_html: false })}
                    >
                      You can use <b>bold</b> text, links and other HTML tags
                    </SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>A message with custom width, padding and background</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ custom_div: true })}
                    id="custom-padding-width-alert"
                  >
                    Click me
                  </Button>
                  {this.state.custom_div ? (
                    <SweetAlert
                      title="Custom width, padding, background."
                      style={{
                        backgroundColor: "#ebebeb",
                        padding: "3em",
                        borderRadius: "20px"
                      }}
                      onConfirm={() => this.setState({ custom_div: false })}
                    ></SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>Ajax request example</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ ajax_div: true })}
                    id="ajax-alert"
                  >
                    Click me
                  </Button>
                  {this.state.ajax_div ? (
                    <SweetAlert
                      showCancel
                      title="Submit email to run ajax request"
                      cancelBtnBsStyle="danger"
                      confirmBtnBsStyle="success"
                      onConfirm={() =>
                        this.setState({
                          ajax_div: false,
                          success_dlg: true,
                          dynamic_title: "Ajax request finished!",
                          dynamic_description:
                            "Submitted email : " + this.state.emailtxt
                        })
                      }
                      onCancel={() => this.setState({ ajax_div: false })}
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>Chaining modals (queue) example</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ step1: true })}
                    id="chaining-alert"
                  >
                    Click me
                  </Button>
                  {this.state.step1 ? (
                    <SweetAlert
                      showCancel
                      title="Question 1"
                      cancelBtnBsStyle="danger"
                      confirmBtnText="Next"
                      onConfirm={() =>
                        this.setState({ step1: false, step2: true })
                      }
                      onCancel={() => this.setState({ step1: false })}
                    >
                      Chaining swal2 modals is easy
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.handleStep1Change}
                      />
                    </SweetAlert>
                  ) : null}

                  {this.state.step2 ? (
                    <SweetAlert
                      showCancel
                      title="Question 2"
                      cancelBtnBsStyle="danger"
                      confirmBtnText="Next"
                      onConfirm={() =>
                        this.setState({ step2: false, step3: true })
                      }
                      onCancel={() => this.setState({ step2: false })}
                    >
                      Chaining swal2 modals is easy
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.handleStep2Change}
                      />
                    </SweetAlert>
                  ) : null}

                  {this.state.step3 ? (
                    <SweetAlert
                      showCancel
                      title="Question 3"
                      cancelBtnBsStyle="danger"
                      confirmBtnText="Next"
                      onConfirm={() =>
                        this.setState({ step3: false, final_step: true })
                      }
                      onCancel={() => this.setState({ step3: false })}
                    >
                      Chaining swal2 modals is easy
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.handleStep3Change}
                      />
                    </SweetAlert>
                  ) : null}

                  {this.state.final_step ? (
                    <SweetAlert
                      title="All done!"
                      confirmBtnText="Lovely!"
                      onConfirm={() => this.setState({ final_step: false })}
                    >
                      Your answers : [{this.state.step1_txt},{" "}
                      {this.state.step2_txt}, {this.state.step3_txt}]
                    </SweetAlert>
                  ) : null}
                </Col>

                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  <p>Dynamic queue example</p>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ step_queue: true })}
                    id="dynamic-alert"
                  >
                    Click me
                  </Button>
                  {this.state.step_queue ? (
                    <SweetAlert
                      title="Your public IP"
                      confirmBtnText="Show my public IP"
                      onConfirm={() =>
                        this.setState({ step_queue: false, final_queue: true })
                      }
                    >
                      Your public IP will be received via AJAX request
                    </SweetAlert>
                  ) : null}

                  {this.state.final_queue ? (
                    <SweetAlert
                      confirmBtnText="OK"
                      title=""
                      onConfirm={() => this.setState({ final_queue: false })}
                    >
                      {this.state.current_ip}
                    </SweetAlert>
                  ) : null}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiSweetAlert;
