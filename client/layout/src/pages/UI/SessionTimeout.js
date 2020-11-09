import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class UiSessionTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = { timeralert: null, timerswitch: false, seconds: 0 };
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentDidMount() {
    this.main_function();
  }

  hideAlert() {
    window.location = "/login";
  }
  confirmAlert() {
    this.setState({ timeralert: null });
  }
  main_function() {
    setTimeout(
      function() {
        setTimeout(
          function() {
            this.function1();
          }.bind(this),
          6000
        );
        this.function2();
      }.bind(this),
      6000
    );
  }
  function1() {
    if (window.location.pathname === "/ui-session-timeout") {
      window.location = "/login";
    } else {
    }
  }
  function2() {
    this.tick();
    const nextmsg = () => (
      <SweetAlert
        showCancel
        confirmBtnText="Stay Connected"
        cancelBtnText="Logout"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        title="Your Session is About to Expire!"
        onCancel={() => this.hideAlert()}
        onConfirm={() => this.confirmAlert()}
      >
        Redirecting in 10s seconds.<br></br>
      </SweetAlert>
    );
    this.setState({ timeralert: nextmsg() });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          {this.state.timeralert}
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title-box">
                <h4 className="font-size-18">Session Timeout</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Session Timeout</li>
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
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap-session-timeout</h5>
                  <p className="card-title-desc">
                    Session timeout and keep-alive control with a nice Bootstrap
                    warning dialog.
                  </p>

                  <div>
                    <p>
                      After a set amount of idle time, a Bootstrap warning
                      dialog is shown to the user with the option to either log
                      out, or stay connected. If "Logout" button is selected,
                      the page is redirected to a logout URL. If "Stay
                      Connected" is selected the dialog closes and the session
                      is kept alive. If no option is selected after another set
                      amount of idle time, the page is automatically redirected
                      to a set timeout URL.
                    </p>

                    <p>
                      Idle time is defined as no mouse, keyboard or touch event
                      activity registered by the browser.
                    </p>

                    <p className="mb-0">
                      As long as the user is active, the (optional) keep-alive
                      URL keeps getting pinged and the session stays alive. If
                      you have no need to keep the server-side session alive via
                      the keep-alive URL, you can also use this plugin as a
                      simple lock mechanism that redirects to your lock-session
                      or log-out URL after a set amount of idle time.
                    </p>
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

export default UiSessionTimeout;
