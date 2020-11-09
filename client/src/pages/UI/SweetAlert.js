import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Progress,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

class UiSweetAlert extends Component {
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
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc">
                    A beautiful, responsive, customizable and accessible
                    (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
                    dependencies.
                  </p>

                  <div className="row text-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>A basic message</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-basic"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>A title with a text under</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-title"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>A success message!</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-success"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>
                        A warning message, with a function attached to the
                        "Confirm"-button...
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-warning"
                      >
                        Click me
                      </button>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>
                        By passing a parameter, you can execute something else
                        for "Cancel".
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-params"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>A message with custom Image Header</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-image"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>A message with auto close timer</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="sa-close"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>Custom HTML description and buttons</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="custom-html-alert"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>A message with custom width, padding and background</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="custom-padding-width-alert"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>Ajax request example</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="ajax-alert"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>Chaining modals (queue) example</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="chaining-alert"
                      >
                        Click me
                      </button>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                      <p>Dynamic queue example</p>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        id="dynamic-alert"
                      >
                        Click me
                      </button>
                    </div>
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

export default UiSweetAlert;
