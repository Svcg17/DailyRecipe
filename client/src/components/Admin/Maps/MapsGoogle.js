import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import LightData from "./LightData";

const LoadingContainer = props => <div>Loading...</div>;

class MapsGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick(props, marker, e) {
    alert("You clicked in this marker");
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Google Map</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Tables</Link>
                  </li>
                  <li className="breadcrumb-item active">Google Map</li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Markers</h4>
                  <p className="card-title-desc">Example of google maps.</p>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={this.props.google}
                      style={{ width: "100%", height: "100%" }}
                      zoom={14}
                    >
                      <Marker
                        title={"The marker`s title will appear as a tooltip."}
                        name={"SOMA"}
                        position={{ lat: 37.778519, lng: -122.40564 }}
                      />
                      <Marker name={"Dolores park"} />
                      <InfoWindow>
                        <div>
                          <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Overlays</h4>
                  <p className="card-title-desc">Example of google maps.</p>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={this.props.google}
                      zoom={14}
                      style={{ width: "100%", height: "100%" }}
                      initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                      }}
                    >
                      <Marker onClick={this.onMarkerClick} />
                      <InfoWindow>
                        <div>
                          <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Basic</h4>
                  <p className="card-title-desc">Example of google maps.</p>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={this.props.google}
                      zoom={14}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <InfoWindow>
                        <div>
                          <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Ultra Light</h4>
                  <p className="card-title-desc">Example of google maps.</p>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={this.props.google}
                      zoom={14}
                      styles={LightData.Data}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Marker onClick={this.onMarkerClick} />
                      <InfoWindow>
                        <div>
                          <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
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

// export default withRouter(connect(null, { activateAuthLayout })(GoogleMap));
export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3"
  })(MapsGoogle)
);
