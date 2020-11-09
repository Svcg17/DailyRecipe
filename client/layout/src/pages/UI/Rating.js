import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// Rating Plugin
import Rating from "react-rating";
import RatingTooltip from "react-rating-tooltip";
// import "node_modules/font-awesome/css/font-awesome.min.css";

class UiRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipContent: ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"],
      tooltipContentMore: ["1", "2", "3", "4", "5", "6", "7", "8"],
      tooltipContentHalf: ["6", "7", "8", "9", "10"],
      tooltipContentMiddle: [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],
      tooltipContentStep: ["2", "4", "6", "8", "10"],
      default: "",
      half: "",
      customize: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title-box">
                <h4 className="font-size-18">Rating</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">UI Elements</Link>
                  </li>
                  <li className="breadcrumb-item active">Rating</li>
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
                  <Row>
                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Default rating</h5>
                        <RatingTooltip
                          max={5}
                          onChange={rate => this.setState({ default: rate })}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />{" "}
                        <span>{this.state.default}</span>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Disabled rating</h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                          readonly={true}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Readonly rating with a value
                        </h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                          readonly={true}
                          initialRating={3}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Customized heart rating
                        </h5>
                        <RatingTooltip
                          max={5}
                          onChange={rate => this.setState({ customize: rate })}
                          ActiveComponent={
                            <i
                              className="mdi mdi-heart text-danger"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-heart-outline text-danger"
                              style={this.state.starStyle}
                            />
                          }
                        />
                        <span>{this.state.customize}</span>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Handle events</h5>
                        <Rating
                          onChange={rate => alert("Rating : " + rate)}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Customize tooltips</h5>
                        <RatingTooltip
                          max={5}
                          tooltipContent={this.state.tooltipContent}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Default rating</h5>
                        <RatingTooltip
                          max={8}
                          tooltipContent={this.state.tooltipContentMore}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start rate to 5 [6..10]
                        </h5>
                        <RatingTooltip
                          max={5}
                          tooltipContent={this.state.tooltipContentHalf}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start and stop rate [2..10]
                        </h5>
                        <RatingTooltip
                          max={11}
                          tooltipContent={this.state.tooltipContentMiddle}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start and stop rate [2..10] with step 2
                        </h5>
                        <RatingTooltip
                          max={5}
                          tooltipContent={this.state.tooltipContentStep}
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Custom icons</h5>
                        <Rating
                          stop={5}
                          emptySymbol="mdi mdi-battery-outline fa-2x text-muted"
                          fullSymbol={[
                            "mdi mdi-battery-20 fa-2x text-primary",
                            "mdi mdi-battery-50 fa-2x text-primary",
                            "mdi mdi-battery-70 fa-2x text-primary",
                            "mdi mdi-battery-90 fa-2x text-primary"
                          ]}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Fractional rating</h5>
                        <Rating
                          ActiveComponent={
                            <i
                              className="mdi mdi-star text-primary"
                              style={this.state.starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              className="mdi mdi-star-outline text-muted"
                              style={this.state.starStyle}
                            />
                          }
                          fractions={6}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Custom CSS icons</h5>
                        <Rating fractions={2} />
                      </div>
                    </Col>
                  </Row>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiRating;
