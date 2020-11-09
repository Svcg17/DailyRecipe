import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";

class UiProgressbar extends Component {
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
                <h4 className="font-size-18">Progress Bars</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Progress Bars</li>
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
                  <h4 className="card-title">Default Examples</h4>
                  <p className="card-title-desc">
                    Progress components are built with two HTML elements, some
                    CSS to set the width, and a few attributes.
                  </p>

                  <div className="">
                    <div className="mb-30">
                      <Progress color="primary" value={25}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress color="primary" value={50}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress color="primary" value={75}></Progress>
                    </div>
                    <div>
                      <Progress color="primary" value={100}></Progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Backgrounds</h4>
                  <p className="card-title-desc">
                    Use background utility classNamees to change the appearance
                    of individual progress bars.
                  </p>

                  <div className="">
                    <div className="mb-30">
                      <Progress color="success" value={25}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress color="info" value={50}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress color="warning" value={75}></Progress>
                    </div>
                    <div>
                      <Progress color="danger" value={100}></Progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Labels Example</h4>
                  <p className="card-title-desc">
                    Add labels to your progress bars by placing text within the{" "}
                    <code className="highlighter-rouge">.progress-bar</code>.
                  </p>

                  <div className="">
                    <div className="progress">
                      <Progress color="primary" value={75}>
                        75%
                      </Progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Multiple bars</h4>
                  <p className="card-title-desc">
                    Include multiple progress bars in a progress component if
                    you need.
                  </p>

                  <div className="">
                    <Progress multi>
                      <Progress bar color="primary" value={15}></Progress>
                      <Progress bar color="success" value={30}></Progress>
                      <Progress bar color="info" value={20}></Progress>
                    </Progress>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Height</h4>
                  <p className="card-title-desc">
                    We only set a{" "}
                    <code className="highlighter-rouge">height</code> value on
                    the <code className="highlighter-rouge">.progress-bar</code>
                    , so if you change that value the outer{" "}
                    <code className="highlighter-rouge">.progress</code>
                    will automatically resize accordingly.
                  </p>

                  <div className="">
                    <div className="progress mb-2" style={{ height: "3px" }}>
                      <Progress value={25} style={{ height: "3px" }}></Progress>
                    </div>
                    <div className="progress" style={{ height: "24px" }}>
                      <Progress
                        value={25}
                        style={{ height: "24px" }}
                      ></Progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Animated stripes</h4>
                  <p className="card-title-desc">
                    The striped gradient can also be animated. Add{" "}
                    <code className="highlighter-rouge">
                      .progress-bar-animated
                    </code>{" "}
                    to <code className="highlighter-rouge">.progress-bar</code>{" "}
                    to animate the stripes right to left via CSS3 animations.
                  </p>

                  <div className="">
                    <div className="progress">
                      <Progress animated color="primary" value="75"></Progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Striped</h4>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      .progress-bar-striped
                    </code>
                    to any{" "}
                    <code className="highlighter-rouge">.progress-bar</code> to
                    apply a stripe via CSS gradient over the progress bar’s
                    background color.
                  </p>

                  <div className="">
                    <div className="mb-30">
                      <Progress striped color="primary" value={10}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress striped color="success" value={25}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress striped color="info" value={50}></Progress>
                    </div>
                    <div className="mb-30">
                      <Progress striped color="warning" value={75}></Progress>
                    </div>
                    <div>
                      <Progress striped color="danger" value={100}></Progress>
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

export default UiProgressbar;
