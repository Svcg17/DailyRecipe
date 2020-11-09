import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class IconMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Material Design</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Icons</Link>
                  </li>
                  <li className="breadcrumb-item active">Material Design</li>
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
            <div className="col-12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Examples</h4>
                  <p className="card-title-desc mb-2">
                    Use{" "}
                    <code>
                      &lt;i class="mdi mdi-speedometer-slow"&gt;&lt;/i&gt;
                    </code>{" "}
                    <span className="badge badge-success">v 4.4.95</span>.
                  </p>

                  <Card className="icon-demo-content">
                    <Row>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-link"></i> mdi mdi-key-link
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-star"></i> mdi mdi-key-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qrcode-minus"></i> mdi
                        mdi-qrcode-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qrcode-plus"></i> mdi
                        mdi-qrcode-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qrcode-remove"></i> mdi
                        mdi-qrcode-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-grill-outline"></i> mdi
                        mdi-grill-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cigar"></i> mdi mdi-cigar
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-certificate-outline"></i> mdi
                        mdi-certificate-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-certificate-outline"></i> mdi
                        mdi-file-certificate-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-certificate"></i> mdi
                        mdi-file-certificate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-key-outline"></i> mdi
                        mdi-file-key-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-key"></i> mdi mdi-file-key
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bash"></i> mdi mdi-bash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-in-talk-outline"></i> mdi
                        mdi-phone-in-talk-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basket-outline"></i> mdi
                        mdi-basket-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-school-outline"></i> mdi
                        mdi-school-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pound-box-outline"></i> mdi
                        mdi-pound-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-noodles"></i> mdi mdi-noodles
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-leek"></i> mdi mdi-leek
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-yoga"></i> mdi mdi-yoga
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-meditation"></i> mdi
                        mdi-meditation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-link-outline"></i> mdi
                        mdi-file-link-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-link"></i> mdi mdi-file-link
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-phone-outline"></i> mdi
                        mdi-file-phone-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-phone"></i> mdi
                        mdi-file-phone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash-usd-outline"></i> mdi
                        mdi-cash-usd-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-image-outline"></i> mdi
                        mdi-message-image-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-text-clock-outline"></i>{" "}
                        mdi mdi-message-text-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-text-clock"></i> mdi
                        mdi-message-text-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-processing-outline"></i>{" "}
                        mdi mdi-message-processing-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-settings-variant-outline"></i>{" "}
                        mdi mdi-message-settings-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-settings-outline"></i> mdi
                        mdi-message-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-minus"></i> mdi
                        mdi-message-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-minus-outline"></i> mdi
                        mdi-message-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-text-lock-outline"></i>{" "}
                        mdi mdi-message-text-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-lock-outline"></i> mdi
                        mdi-message-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coin-outline"></i> mdi
                        mdi-coin-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-arrow-right"></i> mdi
                        mdi-gate-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-open"></i> mdi mdi-gate-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-police-badge-outline"></i> mdi
                        mdi-police-badge-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-police-badge"></i> mdi
                        mdi-police-badge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-lock-outline"></i> mdi
                        mdi-send-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-outline"></i> mdi
                        mdi-send-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-clock-outline"></i> mdi
                        mdi-send-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-clock"></i> mdi
                        mdi-send-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-check-outline"></i> mdi
                        mdi-send-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-check"></i> mdi
                        mdi-send-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-lock-outline"></i> mdi
                        mdi-account-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-lock"></i> mdi
                        mdi-account-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pasta"></i> mdi mdi-pasta
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-vertical-lock"></i> mdi
                        mdi-arrow-vertical-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-horizontal-lock"></i> mdi
                        mdi-arrow-horizontal-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weight-lifter"></i> mdi
                        mdi-weight-lifter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-edit-outline"></i> mdi
                        mdi-home-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-edit"></i> mdi mdi-home-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paper-roll-outline"></i> mdi
                        mdi-paper-roll-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paper-roll"></i> mdi
                        mdi-paper-roll
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d8-outline"></i> mdi
                        mdi-dice-d8-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d6-outline"></i> mdi
                        mdi-dice-d6-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d4-outline"></i> mdi
                        mdi-dice-d4-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d20-outline"></i> mdi
                        mdi-dice-d20-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d12-outline"></i> mdi
                        mdi-dice-d12-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d10-outline"></i> mdi
                        mdi-dice-d10-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-multiple-outline"></i> mdi
                        mdi-dice-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-6-outline"></i> mdi
                        mdi-dice-6-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-5-outline"></i> mdi
                        mdi-dice-5-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-4-outline"></i> mdi
                        mdi-dice-4-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-3-outline"></i> mdi
                        mdi-dice-3-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-2-outline"></i> mdi
                        mdi-dice-2-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-1-outline"></i> mdi
                        mdi-dice-1-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-alphabetical-descending"></i>{" "}
                        mdi mdi-sort-alphabetical-descending
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-alphabetical-ascending"></i>{" "}
                        mdi mdi-sort-alphabetical-ascending
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-variant-remove"></i> mdi
                        mdi-sort-variant-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-check"></i> mdi
                        mdi-printer-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-box-multiple-outline"></i>{" "}
                        mdi mdi-minus-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-box-multiple-outline"></i>{" "}
                        mdi mdi-plus-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-box-multiple-outline"></i>{" "}
                        mdi mdi-pencil-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-box-multiple"></i> mdi
                        mdi-pencil-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-box-multiple"></i> mdi
                        mdi-minus-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gender-non-binary"></i> mdi
                        mdi-gender-non-binary
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gender-male-female-variant"></i>{" "}
                        mdi mdi-gender-male-female-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-handcuffs"></i> mdi mdi-handcuffs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ocr"></i> mdi mdi-ocr
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text-recognition"></i> mdi
                        mdi-text-recognition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-star-outline"></i> mdi
                        mdi-shield-star-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-star"></i> mdi
                        mdi-shield-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire-hydrant-alert"></i> mdi
                        mdi-fire-hydrant-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire-hydrant-off"></i> mdi
                        mdi-fire-hydrant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire-hydrant"></i> mdi
                        mdi-fire-hydrant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-tonic-skull-outline"></i>{" "}
                        mdi mdi-bottle-tonic-skull-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-tonic-skull"></i> mdi
                        mdi-bottle-tonic-skull
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-tonic-plus-outline"></i>{" "}
                        mdi mdi-bottle-tonic-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-tonic-plus"></i> mdi
                        mdi-bottle-tonic-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-tonic-outline"></i> mdi
                        mdi-bottle-tonic-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-tonic"></i> mdi
                        mdi-bottle-tonic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-supervisor-outline"></i>{" "}
                        mdi mdi-account-supervisor-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crosshairs-question"></i> mdi
                        mdi-crosshairs-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-arrow-left"></i> mdi
                        mdi-calendar-arrow-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-arrow-right"></i> mdi
                        mdi-calendar-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toothbrush-electric"></i> mdi
                        mdi-toothbrush-electric
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-roof"></i> mdi mdi-home-roof
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toothbrush-paste"></i> mdi
                        mdi-toothbrush-paste
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toothbrush"></i> mdi
                        mdi-toothbrush
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-default-gesture-outline"></i>{" "}
                        mdi mdi-cursor-default-gesture-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-default-gesture"></i> mdi
                        mdi-cursor-default-gesture
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diabetes"></i> mdi mdi-diabetes
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-edit-outline"></i> mdi
                        mdi-movie-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-edit"></i> mdi
                        mdi-movie-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-filter-outline"></i> mdi
                        mdi-movie-filter-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-filter"></i> mdi
                        mdi-movie-filter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-vibrate"></i> mdi
                        mdi-volume-vibrate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-source"></i> mdi
                        mdi-volume-source
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bike-fast"></i> mdi mdi-bike-fast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-shutter-alert"></i> mdi
                        mdi-window-shutter-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-shutter-open"></i> mdi
                        mdi-window-shutter-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-shutter"></i> mdi
                        mdi-window-shutter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-antenna"></i> mdi mdi-antenna
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-centos"></i> mdi mdi-centos
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-redhat"></i> mdi mdi-redhat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-real-estate"></i> mdi
                        mdi-sign-real-estate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-flow-outline"></i> mdi
                        mdi-clipboard-flow-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-mug-variant"></i> mdi
                        mdi-glass-mug-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slot-machine"></i> mdi
                        mdi-slot-machine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slot-machine-outline"></i> mdi
                        mdi-slot-machine-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-variant-minus"></i> mdi
                        mdi-filter-variant-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-variant-plus"></i> mdi
                        mdi-filter-variant-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-clean"></i> mdi
                        mdi-monitor-clean
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-clean"></i> mdi
                        mdi-television-clean
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-list-outline"></i> mdi
                        mdi-clipboard-list-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-list"></i> mdi
                        mdi-clipboard-list
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-off-outline"></i> mdi
                        mdi-circle-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-close"></i> mdi
                        mdi-progress-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-beehive-outline"></i> mdi
                        mdi-beehive-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-multiple-outline"></i> mdi
                        mdi-hexagon-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-epsilon"></i> mdi mdi-epsilon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-message-off"></i> mdi
                        mdi-cellphone-message-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamma"></i> mdi mdi-gamma
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alien-outline"></i> mdi
                        mdi-alien-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-settings-outline"></i> mdi
                        mdi-account-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-tie-outline"></i> mdi
                        mdi-account-tie-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-child-outline"></i> mdi
                        mdi-account-child-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flip-vertical"></i> mdi
                        mdi-flip-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flip-horizontal"></i> mdi
                        mdi-flip-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-jp"></i> mdi
                        mdi-power-socket-jp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-khanda"></i> mdi mdi-khanda
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-variable-box"></i> mdi
                        mdi-variable-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-variable"></i> mdi
                        mdi-iframe-variable
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-variable-outline"></i> mdi
                        mdi-iframe-variable-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-parentheses"></i> mdi
                        mdi-iframe-parentheses
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-parentheses-outline"></i>{" "}
                        mdi mdi-iframe-parentheses-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-braces"></i> mdi
                        mdi-iframe-braces
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-braces-outline"></i> mdi
                        mdi-iframe-braces-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-array"></i> mdi
                        mdi-iframe-array
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-array-outline"></i> mdi
                        mdi-iframe-array-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-parentheses-box"></i> mdi
                        mdi-code-parentheses-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-braces-box"></i> mdi
                        mdi-code-braces-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-key-outline"></i> mdi
                        mdi-folder-key-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-heart-outline"></i> mdi
                        mdi-folder-heart-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-heart"></i> mdi
                        mdi-folder-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-restart-alert"></i> mdi
                        mdi-restart-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-variant-remove"></i> mdi
                        mdi-link-variant-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-variant-minus"></i> mdi
                        mdi-link-variant-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-variant-plus"></i> mdi
                        mdi-link-variant-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-kubernetes"></i> mdi
                        mdi-kubernetes
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nuxt"></i> mdi mdi-nuxt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nix"></i> mdi mdi-nix
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-fr"></i> mdi
                        mdi-power-socket-fr
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-de"></i> mdi
                        mdi-power-socket-de
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-down"></i> mdi
                        mdi-map-marker-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-up"></i> mdi
                        mdi-map-marker-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reload-alert"></i> mdi
                        mdi-reload-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-restore-alert"></i> mdi
                        mdi-restore-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-clock-outline"></i> mdi
                        mdi-briefcase-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-clock"></i> mdi
                        mdi-briefcase-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-receive-outline"></i> mdi
                        mdi-email-receive-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-receive"></i> mdi
                        mdi-email-receive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-send-outline"></i> mdi
                        mdi-email-send-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-send"></i> mdi
                        mdi-email-send
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-heart"></i> mdi
                        mdi-hand-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-menu-outline"></i> mdi
                        mdi-filter-menu-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-menu"></i> mdi
                        mdi-filter-menu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shaker-outline"></i> mdi
                        mdi-shaker-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shaker"></i> mdi mdi-shaker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-electric-switch-closed"></i> mdi
                        mdi-electric-switch-closed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-consolidate"></i> mdi
                        mdi-consolidate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hair-dryer-outline"></i> mdi
                        mdi-hair-dryer-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hair-dryer"></i> mdi
                        mdi-hair-dryer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-download-outline"></i> mdi
                        mdi-folder-download-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-upload-outline"></i> mdi
                        mdi-folder-upload-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-confused-outline"></i>{" "}
                        mdi mdi-emoticon-confused-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-confused"></i> mdi
                        mdi-emoticon-confused
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boomerang"></i> mdi mdi-boomerang
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-alert-variant-outline"></i>{" "}
                        mdi mdi-battery-alert-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-alert-variant"></i> mdi
                        mdi-battery-alert-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-table-box-multiple-outline"></i>{" "}
                        mdi mdi-file-table-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-table-box-multiple"></i> mdi
                        mdi-file-table-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-table-box-outline"></i> mdi
                        mdi-file-table-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-table-box"></i> mdi
                        mdi-file-table-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-horizontal-rotate-counterclockwise"></i>{" "}
                        mdi mdi-horizontal-rotate-counterclockwise
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-horizontal-rotate-clockwise"></i>{" "}
                        mdi mdi-horizontal-rotate-clockwise
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-horizontal-rotate-clockwise"></i>{" "}
                        mdi mdi-horizontal-rotate-clockwise
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-air-humidifier"></i> mdi
                        mdi-air-humidifier
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iv-bag"></i> mdi mdi-iv-bag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decimal-comma-decrease"></i> mdi
                        mdi-decimal-comma-decrease
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decimal-comma-increase"></i> mdi
                        mdi-decimal-comma-increase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decimal-comma"></i> mdi
                        mdi-decimal-comma
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decimal"></i> mdi mdi-decimal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coffee-maker"></i> mdi
                        mdi-coffee-maker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ufo-outline"></i> mdi
                        mdi-ufo-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ufo"></i> mdi mdi-ufo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-cash-outline"></i> mdi
                        mdi-account-cash-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-cash"></i> mdi
                        mdi-account-cash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-api"></i> mdi mdi-api
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-cancel"></i> mdi
                        mdi-phone-cancel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ansible"></i> mdi mdi-ansible
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dock-window"></i> mdi
                        mdi-dock-window
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dock-right"></i> mdi
                        mdi-dock-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dock-left"></i> mdi mdi-dock-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dock-bottom"></i> mdi
                        mdi-dock-bottom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-domain-remove"></i> mdi
                        mdi-domain-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-domain-plus"></i> mdi
                        mdi-domain-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-concourse-ci"></i> mdi
                        mdi-concourse-ci
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coat-rack"></i> mdi mdi-coat-rack
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload-off-outline"></i> mdi
                        mdi-upload-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload-off"></i> mdi
                        mdi-upload-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-download-off-outline"></i> mdi
                        mdi-download-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-download-off"></i> mdi
                        mdi-download-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-alert-outline"></i> mdi
                        mdi-delete-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-alert"></i> mdi
                        mdi-delete-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-off-outline"></i> mdi
                        mdi-delete-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-off"></i> mdi
                        mdi-delete-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-lock"></i> mdi mdi-link-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-home-outline"></i> mdi
                        mdi-folder-home-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-home"></i> mdi
                        mdi-folder-home
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-plus-outline"></i> mdi
                        mdi-message-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-storefront"></i> mdi
                        mdi-storefront
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-door-lock"></i> mdi
                        mdi-car-door-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-door-closed-lock"></i> mdi
                        mdi-door-closed-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-information-outline"></i>{" "}
                        mdi mdi-folder-information-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-information"></i> mdi
                        mdi-folder-information
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-smart-card-reader-outline"></i>{" "}
                        mdi mdi-smart-card-reader-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-smart-card-reader"></i> mdi
                        mdi-smart-card-reader
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-smart-card-outline"></i> mdi
                        mdi-smart-card-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-smart-card"></i> mdi
                        mdi-smart-card
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-remove-outline"></i> mdi
                        mdi-flag-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-plus-outline"></i> mdi
                        mdi-flag-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-minus-outline"></i> mdi
                        mdi-flag-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-high"></i> mdi
                        mdi-thermometer-high
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bicycle"></i> mdi mdi-bicycle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-golf-tee"></i> mdi mdi-golf-tee
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-textarea"></i> mdi mdi-textarea
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-10"></i> mdi
                        mdi-roman-numeral-10
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-5"></i> mdi
                        mdi-roman-numeral-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-1"></i> mdi
                        mdi-roman-numeral-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-9"></i> mdi
                        mdi-roman-numeral-9
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-8"></i> mdi
                        mdi-roman-numeral-8
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-7"></i> mdi
                        mdi-roman-numeral-7
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-6"></i> mdi
                        mdi-roman-numeral-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-4"></i> mdi
                        mdi-roman-numeral-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-3"></i> mdi
                        mdi-roman-numeral-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-roman-numeral-2"></i> mdi
                        mdi-roman-numeral-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-azure-devops"></i> mdi
                        mdi-azure-devops
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-soldering-iron"></i> mdi
                        mdi-soldering-iron
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stomach"></i> mdi mdi-stomach
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lungs"></i> mdi mdi-lungs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-eye"></i> mdi mdi-table-eye
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moped"></i> mdi mdi-moped
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arm-flex-outline"></i> mdi
                        mdi-arm-flex-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arm-flex"></i> mdi mdi-arm-flex
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-single-outline"></i> mdi
                        mdi-bed-single-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-single"></i> mdi
                        mdi-bed-single
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-queen-outline"></i> mdi
                        mdi-bed-queen-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-queen"></i> mdi mdi-bed-queen
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-double"></i> mdi
                        mdi-bed-double
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-king-outline"></i> mdi
                        mdi-bed-king-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-double-outline"></i> mdi
                        mdi-bed-double-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-king"></i> mdi mdi-bed-king
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-information-variant"></i> mdi
                        mdi-book-information-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-face-profile-woman"></i> mdi
                        mdi-face-profile-woman
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-face-woman-outline"></i> mdi
                        mdi-face-woman-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-face-woman"></i> mdi
                        mdi-face-woman
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-router"></i> mdi
                        mdi-network-router
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-blank-multiple"></i> mdi
                        mdi-calendar-blank-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-log"></i> mdi mdi-math-log
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-card-search-outline"></i> mdi
                        mdi-card-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-card-search"></i> mdi
                        mdi-card-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-furigana-horizontal"></i> mdi
                        mdi-furigana-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-furigana-vertical"></i> mdi
                        mdi-furigana-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-settings-variant"></i> mdi
                        mdi-file-settings-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-settings-variant-outline"></i>{" "}
                        mdi mdi-file-settings-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-settings-variant"></i> mdi
                        mdi-folder-settings-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-settings-variant-outline"></i>{" "}
                        mdi mdi-folder-settings-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-settings-outline"></i> mdi
                        mdi-folder-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-settings"></i> mdi
                        mdi-folder-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-settings"></i> mdi
                        mdi-file-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-settings-outline"></i> mdi
                        mdi-file-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-soda-classNameic"></i> mdi
                        mdi-bottle-soda-classNameic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-soda-outline"></i> mdi
                        mdi-bottle-soda-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-soda"></i> mdi
                        mdi-bottle-soda
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ruler-square-compass"></i> mdi
                        mdi-ruler-square-compass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ruler-square-compass"></i> mdi
                        mdi-ruler-square-compass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-bulleted-triangle"></i>{" "}
                        mdi mdi-format-list-bulleted-triangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-party-popper"></i> mdi
                        mdi-party-popper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cast-audio"></i> mdi
                        mdi-cast-audio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-routes-clock"></i> mdi
                        mdi-routes-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-settings-transfer-outline"></i>{" "}
                        mdi mdi-settings-transfer-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-settings-transfer"></i> mdi
                        mdi-settings-transfer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-valve-closed"></i> mdi
                        mdi-valve-closed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-valve-open"></i> mdi
                        mdi-valve-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-valve"></i> mdi mdi-valve
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blinds-open"></i> mdi
                        mdi-blinds-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sprinkler-variant"></i> mdi
                        mdi-sprinkler-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sprinkler"></i> mdi mdi-sprinkler
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-oil-level"></i> mdi mdi-oil-level
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-sun-outline"></i> mdi
                        mdi-shield-sun-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-sun"></i> mdi
                        mdi-shield-sun
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-palm-tree"></i> mdi mdi-palm-tree
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-island"></i> mdi mdi-island
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fruit-watermelon"></i> mdi
                        mdi-fruit-watermelon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fruit-pineapple"></i> mdi
                        mdi-fruit-pineapple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fruit-grapes-outline"></i> mdi
                        mdi-fruit-grapes-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fruit-grapes"></i> mdi
                        mdi-fruit-grapes
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fruit-citrus"></i> mdi
                        mdi-fruit-citrus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fruit-cherries"></i> mdi
                        mdi-fruit-cherries
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-excavator"></i> mdi mdi-excavator
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-instrument-triangle"></i> mdi
                        mdi-instrument-triangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-graph-outline"></i> mdi
                        mdi-graph-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-graph"></i> mdi mdi-graph
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-check-outline"></i> mdi
                        mdi-video-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-check"></i> mdi
                        mdi-video-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airballoon-outline"></i> mdi
                        mdi-airballoon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-quote-outline"></i> mdi
                        mdi-comment-quote-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-quote"></i> mdi
                        mdi-comment-quote
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-coolant-level"></i> mdi
                        mdi-car-coolant-level
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-clutch"></i> mdi
                        mdi-car-clutch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-turbocharger"></i> mdi
                        mdi-car-turbocharger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-brake-retarder"></i> mdi
                        mdi-car-brake-retarder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-chair"></i> mdi
                        mdi-table-chair
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-domino-mask"></i> mdi
                        mdi-domino-mask
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-robber"></i> mdi mdi-robber
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-variant-remove"></i> mdi
                        mdi-filter-variant-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toaster"></i> mdi mdi-toaster
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alphabetical-off"></i> mdi
                        mdi-alphabetical-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alphabetical-variant-off"></i> mdi
                        mdi-alphabetical-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alphabetical-variant"></i> mdi
                        mdi-alphabetical-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-3-plus"></i> mdi
                        mdi-car-3-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-2-plus"></i> mdi
                        mdi-car-2-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-diamond-outline"></i> mdi
                        mdi-cards-diamond-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-stop-uncovered"></i> mdi
                        mdi-bus-stop-uncovered
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-stop-covered"></i> mdi
                        mdi-bus-stop-covered
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-stop"></i> mdi mdi-bus-stop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tools"></i> mdi mdi-tools
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-windshield-outline"></i> mdi
                        mdi-car-windshield-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-windshield"></i> mdi
                        mdi-car-windshield
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-star-outline"></i> mdi
                        mdi-file-star-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-star"></i> mdi mdi-file-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-space"></i> mdi
                        mdi-keyboard-space
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-my-business"></i> mdi
                        mdi-google-my-business
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-terraform"></i> mdi mdi-terraform
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apache-kafka"></i> mdi
                        mdi-apache-kafka
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-electron-framework"></i> mdi
                        mdi-electron-framework
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-minus-outline"></i> mdi
                        mdi-eye-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-minus"></i> mdi mdi-eye-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-box-multiple-outline"></i>{" "}
                        mdi mdi-account-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-word-box-outline"></i> mdi
                        mdi-file-word-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-powerpoint-box-outline"></i>{" "}
                        mdi mdi-file-powerpoint-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-excel-box-outline"></i> mdi
                        mdi-file-excel-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-code-outline"></i> mdi
                        mdi-file-code-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-word-outline"></i> mdi
                        mdi-file-word-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-undo-outline"></i> mdi
                        mdi-file-undo-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-send-outline"></i> mdi
                        mdi-file-send-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-restore-outline"></i> mdi
                        mdi-file-restore-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-remove-outline"></i> mdi
                        mdi-file-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-question-outline"></i> mdi
                        mdi-file-question-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-remove-outline"></i> mdi
                        mdi-file-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-question-outline"></i> mdi
                        mdi-file-question-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-powerpoint-outline"></i> mdi
                        mdi-file-powerpoint-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-percent-outline"></i> mdi
                        mdi-file-percent-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-multiple-outline"></i> mdi
                        mdi-file-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-move-outline"></i> mdi
                        mdi-file-move-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-lock-outline"></i> mdi
                        mdi-file-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-import-outline"></i> mdi
                        mdi-file-import-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-export-outline"></i> mdi
                        mdi-file-export-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-excel-outline"></i> mdi
                        mdi-file-excel-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cloud-outline"></i> mdi
                        mdi-file-cloud-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-chart-outline"></i> mdi
                        mdi-file-chart-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-account-outline"></i> mdi
                        mdi-file-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transfer"></i> mdi mdi-transfer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-pos"></i> mdi
                        mdi-printer-pos
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scale-off"></i> mdi mdi-scale-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-edit-outline"></i> mdi
                        mdi-account-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-circle-outline"></i> mdi
                        mdi-home-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-play"></i> mdi
                        mdi-cellphone-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-billboard"></i> mdi mdi-billboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-floor-lamp-dual"></i> mdi
                        mdi-floor-lamp-dual
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-floor-lamp-variant"></i> mdi
                        mdi-floor-lamp-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-strip-variant"></i> mdi
                        mdi-led-strip-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-outdoor-lamp"></i> mdi
                        mdi-outdoor-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coach-lamp"></i> mdi
                        mdi-coach-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-harddisk-remove"></i> mdi
                        mdi-harddisk-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-harddisk-plus"></i> mdi
                        mdi-harddisk-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-well-outline"></i> mdi
                        mdi-water-well-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-well"></i> mdi
                        mdi-water-well
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-pause"></i> mdi
                        mdi-television-pause
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-stop"></i> mdi
                        mdi-television-stop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speedometer-slow"></i> mdi
                        mdi-speedometer-slow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speedometer-medium"></i> mdi
                        mdi-speedometer-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-group"></i> mdi
                        mdi-select-group
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crosshairs-off"></i> mdi
                        mdi-crosshairs-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-alert"></i> mdi
                        mdi-content-save-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-alert-outline"></i>{" "}
                        mdi mdi-content-save-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby-bottle"></i> mdi
                        mdi-baby-bottle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby-bottle-outline"></i> mdi
                        mdi-baby-bottle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-thermometer"></i> mdi
                        mdi-home-thermometer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-thermometer-outline"></i> mdi
                        mdi-home-thermometer-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-shift-pattern"></i> mdi
                        mdi-car-shift-pattern
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-information"></i> mdi
                        mdi-cellphone-information
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-kettle-outline"></i> mdi
                        mdi-kettle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-web-box"></i> mdi mdi-web-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-clef-treble"></i> mdi
                        mdi-music-clef-treble
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-clef-bass"></i> mdi
                        mdi-music-clef-bass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-clef-alto"></i> mdi
                        mdi-music-clef-alto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-full"></i> mdi mdi-moon-full
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-waxing-gibbous"></i> mdi
                        mdi-moon-waxing-gibbous
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-first-quarter"></i> mdi
                        mdi-moon-first-quarter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-waxing-crescent"></i> mdi
                        mdi-moon-waxing-crescent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-new"></i> mdi mdi-moon-new
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-waning-crescent"></i> mdi
                        mdi-moon-waning-crescent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-last-quarter"></i> mdi
                        mdi-moon-last-quarter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-moon-waning-gibbous"></i> mdi
                        mdi-moon-waning-gibbous
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transit-detour"></i> mdi
                        mdi-transit-detour
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wardrobe"></i> mdi mdi-wardrobe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wardrobe-outline"></i> mdi
                        mdi-wardrobe-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cupboard"></i> mdi mdi-cupboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cupboard-outline"></i> mdi
                        mdi-cupboard-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet-plus"></i> mdi
                        mdi-wallet-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet-plus-outline"></i> mdi
                        mdi-wallet-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-handball"></i> mdi mdi-handball
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dresser-outline"></i> mdi
                        mdi-dresser-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dresser"></i> mdi mdi-dresser
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baguette"></i> mdi mdi-baguette
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-car"></i> mdi
                        mdi-shield-car
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-pump-off"></i> mdi
                        mdi-water-pump-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-latitude"></i> mdi mdi-latitude
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-longitude"></i> mdi mdi-longitude
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-triple"></i> mdi
                        mdi-layers-triple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-triple-outline"></i> mdi
                        mdi-layers-triple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-boiler"></i> mdi
                        mdi-water-boiler
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-carry-on"></i> mdi
                        mdi-bag-carry-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-carry-on-off"></i> mdi
                        mdi-bag-carry-on-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-checked"></i> mdi
                        mdi-bag-checked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-multiple"></i> mdi
                        mdi-bus-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shopping-search"></i> mdi
                        mdi-shopping-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-merge"></i> mdi mdi-merge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-speaker"></i> mdi
                        mdi-monitor-speaker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-speaker-off"></i> mdi
                        mdi-monitor-speaker-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-focus-auto"></i> mdi
                        mdi-focus-auto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-focus-field"></i> mdi
                        mdi-focus-field
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-focus-field-horizontal"></i> mdi
                        mdi-focus-field-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-focus-field-vertical"></i> mdi
                        mdi-focus-field-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-carry-on-check"></i> mdi
                        mdi-bag-carry-on-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-input-scart"></i> mdi
                        mdi-video-input-scart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-middleware"></i> mdi
                        mdi-middleware
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-middleware-outline"></i> mdi
                        mdi-middleware-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-frown-outline"></i> mdi
                        mdi-emoticon-frown-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-frown"></i> mdi
                        mdi-emoticon-frown
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-layout-header-footer"></i>{" "}
                        mdi mdi-page-layout-header-footer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-foot-print"></i> mdi
                        mdi-foot-print
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-markdown-outline"></i> mdi
                        mdi-markdown-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-edit-outline"></i>{" "}
                        mdi mdi-content-save-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-all-outline"></i> mdi
                        mdi-content-save-all-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-draw"></i> mdi mdi-draw
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-large-plus"></i> mdi
                        mdi-table-large-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-large-remove"></i> mdi
                        mdi-table-large-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-patio-heater"></i> mdi
                        mdi-patio-heater
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-outline"></i> mdi
                        mdi-music-note-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-off-outline"></i> mdi
                        mdi-music-note-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-accidental-sharp"></i> mdi
                        mdi-music-accidental-sharp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-accidental-double-sharp"></i>{" "}
                        mdi mdi-music-accidental-double-sharp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-accidental-flat"></i> mdi
                        mdi-music-accidental-flat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-accidental-double-flat"></i>{" "}
                        mdi mdi-music-accidental-double-flat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-accidental-natural"></i> mdi
                        mdi-music-accidental-natural
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-rest-whole"></i> mdi
                        mdi-music-rest-whole
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-rest-half"></i> mdi
                        mdi-music-rest-half
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-rest-quarter"></i> mdi
                        mdi-music-rest-quarter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-rest-eighth"></i> mdi
                        mdi-music-rest-eighth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-rest-sixteenth"></i> mdi
                        mdi-music-rest-sixteenth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-whole-dotted"></i> mdi
                        mdi-music-note-whole-dotted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-sixteenth-dotted"></i>{" "}
                        mdi mdi-music-note-sixteenth-dotted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-quarter-dotted"></i>{" "}
                        mdi mdi-music-note-quarter-dotted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-half-dotted"></i> mdi
                        mdi-music-note-half-dotted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-eighth-dotted"></i> mdi
                        mdi-music-note-eighth-dotted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-direction-plus"></i> mdi
                        mdi-sign-direction-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-direction-minus"></i> mdi
                        mdi-sign-direction-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-direction-remove"></i> mdi
                        mdi-sign-direction-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby-carriage-off"></i> mdi
                        mdi-baby-carriage-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-protocol"></i> mdi mdi-protocol
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bee"></i> mdi mdi-bee
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bee-flower"></i> mdi
                        mdi-bee-flower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tram-side"></i> mdi mdi-tram-side
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-overscan"></i> mdi mdi-overscan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seal-variant"></i> mdi
                        mdi-seal-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-license"></i> mdi mdi-license
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-auto-adjust"></i> mdi
                        mdi-image-auto-adjust
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-devices"></i> mdi mdi-devices
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-horizontal-circle"></i> mdi
                        mdi-swap-horizontal-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-horizontal-circle-outline"></i>{" "}
                        mdi mdi-swap-horizontal-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-vertical-circle"></i> mdi
                        mdi-swap-vertical-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-vertical-circle-outline"></i>{" "}
                        mdi mdi-swap-vertical-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text-rotation-vertical"></i>{" "}
                        mdi mdi-format-text-rotation-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text-rotation-up"></i> mdi
                        mdi-format-text-rotation-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text-rotation-down-vertical"></i>{" "}
                        mdi mdi-format-text-rotation-down-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text-rotation-angle-up"></i>{" "}
                        mdi mdi-format-text-rotation-angle-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text-rotation-angle-down"></i>{" "}
                        mdi mdi-format-text-rotation-angle-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper-variant"></i> mdi
                        mdi-newspaper-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper-variant-multiple-outline"></i>{" "}
                        mdi mdi-newspaper-variant-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-post"></i> mdi mdi-post
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper-variant-multiple"></i>{" "}
                        mdi mdi-newspaper-variant-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper-variant-outline"></i>{" "}
                        mdi mdi-newspaper-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-post-outline"></i> mdi
                        mdi-post-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chair-rolling"></i> mdi
                        mdi-chair-rolling
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-swap"></i> mdi mdi-file-swap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-swap-outline"></i> mdi
                        mdi-file-swap-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-swap"></i> mdi
                        mdi-folder-swap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-swap-outline"></i> mdi
                        mdi-folder-swap-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-open"></i> mdi
                        mdi-movie-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-open-outline"></i> mdi
                        mdi-movie-open-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-newsletter"></i> mdi
                        mdi-email-newsletter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-bell-curve-cumulative"></i>{" "}
                        mdi mdi-chart-bell-curve-cumulative
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-texture-box"></i> mdi
                        mdi-texture-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-location-enter"></i> mdi
                        mdi-location-enter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-location-exit"></i> mdi
                        mdi-location-exit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-place"></i> mdi
                        mdi-select-place
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tanker-truck"></i> mdi
                        mdi-tanker-truck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-approximately-equal"></i> mdi
                        mdi-approximately-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-approximately-equal-box"></i> mdi
                        mdi-approximately-equal-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slash-forward"></i> mdi
                        mdi-slash-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slash-forward-box"></i> mdi
                        mdi-slash-forward-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-integral"></i> mdi
                        mdi-math-integral
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-integral-box"></i> mdi
                        mdi-math-integral-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-norm"></i> mdi mdi-math-norm
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-norm-box"></i> mdi
                        mdi-math-norm-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pig-variant"></i> mdi
                        mdi-pig-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-piggy-bank"></i> mdi
                        mdi-piggy-bank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ab-testing"></i> mdi
                        mdi-ab-testing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coffee-off"></i> mdi
                        mdi-coffee-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coffee-off-outline"></i> mdi
                        mdi-coffee-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-lock"></i> mdi
                        mdi-message-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-text-lock"></i> mdi
                        mdi-message-text-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-link"></i> mdi
                        mdi-vector-link
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-warehouse"></i> mdi mdi-warehouse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-open-variant"></i> mdi
                        mdi-lock-open-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-open-variant-outline"></i>{" "}
                        mdi mdi-lock-open-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silverware-clean"></i> mdi
                        mdi-silverware-clean
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-wireless"></i> mdi
                        mdi-key-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-id-card"></i> mdi mdi-id-card
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-pdf-box-outline"></i> mdi
                        mdi-file-pdf-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-adobe-acrobat"></i> mdi
                        mdi-adobe-acrobat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-check"></i> mdi
                        mdi-clock-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-check-outline"></i> mdi
                        mdi-clock-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-letter-starts-with"></i>{" "}
                        mdi mdi-format-letter-starts-with
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-letter-ends-with"></i> mdi
                        mdi-format-letter-ends-with
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-letter-matches"></i> mdi
                        mdi-format-letter-matches
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-account-outline"></i> mdi
                        mdi-folder-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-plus-outline"></i> mdi
                        mdi-folder-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-remove-outline"></i> mdi
                        mdi-folder-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-star-outline"></i> mdi
                        mdi-folder-star-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-import-outline"></i> mdi
                        mdi-home-import-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-export-outline"></i> mdi
                        mdi-home-export-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-child-seat"></i> mdi
                        mdi-car-child-seat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-seat"></i> mdi mdi-car-seat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-seat-heater"></i> mdi
                        mdi-car-seat-heater
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-seat-cooler"></i> mdi
                        mdi-car-seat-cooler
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-minus"></i> mdi
                        mdi-credit-card-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-minus-outline"></i>{" "}
                        mdi mdi-credit-card-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-remove"></i> mdi
                        mdi-credit-card-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-remove-outline"></i>{" "}
                        mdi mdi-credit-card-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-expansion-card-variant"></i> mdi
                        mdi-expansion-card-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline"></i> mdi mdi-timeline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-outline"></i> mdi
                        mdi-timeline-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-text"></i> mdi
                        mdi-timeline-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-text-outline"></i> mdi
                        mdi-timeline-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-plus"></i> mdi
                        mdi-timeline-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-plus-outline"></i> mdi
                        mdi-timeline-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-alert"></i> mdi
                        mdi-timeline-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-alert-outline"></i> mdi
                        mdi-timeline-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-help"></i> mdi
                        mdi-timeline-help
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timeline-help-outline"></i> mdi
                        mdi-timeline-help-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-plus"></i> mdi
                        mdi-numeric-9-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-10"></i> mdi
                        mdi-numeric-10
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-10-box-multiple"></i> mdi
                        mdi-numeric-10-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-10-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-10-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-10-circle"></i> mdi
                        mdi-numeric-10-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-10-circle-outline"></i>{" "}
                        mdi mdi-numeric-10-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hospital"></i> mdi mdi-hospital
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hospital-box-outline"></i> mdi
                        mdi-hospital-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coolant-temperature"></i> mdi
                        mdi-coolant-temperature
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stadium-variant"></i> mdi
                        mdi-stadium-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-outline"></i> mdi
                        mdi-credit-card-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-multiple-outline"></i>{" "}
                        mdi mdi-credit-card-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-off-outline"></i> mdi
                        mdi-credit-card-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-plus-outline"></i> mdi
                        mdi-credit-card-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-refund-outline"></i>{" "}
                        mdi mdi-credit-card-refund-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-scan-outline"></i> mdi
                        mdi-credit-card-scan-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-settings-outline"></i>{" "}
                        mdi mdi-credit-card-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-marker-outline"></i>{" "}
                        mdi mdi-credit-card-marker-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-wireless-outline"></i>{" "}
                        mdi mdi-credit-card-wireless-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zip-box-outline"></i> mdi
                        mdi-zip-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-peanut"></i> mdi mdi-peanut
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-peanut-off"></i> mdi
                        mdi-peanut-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-peanut-outline"></i> mdi
                        mdi-peanut-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-peanut-off-outline"></i> mdi
                        mdi-peanut-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-edit-outline"></i> mdi
                        mdi-account-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ferris-wheel"></i> mdi
                        mdi-ferris-wheel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby-face-outline"></i> mdi
                        mdi-baby-face-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby-face"></i> mdi mdi-baby-face
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-outline"></i> mdi
                        mdi-bank-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gas-station-outline"></i> mdi
                        mdi-gas-station-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contact-phone"></i> mdi
                        mdi-contact-phone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contact-phone-outline"></i> mdi
                        mdi-contact-phone-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contact-mail-outline"></i> mdi
                        mdi-contact-mail-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-tree"></i> mdi
                        mdi-chart-tree
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-equalizer"></i> mdi mdi-equalizer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-equalizer-outline"></i> mdi
                        mdi-equalizer-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-podcast"></i> mdi
                        mdi-google-podcast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-search"></i> mdi
                        mdi-file-document-box-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-search-outline"></i>{" "}
                        mdi mdi-file-document-box-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-plus-outline"></i>{" "}
                        mdi mdi-file-document-box-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-plus"></i> mdi
                        mdi-file-document-box-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-minus"></i> mdi
                        mdi-file-document-box-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-minus-outline"></i>{" "}
                        mdi mdi-file-document-box-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-remove "></i>{" "}
                        mdi mdi-file-document-box-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-remove-outline"></i>{" "}
                        mdi mdi-file-document-box-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ellipse "></i> mdi mdi-ellipse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ellipse-outline "></i> mdi
                        mdi-ellipse-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-atom-variant"></i> mdi
                        mdi-atom-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-timeline-variant"></i> mdi
                        mdi-chart-timeline-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-note"></i> mdi
                        mdi-alarm-note
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-note-off"></i> mdi
                        mdi-alarm-note-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-alert-outline"></i> mdi
                        mdi-bell-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-electric-switch"></i> mdi
                        mdi-electric-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-remote-tv"></i> mdi mdi-remote-tv
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-remote-tv-off"></i> mdi
                        mdi-remote-tv-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-remote-off"></i> mdi
                        mdi-remote-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-overline"></i> mdi
                        mdi-format-overline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-play"></i> mdi mdi-book-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-play-outline"></i> mdi
                        mdi-book-play-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-alert-outline"></i> mdi
                        mdi-boom-gate-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-down-outline"></i> mdi
                        mdi-boom-gate-down-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-outline"></i> mdi
                        mdi-boom-gate-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-up-outline"></i> mdi
                        mdi-boom-gate-up-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-empty-outline"></i> mdi
                        mdi-delete-empty-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-billiards-rack"></i> mdi
                        mdi-billiards-rack
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate"></i> mdi mdi-boom-gate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-alert"></i> mdi
                        mdi-boom-gate-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-down"></i> mdi
                        mdi-boom-gate-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boom-gate-up"></i> mdi
                        mdi-boom-gate-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-notebook-outline"></i> mdi
                        mdi-notebook-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-record-circle"></i> mdi
                        mdi-record-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-record-circle-outline"></i> mdi
                        mdi-record-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-rial"></i> mdi
                        mdi-currency-rial
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-outline"></i> mdi
                        mdi-account-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-plus-outline"></i>{" "}
                        mdi mdi-account-multiple-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radioactive-off"></i> mdi
                        mdi-radioactive-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-nfc"></i> mdi
                        mdi-cellphone-nfc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-play"></i> mdi
                        mdi-television-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cowboy"></i> mdi mdi-cowboy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-expand"></i> mdi
                        mdi-circle-expand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-3d"></i> mdi mdi-rotate-3d
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unicode"></i> mdi mdi-unicode
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sailing"></i> mdi mdi-sailing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-double"></i> mdi
                        mdi-circle-double
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-check"></i> mdi
                        mdi-file-document-box-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-check-outline"></i>{" "}
                        mdi mdi-file-document-box-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-check"></i> mdi mdi-map-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-check-outline"></i> mdi
                        mdi-map-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-variant-outline"></i> mdi
                        mdi-gamepad-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-finance"></i> mdi mdi-finance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-repeat"></i> mdi
                        mdi-calendar-repeat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-repeat-outline"></i> mdi
                        mdi-calendar-repeat-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-alert"></i> mdi
                        mdi-shield-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-alert-outline"></i> mdi
                        mdi-shield-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-digital"></i> mdi
                        mdi-clock-digital
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-image-outline"></i> mdi
                        mdi-file-image-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-delimited-outline"></i> mdi
                        mdi-file-delimited-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tablet-dashboard"></i> mdi
                        mdi-tablet-dashboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-wireless"></i> mdi
                        mdi-video-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-wireless-outline"></i> mdi
                        mdi-video-wireless-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-backspace-reverse"></i> mdi
                        mdi-backspace-reverse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-backspace-reverse-outline"></i>{" "}
                        mdi mdi-backspace-reverse-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-scatter-plot"></i> mdi
                        mdi-chart-scatter-plot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scatter-plot"></i> mdi
                        mdi-scatter-plot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scatter-plot-outline"></i> mdi
                        mdi-scatter-plot-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-square"></i> mdi
                        mdi-gamepad-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-square-outline"></i> mdi
                        mdi-gamepad-square-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-areaspline-variant"></i> mdi
                        mdi-chart-areaspline-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fingerprint-off"></i> mdi
                        mdi-fingerprint-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mail"></i> mdi mdi-mail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-3d-variant"></i> mdi
                        mdi-video-3d-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-segment"></i> mdi mdi-segment
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dolly"></i> mdi mdi-dolly
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-analytics"></i> mdi
                        mdi-home-analytics
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-penguin"></i> mdi mdi-penguin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-import"></i> mdi
                        mdi-database-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-frequently-asked-questions"></i>{" "}
                        mdi mdi-frequently-asked-questions
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-search"></i> mdi
                        mdi-book-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-search-outline"></i> mdi
                        mdi-book-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-down"></i> mdi
                        mdi-arrow-up-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-right"></i> mdi
                        mdi-arrow-left-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-right-bottom-left"></i>{" "}
                        mdi mdi-arrow-top-right-bottom-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-left-bottom-right"></i>{" "}
                        mdi mdi-arrow-top-left-bottom-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-down-bold"></i> mdi
                        mdi-arrow-up-down-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-right-bold"></i> mdi
                        mdi-arrow-left-right-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-left-bottom-right-bold"></i>{" "}
                        mdi mdi-arrow-top-left-bottom-right-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-right-bottom-left-bold"></i>{" "}
                        mdi mdi-arrow-top-right-bottom-left-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-voice-off"></i> mdi mdi-voice-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-question"></i> mdi
                        mdi-map-marker-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-question-outline"></i>{" "}
                        mdi mdi-map-marker-question-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-remove"></i> mdi
                        mdi-map-marker-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-remove-variant"></i>{" "}
                        mdi mdi-map-marker-remove-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-multiple"></i> mdi
                        mdi-email-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-multiple-outline"></i> mdi
                        mdi-email-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-open-multiple"></i> mdi
                        mdi-email-open-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-open-multiple-outline"></i>{" "}
                        mdi mdi-email-open-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-minus"></i> mdi
                        mdi-email-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-minus-outline"></i> mdi
                        mdi-email-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper-minus"></i> mdi
                        mdi-newspaper-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper-plus"></i> mdi
                        mdi-newspaper-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rss-off"></i> mdi mdi-rss-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-plus-outline"></i> mdi
                        mdi-file-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fishbowl"></i> mdi mdi-fishbowl
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fishbowl-outline"></i> mdi
                        mdi-fishbowl-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-campfire"></i> mdi mdi-campfire
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-alert"></i> mdi
                        mdi-map-marker-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-alert-outline"></i> mdi
                        mdi-map-marker-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-clock"></i> mdi
                        mdi-credit-card-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-clock-outline"></i>{" "}
                        mdi mdi-credit-card-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire-extinguisher"></i> mdi
                        mdi-fire-extinguisher
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-edit"></i> mdi
                        mdi-email-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-edit-outline"></i> mdi
                        mdi-email-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chat-outline"></i> mdi
                        mdi-chat-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-railroad-light"></i> mdi
                        mdi-railroad-light
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-outline"></i> mdi
                        mdi-play-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-previous-outline"></i> mdi
                        mdi-skip-previous-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-next-outline"></i> mdi
                        mdi-skip-next-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-library-music-outline"></i> mdi
                        mdi-library-music-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-backward-outline"></i> mdi
                        mdi-skip-backward-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-forward-outline"></i> mdi
                        mdi-skip-forward-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male-height"></i> mdi
                        mdi-human-male-height
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male-height-variant"></i>{" "}
                        mdi mdi-human-male-height-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0-box-multiple"></i> mdi
                        mdi-numeric-0-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1-box-multiple"></i> mdi
                        mdi-numeric-1-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2-box-multiple"></i> mdi
                        mdi-numeric-2-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3-box-multiple"></i> mdi
                        mdi-numeric-3-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4-box-multiple"></i> mdi
                        mdi-numeric-4-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5-box-multiple"></i> mdi
                        mdi-numeric-5-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6-box-multiple"></i> mdi
                        mdi-numeric-6-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7-box-multiple"></i> mdi
                        mdi-numeric-7-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8-box-multiple"></i> mdi
                        mdi-numeric-8-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-box-multiple"></i> mdi
                        mdi-numeric-9-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-flash"></i> mdi
                        mdi-heart-flash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-alert"></i> mdi
                        mdi-phone-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-account"></i> mdi
                        mdi-calendar-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-account-outline"></i> mdi
                        mdi-calendar-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-identifier"></i> mdi
                        mdi-identifier
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-snowflake-variant"></i> mdi
                        mdi-snowflake-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-sunny-alert"></i> mdi
                        mdi-weather-sunny-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-hazy"></i> mdi
                        mdi-weather-hazy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-tornado"></i> mdi
                        mdi-weather-tornado
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-cloudy-alert"></i> mdi
                        mdi-weather-cloudy-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-partly-rainy"></i> mdi
                        mdi-weather-partly-rainy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-night-partly-cloudy"></i>{" "}
                        mdi mdi-weather-night-partly-cloudy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-partly-snowy"></i> mdi
                        mdi-weather-partly-snowy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-partly-snowy-rainy"></i>{" "}
                        mdi mdi-weather-partly-snowy-rainy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-snowy-heavy"></i> mdi
                        mdi-weather-snowy-heavy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-partly-lightning"></i> mdi
                        mdi-weather-partly-lightning
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fit-to-page"></i> mdi
                        mdi-fit-to-page
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fit-to-page-outline"></i> mdi
                        mdi-fit-to-page-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stretch-to-page"></i> mdi
                        mdi-stretch-to-page
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stretch-to-page-outline"></i> mdi
                        mdi-stretch-to-page-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reply-outline"></i> mdi
                        mdi-reply-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reply-all-outline"></i> mdi
                        mdi-reply-all-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bacteria-outline"></i> mdi
                        mdi-bacteria-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bacteria"></i> mdi mdi-bacteria
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wave"></i> mdi mdi-wave
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-snowflake-alert"></i> mdi
                        mdi-snowflake-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-flood"></i> mdi
                        mdi-home-flood
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-alert"></i> mdi
                        mdi-flash-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-alert-outline"></i> mdi
                        mdi-flash-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-weekend-outline"></i> mdi
                        mdi-calendar-weekend-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-weekend"></i> mdi
                        mdi-calendar-weekend
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-typewriter"></i> mdi
                        mdi-typewriter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lasso"></i> mdi mdi-lasso
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-selection-ellipse-arrow-inside"></i>{" "}
                        mdi mdi-selection-ellipse-arrow-inside
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cpu-32-bit"></i> mdi
                        mdi-cpu-32-bit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cpu-64-bit"></i> mdi
                        mdi-cpu-64-bit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-center-focus-strong"></i>{" "}
                        mdi mdi-image-filter-center-focus-strong
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-center-focus-strong-outline"></i>{" "}
                        mdi mdi-image-filter-center-focus-strong-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-purse"></i> mdi mdi-purse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-purse-outline"></i> mdi
                        mdi-purse-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jellyfish"></i> mdi mdi-jellyfish
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jellyfish-outline"></i> mdi
                        mdi-jellyfish-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cad"></i> mdi mdi-file-cad
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cad-box"></i> mdi
                        mdi-file-cad-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-share-off"></i> mdi mdi-share-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-share-off-outline"></i> mdi
                        mdi-share-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-plus"></i> mdi
                        mdi-filter-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-plus-outline"></i> mdi
                        mdi-filter-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-minus"></i> mdi
                        mdi-filter-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-minus-outline"></i> mdi
                        mdi-filter-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-plus"></i> mdi
                        mdi-camera-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-plus-outline"></i> mdi
                        mdi-camera-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ice-pop"></i> mdi mdi-ice-pop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-necklace"></i> mdi mdi-necklace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-oil-lamp"></i> mdi mdi-oil-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-tennis"></i> mdi
                        mdi-table-tennis
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-badge-horizontal"></i> mdi
                        mdi-account-badge-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-badge-horizontal-outline"></i>{" "}
                        mdi mdi-account-badge-horizontal-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-biathlon"></i> mdi mdi-biathlon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fireplace "></i> mdi mdi-fireplace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fireplace-off"></i> mdi
                        mdi-fireplace-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-frame"></i> mdi
                        mdi-image-frame
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-underline-circle"></i> mdi
                        mdi-check-underline-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-underline-circle-outline"></i>{" "}
                        mdi mdi-check-underline-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-underline"></i> mdi
                        mdi-check-underline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-bold"></i> mdi
                        mdi-check-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-comfy"></i> mdi
                        mdi-view-comfy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-compact"></i> mdi
                        mdi-view-compact
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-compact-outline"></i> mdi
                        mdi-view-compact-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pdf-box"></i> mdi mdi-pdf-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-retake"></i> mdi
                        mdi-camera-retake
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-retake-outline"></i> mdi
                        mdi-camera-retake-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nfc-search-variant"></i> mdi
                        mdi-nfc-search-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-saw-blade"></i> mdi mdi-saw-blade
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-saw"></i> mdi mdi-hand-saw
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spade "></i> mdi mdi-spade
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circular-saw"></i> mdi
                        mdi-circular-saw
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-video-outline"></i> mdi
                        mdi-file-video-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-month"></i> mdi
                        mdi-calendar-month
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-month-outline"></i> mdi
                        mdi-calendar-month-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-plus"></i> mdi
                        mdi-layers-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-minus"></i> mdi
                        mdi-layers-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-remove"></i> mdi
                        mdi-layers-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-notebook-multiple"></i> mdi
                        mdi-notebook-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-right"></i> mdi
                        mdi-hand-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-left"></i> mdi mdi-hand-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-down"></i> mdi
                        mdi-gamepad-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-left"></i> mdi
                        mdi-gamepad-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-right"></i> mdi
                        mdi-gamepad-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-up"></i> mdi
                        mdi-gamepad-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-circle"></i> mdi
                        mdi-gamepad-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-circle-outline"></i> mdi
                        mdi-gamepad-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-circle-down"></i> mdi
                        mdi-gamepad-circle-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-circle-left"></i> mdi
                        mdi-gamepad-circle-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-circle-right"></i> mdi
                        mdi-gamepad-circle-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-circle-up"></i> mdi
                        mdi-gamepad-circle-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-round"></i> mdi
                        mdi-gamepad-round
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-round-outline"></i> mdi
                        mdi-gamepad-round-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-round-down"></i> mdi
                        mdi-gamepad-round-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-round-left"></i> mdi
                        mdi-gamepad-round-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-round-right"></i> mdi
                        mdi-gamepad-round-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-round-up"></i> mdi
                        mdi-gamepad-round-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-menu"></i> mdi
                        mdi-xbox-controller-menu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-view"></i> mdi
                        mdi-xbox-controller-view
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gatsby "></i> mdi mdi-gatsby
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rectangle "></i> mdi mdi-rectangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rectangle-outline"></i> mdi
                        mdi-rectangle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-picture-in-picture-bottom-right"></i>{" "}
                        mdi mdi-picture-in-picture-bottom-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-picture-in-picture-bottom-right-outline"></i>{" "}
                        mdi mdi-picture-in-picture-bottom-right-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-picture-in-picture-top-right"></i>{" "}
                        mdi mdi-picture-in-picture-top-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-picture-in-picture-top-right-outline"></i>{" "}
                        mdi mdi-picture-in-picture-top-right-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-check-outline"></i> mdi
                        mdi-file-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rivet"></i> mdi mdi-rivet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-pdf-outline"></i> mdi
                        mdi-file-pdf-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-music-outline"></i> mdi
                        mdi-file-music-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-aws"></i> mdi mdi-aws
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-firework"></i> mdi mdi-firework
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gift"></i> mdi mdi-gift
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cast-education"></i> mdi
                        mdi-cast-education
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-multiple"></i> mdi
                        mdi-bookmark-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-multiple-outline"></i>{" "}
                        mdi mdi-bookmark-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sprout"></i> mdi mdi-sprout
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seed"></i> mdi mdi-seed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sprout-outline"></i> mdi
                        mdi-sprout-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seed-outline"></i> mdi
                        mdi-seed-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-grill"></i> mdi mdi-grill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tree-outline"></i> mdi
                        mdi-tree-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-distance-variant"></i> mdi
                        mdi-signal-distance-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-cloudy-arrow-right"></i>{" "}
                        mdi mdi-weather-cloudy-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-off"></i> mdi mdi-car-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comma"></i> mdi mdi-comma
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comma-box"></i> mdi mdi-comma-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comma-box-outline"></i> mdi
                        mdi-comma-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comma-circle"></i> mdi
                        mdi-comma-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comma-circle-outline"></i> mdi
                        mdi-comma-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-off"></i> mdi
                        mdi-printer-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-personal"></i> mdi
                        mdi-bag-personal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-personal-off"></i> mdi
                        mdi-bag-personal-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-personal-off-outline"></i> mdi
                        mdi-bag-personal-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bag-personal-outline"></i> mdi
                        mdi-bag-personal-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-move"></i> mdi
                        mdi-content-save-move
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-move-outline"></i>{" "}
                        mdi mdi-content-save-move-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-off-outline"></i> mdi
                        mdi-keyboard-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-back"></i> mdi mdi-car-back
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-screenshot"></i> mdi
                        mdi-monitor-screenshot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-color-highlight"></i> mdi
                        mdi-format-color-highlight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-invert-colors-off"></i> mdi
                        mdi-invert-colors-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text-variant"></i> mdi
                        mdi-format-text-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nfc-off"></i> mdi mdi-nfc-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nfc-variant-off"></i> mdi
                        mdi-nfc-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-3d-nozzle"></i> mdi
                        mdi-printer-3d-nozzle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-3d-nozzle-outline"></i>{" "}
                        mdi mdi-printer-3d-nozzle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vuetify"></i> mdi mdi-vuetify
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lightbulb-off"></i> mdi
                        mdi-lightbulb-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lightbulb-off-outline"></i> mdi
                        mdi-lightbulb-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-palette-outline"></i> mdi
                        mdi-palette-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-group"></i> mdi
                        mdi-home-group
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-outline"></i> mdi
                        mdi-movie-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bandage "></i> mdi mdi-bandage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-wireless-outline"></i> mdi
                        mdi-camera-wireless-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-wireless"></i> mdi
                        mdi-camera-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gantry-crane"></i> mdi
                        mdi-gantry-crane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ocarina"></i> mdi mdi-ocarina
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bugle"></i> mdi mdi-bugle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-badge-outline"></i> mdi
                        mdi-account-badge-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-badge-alert-outline"></i>{" "}
                        mdi mdi-account-badge-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-badge-alert"></i> mdi
                        mdi-account-badge-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-badge"></i> mdi
                        mdi-account-badge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bolt"></i> mdi mdi-bolt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nail "></i> mdi mdi-nail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screw-round-top"></i> mdi
                        mdi-screw-round-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screw-machine-round-top"></i> mdi
                        mdi-screw-machine-round-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screw-machine-flat-top"></i> mdi
                        mdi-screw-machine-flat-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screw-lag"></i> mdi mdi-screw-lag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screw-flat-top"></i> mdi
                        mdi-screw-flat-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-alert-outline"></i> mdi
                        mdi-folder-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-alert"></i> mdi
                        mdi-folder-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-plus"></i> mdi
                        mdi-thermometer-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-minus"></i> mdi
                        mdi-thermometer-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-chevron-up"></i> mdi
                        mdi-thermometer-chevron-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-chevron-down"></i> mdi
                        mdi-thermometer-chevron-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-alert"></i> mdi
                        mdi-thermometer-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallpaper "></i> mdi mdi-wallpaper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mine"></i> mdi mdi-mine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-edit-outline"></i> mdi
                        mdi-folder-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-open-outline"></i> mdi
                        mdi-folder-open-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload-outline"></i> mdi
                        mdi-upload-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-outline"></i> mdi
                        mdi-phone-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-edit-outline"></i>{" "}
                        mdi mdi-file-document-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-outline"></i> mdi
                        mdi-key-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-group"></i> mdi
                        mdi-home-group
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-star"></i> mdi mdi-wifi-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-triple-left"></i> mdi
                        mdi-chevron-triple-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-triple-up"></i> mdi
                        mdi-chevron-triple-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-triple-right"></i> mdi
                        mdi-chevron-triple-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-triple-down"></i> mdi
                        mdi-chevron-triple-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-floor-negative-1"></i> mdi
                        mdi-home-floor-negative-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-floor-0"></i> mdi
                        mdi-home-floor-0
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-card-details-outline"></i>{" "}
                        mdi mdi-account-card-details-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-marker"></i> mdi
                        mdi-credit-card-marker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash-marker"></i> mdi
                        mdi-cash-marker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-lock-outline"></i> mdi
                        mdi-pencil-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-off-outline"></i> mdi
                        mdi-pencil-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pen-lock"></i> mdi mdi-pen-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-snorkel"></i> mdi
                        mdi-diving-snorkel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-scuba-tank-multiple"></i>{" "}
                        mdi mdi-diving-scuba-tank-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-scuba-tank"></i> mdi
                        mdi-diving-scuba-tank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-scuba-flag"></i> mdi
                        mdi-diving-scuba-flag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-scuba"></i> mdi
                        mdi-diving-scuba
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-helmet"></i> mdi
                        mdi-diving-helmet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diving-flippers"></i> mdi
                        mdi-diving-flippers
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signature"></i> mdi mdi-signature
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signature-text"></i> mdi
                        mdi-signature-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signature-image"></i> mdi
                        mdi-signature-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signature-freehand"></i> mdi
                        mdi-signature-freehand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-closed-caption-outline"></i> mdi
                        mdi-closed-caption-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-marker-cancel"></i> mdi
                        mdi-marker-cancel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cancel-outline"></i> mdi
                        mdi-file-cancel-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cancel"></i> mdi
                        mdi-file-cancel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-remove-outline"></i> mdi
                        mdi-pencil-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-remove"></i> mdi
                        mdi-pencil-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-minus-outline"></i> mdi
                        mdi-pencil-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-minus"></i> mdi
                        mdi-pencil-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-plus-outline"></i> mdi
                        mdi-pencil-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-plus"></i> mdi
                        mdi-pencil-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pen-remove"></i> mdi
                        mdi-pen-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pen-off"></i> mdi mdi-pen-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pen-minus"></i> mdi mdi-pen-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pen-plus"></i> mdi mdi-pen-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slope-uphill"></i> mdi
                        mdi-slope-uphill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slope-downhill"></i> mdi
                        mdi-slope-downhill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-passport-biometric"></i> mdi
                        mdi-passport-biometric
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-plus"></i> mdi
                        mdi-music-note-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-translate-off"></i> mdi
                        mdi-translate-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-star"></i> mdi
                        mdi-monitor-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-lock"></i> mdi
                        mdi-monitor-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-star"></i> mdi
                        mdi-playlist-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-leak-off"></i> mdi mdi-leak-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-leak "></i> mdi mdi-leak
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-bulleted-square"></i>{" "}
                        mdi mdi-format-list-bulleted-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-application-import"></i> mdi
                        mdi-application-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-application-export"></i> mdi
                        mdi-application-export
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-air-horn"></i> mdi mdi-air-horn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-eye-outline"></i> mdi
                        mdi-file-eye-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-eye"></i> mdi mdi-file-eye
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-remove"></i> mdi
                        mdi-bank-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-plus"></i> mdi mdi-bank-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-minus"></i> mdi
                        mdi-bank-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-circle-outline"></i> mdi
                        mdi-send-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-circle"></i> mdi
                        mdi-send-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-outline"></i> mdi
                        mdi-water-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-off"></i> mdi mdi-phone-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-variant-off"></i> mdi
                        mdi-volume-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pi-hole"></i> mdi mdi-pi-hole
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-edit"></i> mdi
                        mdi-file-document-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shoe-print"></i> mdi
                        mdi-shoe-print
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cactus"></i> mdi mdi-cactus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jabber"></i> mdi mdi-jabber
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-turtle"></i> mdi mdi-turtle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-face-recognition"></i> mdi
                        mdi-face-recognition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-postage-stamp"></i> mdi
                        mdi-postage-stamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-adwords"></i> mdi
                        mdi-google-adwords
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-street-view"></i> mdi
                        mdi-google-street-view
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-variant-lock-open"></i> mdi
                        mdi-sort-variant-lock-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-variant-lock"></i> mdi
                        mdi-sort-variant-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-devil"></i> mdi
                        mdi-emoticon-devil
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-dead"></i> mdi
                        mdi-emoticon-dead
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon"></i> mdi mdi-emoticon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-excited"></i> mdi
                        mdi-emoticon-excited
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-cool"></i> mdi
                        mdi-emoticon-cool
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-neutral"></i> mdi
                        mdi-emoticon-neutral
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-poop-outline"></i> mdi
                        mdi-emoticon-poop-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-sad"></i> mdi
                        mdi-emoticon-sad
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-happy"></i> mdi
                        mdi-emoticon-happy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-tongue"></i> mdi
                        mdi-emoticon-tongue
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-tongue-outline"></i> mdi
                        mdi-emoticon-tongue-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-cry-outline"></i> mdi
                        mdi-emoticon-cry-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-cry"></i> mdi
                        mdi-emoticon-cry
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-kiss-outline"></i> mdi
                        mdi-emoticon-kiss-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-kiss"></i> mdi
                        mdi-emoticon-kiss
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-wink-outline"></i> mdi
                        mdi-emoticon-wink-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-wink"></i> mdi
                        mdi-emoticon-wink
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-angry-outline"></i> mdi
                        mdi-emoticon-angry-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-angry"></i> mdi
                        mdi-emoticon-angry
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sheep"></i> mdi mdi-sheep
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-repository-multiple"></i>{" "}
                        mdi mdi-source-repository-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-repository"></i> mdi
                        mdi-source-repository
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cart-arrow-right"></i> mdi
                        mdi-cart-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radio-am"></i> mdi mdi-radio-am
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radio-fm"></i> mdi mdi-radio-fm
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dump-truck"></i> mdi
                        mdi-dump-truck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airbag"></i> mdi mdi-airbag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seatbelt"></i> mdi mdi-seatbelt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-account-outline"></i>{" "}
                        mdi mdi-clipboard-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-arrow-down-outline"></i>{" "}
                        mdi mdi-clipboard-arrow-down-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-arrow-up-outline"></i>{" "}
                        mdi mdi-clipboard-arrow-up-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-arrow-up"></i> mdi
                        mdi-clipboard-arrow-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hazard-lights"></i> mdi
                        mdi-hazard-lights
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-esp"></i> mdi mdi-car-esp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-brake-parking"></i> mdi
                        mdi-car-brake-parking
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-brake-abs"></i> mdi
                        mdi-car-brake-abs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-tire-alert"></i> mdi
                        mdi-car-tire-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-search-outline"></i> mdi
                        mdi-file-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-search"></i> mdi
                        mdi-file-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-light-high"></i> mdi
                        mdi-car-light-high
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-light-fog"></i> mdi
                        mdi-car-light-fog
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-light-dimmed"></i> mdi
                        mdi-car-light-dimmed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-box-multiple-outline"></i>{" "}
                        mdi mdi-close-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-box-multiple"></i> mdi
                        mdi-close-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-cross-outline"></i> mdi
                        mdi-shield-cross-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-cross"></i> mdi
                        mdi-shield-cross
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-off"></i> mdi mdi-link-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link"></i> mdi mdi-link
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-search-outline"></i> mdi
                        mdi-briefcase-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-download-outline"></i>{" "}
                        mdi mdi-briefcase-download-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-upload-outline"></i> mdi
                        mdi-briefcase-upload-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-edit-outline"></i> mdi
                        mdi-briefcase-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-remove-outline"></i> mdi
                        mdi-briefcase-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-plus-outline"></i> mdi
                        mdi-briefcase-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-minus-outline"></i> mdi
                        mdi-briefcase-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-plus"></i> mdi mdi-link-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food-apple-outline"></i> mdi
                        mdi-food-apple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spa-outline"></i> mdi
                        mdi-spa-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spa"></i> mdi mdi-spa
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-size-select-small"></i> mdi
                        mdi-image-size-select-small
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-size-select-large"></i> mdi
                        mdi-image-size-select-large
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-size-select-actual"></i> mdi
                        mdi-image-size-select-actual
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-plus-circle-outline"></i>{" "}
                        mdi mdi-numeric-9-plus-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-plus-circle"></i> mdi
                        mdi-numeric-9-plus-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-circle-outline"></i> mdi
                        mdi-numeric-9-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-circle"></i> mdi
                        mdi-numeric-9-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8-circle-outline"></i> mdi
                        mdi-numeric-8-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8-circle"></i> mdi
                        mdi-numeric-8-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7-circle-outline"></i> mdi
                        mdi-numeric-7-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7-circle"></i> mdi
                        mdi-numeric-7-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6-circle-outline"></i> mdi
                        mdi-numeric-6-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6-circle"></i> mdi
                        mdi-numeric-6-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5-circle-outline"></i> mdi
                        mdi-numeric-5-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5-circle"></i> mdi
                        mdi-numeric-5-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4-circle-outline"></i> mdi
                        mdi-numeric-4-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4-circle"></i> mdi
                        mdi-numeric-4-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3-circle-outline"></i> mdi
                        mdi-numeric-3-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3-circle"></i> mdi
                        mdi-numeric-3-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2-circle-outline"></i> mdi
                        mdi-numeric-2-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2-circle"></i> mdi
                        mdi-numeric-2-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1-circle-outline"></i> mdi
                        mdi-numeric-1-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1-circle"></i> mdi
                        mdi-numeric-1-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0-circle-outline"></i> mdi
                        mdi-numeric-0-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0-circle"></i> mdi
                        mdi-numeric-0-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-z-circle-outline"></i> mdi
                        mdi-alpha-z-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-z-circle"></i> mdi
                        mdi-alpha-z-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-z-box-outline"></i> mdi
                        mdi-alpha-z-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-y-circle-outline"></i> mdi
                        mdi-alpha-y-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-y-circle"></i> mdi
                        mdi-alpha-y-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-y-box-outline"></i> mdi
                        mdi-alpha-y-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-x-circle-outline"></i> mdi
                        mdi-alpha-x-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-x-circle"></i> mdi
                        mdi-alpha-x-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-x-box-outline"></i> mdi
                        mdi-alpha-x-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-w-circle-outline"></i> mdi
                        mdi-alpha-w-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-w-circle"></i> mdi
                        mdi-alpha-w-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-w-box-outline"></i> mdi
                        mdi-alpha-w-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-v-circle-outline"></i> mdi
                        mdi-alpha-v-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-v-circle"></i> mdi
                        mdi-alpha-v-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-v-box-outline"></i> mdi
                        mdi-alpha-v-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-u-circle-outline"></i> mdi
                        mdi-alpha-u-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-u-circle"></i> mdi
                        mdi-alpha-u-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-u-box-outline"></i> mdi
                        mdi-alpha-u-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-t-circle-outline"></i> mdi
                        mdi-alpha-t-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-t-circle"></i> mdi
                        mdi-alpha-t-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-t-box-outline"></i> mdi
                        mdi-alpha-t-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-s-circle-outline"></i> mdi
                        mdi-alpha-s-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-s-circle"></i> mdi
                        mdi-alpha-s-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-s-box-outline"></i> mdi
                        mdi-alpha-s-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-r-circle-outline"></i> mdi
                        mdi-alpha-r-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-r-circle"></i> mdi
                        mdi-alpha-r-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-r-box-outline"></i> mdi
                        mdi-alpha-r-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-q-circle-outline"></i> mdi
                        mdi-alpha-q-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-q-circle"></i> mdi
                        mdi-alpha-q-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-q-box-outline"></i> mdi
                        mdi-alpha-q-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-p-circle-outline"></i> mdi
                        mdi-alpha-p-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-p-circle"></i> mdi
                        mdi-alpha-p-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-p-box-outline"></i> mdi
                        mdi-alpha-p-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-o-circle-outline"></i> mdi
                        mdi-alpha-o-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-o-circle"></i> mdi
                        mdi-alpha-o-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-o-box-outline"></i> mdi
                        mdi-alpha-o-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-n-circle-outline"></i> mdi
                        mdi-alpha-n-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-n-circle"></i> mdi
                        mdi-alpha-n-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-n-box-outline"></i> mdi
                        mdi-alpha-n-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-m-circle-outline"></i> mdi
                        mdi-alpha-m-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-m-circle"></i> mdi
                        mdi-alpha-m-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-m-box-outline"></i> mdi
                        mdi-alpha-m-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-l-circle-outline"></i> mdi
                        mdi-alpha-l-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-l-circle"></i> mdi
                        mdi-alpha-l-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-l-box-outline"></i> mdi
                        mdi-alpha-l-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-k-circle-outline"></i> mdi
                        mdi-alpha-k-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-k-circle"></i> mdi
                        mdi-alpha-k-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-k-box-outline"></i> mdi
                        mdi-alpha-k-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-j-circle-outline"></i> mdi
                        mdi-alpha-j-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-j-circle"></i> mdi
                        mdi-alpha-j-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-j-box-outline"></i> mdi
                        mdi-alpha-j-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-i-circle-outline"></i> mdi
                        mdi-alpha-i-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-i-circle"></i> mdi
                        mdi-alpha-i-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-i-box-outline"></i> mdi
                        mdi-alpha-i-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-h-circle-outline"></i> mdi
                        mdi-alpha-h-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-h-circle"></i> mdi
                        mdi-alpha-h-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-h-box-outline"></i> mdi
                        mdi-alpha-h-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-g-circle-outline"></i> mdi
                        mdi-alpha-g-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-g-circle"></i> mdi
                        mdi-alpha-g-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-g-box-outline"></i> mdi
                        mdi-alpha-g-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-f-circle-outline"></i> mdi
                        mdi-alpha-f-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-f-circle"></i> mdi
                        mdi-alpha-f-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-f-box-outline"></i> mdi
                        mdi-alpha-f-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-e-circle-outline"></i> mdi
                        mdi-alpha-e-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-e-circle"></i> mdi
                        mdi-alpha-e-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-e-box-outline"></i> mdi
                        mdi-alpha-e-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-d-circle-outline"></i> mdi
                        mdi-alpha-d-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-d-circle"></i> mdi
                        mdi-alpha-d-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-d-box-outline"></i> mdi
                        mdi-alpha-d-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-c-circle-outline"></i> mdi
                        mdi-alpha-c-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-c-circle"></i> mdi
                        mdi-alpha-c-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-c-box-outline"></i> mdi
                        mdi-alpha-c-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-b-circle-outline"></i> mdi
                        mdi-alpha-b-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-b-circle"></i> mdi
                        mdi-alpha-b-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-b-box-outline"></i> mdi
                        mdi-alpha-b-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-a-circle-outline"></i> mdi
                        mdi-alpha-a-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-a-circle"></i> mdi
                        mdi-alpha-a-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-a-box-outline"></i> mdi
                        mdi-alpha-a-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-logout"></i> mdi mdi-logout
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-login"></i> mdi mdi-login
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-wrench"></i> mdi
                        mdi-progress-wrench
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-truck-check"></i> mdi
                        mdi-truck-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-plus-outline"></i>{" "}
                        mdi mdi-account-multiple-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-outline"></i> mdi
                        mdi-account-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-box-outline"></i> mdi
                        mdi-check-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-box-multiple-outline"></i>{" "}
                        mdi mdi-check-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fuse-blade"></i> mdi
                        mdi-fuse-blade
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fuse"></i> mdi mdi-fuse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-light-outline"></i> mdi
                        mdi-alarm-light-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-outline"></i> mdi
                        mdi-pencil-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-network-outline"></i> mdi
                        mdi-check-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-off-outline"></i> mdi
                        mdi-network-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-off"></i> mdi
                        mdi-network-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-network"></i> mdi
                        mdi-check-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basketball-hoop-outline"></i> mdi
                        mdi-basketball-hoop-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basketball-hoop"></i> mdi
                        mdi-basketball-hoop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-network-outline"></i> mdi
                        mdi-close-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-heart-outline"></i> mdi
                        mdi-account-heart-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-key-outline"></i> mdi
                        mdi-account-key-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-star-outline"></i> mdi
                        mdi-account-star-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip-account"></i> mdi
                        mdi-tooltip-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-network-off"></i> mdi
                        mdi-server-network-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-network"></i> mdi
                        mdi-server-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-security-network"></i> mdi
                        mdi-security-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ip-network"></i> mdi
                        mdi-ip-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-network"></i> mdi
                        mdi-folder-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-key-network"></i> mdi
                        mdi-folder-key-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-console-network"></i> mdi
                        mdi-console-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-network"></i> mdi
                        mdi-account-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-access-point-network"></i> mdi
                        mdi-access-point-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe-outline"></i> mdi
                        mdi-iframe-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-iframe"></i> mdi mdi-iframe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ruler-square"></i> mdi
                        mdi-ruler-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-text-outline"></i> mdi
                        mdi-folder-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-text"></i> mdi
                        mdi-folder-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ballot-recount"></i> mdi
                        mdi-ballot-recount
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ballot-recount-outline"></i> mdi
                        mdi-ballot-recount-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-home-outline"></i> mdi
                        mdi-shield-home-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-lock-outline"></i> mdi
                        mdi-shield-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-airplane-outline"></i> mdi
                        mdi-shield-airplane-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-check-outline"></i> mdi
                        mdi-shield-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-off-outline"></i> mdi
                        mdi-shield-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-parachute-outline"></i> mdi
                        mdi-parachute-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-parachute"></i> mdi mdi-parachute
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-turnstile-outline"></i> mdi
                        mdi-turnstile-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-turnstile"></i> mdi mdi-turnstile
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-sweep-outline"></i> mdi
                        mdi-delete-sweep-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-bell-curve"></i> mdi
                        mdi-chart-bell-curve
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-tan"></i> mdi mdi-math-tan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-sin"></i> mdi mdi-math-sin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-cos"></i> mdi mdi-math-cos
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toaster-oven"></i> mdi
                        mdi-toaster-oven
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microwave"></i> mdi mdi-microwave
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ipod"></i> mdi mdi-ipod
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-table-outline"></i> mdi
                        mdi-file-table-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-table"></i> mdi
                        mdi-file-table
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-network-outline"></i> mdi
                        mdi-account-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload-network-outline"></i> mdi
                        mdi-upload-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-access-point-network-off"></i> mdi
                        mdi-access-point-network-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-console-network-outline"></i> mdi
                        mdi-console-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-download-network-outline"></i> mdi
                        mdi-download-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-key-network-outline"></i>{" "}
                        mdi mdi-folder-key-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-network-outline"></i> mdi
                        mdi-folder-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-network-outline"></i> mdi
                        mdi-help-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ip-network-outline"></i> mdi
                        mdi-ip-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-network-outline"></i> mdi
                        mdi-minus-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-outline"></i> mdi
                        mdi-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-network-outline"></i> mdi
                        mdi-plus-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-network-outline"></i> mdi
                        mdi-play-network-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-alert"></i> mdi
                        mdi-progress-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eslint"></i> mdi mdi-eslint
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-leaf-maple"></i> mdi
                        mdi-leaf-maple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-play-outline"></i> mdi
                        mdi-clipboard-play-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-play"></i> mdi
                        mdi-clipboard-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-text-play-outline"></i>{" "}
                        mdi mdi-clipboard-text-play-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-text-play"></i> mdi
                        mdi-clipboard-text-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-check-outline"></i> mdi
                        mdi-account-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-check"></i> mdi
                        mdi-account-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-check"></i> mdi
                        mdi-map-marker-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radius-outline"></i> mdi
                        mdi-radius-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radius"></i> mdi mdi-radius
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diameter-variant"></i> mdi
                        mdi-diameter-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diameter-outline"></i> mdi
                        mdi-diameter-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diameter"></i> mdi mdi-diameter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-outline"></i> mdi
                        mdi-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-off-outline"></i> mdi
                        mdi-account-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-minus-outline"></i>{" "}
                        mdi mdi-account-multiple-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-music-outline"></i> mdi
                        mdi-playlist-music-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-music"></i> mdi
                        mdi-playlist-music
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-outline"></i> mdi
                        mdi-seat-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat"></i> mdi mdi-seat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-check-outline"></i> mdi
                        mdi-calendar-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-remove-outline"></i> mdi
                        mdi-calendar-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-text-outline"></i> mdi
                        mdi-calendar-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-charity"></i> mdi mdi-charity
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-ils"></i> mdi
                        mdi-currency-ils
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-vibrate-off"></i> mdi
                        mdi-watch-vibrate-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vibrate-off"></i> mdi
                        mdi-vibrate-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-haskell"></i> mdi
                        mdi-language-haskell
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-inbox-multiple-outline"></i> mdi
                        mdi-inbox-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-circle-outline"></i> mdi
                        mdi-account-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet-outline"></i> mdi
                        mdi-wallet-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-download-outline"></i> mdi
                        mdi-cloud-download-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-arrow-right-outline"></i>{" "}
                        mdi mdi-account-arrow-right-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-arrow-right"></i> mdi
                        mdi-account-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-motorbike"></i> mdi mdi-motorbike
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-outline"></i> mdi
                        mdi-book-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-edit"></i> mdi
                        mdi-database-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-circle-outline"></i> mdi
                        mdi-eye-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-circle"></i> mdi
                        mdi-eye-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-clock-outline"></i> mdi
                        mdi-account-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-clock"></i> mdi
                        mdi-account-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-rhombus-outline"></i> mdi
                        mdi-help-rhombus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-rhombus"></i> mdi
                        mdi-help-rhombus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-train-car"></i> mdi mdi-train-car
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-multiple"></i> mdi
                        mdi-car-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mapbox"></i> mdi mdi-mapbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hat-fedora"></i> mdi
                        mdi-hat-fedora
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-target-account"></i> mdi
                        mdi-target-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-backspace-outline"></i> mdi
                        mdi-backspace-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-top-right"></i> mdi
                        mdi-pan-top-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-top-left"></i> mdi
                        mdi-pan-top-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-bottom-left"></i> mdi
                        mdi-pan-bottom-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-bottom-right"></i> mdi
                        mdi-pan-bottom-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-left"></i> mdi mdi-pan-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-down"></i> mdi mdi-pan-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-right"></i> mdi mdi-pan-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-up"></i> mdi mdi-pan-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-circle-outline"></i> mdi
                        mdi-delete-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-remove"></i> mdi
                        mdi-file-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-mark-as-unread"></i> mdi
                        mdi-email-mark-as-unread
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-artstation"></i> mdi
                        mdi-artstation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-control"></i> mdi
                        mdi-camera-control
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-horizontal"></i> mdi
                        mdi-pan-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan-vertical"></i> mdi
                        mdi-pan-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pan"></i> mdi mdi-pan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-barley-off"></i> mdi
                        mdi-barley-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-barn"></i> mdi mdi-barn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drag-variant"></i> mdi
                        mdi-drag-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-library-shelves"></i> mdi
                        mdi-library-shelves
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ubisoft"></i> mdi mdi-ubisoft
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gog"></i> mdi mdi-gog
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-open"></i> mdi mdi-menu-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-key-outline"></i> mdi
                        mdi-shield-key-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-key"></i> mdi
                        mdi-shield-key
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wrap-disabled"></i> mdi
                        mdi-wrap-disabled
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-door"></i> mdi mdi-car-door
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chat-alert"></i> mdi
                        mdi-chat-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chat-processing"></i> mdi
                        mdi-chat-processing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chat"></i> mdi mdi-chat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rollupjs"></i> mdi mdi-rollupjs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-brl"></i> mdi
                        mdi-currency-brl
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battlenet"></i> mdi mdi-battlenet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-access-point"></i> mdi
                        mdi-access-point
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account"></i> mdi mdi-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-alert"></i> mdi
                        mdi-account-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-box"></i> mdi
                        mdi-account-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-box-multiple"></i> mdi
                        mdi-account-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-box-outline"></i> mdi
                        mdi-account-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-card-details"></i> mdi
                        mdi-account-card-details
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-child"></i> mdi
                        mdi-account-child
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-child-circle"></i> mdi
                        mdi-account-child-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-circle"></i> mdi
                        mdi-account-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-convert"></i> mdi
                        mdi-account-convert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-details"></i> mdi
                        mdi-account-details
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-edit"></i> mdi
                        mdi-account-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-group"></i> mdi
                        mdi-account-group
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-heart"></i> mdi
                        mdi-account-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-key"></i> mdi
                        mdi-account-key
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-minus"></i> mdi
                        mdi-account-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-minus-outline"></i> mdi
                        mdi-account-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple"></i> mdi
                        mdi-account-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-check"></i> mdi
                        mdi-account-multiple-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-minus"></i> mdi
                        mdi-account-multiple-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-multiple-plus"></i> mdi
                        mdi-account-multiple-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-off"></i> mdi
                        mdi-account-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-plus"></i> mdi
                        mdi-account-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-plus-outline"></i> mdi
                        mdi-account-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-remove"></i> mdi
                        mdi-account-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-remove-outline"></i> mdi
                        mdi-account-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-search"></i> mdi
                        mdi-account-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-search-outline"></i> mdi
                        mdi-account-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-settings"></i> mdi
                        mdi-account-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-star"></i> mdi
                        mdi-account-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-supervisor"></i> mdi
                        mdi-account-supervisor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-supervisor-circle"></i>{" "}
                        mdi mdi-account-supervisor-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-account-switch"></i> mdi
                        mdi-account-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-accusoft"></i> mdi mdi-accusoft
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-adjust"></i> mdi mdi-adjust
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-adobe"></i> mdi mdi-adobe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-air-conditioner"></i> mdi
                        mdi-air-conditioner
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airballoon"></i> mdi
                        mdi-airballoon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airplane"></i> mdi mdi-airplane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airplane-landing"></i> mdi
                        mdi-airplane-landing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airplane-off"></i> mdi
                        mdi-airplane-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airplane-takeoff"></i> mdi
                        mdi-airplane-takeoff
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airplay"></i> mdi mdi-airplay
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-airport"></i> mdi mdi-airport
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm"></i> mdi mdi-alarm
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-bell"></i> mdi
                        mdi-alarm-bell
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-check"></i> mdi
                        mdi-alarm-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-light"></i> mdi
                        mdi-alarm-light
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-multiple"></i> mdi
                        mdi-alarm-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-off"></i> mdi mdi-alarm-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-plus"></i> mdi
                        mdi-alarm-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alarm-snooze"></i> mdi
                        mdi-alarm-snooze
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-album"></i> mdi mdi-album
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert"></i> mdi mdi-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-box"></i> mdi mdi-alert-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-circle"></i> mdi
                        mdi-alert-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-circle-outline"></i> mdi
                        mdi-alert-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-decagram"></i> mdi
                        mdi-alert-decagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-octagon"></i> mdi
                        mdi-alert-octagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-octagram"></i> mdi
                        mdi-alert-octagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alert-outline"></i> mdi
                        mdi-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alien"></i> mdi mdi-alien
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-all-inclusive"></i> mdi
                        mdi-all-inclusive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha"></i> mdi mdi-alpha
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-a"></i> mdi mdi-alpha-a
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-a-box"></i> mdi
                        mdi-alpha-a-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-b"></i> mdi mdi-alpha-b
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-b-box"></i> mdi
                        mdi-alpha-b-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-c"></i> mdi mdi-alpha-c
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-c-box"></i> mdi
                        mdi-alpha-c-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-d"></i> mdi mdi-alpha-d
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-d-box"></i> mdi
                        mdi-alpha-d-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-e"></i> mdi mdi-alpha-e
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-e-box"></i> mdi
                        mdi-alpha-e-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-f"></i> mdi mdi-alpha-f
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-f-box"></i> mdi
                        mdi-alpha-f-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-g"></i> mdi mdi-alpha-g
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-g-box"></i> mdi
                        mdi-alpha-g-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-h"></i> mdi mdi-alpha-h
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-h-box"></i> mdi
                        mdi-alpha-h-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-i"></i> mdi mdi-alpha-i
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-i-box"></i> mdi
                        mdi-alpha-i-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-j"></i> mdi mdi-alpha-j
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-j-box"></i> mdi
                        mdi-alpha-j-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-k"></i> mdi mdi-alpha-k
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-k-box"></i> mdi
                        mdi-alpha-k-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-l"></i> mdi mdi-alpha-l
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-l-box"></i> mdi
                        mdi-alpha-l-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-m"></i> mdi mdi-alpha-m
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-m-box"></i> mdi
                        mdi-alpha-m-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-n"></i> mdi mdi-alpha-n
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-n-box"></i> mdi
                        mdi-alpha-n-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-o"></i> mdi mdi-alpha-o
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-o-box"></i> mdi
                        mdi-alpha-o-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-p"></i> mdi mdi-alpha-p
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-p-box"></i> mdi
                        mdi-alpha-p-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-q"></i> mdi mdi-alpha-q
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-q-box"></i> mdi
                        mdi-alpha-q-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-r"></i> mdi mdi-alpha-r
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-r-box"></i> mdi
                        mdi-alpha-r-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-s"></i> mdi mdi-alpha-s
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-s-box"></i> mdi
                        mdi-alpha-s-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-t"></i> mdi mdi-alpha-t
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-t-box"></i> mdi
                        mdi-alpha-t-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-u"></i> mdi mdi-alpha-u
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-u-box"></i> mdi
                        mdi-alpha-u-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-v"></i> mdi mdi-alpha-v
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-v-box"></i> mdi
                        mdi-alpha-v-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-w"></i> mdi mdi-alpha-w
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-w-box"></i> mdi
                        mdi-alpha-w-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-x"></i> mdi mdi-alpha-x
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-x-box"></i> mdi
                        mdi-alpha-x-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-y"></i> mdi mdi-alpha-y
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-y-box"></i> mdi
                        mdi-alpha-y-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-z"></i> mdi mdi-alpha-z
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alpha-z-box"></i> mdi
                        mdi-alpha-z-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-alphabetical"></i> mdi
                        mdi-alphabetical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-altimeter"></i> mdi mdi-altimeter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-amazon"></i> mdi mdi-amazon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-amazon-alexa"></i> mdi
                        mdi-amazon-alexa
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-amazon-drive"></i> mdi
                        mdi-amazon-drive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ambulance"></i> mdi mdi-ambulance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ampersand"></i> mdi mdi-ampersand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-amplifier"></i> mdi mdi-amplifier
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-anchor"></i> mdi mdi-anchor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-android"></i> mdi mdi-android
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-android-auto"></i> mdi
                        mdi-android-auto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-android-debug-bridge"></i> mdi
                        mdi-android-debug-bridge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-android-head"></i> mdi
                        mdi-android-head
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-android-head"></i> mdi
                        mdi-android-head
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-android-studio"></i> mdi
                        mdi-android-studio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-angle-acute"></i> mdi
                        mdi-angle-acute
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-angle-obtuse"></i> mdi
                        mdi-angle-obtuse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-angle-right"></i> mdi
                        mdi-angle-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-angular"></i> mdi mdi-angular
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-angularjs"></i> mdi mdi-angularjs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-animation"></i> mdi mdi-animation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-animation-outline"></i> mdi
                        mdi-animation-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-animation-play"></i> mdi
                        mdi-animation-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-animation-play-outline"></i> mdi
                        mdi-animation-play-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-anvil"></i> mdi mdi-anvil
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple"></i> mdi mdi-apple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-finder"></i> mdi
                        mdi-apple-finder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-icloud"></i> mdi
                        mdi-apple-icloud
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-ios"></i> mdi mdi-apple-ios
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-keyboard-caps"></i> mdi
                        mdi-apple-keyboard-caps
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-keyboard-command"></i> mdi
                        mdi-apple-keyboard-command
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-keyboard-control"></i> mdi
                        mdi-apple-keyboard-control
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-keyboard-option"></i> mdi
                        mdi-apple-keyboard-option
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-keyboard-shift"></i> mdi
                        mdi-apple-keyboard-shift
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apple-safari"></i> mdi
                        mdi-apple-safari
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-application"></i> mdi
                        mdi-application
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-apps"></i> mdi mdi-apps
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arch"></i> mdi mdi-arch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-archive"></i> mdi mdi-archive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrange-bring-forward"></i> mdi
                        mdi-arrange-bring-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrange-bring-to-front"></i> mdi
                        mdi-arrange-bring-to-front
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrange-send-backward"></i> mdi
                        mdi-arrange-send-backward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrange-send-to-back"></i> mdi
                        mdi-arrange-send-to-back
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-all"></i> mdi mdi-arrow-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-bottom-left"></i> mdi
                        mdi-arrow-bottom-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-bottom-left-bold-outline"></i>{" "}
                        mdi mdi-arrow-bottom-left-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-bottom-left-thick"></i> mdi
                        mdi-arrow-bottom-left-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-bottom-right"></i> mdi
                        mdi-arrow-bottom-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-bottom-right-bold-outline"></i>{" "}
                        mdi mdi-arrow-bottom-right-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-bottom-right-thick"></i> mdi
                        mdi-arrow-bottom-right-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse"></i> mdi
                        mdi-arrow-collapse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-all"></i> mdi
                        mdi-arrow-collapse-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-down"></i> mdi
                        mdi-arrow-collapse-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-horizontal"></i>{" "}
                        mdi mdi-arrow-collapse-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-left"></i> mdi
                        mdi-arrow-collapse-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-right"></i> mdi
                        mdi-arrow-collapse-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-up"></i> mdi
                        mdi-arrow-collapse-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-collapse-vertical"></i> mdi
                        mdi-arrow-collapse-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-decision"></i> mdi
                        mdi-arrow-decision
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-decision-auto"></i> mdi
                        mdi-arrow-decision-auto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-decision-auto-outline"></i>{" "}
                        mdi mdi-arrow-decision-auto-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-decision-outline"></i> mdi
                        mdi-arrow-decision-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down"></i> mdi
                        mdi-arrow-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold"></i> mdi
                        mdi-arrow-down-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold-box"></i> mdi
                        mdi-arrow-down-bold-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold-box-outline"></i>{" "}
                        mdi mdi-arrow-down-bold-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold-circle"></i> mdi
                        mdi-arrow-down-bold-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold-circle-outline"></i>{" "}
                        mdi mdi-arrow-down-bold-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold-hexagon-outline"></i>{" "}
                        mdi mdi-arrow-down-bold-hexagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-bold-outline"></i> mdi
                        mdi-arrow-down-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-box"></i> mdi
                        mdi-arrow-down-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-drop-circle"></i> mdi
                        mdi-arrow-down-drop-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-drop-circle-outline"></i>{" "}
                        mdi mdi-arrow-down-drop-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-down-thick"></i> mdi
                        mdi-arrow-down-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand"></i> mdi
                        mdi-arrow-expand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-all"></i> mdi
                        mdi-arrow-expand-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-down"></i> mdi
                        mdi-arrow-expand-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-horizontal"></i> mdi
                        mdi-arrow-expand-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-left"></i> mdi
                        mdi-arrow-expand-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-right"></i> mdi
                        mdi-arrow-expand-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-up"></i> mdi
                        mdi-arrow-expand-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-vertical"></i> mdi
                        mdi-arrow-expand-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left"></i> mdi
                        mdi-arrow-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold"></i> mdi
                        mdi-arrow-left-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold-box"></i> mdi
                        mdi-arrow-left-bold-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold-box-outline"></i>{" "}
                        mdi mdi-arrow-left-bold-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold-circle"></i> mdi
                        mdi-arrow-left-bold-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold-circle-outline"></i>{" "}
                        mdi mdi-arrow-left-bold-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold-hexagon-outline"></i>{" "}
                        mdi mdi-arrow-left-bold-hexagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-bold-outline"></i> mdi
                        mdi-arrow-left-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-box"></i> mdi
                        mdi-arrow-left-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-drop-circle"></i> mdi
                        mdi-arrow-left-drop-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-drop-circle-outline"></i>{" "}
                        mdi mdi-arrow-left-drop-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-right-bold-outline"></i>{" "}
                        mdi mdi-arrow-left-right-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-left-thick"></i> mdi
                        mdi-arrow-left-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right"></i> mdi
                        mdi-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold"></i> mdi
                        mdi-arrow-right-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold-box"></i> mdi
                        mdi-arrow-right-bold-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold-box-outline"></i>{" "}
                        mdi mdi-arrow-right-bold-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold-circle"></i> mdi
                        mdi-arrow-right-bold-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold-circle-outline"></i>{" "}
                        mdi mdi-arrow-right-bold-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold-hexagon-outline"></i>{" "}
                        mdi mdi-arrow-right-bold-hexagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-bold-outline"></i> mdi
                        mdi-arrow-right-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-box"></i> mdi
                        mdi-arrow-right-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-drop-circle"></i> mdi
                        mdi-arrow-right-drop-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-drop-circle-outline"></i>{" "}
                        mdi mdi-arrow-right-drop-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-right-thick"></i> mdi
                        mdi-arrow-right-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-split-horizontal"></i> mdi
                        mdi-arrow-split-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-split-vertical"></i> mdi
                        mdi-arrow-split-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-left"></i> mdi
                        mdi-arrow-top-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-left-bold-outline"></i>{" "}
                        mdi mdi-arrow-top-left-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-left-thick"></i> mdi
                        mdi-arrow-top-left-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-right"></i> mdi
                        mdi-arrow-top-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-right-bold-outline"></i>{" "}
                        mdi mdi-arrow-top-right-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-top-right-thick"></i> mdi
                        mdi-arrow-top-right-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-expand-up"></i> mdi
                        mdi-arrow-expand-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold"></i> mdi
                        mdi-arrow-up-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold-box"></i> mdi
                        mdi-arrow-up-bold-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold-box-outline"></i>{" "}
                        mdi mdi-arrow-up-bold-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold-circle"></i> mdi
                        mdi-arrow-up-bold-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold-circle-outline"></i>{" "}
                        mdi mdi-arrow-up-bold-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold-hexagon-outline"></i>{" "}
                        mdi mdi-arrow-up-bold-hexagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-bold-outline"></i> mdi
                        mdi-arrow-up-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-box"></i> mdi
                        mdi-arrow-up-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-down-bold-outline"></i>{" "}
                        mdi mdi-arrow-up-down-bold-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-drop-circle"></i> mdi
                        mdi-arrow-up-drop-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-drop-circle-outline"></i>{" "}
                        mdi mdi-arrow-up-drop-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-arrow-up-thick"></i> mdi
                        mdi-arrow-up-thick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-artist"></i> mdi mdi-artist
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-aspect-ratio"></i> mdi
                        mdi-aspect-ratio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-assistant"></i> mdi mdi-assistant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-asterisk"></i> mdi mdi-asterisk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-at"></i> mdi mdi-at
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-atlassian"></i> mdi mdi-atlassian
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-atom"></i> mdi mdi-atom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-attachment"></i> mdi
                        mdi-attachment
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-audio-video"></i> mdi
                        mdi-audio-video
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-audiobook"></i> mdi mdi-audiobook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-augmented-reality"></i> mdi
                        mdi-augmented-reality
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-auto-fix"></i> mdi mdi-auto-fix
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-auto-upload"></i> mdi
                        mdi-auto-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-autorenew"></i> mdi mdi-autorenew
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-av-timer"></i> mdi mdi-av-timer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-axe"></i> mdi mdi-axe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-azure"></i> mdi mdi-azure
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-babel"></i> mdi mdi-babel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby"></i> mdi mdi-baby
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baby-carriage"></i> mdi
                        mdi-baby-carriage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-backburger"></i> mdi
                        mdi-backburger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-backspace"></i> mdi mdi-backspace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-backup-restore"></i> mdi
                        mdi-backup-restore
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-badminton"></i> mdi mdi-badminton
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-balloon"></i> mdi mdi-balloon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ballot"></i> mdi mdi-ballot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ballot-outline"></i> mdi
                        mdi-ballot-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bandcamp"></i> mdi mdi-bandcamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank"></i> mdi mdi-bank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-transfer"></i> mdi
                        mdi-bank-transfer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-transfer-in"></i> mdi
                        mdi-bank-transfer-in
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bank-transfer-out"></i> mdi
                        mdi-bank-transfer-out
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-barcode"></i> mdi mdi-barcode
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-barcode-scan"></i> mdi
                        mdi-barcode-scan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-barley"></i> mdi mdi-barley
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-barrel"></i> mdi mdi-barrel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baseball"></i> mdi mdi-baseball
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-baseball-bat"></i> mdi
                        mdi-baseball-bat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basecamp"></i> mdi mdi-basecamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basket"></i> mdi mdi-basket
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basket-fill"></i> mdi
                        mdi-basket-fill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basket-unfill"></i> mdi
                        mdi-basket-unfill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-basketball"></i> mdi
                        mdi-basketball
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery"></i> mdi mdi-battery
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-10"></i> mdi
                        mdi-battery-10
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-10-bluetooth"></i> mdi
                        mdi-battery-10-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-20"></i> mdi
                        mdi-battery-20
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-20-bluetooth"></i> mdi
                        mdi-battery-20-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-30"></i> mdi
                        mdi-battery-30
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-30-bluetooth"></i> mdi
                        mdi-battery-30-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-40"></i> mdi
                        mdi-battery-40
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-40-bluetooth"></i> mdi
                        mdi-battery-40-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-50"></i> mdi
                        mdi-battery-50
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-50-bluetooth"></i> mdi
                        mdi-battery-50-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-60"></i> mdi
                        mdi-battery-60
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-60-bluetooth"></i> mdi
                        mdi-battery-60-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-70"></i> mdi
                        mdi-battery-70
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-70-bluetooth"></i> mdi
                        mdi-battery-70-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-80"></i> mdi
                        mdi-battery-80
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-80-bluetooth"></i> mdi
                        mdi-battery-80-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-90"></i> mdi
                        mdi-battery-90
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-90-bluetooth"></i> mdi
                        mdi-battery-90-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-alert"></i> mdi
                        mdi-battery-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-alert-bluetooth"></i> mdi
                        mdi-battery-alert-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-bluetooth"></i> mdi
                        mdi-battery-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-bluetooth-variant"></i>{" "}
                        mdi mdi-battery-bluetooth-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging"></i> mdi
                        mdi-battery-charging
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-10"></i> mdi
                        mdi-battery-charging-10
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-100"></i> mdi
                        mdi-battery-charging-100
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-20"></i> mdi
                        mdi-battery-charging-20
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-30"></i> mdi
                        mdi-battery-charging-30
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-40"></i> mdi
                        mdi-battery-charging-40
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-50"></i> mdi
                        mdi-battery-charging-50
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-60"></i> mdi
                        mdi-battery-charging-60
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-70"></i> mdi
                        mdi-battery-charging-70
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-80"></i> mdi
                        mdi-battery-charging-80
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-90"></i> mdi
                        mdi-battery-charging-90
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-wireless-alert"></i>{" "}
                        mdi mdi-battery-charging-wireless-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-charging-wireless-outline"></i>{" "}
                        mdi mdi-battery-charging-wireless-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-minus"></i> mdi
                        mdi-battery-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-negative"></i> mdi
                        mdi-battery-negative
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-outline"></i> mdi
                        mdi-battery-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-plus"></i> mdi
                        mdi-battery-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-positive"></i> mdi
                        mdi-battery-positive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-unknown"></i> mdi
                        mdi-battery-unknown
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-battery-unknown-bluetooth"></i>{" "}
                        mdi mdi-battery-unknown-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-beach"></i> mdi mdi-beach
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-beaker"></i> mdi mdi-beaker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-beats"></i> mdi mdi-beats
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bed-empty"></i> mdi mdi-bed-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-beer"></i> mdi mdi-beer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-behance"></i> mdi mdi-behance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell"></i> mdi mdi-bell
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-off"></i> mdi mdi-bell-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-off-outline"></i> mdi
                        mdi-bell-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-outline"></i> mdi
                        mdi-bell-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-plus"></i> mdi mdi-bell-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-plus-outline"></i> mdi
                        mdi-bell-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-ring"></i> mdi mdi-bell-ring
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-ring-outline"></i> mdi
                        mdi-bell-ring-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-sleep"></i> mdi
                        mdi-bell-sleep
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bell-sleep-outline"></i> mdi
                        mdi-bell-sleep-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-beta"></i> mdi mdi-beta
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-betamax"></i> mdi mdi-betamax
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bible"></i> mdi mdi-bible
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bike"></i> mdi mdi-bike
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bing"></i> mdi mdi-bing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-binoculars"></i> mdi
                        mdi-binoculars
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bio"></i> mdi mdi-bio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-biohazard"></i> mdi mdi-biohazard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bitbucket"></i> mdi mdi-bitbucket
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bitcoin"></i> mdi mdi-bitcoin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-black-mesa"></i> mdi
                        mdi-black-mesa
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blackberry"></i> mdi
                        mdi-blackberry
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blender"></i> mdi mdi-blender
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blinds"></i> mdi mdi-blinds
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-block-helper"></i> mdi
                        mdi-block-helper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blogger"></i> mdi mdi-blogger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bluetooth"></i> mdi mdi-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bluetooth-audio"></i> mdi
                        mdi-bluetooth-audio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bluetooth-connect"></i> mdi
                        mdi-bluetooth-connect
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bluetooth-off"></i> mdi
                        mdi-bluetooth-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bluetooth-settings"></i> mdi
                        mdi-bluetooth-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bluetooth-transfer"></i> mdi
                        mdi-bluetooth-transfer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blur"></i> mdi mdi-blur
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blur-linear"></i> mdi
                        mdi-blur-linear
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blur-off"></i> mdi mdi-blur-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blur-radial"></i> mdi
                        mdi-blur-radial
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bomb"></i> mdi mdi-bomb
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bomb-off"></i> mdi mdi-bomb-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bone"></i> mdi mdi-bone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book"></i> mdi mdi-book
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-lock"></i> mdi mdi-book-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-lock-open"></i> mdi
                        mdi-book-lock-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-minus"></i> mdi
                        mdi-book-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-multiple"></i> mdi
                        mdi-book-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-minus-multiple"></i> mdi
                        mdi-book-minus-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-plus-multiple"></i> mdi
                        mdi-book-plus-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-remove-multiple"></i> mdi
                        mdi-book-remove-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-variant-multiple"></i> mdi
                        mdi-book-variant-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-open"></i> mdi mdi-book-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-open-page-variant"></i> mdi
                        mdi-book-open-page-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-open-variant"></i> mdi
                        mdi-book-open-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-plus"></i> mdi mdi-book-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-remove"></i> mdi
                        mdi-book-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-book-variant"></i> mdi
                        mdi-book-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark"></i> mdi mdi-bookmark
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-check"></i> mdi
                        mdi-bookmark-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-minus"></i> mdi
                        mdi-bookmark-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-minus-outline"></i> mdi
                        mdi-bookmark-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-music"></i> mdi
                        mdi-bookmark-music
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-off"></i> mdi
                        mdi-bookmark-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-off-outline"></i> mdi
                        mdi-bookmark-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-outline"></i> mdi
                        mdi-bookmark-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-plus"></i> mdi
                        mdi-bookmark-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-plus-outline"></i> mdi
                        mdi-bookmark-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bookmark-remove"></i> mdi
                        mdi-bookmark-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-boombox"></i> mdi mdi-boombox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bootstrap"></i> mdi mdi-bootstrap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-all"></i> mdi
                        mdi-border-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-all-variant"></i> mdi
                        mdi-border-all-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-bottom"></i> mdi
                        mdi-border-bottom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-bottom-variant"></i> mdi
                        mdi-border-bottom-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-color"></i> mdi
                        mdi-border-color
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-horizontal"></i> mdi
                        mdi-border-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-inside"></i> mdi
                        mdi-border-inside
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-left"></i> mdi
                        mdi-border-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-left-variant"></i> mdi
                        mdi-border-left-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-none"></i> mdi
                        mdi-border-none
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-none-variant"></i> mdi
                        mdi-border-none-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-outside"></i> mdi
                        mdi-border-outside
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-right"></i> mdi
                        mdi-border-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-right-variant"></i> mdi
                        mdi-border-right-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-style"></i> mdi
                        mdi-border-style
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-top"></i> mdi
                        mdi-border-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-top-variant"></i> mdi
                        mdi-border-top-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-border-vertical"></i> mdi
                        mdi-border-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bottle-wine"></i> mdi
                        mdi-bottle-wine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bow-tie"></i> mdi mdi-bow-tie
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bowl"></i> mdi mdi-bowl
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bowling"></i> mdi mdi-bowling
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-box"></i> mdi mdi-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-box-cutter"></i> mdi
                        mdi-box-cutter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-box-shadow"></i> mdi
                        mdi-box-shadow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-braille"></i> mdi mdi-braille
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brain"></i> mdi mdi-brain
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bridge"></i> mdi mdi-bridge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase"></i> mdi mdi-briefcase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-check"></i> mdi
                        mdi-briefcase-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-download"></i> mdi
                        mdi-briefcase-download
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-edit"></i> mdi
                        mdi-briefcase-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-minus"></i> mdi
                        mdi-briefcase-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-outline"></i> mdi
                        mdi-briefcase-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-plus"></i> mdi
                        mdi-briefcase-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-remove"></i> mdi
                        mdi-briefcase-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-search"></i> mdi
                        mdi-briefcase-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-briefcase-upload"></i> mdi
                        mdi-briefcase-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-1"></i> mdi
                        mdi-brightness-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-2"></i> mdi
                        mdi-brightness-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-3"></i> mdi
                        mdi-brightness-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-4"></i> mdi
                        mdi-brightness-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-5"></i> mdi
                        mdi-brightness-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-6"></i> mdi
                        mdi-brightness-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-7"></i> mdi
                        mdi-brightness-7
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brightness-auto"></i> mdi
                        mdi-brightness-auto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-broom"></i> mdi mdi-broom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-brush"></i> mdi mdi-brush
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-buddhism"></i> mdi mdi-buddhism
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-buffer"></i> mdi mdi-buffer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bug"></i> mdi mdi-bug
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bug-check"></i> mdi mdi-bug-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bug-check-outline"></i> mdi
                        mdi-bug-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bug-outline"></i> mdi
                        mdi-bug-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bulldozer"></i> mdi mdi-bulldozer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bulletin-board"></i> mdi
                        mdi-bulletin-board
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bullhorn"></i> mdi mdi-bullhorn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bullhorn-outline"></i> mdi
                        mdi-bullhorn-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bullseye-arrow"></i> mdi
                        mdi-bullseye-arrow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus"></i> mdi mdi-bus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-alert"></i> mdi mdi-bus-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-articulated-end"></i> mdi
                        mdi-bus-articulated-end
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-articulated-front"></i> mdi
                        mdi-bus-articulated-front
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-clock"></i> mdi mdi-bus-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-double-decker"></i> mdi
                        mdi-bus-double-decker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-school"></i> mdi
                        mdi-bus-school
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-bus-side"></i> mdi mdi-bus-side
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cached"></i> mdi mdi-cached
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cake"></i> mdi mdi-cake
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cake-layered"></i> mdi
                        mdi-cake-layered
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cake-variant"></i> mdi
                        mdi-cake-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calculator"></i> mdi
                        mdi-calculator
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calculator-variant"></i> mdi
                        mdi-calculator-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar"></i> mdi mdi-calendar
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-alert"></i> mdi
                        mdi-calendar-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-blank"></i> mdi
                        mdi-calendar-blank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-check"></i> mdi
                        mdi-calendar-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-clock"></i> mdi
                        mdi-calendar-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-edit"></i> mdi
                        mdi-calendar-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-export"></i> mdi
                        mdi-calendar-export
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-heart"></i> mdi
                        mdi-calendar-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-import"></i> mdi
                        mdi-calendar-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-multiple"></i> mdi
                        mdi-calendar-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-multiple-check"></i> mdi
                        mdi-calendar-multiple-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-multiselect"></i> mdi
                        mdi-calendar-multiselect
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-plus"></i> mdi
                        mdi-calendar-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-question"></i> mdi
                        mdi-calendar-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-range"></i> mdi
                        mdi-calendar-range
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-remove"></i> mdi
                        mdi-calendar-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-search"></i> mdi
                        mdi-calendar-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-star"></i> mdi
                        mdi-calendar-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-text"></i> mdi
                        mdi-calendar-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-today"></i> mdi
                        mdi-calendar-today
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-week"></i> mdi
                        mdi-calendar-week
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-calendar-week-begin"></i> mdi
                        mdi-calendar-week-begin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-call-made"></i> mdi mdi-call-made
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-call-merge"></i> mdi
                        mdi-call-merge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-call-missed"></i> mdi
                        mdi-call-missed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-call-received"></i> mdi
                        mdi-call-received
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-call-split"></i> mdi
                        mdi-call-split
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camcorder"></i> mdi mdi-camcorder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camcorder-box"></i> mdi
                        mdi-camcorder-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camcorder-box-off"></i> mdi
                        mdi-camcorder-box-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camcorder-off"></i> mdi
                        mdi-camcorder-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera"></i> mdi mdi-camera
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-account"></i> mdi
                        mdi-camera-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-burst"></i> mdi
                        mdi-camera-burst
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-enhance"></i> mdi
                        mdi-camera-enhance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-front"></i> mdi
                        mdi-camera-front
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-front-variant"></i> mdi
                        mdi-camera-front-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-gopro"></i> mdi
                        mdi-camera-gopro
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-image"></i> mdi
                        mdi-camera-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-iris"></i> mdi
                        mdi-camera-iris
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-metering-center"></i> mdi
                        mdi-camera-metering-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-metering-matrix"></i> mdi
                        mdi-camera-metering-matrix
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-metering-partial"></i> mdi
                        mdi-camera-metering-partial
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-metering-spot"></i> mdi
                        mdi-camera-metering-spot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-off"></i> mdi
                        mdi-camera-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-party-mode"></i> mdi
                        mdi-camera-party-mode
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-rear"></i> mdi
                        mdi-camera-rear
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-rear-variant"></i> mdi
                        mdi-camera-rear-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-switch"></i> mdi
                        mdi-camera-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-camera-timer"></i> mdi
                        mdi-camera-timer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cancel"></i> mdi mdi-cancel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-candle"></i> mdi mdi-candle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-candycane"></i> mdi mdi-candycane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cannabis"></i> mdi mdi-cannabis
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-caps-lock"></i> mdi mdi-caps-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car"></i> mdi mdi-car
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-battery"></i> mdi
                        mdi-car-battery
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-connected"></i> mdi
                        mdi-car-connected
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-convertible"></i> mdi
                        mdi-car-convertible
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-estate"></i> mdi
                        mdi-car-estate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-hatchback"></i> mdi
                        mdi-car-hatchback
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-limousine"></i> mdi
                        mdi-car-limousine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-pickup"></i> mdi
                        mdi-car-pickup
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-side"></i> mdi mdi-car-side
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-sports"></i> mdi
                        mdi-car-sports
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-car-wash"></i> mdi mdi-car-wash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-caravan"></i> mdi mdi-caravan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards"></i> mdi mdi-cards
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-club"></i> mdi
                        mdi-cards-club
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-diamond"></i> mdi
                        mdi-cards-diamond
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-heart"></i> mdi
                        mdi-cards-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-outline"></i> mdi
                        mdi-cards-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-playing-outline"></i> mdi
                        mdi-cards-playing-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-spade"></i> mdi
                        mdi-cards-spade
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cards-variant"></i> mdi
                        mdi-cards-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-carrot"></i> mdi mdi-carrot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cart"></i> mdi mdi-cart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cart-off"></i> mdi mdi-cart-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cart-outline"></i> mdi
                        mdi-cart-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cart-plus"></i> mdi mdi-cart-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-case-sensitive-alt"></i> mdi
                        mdi-case-sensitive-alt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash"></i> mdi mdi-cash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash-100"></i> mdi mdi-cash-100
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash-multiple"></i> mdi
                        mdi-cash-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash-refund"></i> mdi
                        mdi-cash-refund
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cash-usd"></i> mdi mdi-cash-usd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cassette"></i> mdi mdi-cassette
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cast"></i> mdi mdi-cast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cast-connected"></i> mdi
                        mdi-cast-connected
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cast-off"></i> mdi mdi-cast-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-castle"></i> mdi mdi-castle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cat"></i> mdi mdi-cat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cctv"></i> mdi mdi-cctv
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ceiling-light"></i> mdi
                        mdi-ceiling-light
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone"></i> mdi mdi-cellphone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-android"></i> mdi
                        mdi-cellphone-android
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-arrow-down"></i> mdi
                        mdi-cellphone-arrow-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-basic"></i> mdi
                        mdi-cellphone-basic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-dock"></i> mdi
                        mdi-cellphone-dock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-erase"></i> mdi
                        mdi-cellphone-erase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-iphone"></i> mdi
                        mdi-cellphone-iphone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-key"></i> mdi
                        mdi-cellphone-key
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-link"></i> mdi
                        mdi-cellphone-link
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-link-off"></i> mdi
                        mdi-cellphone-link-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-lock"></i> mdi
                        mdi-cellphone-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-message"></i> mdi
                        mdi-cellphone-message
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-off"></i> mdi
                        mdi-cellphone-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-screenshot"></i> mdi
                        mdi-cellphone-screenshot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-settings"></i> mdi
                        mdi-cellphone-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-settings-variant"></i>{" "}
                        mdi mdi-cellphone-settings-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-sound"></i> mdi
                        mdi-cellphone-sound
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-text"></i> mdi
                        mdi-cellphone-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cellphone-wireless"></i> mdi
                        mdi-cellphone-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-certificate"></i> mdi
                        mdi-certificate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chair-school"></i> mdi
                        mdi-chair-school
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-arc"></i> mdi mdi-chart-arc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-areaspline"></i> mdi
                        mdi-chart-areaspline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-bar"></i> mdi mdi-chart-bar
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-bar-stacked"></i> mdi
                        mdi-chart-bar-stacked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-bubble"></i> mdi
                        mdi-chart-bubble
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-donut"></i> mdi
                        mdi-chart-donut
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-donut-variant"></i> mdi
                        mdi-chart-donut-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-gantt"></i> mdi
                        mdi-chart-gantt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-histogram"></i> mdi
                        mdi-chart-histogram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-line"></i> mdi
                        mdi-chart-line
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-line-stacked"></i> mdi
                        mdi-chart-line-stacked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-line-variant"></i> mdi
                        mdi-chart-line-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-multiline"></i> mdi
                        mdi-chart-multiline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-pie"></i> mdi mdi-chart-pie
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-scatter-plot-hexbin"></i>{" "}
                        mdi mdi-chart-scatter-plot-hexbin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chart-timeline"></i> mdi
                        mdi-chart-timeline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check"></i> mdi mdi-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-all"></i> mdi mdi-check-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-circle"></i> mdi
                        mdi-check-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-circle-outline"></i> mdi
                        mdi-check-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-decagram"></i> mdi
                        mdi-check-decagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-check-outline"></i> mdi
                        mdi-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbook"></i> mdi mdi-checkbook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-blank"></i> mdi
                        mdi-checkbox-blank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-blank-circle"></i> mdi
                        mdi-checkbox-blank-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-blank-circle-outline"></i>{" "}
                        mdi mdi-checkbox-blank-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-blank-outline"></i> mdi
                        mdi-checkbox-blank-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-intermediate"></i> mdi
                        mdi-checkbox-intermediate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-marked"></i> mdi
                        mdi-checkbox-marked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-marked-circle"></i> mdi
                        mdi-checkbox-marked-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-marked-circle-outline"></i>{" "}
                        mdi mdi-checkbox-marked-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-marked-outline"></i> mdi
                        mdi-checkbox-marked-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-blank"></i> mdi
                        mdi-checkbox-multiple-blank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-blank-circle"></i>{" "}
                        mdi mdi-checkbox-multiple-blank-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-blank-circle-outline"></i>{" "}
                        mdi mdi-checkbox-multiple-blank-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-blank-outline"></i>{" "}
                        mdi mdi-checkbox-multiple-blank-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-marked"></i> mdi
                        mdi-checkbox-multiple-marked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle"></i>{" "}
                        mdi mdi-checkbox-multiple-marked-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-marked-circle-outline"></i>{" "}
                        mdi mdi-checkbox-multiple-marked-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkbox-multiple-marked-outline"></i>{" "}
                        mdi mdi-checkbox-multiple-marked-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-checkerboard"></i> mdi
                        mdi-checkerboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chemical-weapon"></i> mdi
                        mdi-chemical-weapon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chess-bishop"></i> mdi
                        mdi-chess-bishop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chess-king"></i> mdi
                        mdi-chess-king
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chess-knight"></i> mdi
                        mdi-chess-knight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chess-pawn"></i> mdi
                        mdi-chess-pawn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chess-queen   "></i> mdi
                        mdi-chess-queen
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chess-rook"></i> mdi
                        mdi-chess-rook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-double-down"></i> mdi
                        mdi-chevron-double-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-double-left"></i> mdi
                        mdi-chevron-double-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-double-right"></i> mdi
                        mdi-chevron-double-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-double-up"></i> mdi
                        mdi-chevron-double-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-down"></i> mdi
                        mdi-chevron-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-down-box"></i> mdi
                        mdi-chevron-down-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-down-box-outline"></i> mdi
                        mdi-chevron-down-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-down-circle"></i> mdi
                        mdi-chevron-down-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-down-circle-outline"></i>{" "}
                        mdi mdi-chevron-down-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-left"></i> mdi
                        mdi-chevron-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-left-box"></i> mdi
                        mdi-chevron-left-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-left-box-outline"></i> mdi
                        mdi-chevron-left-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-left-circle"></i> mdi
                        mdi-chevron-left-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-left-circle-outline"></i>{" "}
                        mdi mdi-chevron-left-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-right"></i> mdi
                        mdi-chevron-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-right-box"></i> mdi
                        mdi-chevron-right-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-right-box-outline"></i>{" "}
                        mdi mdi-chevron-right-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-right-circle"></i> mdi
                        mdi-chevron-right-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-right-circle-outline"></i>{" "}
                        mdi mdi-chevron-right-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-up"></i> mdi
                        mdi-chevron-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-up-box"></i> mdi
                        mdi-chevron-up-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-up-box-outline"></i> mdi
                        mdi-chevron-up-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-up-circle"></i> mdi
                        mdi-chevron-up-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chevron-up-circle-outline"></i>{" "}
                        mdi mdi-chevron-up-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chili-hot"></i> mdi mdi-chili-hot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chili-medium"></i> mdi
                        mdi-chili-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chili-mild"></i> mdi
                        mdi-chili-mild
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-chip"></i> mdi mdi-chip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-christianity"></i> mdi
                        mdi-christianity
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-church"></i> mdi mdi-church
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle"></i> mdi mdi-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-edit-outline"></i> mdi
                        mdi-circle-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-medium"></i> mdi
                        mdi-circle-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-outline"></i> mdi
                        mdi-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-1"></i> mdi
                        mdi-circle-slice-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-2"></i> mdi
                        mdi-circle-slice-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-3"></i> mdi
                        mdi-circle-slice-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-4"></i> mdi
                        mdi-circle-slice-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-5"></i> mdi
                        mdi-circle-slice-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-6"></i> mdi
                        mdi-circle-slice-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-7"></i> mdi
                        mdi-circle-slice-7
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-slice-8"></i> mdi
                        mdi-circle-slice-8
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-circle-small"></i> mdi
                        mdi-circle-small
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cisco-webex"></i> mdi
                        mdi-cisco-webex
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-city"></i> mdi mdi-city
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-city-variant"></i> mdi
                        mdi-city-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-city-variant-outline"></i> mdi
                        mdi-city-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard"></i> mdi mdi-clipboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-account"></i> mdi
                        mdi-clipboard-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-alert"></i> mdi
                        mdi-clipboard-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-arrow-down"></i> mdi
                        mdi-clipboard-arrow-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-arrow-left"></i> mdi
                        mdi-clipboard-arrow-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-check"></i> mdi
                        mdi-clipboard-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-check-outline"></i> mdi
                        mdi-clipboard-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-flow"></i> mdi
                        mdi-clipboard-flow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-outline"></i> mdi
                        mdi-clipboard-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-plus"></i> mdi
                        mdi-clipboard-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-pulse"></i> mdi
                        mdi-clipboard-pulse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-pulse-outline"></i> mdi
                        mdi-clipboard-pulse-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-text"></i> mdi
                        mdi-clipboard-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clipboard-text-outline"></i> mdi
                        mdi-clipboard-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clippy"></i> mdi mdi-clippy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock"></i> mdi mdi-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-alert"></i> mdi
                        mdi-clock-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-alert-outline"></i> mdi
                        mdi-clock-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-end"></i> mdi mdi-clock-end
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-fast"></i> mdi
                        mdi-clock-fast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-in"></i> mdi mdi-clock-in
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-out"></i> mdi mdi-clock-out
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-outline"></i> mdi
                        mdi-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clock-start"></i> mdi
                        mdi-clock-start
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close"></i> mdi mdi-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-box"></i> mdi mdi-close-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-box-outline"></i> mdi
                        mdi-close-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-circle"></i> mdi
                        mdi-close-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-circle-outline"></i> mdi
                        mdi-close-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-network"></i> mdi
                        mdi-close-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-octagon"></i> mdi
                        mdi-close-octagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-octagon-outline"></i> mdi
                        mdi-close-octagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-close-outline"></i> mdi
                        mdi-close-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-closed-caption"></i> mdi
                        mdi-closed-caption
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud"></i> mdi mdi-cloud
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-alert"></i> mdi
                        mdi-cloud-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-braces"></i> mdi
                        mdi-cloud-braces
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-check"></i> mdi
                        mdi-cloud-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-circle"></i> mdi
                        mdi-cloud-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-download"></i> mdi
                        mdi-cloud-download
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-off-outline"></i> mdi
                        mdi-cloud-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-outline"></i> mdi
                        mdi-cloud-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-print"></i> mdi
                        mdi-cloud-print
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-print-outline"></i> mdi
                        mdi-cloud-print-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-question"></i> mdi
                        mdi-cloud-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-search"></i> mdi
                        mdi-cloud-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-search-outline"></i> mdi
                        mdi-cloud-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-sync"></i> mdi
                        mdi-cloud-sync
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-tags"></i> mdi
                        mdi-cloud-tags
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cloud-upload"></i> mdi
                        mdi-cloud-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-clover"></i> mdi mdi-clover
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-array"></i> mdi
                        mdi-code-array
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-braces"></i> mdi
                        mdi-code-braces
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-brackets"></i> mdi
                        mdi-code-brackets
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-equal"></i> mdi
                        mdi-code-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-greater-than"></i> mdi
                        mdi-code-greater-than
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-greater-than-or-equal"></i>{" "}
                        mdi mdi-code-greater-than-or-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-less-than"></i> mdi
                        mdi-code-less-than
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-less-than-or-equal"></i> mdi
                        mdi-code-less-than-or-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-not-equal"></i> mdi
                        mdi-code-not-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-not-equal-variant"></i> mdi
                        mdi-code-not-equal-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-parentheses"></i> mdi
                        mdi-code-parentheses
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-string"></i> mdi
                        mdi-code-string
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-tags"></i> mdi mdi-code-tags
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-code-tags-check"></i> mdi
                        mdi-code-tags-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-codepen"></i> mdi mdi-codepen
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coffee"></i> mdi mdi-coffee
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coffee-outline"></i> mdi
                        mdi-coffee-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coffee-to-go"></i> mdi
                        mdi-coffee-to-go
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cogs"></i> mdi mdi-cogs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coin"></i> mdi mdi-coin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-coins"></i> mdi mdi-coins
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-collage"></i> mdi mdi-collage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-collapse-all"></i> mdi
                        mdi-collapse-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-collapse-all-outline"></i> mdi
                        mdi-collapse-all-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-color-helper"></i> mdi
                        mdi-color-helper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment"></i> mdi mdi-comment
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-account"></i> mdi
                        mdi-comment-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-account-outline"></i> mdi
                        mdi-comment-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-alert"></i> mdi
                        mdi-comment-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-alert-outline"></i> mdi
                        mdi-comment-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-arrow-left"></i> mdi
                        mdi-comment-arrow-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-arrow-left-outline"></i>{" "}
                        mdi mdi-comment-arrow-left-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-arrow-right"></i> mdi
                        mdi-comment-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-arrow-right-outline"></i>{" "}
                        mdi mdi-comment-arrow-right-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-check"></i> mdi
                        mdi-comment-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-check-outline"></i> mdi
                        mdi-comment-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-eye"></i> mdi
                        mdi-comment-eye
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-eye-outline"></i> mdi
                        mdi-comment-eye-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-multiple"></i> mdi
                        mdi-comment-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-multiple-outline"></i> mdi
                        mdi-comment-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-outline"></i> mdi
                        mdi-comment-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-plus"></i> mdi
                        mdi-comment-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-plus-outline"></i> mdi
                        mdi-comment-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-processing"></i> mdi
                        mdi-comment-processing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-processing-outline"></i>{" "}
                        mdi mdi-comment-processing-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-question"></i> mdi
                        mdi-comment-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-question-outline"></i> mdi
                        mdi-comment-question-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-remove"></i> mdi
                        mdi-comment-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-remove-outline"></i> mdi
                        mdi-comment-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-search"></i> mdi
                        mdi-comment-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-search-outline"></i> mdi
                        mdi-comment-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-text"></i> mdi
                        mdi-comment-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-text-multiple"></i> mdi
                        mdi-comment-text-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-text-multiple-outline"></i>{" "}
                        mdi mdi-comment-text-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-comment-text-outline"></i> mdi
                        mdi-comment-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-compare"></i> mdi mdi-compare
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-compass"></i> mdi mdi-compass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-compass-outline"></i> mdi
                        mdi-compass-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-console"></i> mdi mdi-console
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-console-line"></i> mdi
                        mdi-console-line
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contact-mail"></i> mdi
                        mdi-contact-mail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contacts"></i> mdi mdi-contacts
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contain"></i> mdi mdi-contain
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contain-end"></i> mdi
                        mdi-contain-end
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contain-start"></i> mdi
                        mdi-contain-start
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-copy"></i> mdi
                        mdi-content-copy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-cut"></i> mdi
                        mdi-content-cut
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-duplicate"></i> mdi
                        mdi-content-duplicate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-paste"></i> mdi
                        mdi-content-paste
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save"></i> mdi
                        mdi-content-save
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-all"></i> mdi
                        mdi-content-save-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-outline"></i> mdi
                        mdi-content-save-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-settings"></i> mdi
                        mdi-content-save-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-content-save-settings-outline"></i>{" "}
                        mdi mdi-content-save-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contrast"></i> mdi mdi-contrast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contrast-box"></i> mdi
                        mdi-contrast-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-contrast-circle"></i> mdi
                        mdi-contrast-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cookie"></i> mdi mdi-cookie
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-copyright"></i> mdi mdi-copyright
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cordova"></i> mdi mdi-cordova
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-corn"></i> mdi mdi-corn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-counter"></i> mdi mdi-counter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cow"></i> mdi mdi-cow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crane"></i> mdi mdi-crane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-creation"></i> mdi mdi-creation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card"></i> mdi
                        mdi-credit-card
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-multiple"></i> mdi
                        mdi-credit-card-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-off"></i> mdi
                        mdi-credit-card-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-plus"></i> mdi
                        mdi-credit-card-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-refund"></i> mdi
                        mdi-credit-card-refund
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-scan"></i> mdi
                        mdi-credit-card-scan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-settings"></i> mdi
                        mdi-credit-card-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crop"></i> mdi mdi-crop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crop-free"></i> mdi mdi-crop-free
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crop-landscape"></i> mdi
                        mdi-crop-landscape
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crop-portrait"></i> mdi
                        mdi-crop-portrait
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crop-rotate"></i> mdi
                        mdi-crop-rotate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crop-square"></i> mdi
                        mdi-crop-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crosshairs"></i> mdi
                        mdi-crosshairs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crosshairs-gps"></i> mdi
                        mdi-crosshairs-gps
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crown"></i> mdi mdi-crown
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cryengine"></i> mdi mdi-cryengine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-crystal-ball"></i> mdi
                        mdi-crystal-ball
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cube"></i> mdi mdi-cube
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cube-outline"></i> mdi
                        mdi-cube-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cube-send"></i> mdi mdi-cube-send
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cube-unfolded"></i> mdi
                        mdi-cube-unfolded
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cup"></i> mdi mdi-cup
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cup-off"></i> mdi mdi-cup-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cup-water"></i> mdi mdi-cup-water
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cupcake"></i> mdi mdi-cupcake
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-curling"></i> mdi mdi-curling
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-bdt"></i> mdi
                        mdi-currency-bdt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-btc"></i> mdi
                        mdi-currency-btc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-zip-outline"></i> mdi
                        mdi-folder-zip-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-cny"></i> mdi
                        mdi-currency-cny
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-eth"></i> mdi
                        mdi-currency-eth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-eur"></i> mdi
                        mdi-currency-eur
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-gbp"></i> mdi
                        mdi-currency-gbp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-inr"></i> mdi
                        mdi-currency-inr
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-jpy"></i> mdi
                        mdi-currency-jpy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-krw"></i> mdi
                        mdi-currency-krw
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-kzt"></i> mdi
                        mdi-currency-kzt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-ngn"></i> mdi
                        mdi-currency-ngn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-php"></i> mdi
                        mdi-currency-php
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-rub"></i> mdi
                        mdi-currency-rub
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-sign"></i> mdi
                        mdi-currency-sign
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-try"></i> mdi
                        mdi-currency-try
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-twd"></i> mdi
                        mdi-currency-twd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-usd"></i> mdi
                        mdi-currency-usd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-currency-usd-off"></i> mdi
                        mdi-currency-usd-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-current-ac"></i> mdi
                        mdi-current-ac
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-current-dc"></i> mdi
                        mdi-current-dc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-default"></i> mdi
                        mdi-cursor-default
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-default-outline"></i> mdi
                        mdi-cursor-default-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-move"></i> mdi
                        mdi-cursor-move
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-pointer"></i> mdi
                        mdi-cursor-pointer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-cursor-text"></i> mdi
                        mdi-cursor-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database"></i> mdi mdi-database
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-check"></i> mdi
                        mdi-database-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-export"></i> mdi
                        mdi-database-export
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-import"></i> mdi
                        mdi-database-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-lock"></i> mdi
                        mdi-database-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-minus"></i> mdi
                        mdi-database-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-plus"></i> mdi
                        mdi-database-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-database-search"></i> mdi
                        mdi-database-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-death-star"></i> mdi
                        mdi-death-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-death-star-variant"></i> mdi
                        mdi-death-star-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-debian"></i> mdi mdi-debian
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-debug-step-into"></i> mdi
                        mdi-debug-step-into
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-debug-step-into"></i> mdi
                        mdi-debug-step-into
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-debug-step-out"></i> mdi
                        mdi-debug-step-out
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-debug-step-over"></i> mdi
                        mdi-debug-step-over
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decagram"></i> mdi mdi-decagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decagram-outline"></i> mdi
                        mdi-decagram-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decimal-decrease"></i> mdi
                        mdi-decimal-decrease
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-decimal-increase"></i> mdi
                        mdi-decimal-increase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete"></i> mdi mdi-delete
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-circle"></i> mdi
                        mdi-delete-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-empty"></i> mdi
                        mdi-delete-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-forever"></i> mdi
                        mdi-delete-forever
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-outline"></i> mdi
                        mdi-delete-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-restore"></i> mdi
                        mdi-delete-restore
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-sweep"></i> mdi
                        mdi-delete-sweep
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delete-variant"></i> mdi
                        mdi-delete-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-delta"></i> mdi mdi-delta
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-desk-lamp"></i> mdi mdi-desk-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-deskphone"></i> mdi mdi-deskphone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-desktop-classNameic"></i> mdi
                        mdi-desktop-classNameic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-desktop-mac"></i> mdi
                        mdi-desktop-mac
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-desktop-mac-dashboard"></i> mdi
                        mdi-desktop-mac-dashboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-desktop-tower"></i> mdi
                        mdi-desktop-tower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-desktop-tower-monitor"></i> mdi
                        mdi-desktop-tower-monitor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-details"></i> mdi mdi-details
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-developer-board"></i> mdi
                        mdi-developer-board
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-deviantart"></i> mdi
                        mdi-deviantart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dialpad"></i> mdi mdi-dialpad
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-diamond"></i> mdi mdi-diamond
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-1"></i> mdi mdi-dice-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-2"></i> mdi mdi-dice-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-3"></i> mdi mdi-dice-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-4"></i> mdi mdi-dice-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-5"></i> mdi mdi-dice-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-6"></i> mdi mdi-dice-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d10"></i> mdi mdi-dice-d10
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d12"></i> mdi mdi-dice-d12
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d20"></i> mdi mdi-dice-d20
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d4"></i> mdi mdi-dice-d4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d6"></i> mdi mdi-dice-d6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-d8"></i> mdi mdi-dice-d8
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dice-multiple"></i> mdi
                        mdi-dice-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dictionary"></i> mdi
                        mdi-dictionary
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dip-switch"></i> mdi
                        mdi-dip-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-directions"></i> mdi
                        mdi-directions
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-directions-fork"></i> mdi
                        mdi-directions-fork
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-disc"></i> mdi mdi-disc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-disc-alert"></i> mdi
                        mdi-disc-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-disc-player"></i> mdi
                        mdi-disc-player
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-discord"></i> mdi mdi-discord
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dishwasher"></i> mdi
                        mdi-dishwasher
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-disqus"></i> mdi mdi-disqus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-disqus-outline"></i> mdi
                        mdi-disqus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-division"></i> mdi mdi-division
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-division-box"></i> mdi
                        mdi-division-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dlna"></i> mdi mdi-dlna
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dna"></i> mdi mdi-dna
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dns"></i> mdi mdi-dns
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-do-not-disturb"></i> mdi
                        mdi-do-not-disturb
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-do-not-disturb-off"></i> mdi
                        mdi-do-not-disturb-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-docker"></i> mdi mdi-docker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-doctor"></i> mdi mdi-doctor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dog"></i> mdi mdi-dog
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dog-service"></i> mdi
                        mdi-dog-service
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dog-side"></i> mdi mdi-dog-side
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dolby"></i> mdi mdi-dolby
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-domain"></i> mdi mdi-domain
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-donkey"></i> mdi mdi-donkey
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-door"></i> mdi mdi-door
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-door-closed"></i> mdi
                        mdi-door-closed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-door-open"></i> mdi mdi-door-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-doorbell-video"></i> mdi
                        mdi-doorbell-video
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dot-net"></i> mdi mdi-dot-net
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dots-horizontal"></i> mdi
                        mdi-dots-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dots-horizontal-circle"></i> mdi
                        mdi-dots-horizontal-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dots-vertical"></i> mdi
                        mdi-dots-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dots-vertical-circle"></i> mdi
                        mdi-dots-vertical-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-douban"></i> mdi mdi-douban
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-download"></i> mdi mdi-download
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-download-multiple"></i> mdi
                        mdi-download-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-download-network"></i> mdi
                        mdi-download-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drag"></i> mdi mdi-drag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drag-horizontal"></i> mdi
                        mdi-drag-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drag-vertical"></i> mdi
                        mdi-drag-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drawing"></i> mdi mdi-drawing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drawing-box"></i> mdi
                        mdi-drawing-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dribbble"></i> mdi mdi-dribbble
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dribbble-box"></i> mdi
                        mdi-dribbble-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drone"></i> mdi mdi-drone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dropbox"></i> mdi mdi-dropbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-drupal"></i> mdi mdi-drupal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-duck"></i> mdi mdi-duck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-dumbbell"></i> mdi mdi-dumbbell
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ear-hearing"></i> mdi
                        mdi-ear-hearing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ear-hearing-off"></i> mdi
                        mdi-ear-hearing-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-earth"></i> mdi mdi-earth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-earth-box"></i> mdi mdi-earth-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-earth-box-off"></i> mdi
                        mdi-earth-box-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-earth-off"></i> mdi mdi-earth-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-edge"></i> mdi mdi-edge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-egg"></i> mdi mdi-egg
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-egg-easter"></i> mdi
                        mdi-egg-easter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eight-track"></i> mdi
                        mdi-eight-track
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eject"></i> mdi mdi-eject
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-elephant"></i> mdi mdi-elephant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-elevation-decline"></i> mdi
                        mdi-elevation-decline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-elevation-rise"></i> mdi
                        mdi-elevation-rise
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-elevator"></i> mdi mdi-elevator
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email"></i> mdi mdi-email
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-alert"></i> mdi
                        mdi-email-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-check"></i> mdi
                        mdi-email-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-check-outline"></i> mdi
                        mdi-email-check-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-lock"></i> mdi
                        mdi-email-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-open"></i> mdi
                        mdi-email-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-open-outline"></i> mdi
                        mdi-email-open-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-outline"></i> mdi
                        mdi-email-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-plus"></i> mdi
                        mdi-email-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-plus-outline"></i> mdi
                        mdi-email-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-search"></i> mdi
                        mdi-email-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-search-outline"></i> mdi
                        mdi-email-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-email-variant"></i> mdi
                        mdi-email-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ember"></i> mdi mdi-ember
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emby"></i> mdi mdi-emby
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-outline"></i> mdi
                        mdi-emoticon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-cool-outline"></i> mdi
                        mdi-emoticon-cool-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-dead-outline"></i> mdi
                        mdi-emoticon-dead-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-devil-outline"></i> mdi
                        mdi-emoticon-devil-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-excited-outline"></i> mdi
                        mdi-emoticon-excited-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-happy-outline"></i> mdi
                        mdi-emoticon-happy-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-neutral-outline"></i> mdi
                        mdi-emoticon-neutral-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-poop"></i> mdi
                        mdi-emoticon-poop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-sad-outline"></i> mdi
                        mdi-emoticon-sad-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-emoticon-tongue"></i> mdi
                        mdi-emoticon-tongue
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-engine"></i> mdi mdi-engine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-engine-off"></i> mdi
                        mdi-engine-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-engine-off-outline"></i> mdi
                        mdi-engine-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-engine-outline"></i> mdi
                        mdi-engine-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-equal"></i> mdi mdi-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-equal-box"></i> mdi mdi-equal-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eraser"></i> mdi mdi-eraser
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eraser-variant"></i> mdi
                        mdi-eraser-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-escalator"></i> mdi mdi-escalator
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-et"></i> mdi mdi-et
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ethereum"></i> mdi mdi-ethereum
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ethernet"></i> mdi mdi-ethernet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ethernet-cable"></i> mdi
                        mdi-ethernet-cable
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ethernet-cable-off"></i> mdi
                        mdi-ethernet-cable-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-etsy"></i> mdi mdi-etsy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ev-station"></i> mdi
                        mdi-ev-station
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eventbrite"></i> mdi
                        mdi-eventbrite
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-evernote"></i> mdi mdi-evernote
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-exclamation"></i> mdi
                        mdi-exclamation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-exit-run"></i> mdi mdi-exit-run
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-exit-to-app"></i> mdi
                        mdi-exit-to-app
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-expand-all"></i> mdi
                        mdi-expand-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-expand-all-outline"></i> mdi
                        mdi-expand-all-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-exponent"></i> mdi mdi-exponent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-exponent-box"></i> mdi
                        mdi-exponent-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-export"></i> mdi mdi-export
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye"></i> mdi mdi-eye
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-off"></i> mdi mdi-eye-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-off-outline"></i> mdi
                        mdi-eye-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-outline"></i> mdi
                        mdi-eye-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-plus"></i> mdi mdi-eye-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-plus-outline"></i> mdi
                        mdi-eye-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-settings"></i> mdi
                        mdi-eye-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eye-settings-outline"></i> mdi
                        mdi-eye-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eyedropper"></i> mdi
                        mdi-eyedropper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-eyedropper-variant"></i> mdi
                        mdi-eyedropper-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-face"></i> mdi mdi-face
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-face-profile"></i> mdi
                        mdi-face-profile
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-facebook"></i> mdi mdi-facebook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-facebook-box"></i> mdi
                        mdi-facebook-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-facebook-messenger"></i> mdi
                        mdi-facebook-messenger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-facebook-workplace"></i> mdi
                        mdi-facebook-workplace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-factory"></i> mdi mdi-factory
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fan"></i> mdi mdi-fan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fan-off"></i> mdi mdi-fan-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fast-forward"></i> mdi
                        mdi-fast-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fast-forward-outline"></i> mdi
                        mdi-fast-forward-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fax"></i> mdi mdi-fax
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-feather"></i> mdi mdi-feather
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-feature-search"></i> mdi
                        mdi-feature-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-feature-search-outline"></i> mdi
                        mdi-feature-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fedora"></i> mdi mdi-fedora
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ferry"></i> mdi mdi-ferry
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file"></i> mdi mdi-file
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-account"></i> mdi
                        mdi-file-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-alert"></i> mdi
                        mdi-file-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-alert-outline"></i> mdi
                        mdi-file-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cabinet"></i> mdi
                        mdi-file-cabinet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-chart"></i> mdi
                        mdi-file-chart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-check"></i> mdi
                        mdi-file-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-cloud"></i> mdi
                        mdi-file-cloud
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-compare"></i> mdi
                        mdi-file-compare
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-delimited"></i> mdi
                        mdi-file-delimited
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document"></i> mdi
                        mdi-file-document
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box"></i> mdi
                        mdi-file-document-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-multiple"></i>{" "}
                        mdi mdi-file-document-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-multiple-outline"></i>{" "}
                        mdi mdi-file-document-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-box-outline"></i>{" "}
                        mdi mdi-file-document-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-document-outline"></i> mdi
                        mdi-file-document-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-download"></i> mdi
                        mdi-file-download
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-download-outline"></i> mdi
                        mdi-file-download-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-excel"></i> mdi
                        mdi-file-excel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-excel-box"></i> mdi
                        mdi-file-excel-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-export"></i> mdi
                        mdi-file-export
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-find"></i> mdi mdi-file-find
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-hidden"></i> mdi
                        mdi-file-hidden
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-image"></i> mdi
                        mdi-file-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-import"></i> mdi
                        mdi-file-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-lock"></i> mdi mdi-file-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-move"></i> mdi mdi-file-move
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-multiple"></i> mdi
                        mdi-file-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-music"></i> mdi
                        mdi-file-music
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-outline"></i> mdi
                        mdi-file-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-pdf"></i> mdi mdi-file-pdf
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-pdf-box"></i> mdi
                        mdi-file-pdf-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-percent"></i> mdi
                        mdi-file-percent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-plus"></i> mdi mdi-file-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-powerpoint"></i> mdi
                        mdi-file-powerpoint
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-powerpoint-box"></i> mdi
                        mdi-file-powerpoint-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-presentation-box"></i> mdi
                        mdi-file-presentation-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-question"></i> mdi
                        mdi-file-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-replace"></i> mdi
                        mdi-file-replace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-replace-outline"></i> mdi
                        mdi-file-replace-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-restore"></i> mdi
                        mdi-file-restore
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-send"></i> mdi mdi-file-send
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-tree"></i> mdi mdi-file-tree
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-undo"></i> mdi mdi-file-undo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-upload"></i> mdi
                        mdi-file-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-upload-outline"></i> mdi
                        mdi-file-upload-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-video"></i> mdi
                        mdi-file-video
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-word"></i> mdi mdi-file-word
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-word-box"></i> mdi
                        mdi-file-word-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-file-xml"></i> mdi mdi-file-xml
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-film"></i> mdi mdi-film
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filmstrip"></i> mdi mdi-filmstrip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filmstrip-off"></i> mdi
                        mdi-filmstrip-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter"></i> mdi mdi-filter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-outline"></i> mdi
                        mdi-filter-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-remove"></i> mdi
                        mdi-filter-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-remove-outline"></i> mdi
                        mdi-filter-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-filter-variant"></i> mdi
                        mdi-filter-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-finance"></i> mdi mdi-finance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-find-replace"></i> mdi
                        mdi-find-replace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fingerprint"></i> mdi
                        mdi-fingerprint
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire"></i> mdi mdi-fire
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire-truck"></i> mdi
                        mdi-fire-truck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fire-truck"></i> mdi
                        mdi-fire-truck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-firebase"></i> mdi mdi-firebase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-firefox"></i> mdi mdi-firefox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fish"></i> mdi mdi-fish
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag"></i> mdi mdi-flag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-checkered"></i> mdi
                        mdi-flag-checkered
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-outline"></i> mdi
                        mdi-flag-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-triangle"></i> mdi
                        mdi-flag-triangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-variant"></i> mdi
                        mdi-flag-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flag-variant-outline"></i> mdi
                        mdi-flag-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash"></i> mdi mdi-flash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-auto"></i> mdi
                        mdi-flash-auto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-circle"></i> mdi
                        mdi-flash-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-off"></i> mdi mdi-flash-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-outline"></i> mdi
                        mdi-flash-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flash-red-eye"></i> mdi
                        mdi-flash-red-eye
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flashlight"></i> mdi
                        mdi-flashlight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flashlight-off"></i> mdi
                        mdi-flashlight-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flask"></i> mdi mdi-flask
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flask-empty"></i> mdi
                        mdi-flask-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flask-empty-outline"></i> mdi
                        mdi-flask-empty-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flask-outline"></i> mdi
                        mdi-flask-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flattr"></i> mdi mdi-flattr
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flip-to-back"></i> mdi
                        mdi-flip-to-back
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flip-to-front"></i> mdi
                        mdi-flip-to-front
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-floor-lamp"></i> mdi
                        mdi-floor-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-floor-plan"></i> mdi
                        mdi-floor-plan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-floppy"></i> mdi mdi-floppy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-floppy-variant"></i> mdi
                        mdi-floppy-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flower"></i> mdi mdi-flower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flower-outline"></i> mdi
                        mdi-flower-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flower-tulip"></i> mdi
                        mdi-flower-tulip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-flower-tulip-outline"></i> mdi
                        mdi-flower-tulip-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder"></i> mdi mdi-folder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-account"></i> mdi
                        mdi-folder-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-clock"></i> mdi
                        mdi-folder-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-clock-outline"></i> mdi
                        mdi-folder-clock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-download"></i> mdi
                        mdi-folder-download
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-edit"></i> mdi
                        mdi-folder-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-google-drive"></i> mdi
                        mdi-folder-google-drive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-image"></i> mdi
                        mdi-folder-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-key"></i> mdi
                        mdi-folder-key
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-lock"></i> mdi
                        mdi-folder-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-lock-open"></i> mdi
                        mdi-folder-lock-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-move"></i> mdi
                        mdi-folder-move
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-multiple"></i> mdi
                        mdi-folder-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-multiple-image"></i> mdi
                        mdi-folder-multiple-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-multiple-outline"></i> mdi
                        mdi-folder-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-open"></i> mdi
                        mdi-folder-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-outline"></i> mdi
                        mdi-folder-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-plus"></i> mdi
                        mdi-folder-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-remove"></i> mdi
                        mdi-folder-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-search"></i> mdi
                        mdi-folder-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-search-outline"></i> mdi
                        mdi-folder-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-star"></i> mdi
                        mdi-folder-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-upload"></i> mdi
                        mdi-folder-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-font-awesome"></i> mdi
                        mdi-font-awesome
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food"></i> mdi mdi-food
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food-apple"></i> mdi
                        mdi-food-apple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food-croissant"></i> mdi
                        mdi-food-croissant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food-fork-drink"></i> mdi
                        mdi-food-fork-drink
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food-off"></i> mdi mdi-food-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-food-variant"></i> mdi
                        mdi-food-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-football"></i> mdi mdi-football
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-football-australian"></i> mdi
                        mdi-football-australian
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-football-helmet"></i> mdi
                        mdi-football-helmet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-forklift"></i> mdi mdi-forklift
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-bottom"></i> mdi
                        mdi-format-align-bottom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-center"></i> mdi
                        mdi-format-align-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-justify"></i> mdi
                        mdi-format-align-justify
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-left"></i> mdi
                        mdi-format-align-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-middle"></i> mdi
                        mdi-format-align-middle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-right"></i> mdi
                        mdi-format-align-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-align-top"></i> mdi
                        mdi-format-align-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-annotation-minus"></i> mdi
                        mdi-format-annotation-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-annotation-plus"></i> mdi
                        mdi-format-annotation-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-bold"></i> mdi
                        mdi-format-bold
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-clear"></i> mdi
                        mdi-format-clear
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-color-fill"></i> mdi
                        mdi-format-color-fill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-color-text"></i> mdi
                        mdi-format-color-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-columns"></i> mdi
                        mdi-format-columns
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-float-center"></i> mdi
                        mdi-format-float-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-float-left"></i> mdi
                        mdi-format-float-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-float-none"></i> mdi
                        mdi-format-float-none
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-float-right"></i> mdi
                        mdi-format-float-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-font"></i> mdi
                        mdi-format-font
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-font-size-decrease"></i>{" "}
                        mdi mdi-format-font-size-decrease
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-font-size-increase"></i>{" "}
                        mdi mdi-format-font-size-increase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-1"></i> mdi
                        mdi-format-header-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-2"></i> mdi
                        mdi-format-header-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-3"></i> mdi
                        mdi-format-header-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-4"></i> mdi
                        mdi-format-header-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-5"></i> mdi
                        mdi-format-header-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-6"></i> mdi
                        mdi-format-header-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-decrease"></i> mdi
                        mdi-format-header-decrease
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-equal"></i> mdi
                        mdi-format-header-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-increase"></i> mdi
                        mdi-format-header-increase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-header-pound"></i> mdi
                        mdi-format-header-pound
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-horizontal-align-center"></i>{" "}
                        mdi mdi-format-horizontal-align-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-horizontal-align-left"></i>{" "}
                        mdi mdi-format-horizontal-align-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-horizontal-align-right"></i>{" "}
                        mdi mdi-format-horizontal-align-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-indent-decrease"></i> mdi
                        mdi-format-indent-decrease
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-indent-increase"></i> mdi
                        mdi-format-indent-increase
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-italic"></i> mdi
                        mdi-format-italic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-letter-case"></i> mdi
                        mdi-format-letter-case
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-letter-case-lower"></i> mdi
                        mdi-format-letter-case-lower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-letter-case-upper"></i> mdi
                        mdi-format-letter-case-upper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-line-spacing"></i> mdi
                        mdi-format-line-spacing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-line-style"></i> mdi
                        mdi-format-line-style
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-line-weight"></i> mdi
                        mdi-format-line-weight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-bulleted"></i> mdi
                        mdi-format-list-bulleted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-bulleted-type"></i>{" "}
                        mdi mdi-format-list-bulleted-type
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-checkbox"></i> mdi
                        mdi-format-list-checkbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-checks"></i> mdi
                        mdi-format-list-checks
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-list-numbered"></i> mdi
                        mdi-format-list-numbered
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-page-break"></i> mdi
                        mdi-format-page-break
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-paint"></i> mdi
                        mdi-format-paint
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-paragraph"></i> mdi
                        mdi-format-paragraph
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-pilcrow"></i> mdi
                        mdi-format-pilcrow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-quote-close"></i> mdi
                        mdi-format-quote-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-quote-open"></i> mdi
                        mdi-format-quote-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-rotate-90"></i> mdi
                        mdi-format-rotate-90
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-section"></i> mdi
                        mdi-format-section
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-size"></i> mdi
                        mdi-format-size
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-strikethrough"></i> mdi
                        mdi-format-strikethrough
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-strikethrough-variant"></i>{" "}
                        mdi mdi-format-strikethrough-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-subscript"></i> mdi
                        mdi-format-subscript
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-superscript"></i> mdi
                        mdi-format-superscript
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-text"></i> mdi
                        mdi-format-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-textdirection-l-to-r"></i>{" "}
                        mdi mdi-format-textdirection-l-to-r
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-textdirection-r-to-l"></i>{" "}
                        mdi mdi-format-textdirection-r-to-l
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-title"></i> mdi
                        mdi-format-title
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-underline"></i> mdi
                        mdi-format-underline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-vertical-align-bottom"></i>{" "}
                        mdi mdi-format-vertical-align-bottom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-vertical-align-center"></i>{" "}
                        mdi mdi-format-vertical-align-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-vertical-align-top"></i>{" "}
                        mdi mdi-format-vertical-align-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-wrap-inline"></i> mdi
                        mdi-format-wrap-inline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-wrap-square"></i> mdi
                        mdi-format-wrap-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-wrap-tight"></i> mdi
                        mdi-format-wrap-tight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-format-wrap-top-bottom"></i> mdi
                        mdi-format-wrap-top-bottom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-forum"></i> mdi mdi-forum
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-forum-outline"></i> mdi
                        mdi-forum-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-forward"></i> mdi mdi-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fountain"></i> mdi mdi-fountain
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-foursquare"></i> mdi
                        mdi-foursquare
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-freebsd"></i> mdi mdi-freebsd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fridge-outline"></i> mdi
                        mdi-fridge-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fridge"></i> mdi mdi-fridge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fridge-bottom"></i> mdi
                        mdi-fridge-bottom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fridge-top"></i> mdi
                        mdi-fridge-top
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fuel"></i> mdi mdi-fuel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fullscreen"></i> mdi
                        mdi-fullscreen
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-fullscreen-exit"></i> mdi
                        mdi-fullscreen-exit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-function"></i> mdi mdi-function
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-function-variant"></i> mdi
                        mdi-function-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad"></i> mdi mdi-gamepad
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gamepad-variant"></i> mdi
                        mdi-gamepad-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-garage"></i> mdi mdi-garage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-garage-alert"></i> mdi
                        mdi-garage-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-garage-open"></i> mdi
                        mdi-garage-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gas-cylinder"></i> mdi
                        mdi-gas-cylinder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gas-station"></i> mdi
                        mdi-gas-station
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate"></i> mdi mdi-gate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-and"></i> mdi mdi-gate-and
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-nand"></i> mdi mdi-gate-nand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-nor"></i> mdi mdi-gate-nor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-not"></i> mdi mdi-gate-not
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-or"></i> mdi mdi-gate-or
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-xnor"></i> mdi mdi-gate-xnor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gate-xor"></i> mdi mdi-gate-xor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gauge"></i> mdi mdi-gauge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gauge-empty"></i> mdi
                        mdi-gauge-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gauge-full"></i> mdi
                        mdi-gauge-full
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gauge-low"></i> mdi mdi-gauge-low
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gavel"></i> mdi mdi-gavel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gender-female"></i> mdi
                        mdi-gender-female
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gender-male"></i> mdi
                        mdi-gender-male
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gender-male-female"></i> mdi
                        mdi-gender-male-female
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gender-transgender"></i> mdi
                        mdi-gender-transgender
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gentoo"></i> mdi mdi-gentoo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture"></i> mdi mdi-gesture
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-double-tap"></i> mdi
                        mdi-gesture-double-tap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-pinch"></i> mdi
                        mdi-gesture-pinch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-spread"></i> mdi
                        mdi-gesture-spread
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-swipe-down"></i> mdi
                        mdi-gesture-swipe-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-swipe-horizontal"></i> mdi
                        mdi-gesture-swipe-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-swipe-left"></i> mdi
                        mdi-gesture-swipe-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-swipe-right"></i> mdi
                        mdi-gesture-swipe-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-swipe-up"></i> mdi
                        mdi-gesture-swipe-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-swipe-vertical"></i> mdi
                        mdi-gesture-swipe-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-tap"></i> mdi
                        mdi-gesture-tap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-two-double-tap"></i> mdi
                        mdi-gesture-two-double-tap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gesture-two-tap"></i> mdi
                        mdi-gesture-two-tap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ghost"></i> mdi mdi-ghost
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ghost-off"></i> mdi mdi-ghost-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gift-outline"></i> mdi
                        mdi-gift-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-git"></i> mdi mdi-git
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-github-box"></i> mdi
                        mdi-github-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-github-circle"></i> mdi
                        mdi-github-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-github-face"></i> mdi
                        mdi-github-face
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-cocktail"></i> mdi
                        mdi-glass-cocktail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-flute"></i> mdi
                        mdi-glass-flute
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-mug"></i> mdi mdi-glass-mug
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-stange"></i> mdi
                        mdi-glass-stange
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-tulip"></i> mdi
                        mdi-glass-tulip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glass-wine"></i> mdi
                        mdi-glass-wine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glassdoor"></i> mdi mdi-glassdoor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-glasses"></i> mdi mdi-glasses
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-globe-model"></i> mdi
                        mdi-globe-model
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gmail"></i> mdi mdi-gmail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gnome"></i> mdi mdi-gnome
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-golf"></i> mdi mdi-golf
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gondola"></i> mdi mdi-gondola
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google"></i> mdi mdi-google
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-credit-card-wireless"></i> mdi
                        mdi-credit-card-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-analytics"></i> mdi
                        mdi-google-analytics
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-assistant"></i> mdi
                        mdi-google-assistant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-cardboard"></i> mdi
                        mdi-google-cardboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-chrome"></i> mdi
                        mdi-google-chrome
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-circles"></i> mdi
                        mdi-google-circles
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-circles-communities"></i>{" "}
                        mdi mdi-google-circles-communities
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-circles-extended"></i> mdi
                        mdi-google-circles-extended
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-circles-group"></i> mdi
                        mdi-google-circles-group
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-controller"></i> mdi
                        mdi-google-controller
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-controller-off"></i> mdi
                        mdi-google-controller-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-drive"></i> mdi
                        mdi-google-drive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-earth"></i> mdi
                        mdi-google-earth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-fit"></i> mdi
                        mdi-google-fit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-glass"></i> mdi
                        mdi-google-glass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-hangouts"></i> mdi
                        mdi-google-hangouts
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-home"></i> mdi
                        mdi-google-home
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-keep"></i> mdi
                        mdi-google-keep
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-lens"></i> mdi
                        mdi-google-lens
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-maps"></i> mdi
                        mdi-google-maps
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-nearby"></i> mdi
                        mdi-google-nearby
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-pages"></i> mdi
                        mdi-google-pages
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-photos"></i> mdi
                        mdi-google-photos
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-physical-web"></i> mdi
                        mdi-google-physical-web
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-play"></i> mdi
                        mdi-google-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-plus"></i> mdi
                        mdi-google-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-plus-box"></i> mdi
                        mdi-google-plus-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-spreadsheet"></i> mdi
                        mdi-google-spreadsheet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-translate"></i> mdi
                        mdi-google-translate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-google-classNameroom"></i> mdi
                        mdi-google-classNameroom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-expansion-card"></i> mdi
                        mdi-expansion-card
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-gradient"></i> mdi mdi-gradient
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-graphql"></i> mdi mdi-graphql
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-grease-pencil"></i> mdi
                        mdi-grease-pencil
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-greater-than"></i> mdi
                        mdi-greater-than
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-greater-than-or-equal"></i> mdi
                        mdi-greater-than-or-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-grid"></i> mdi mdi-grid
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-grid-large"></i> mdi
                        mdi-grid-large
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-grid-off"></i> mdi mdi-grid-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-group"></i> mdi mdi-group
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-guitar-acoustic"></i> mdi
                        mdi-guitar-acoustic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-guitar-electric"></i> mdi
                        mdi-guitar-electric
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-guitar-pick"></i> mdi
                        mdi-guitar-pick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-guitar-pick-outline"></i> mdi
                        mdi-guitar-pick-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-guy-fawkes-mask"></i> mdi
                        mdi-guy-fawkes-mask
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hackernews"></i> mdi
                        mdi-hackernews
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hail"></i> mdi mdi-hail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hamburger"></i> mdi mdi-hamburger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hammer"></i> mdi mdi-hammer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand"></i> mdi mdi-hand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-okay"></i> mdi mdi-hand-okay
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-peace"></i> mdi
                        mdi-hand-peace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-peace-variant"></i> mdi
                        mdi-hand-peace-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-pointing-down"></i> mdi
                        mdi-hand-pointing-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-pointing-left"></i> mdi
                        mdi-hand-pointing-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-pointing-right"></i> mdi
                        mdi-hand-pointing-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hand-pointing-up"></i> mdi
                        mdi-hand-pointing-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hanger"></i> mdi mdi-hanger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hard-hat"></i> mdi mdi-hard-hat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-harddisk"></i> mdi mdi-harddisk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headphones"></i> mdi
                        mdi-headphones
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headphones-bluetooth"></i> mdi
                        mdi-headphones-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headphones-box"></i> mdi
                        mdi-headphones-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headphones-off"></i> mdi
                        mdi-headphones-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headphones-settings"></i> mdi
                        mdi-headphones-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headset"></i> mdi mdi-headset
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headset-dock"></i> mdi
                        mdi-headset-dock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-headset-off"></i> mdi
                        mdi-headset-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart"></i> mdi mdi-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-box"></i> mdi mdi-heart-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-box-outline"></i> mdi
                        mdi-heart-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-broken"></i> mdi
                        mdi-heart-broken
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-circle"></i> mdi
                        mdi-heart-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-circle-outline"></i> mdi
                        mdi-heart-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-half"></i> mdi
                        mdi-heart-half
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-half-full"></i> mdi
                        mdi-heart-half-full
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-half-outline"></i> mdi
                        mdi-heart-half-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-multiple"></i> mdi
                        mdi-heart-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-multiple-outline"></i> mdi
                        mdi-heart-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-off"></i> mdi mdi-heart-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-outline"></i> mdi
                        mdi-heart-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-heart-pulse"></i> mdi
                        mdi-heart-pulse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-helicopter"></i> mdi
                        mdi-helicopter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help"></i> mdi mdi-help
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-box"></i> mdi mdi-help-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-circle"></i> mdi
                        mdi-help-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-circle-outline"></i> mdi
                        mdi-help-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-help-network"></i> mdi
                        mdi-help-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon"></i> mdi mdi-hexagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-multiple"></i> mdi
                        mdi-hexagon-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-outline"></i> mdi
                        mdi-hexagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-slice-1"></i> mdi
                        mdi-hexagon-slice-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-slice-2"></i> mdi
                        mdi-hexagon-slice-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-slice-3"></i> mdi
                        mdi-hexagon-slice-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-slice-4"></i> mdi
                        mdi-hexagon-slice-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-slice-5"></i> mdi
                        mdi-hexagon-slice-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagon-slice-6"></i> mdi
                        mdi-hexagon-slice-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagram"></i> mdi mdi-hexagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hexagram-outline"></i> mdi
                        mdi-hexagram-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-high-definition"></i> mdi
                        mdi-high-definition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-high-definition-box"></i> mdi
                        mdi-high-definition-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-highway"></i> mdi mdi-highway
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hinduism"></i> mdi mdi-hinduism
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-history"></i> mdi mdi-history
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hockey-puck"></i> mdi
                        mdi-hockey-puck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hockey-sticks"></i> mdi
                        mdi-hockey-sticks
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hololens"></i> mdi mdi-hololens
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home"></i> mdi mdi-home
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-account"></i> mdi
                        mdi-home-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-alert"></i> mdi
                        mdi-home-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-assistant"></i> mdi
                        mdi-home-assistant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-automation"></i> mdi
                        mdi-home-automation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-circle"></i> mdi
                        mdi-home-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-currency-usd"></i> mdi
                        mdi-home-currency-usd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-heart"></i> mdi
                        mdi-home-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-lock"></i> mdi mdi-home-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-lock-open"></i> mdi
                        mdi-home-lock-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-map-marker"></i> mdi
                        mdi-home-map-marker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-minus"></i> mdi
                        mdi-home-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-modern"></i> mdi
                        mdi-home-modern
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-outline"></i> mdi
                        mdi-home-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-plus"></i> mdi mdi-home-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-home-variant"></i> mdi
                        mdi-home-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hook"></i> mdi mdi-hook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hook-off"></i> mdi mdi-hook-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hops"></i> mdi mdi-hops
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-horseshoe"></i> mdi mdi-horseshoe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hospital-box"></i> mdi
                        mdi-hospital-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hospital-building"></i> mdi
                        mdi-hospital-building
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hospital-marker"></i> mdi
                        mdi-hospital-marker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hot-tub"></i> mdi mdi-hot-tub
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hotel"></i> mdi mdi-hotel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-houzz"></i> mdi mdi-houzz
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-houzz-box"></i> mdi mdi-houzz-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-hulu"></i> mdi mdi-hulu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human"></i> mdi mdi-human
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-child"></i> mdi
                        mdi-human-child
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-female"></i> mdi
                        mdi-human-female
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-female-boy"></i> mdi
                        mdi-human-female-boy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-female-female"></i> mdi
                        mdi-human-female-female
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-female-girl"></i> mdi
                        mdi-human-female-girl
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-greeting"></i> mdi
                        mdi-human-greeting
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-handsdown"></i> mdi
                        mdi-human-handsdown
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-handsup"></i> mdi
                        mdi-human-handsup
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male"></i> mdi
                        mdi-human-male
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male-boy"></i> mdi
                        mdi-human-male-boy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male-female"></i> mdi
                        mdi-human-male-female
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male-girl"></i> mdi
                        mdi-human-male-girl
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-male-male"></i> mdi
                        mdi-human-male-male
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-human-pregnant"></i> mdi
                        mdi-human-pregnant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-humble-bundle"></i> mdi
                        mdi-humble-bundle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ice-cream"></i> mdi mdi-ice-cream
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image"></i> mdi mdi-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-album"></i> mdi
                        mdi-image-album
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-area"></i> mdi
                        mdi-image-area
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-area-close"></i> mdi
                        mdi-image-area-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-broken"></i> mdi
                        mdi-image-broken
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-broken-variant"></i> mdi
                        mdi-image-broken-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter"></i> mdi
                        mdi-image-filter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-black-white"></i> mdi
                        mdi-image-filter-black-white
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-center-focus"></i>{" "}
                        mdi mdi-image-filter-center-focus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-center-focus-weak"></i>{" "}
                        mdi mdi-image-filter-center-focus-weak
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-drama"></i> mdi
                        mdi-image-filter-drama
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-frames"></i> mdi
                        mdi-image-filter-frames
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-hdr"></i> mdi
                        mdi-image-filter-hdr
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-none"></i> mdi
                        mdi-image-filter-none
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-tilt-shift"></i> mdi
                        mdi-image-filter-tilt-shift
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-filter-vintage"></i> mdi
                        mdi-image-filter-vintage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-move"></i> mdi
                        mdi-image-move
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-multiple"></i> mdi
                        mdi-image-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-off"></i> mdi mdi-image-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-outline"></i> mdi
                        mdi-image-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-plus"></i> mdi
                        mdi-image-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-search"></i> mdi
                        mdi-image-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-image-search-outline"></i> mdi
                        mdi-image-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-import"></i> mdi mdi-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-inbox"></i> mdi mdi-inbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-inbox-arrow-down"></i> mdi
                        mdi-inbox-arrow-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-inbox-arrow-up"></i> mdi
                        mdi-inbox-arrow-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-inbox-multiple"></i> mdi
                        mdi-inbox-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-incognito"></i> mdi mdi-incognito
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-infinity"></i> mdi mdi-infinity
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-information"></i> mdi
                        mdi-information
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-information-outline"></i> mdi
                        mdi-information-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-information-variant"></i> mdi
                        mdi-information-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-instagram"></i> mdi mdi-instagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-instapaper"></i> mdi
                        mdi-instapaper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-internet-explorer"></i> mdi
                        mdi-internet-explorer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-invert-colors"></i> mdi
                        mdi-invert-colors
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ip"></i> mdi mdi-ip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-islam"></i> mdi mdi-islam
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-itunes"></i> mdi mdi-itunes
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jeepney"></i> mdi mdi-jeepney
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jira"></i> mdi mdi-jira
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jquery"></i> mdi mdi-jquery
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-jsfiddle"></i> mdi mdi-jsfiddle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-json"></i> mdi mdi-json
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-judaism"></i> mdi mdi-judaism
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-karate"></i> mdi mdi-karate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keg"></i> mdi mdi-keg
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-kettle"></i> mdi mdi-kettle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key"></i> mdi mdi-key
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-change"></i> mdi
                        mdi-key-change
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-minus"></i> mdi mdi-key-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-plus"></i> mdi mdi-key-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-remove"></i> mdi
                        mdi-key-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-key-variant"></i> mdi
                        mdi-key-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard"></i> mdi mdi-keyboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-backspace"></i> mdi
                        mdi-keyboard-backspace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-caps"></i> mdi
                        mdi-keyboard-caps
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-close"></i> mdi
                        mdi-keyboard-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-off"></i> mdi
                        mdi-keyboard-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-outline"></i> mdi
                        mdi-keyboard-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-return"></i> mdi
                        mdi-keyboard-return
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-settings"></i> mdi
                        mdi-keyboard-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-settings-outline"></i>{" "}
                        mdi mdi-keyboard-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-tab"></i> mdi
                        mdi-keyboard-tab
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-keyboard-variant"></i> mdi
                        mdi-keyboard-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-kickstarter"></i> mdi
                        mdi-kickstarter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-knife"></i> mdi mdi-knife
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-knife-military"></i> mdi
                        mdi-knife-military
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-kodi"></i> mdi mdi-kodi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-label"></i> mdi mdi-label
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-label-off"></i> mdi mdi-label-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-label-off-outline"></i> mdi
                        mdi-label-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-label-outline"></i> mdi
                        mdi-label-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-label-variant"></i> mdi
                        mdi-label-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-label-variant-outline"></i> mdi
                        mdi-label-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ladybug"></i> mdi mdi-ladybug
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lambda"></i> mdi mdi-lambda
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lamp"></i> mdi mdi-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lan"></i> mdi mdi-lan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lan-connect"></i> mdi
                        mdi-lan-connect
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lan-disconnect"></i> mdi
                        mdi-lan-disconnect
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lan-pending"></i> mdi
                        mdi-lan-pending
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-c"></i> mdi
                        mdi-language-c
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-cpp"></i> mdi
                        mdi-language-cpp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-csharp"></i> mdi
                        mdi-language-csharp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-css3"></i> mdi
                        mdi-language-css3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-go"></i> mdi
                        mdi-language-go
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-html5"></i> mdi
                        mdi-language-html5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-java"></i> mdi
                        mdi-language-java
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-javascript"></i> mdi
                        mdi-language-javascript
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-lua"></i> mdi
                        mdi-language-lua
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-php"></i> mdi
                        mdi-language-php
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-python"></i> mdi
                        mdi-language-python
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-python-text"></i> mdi
                        mdi-language-python-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-r"></i> mdi
                        mdi-language-r
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-ruby-on-rails"></i> mdi
                        mdi-language-ruby-on-rails
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-swift"></i> mdi
                        mdi-language-swift
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-language-typescript"></i> mdi
                        mdi-language-typescript
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-laptop"></i> mdi mdi-laptop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-laptop-chromebook"></i> mdi
                        mdi-laptop-chromebook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-laptop-mac"></i> mdi
                        mdi-laptop-mac
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-laptop-off"></i> mdi
                        mdi-laptop-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-laptop-windows"></i> mdi
                        mdi-laptop-windows
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-laravel"></i> mdi mdi-laravel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lastfm"></i> mdi mdi-lastfm
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lastpass"></i> mdi mdi-lastpass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-launch"></i> mdi mdi-launch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lava-lamp"></i> mdi mdi-lava-lamp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers"></i> mdi mdi-layers
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-off"></i> mdi
                        mdi-layers-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-off-outline"></i> mdi
                        mdi-layers-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-layers-outline"></i> mdi
                        mdi-layers-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lead-pencil"></i> mdi
                        mdi-lead-pencil
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-leaf"></i> mdi mdi-leaf
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-off"></i> mdi mdi-led-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-on"></i> mdi mdi-led-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-outline"></i> mdi
                        mdi-led-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-strip"></i> mdi mdi-led-strip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-variant-off"></i> mdi
                        mdi-led-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-variant-on"></i> mdi
                        mdi-led-variant-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-led-variant-outline"></i> mdi
                        mdi-led-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-less-than"></i> mdi mdi-less-than
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-less-than-or-equal"></i> mdi
                        mdi-less-than-or-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-library"></i> mdi mdi-library
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-library-books"></i> mdi
                        mdi-library-books
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-library-music"></i> mdi
                        mdi-library-music
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-box-multiple"></i> mdi
                        mdi-plus-box-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lifebuoy"></i> mdi mdi-lifebuoy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-light-switch"></i> mdi
                        mdi-light-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lightbulb"></i> mdi mdi-lightbulb
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lightbulb-on"></i> mdi
                        mdi-lightbulb-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lightbulb-on-outline"></i> mdi
                        mdi-lightbulb-on-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lightbulb-outline"></i> mdi
                        mdi-lightbulb-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lighthouse"></i> mdi
                        mdi-lighthouse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lighthouse-on"></i> mdi
                        mdi-lighthouse-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-variant"></i> mdi
                        mdi-link-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-link-variant-off"></i> mdi
                        mdi-link-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-linkedin"></i> mdi mdi-linkedin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-linkedin-box"></i> mdi
                        mdi-linkedin-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-linux"></i> mdi mdi-linux
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-linux-mint"></i> mdi
                        mdi-linux-mint
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-litecoin"></i> mdi mdi-litecoin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-loading"></i> mdi mdi-loading
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock"></i> mdi mdi-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-alert"></i> mdi
                        mdi-lock-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-clock"></i> mdi
                        mdi-lock-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-open"></i> mdi mdi-lock-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-open-outline"></i> mdi
                        mdi-lock-open-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-outline"></i> mdi
                        mdi-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-pattern"></i> mdi
                        mdi-lock-pattern
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-plus"></i> mdi mdi-lock-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-question"></i> mdi
                        mdi-lock-question
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-reset"></i> mdi
                        mdi-lock-reset
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lock-smart"></i> mdi
                        mdi-lock-smart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-locker"></i> mdi mdi-locker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-locker-multiple"></i> mdi
                        mdi-locker-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-login-variant"></i> mdi
                        mdi-login-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-logout-variant"></i> mdi
                        mdi-logout-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-looks"></i> mdi mdi-looks
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-folder-zip"></i> mdi
                        mdi-folder-zip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-loupe"></i> mdi mdi-loupe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lumx"></i> mdi mdi-lumx
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-lyft"></i> mdi mdi-lyft
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnet"></i> mdi mdi-magnet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnet-on"></i> mdi mdi-magnet-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify"></i> mdi mdi-magnify
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-close"></i> mdi
                        mdi-magnify-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-minus"></i> mdi
                        mdi-magnify-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-minus-cursor"></i> mdi
                        mdi-magnify-minus-cursor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-minus-outline"></i> mdi
                        mdi-magnify-minus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-plus"></i> mdi
                        mdi-magnify-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-plus-cursor"></i> mdi
                        mdi-magnify-plus-cursor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-magnify-plus-outline"></i> mdi
                        mdi-magnify-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mail-ru"></i> mdi mdi-mail-ru
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mailbox"></i> mdi mdi-mailbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map"></i> mdi mdi-map
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-legend"></i> mdi
                        mdi-map-legend
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker"></i> mdi
                        mdi-map-marker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-circle"></i> mdi
                        mdi-map-marker-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-distance"></i> mdi
                        mdi-map-marker-distance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-minus"></i> mdi
                        mdi-map-marker-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-multiple"></i> mdi
                        mdi-map-marker-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-off"></i> mdi
                        mdi-map-marker-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-outline"></i> mdi
                        mdi-map-marker-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-plus"></i> mdi
                        mdi-map-marker-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-marker-radius"></i> mdi
                        mdi-map-marker-radius
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-minus"></i> mdi mdi-map-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-outline"></i> mdi
                        mdi-map-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-plus"></i> mdi mdi-map-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-search"></i> mdi
                        mdi-map-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-map-search-outline"></i> mdi
                        mdi-map-search-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-margin"></i> mdi mdi-margin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-markdown"></i> mdi mdi-markdown
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-marker"></i> mdi mdi-marker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-marker-check"></i> mdi
                        mdi-marker-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mastodon"></i> mdi mdi-mastodon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mastodon-variant"></i> mdi
                        mdi-mastodon-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-material-design"></i> mdi
                        mdi-material-design
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-material-ui"></i> mdi
                        mdi-material-ui
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-math-compass"></i> mdi
                        mdi-math-compass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-matrix"></i> mdi mdi-matrix
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-maxcdn"></i> mdi mdi-maxcdn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-medal"></i> mdi mdi-medal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-medical-bag"></i> mdi
                        mdi-medical-bag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-medium"></i> mdi mdi-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-meetup"></i> mdi mdi-meetup
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-memory"></i> mdi mdi-memory
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu"></i> mdi mdi-menu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-down"></i> mdi mdi-menu-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-down-outline"></i> mdi
                        mdi-menu-down-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-left"></i> mdi mdi-menu-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-left-outline"></i> mdi
                        mdi-menu-left-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-right"></i> mdi
                        mdi-menu-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-right-outline"></i> mdi
                        mdi-menu-right-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-swap"></i> mdi mdi-menu-swap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-swap-outline"></i> mdi
                        mdi-menu-swap-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-up"></i> mdi mdi-menu-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-menu-up-outline"></i> mdi
                        mdi-menu-up-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message"></i> mdi mdi-message
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-alert"></i> mdi
                        mdi-message-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-alert-outline"></i> mdi
                        mdi-message-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-bulleted"></i> mdi
                        mdi-message-bulleted
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-bulleted-off"></i> mdi
                        mdi-message-bulleted-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-draw"></i> mdi
                        mdi-message-draw
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-image"></i> mdi
                        mdi-message-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-outline"></i> mdi
                        mdi-message-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-plus"></i> mdi
                        mdi-message-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-processing"></i> mdi
                        mdi-message-processing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-reply"></i> mdi
                        mdi-message-reply
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-reply-text"></i> mdi
                        mdi-message-reply-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-settings"></i> mdi
                        mdi-message-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-settings-variant"></i> mdi
                        mdi-message-settings-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-text"></i> mdi
                        mdi-message-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-text-outline"></i> mdi
                        mdi-message-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-message-video"></i> mdi
                        mdi-message-video
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-meteor"></i> mdi mdi-meteor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-metronome"></i> mdi mdi-metronome
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-metronome-tick"></i> mdi
                        mdi-metronome-tick
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-micro-sd"></i> mdi mdi-micro-sd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone"></i> mdi
                        mdi-microphone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-minus"></i> mdi
                        mdi-microphone-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-off"></i> mdi
                        mdi-microphone-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-outline"></i> mdi
                        mdi-microphone-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-plus"></i> mdi
                        mdi-microphone-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-settings"></i> mdi
                        mdi-microphone-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-variant"></i> mdi
                        mdi-microphone-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microphone-variant-off"></i> mdi
                        mdi-microphone-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microscope"></i> mdi
                        mdi-microscope
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microsoft"></i> mdi mdi-microsoft
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-microsoft-dynamics"></i> mdi
                        mdi-microsoft-dynamics
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-midi"></i> mdi mdi-midi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-midi-port"></i> mdi mdi-midi-port
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minecraft"></i> mdi mdi-minecraft
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mini-sd"></i> mdi mdi-mini-sd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minidisc"></i> mdi mdi-minidisc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus"></i> mdi mdi-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-box"></i> mdi mdi-minus-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-box-outline"></i> mdi
                        mdi-minus-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-circle"></i> mdi
                        mdi-minus-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-circle-outline"></i> mdi
                        mdi-minus-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-minus-network"></i> mdi
                        mdi-minus-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mixcloud"></i> mdi mdi-mixcloud
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mixed-reality"></i> mdi
                        mdi-mixed-reality
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mixer"></i> mdi mdi-mixer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor"></i> mdi mdi-monitor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-cellphone"></i> mdi
                        mdi-monitor-cellphone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-cellphone-star"></i> mdi
                        mdi-monitor-cellphone-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-dashboard"></i> mdi
                        mdi-monitor-dashboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-monitor-multiple"></i> mdi
                        mdi-monitor-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-more"></i> mdi mdi-more
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mouse"></i> mdi mdi-mouse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mouse-bluetooth"></i> mdi
                        mdi-mouse-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mouse-off"></i> mdi mdi-mouse-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mouse-variant"></i> mdi
                        mdi-mouse-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mouse-variant-off"></i> mdi
                        mdi-mouse-variant-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-move-resize"></i> mdi
                        mdi-move-resize
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-move-resize-variant"></i> mdi
                        mdi-move-resize-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie"></i> mdi mdi-movie
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-movie-roll"></i> mdi
                        mdi-movie-roll
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-muffin"></i> mdi mdi-muffin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-multiplication"></i> mdi
                        mdi-multiplication
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-multiplication-box"></i> mdi
                        mdi-multiplication-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mushroom"></i> mdi mdi-mushroom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-mushroom-outline"></i> mdi
                        mdi-mushroom-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music"></i> mdi mdi-music
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-box"></i> mdi mdi-music-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-box-outline"></i> mdi
                        mdi-music-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-circle"></i> mdi
                        mdi-music-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-circle-outline"></i> mdi
                        mdi-music-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note"></i> mdi
                        mdi-music-note
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-bluetooth"></i> mdi
                        mdi-music-note-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-bluetooth-off"></i> mdi
                        mdi-music-note-bluetooth-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-eighth"></i> mdi
                        mdi-music-note-eighth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-half"></i> mdi
                        mdi-music-note-half
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-off"></i> mdi
                        mdi-music-note-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-quarter"></i> mdi
                        mdi-music-note-quarter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-sixteenth"></i> mdi
                        mdi-music-note-sixteenth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-note-whole"></i> mdi
                        mdi-music-note-whole
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-music-off"></i> mdi mdi-music-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nas"></i> mdi mdi-nas
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nativescript"></i> mdi
                        mdi-nativescript
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nature"></i> mdi mdi-nature
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nature-people"></i> mdi
                        mdi-nature-people
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-navigation"></i> mdi
                        mdi-navigation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-near-me"></i> mdi mdi-near-me
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-needle"></i> mdi mdi-needle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-netflix"></i> mdi mdi-netflix
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network"></i> mdi mdi-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-1"></i> mdi
                        mdi-network-strength-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-1-alert"></i> mdi
                        mdi-network-strength-1-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-2"></i> mdi
                        mdi-network-strength-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-2-alert"></i> mdi
                        mdi-network-strength-2-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-3"></i> mdi
                        mdi-network-strength-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-3-alert"></i> mdi
                        mdi-network-strength-3-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-4"></i> mdi
                        mdi-network-strength-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-4-alert"></i> mdi
                        mdi-network-strength-4-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-off"></i> mdi
                        mdi-network-strength-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-off-outline"></i>{" "}
                        mdi mdi-network-strength-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-network-strength-outline"></i> mdi
                        mdi-network-strength-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-new-box"></i> mdi mdi-new-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-newspaper"></i> mdi mdi-newspaper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nfc"></i> mdi mdi-nfc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nfc-tap"></i> mdi mdi-nfc-tap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nfc-variant"></i> mdi
                        mdi-nfc-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ninja"></i> mdi mdi-ninja
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nintendo-switch"></i> mdi
                        mdi-nintendo-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nodejs"></i> mdi mdi-nodejs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-not-equal"></i> mdi mdi-not-equal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-not-equal-variant"></i> mdi
                        mdi-not-equal-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note"></i> mdi mdi-note
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note-multiple"></i> mdi
                        mdi-note-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note-multiple-outline"></i> mdi
                        mdi-note-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note-outline"></i> mdi
                        mdi-note-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note-plus"></i> mdi mdi-note-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note-plus-outline"></i> mdi
                        mdi-note-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-note-text"></i> mdi mdi-note-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-notebook"></i> mdi mdi-notebook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-notification-clear-all"></i> mdi
                        mdi-notification-clear-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-npm"></i> mdi mdi-npm
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-npm-variant"></i> mdi
                        mdi-npm-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-npm-variant-outline"></i> mdi
                        mdi-npm-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nuke"></i> mdi mdi-nuke
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-null"></i> mdi mdi-null
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric"></i> mdi mdi-numeric
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0"></i> mdi mdi-numeric-0
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0-box"></i> mdi
                        mdi-numeric-0-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-0-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-0-box-outline"></i> mdi
                        mdi-numeric-0-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1"></i> mdi mdi-numeric-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1-box"></i> mdi
                        mdi-numeric-1-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-1-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-1-box-outline"></i> mdi
                        mdi-numeric-1-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2"></i> mdi mdi-numeric-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2-box"></i> mdi
                        mdi-numeric-2-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-2-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-2-box-outline"></i> mdi
                        mdi-numeric-2-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3"></i> mdi mdi-numeric-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3-box"></i> mdi
                        mdi-numeric-3-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-3-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-3-box-outline"></i> mdi
                        mdi-numeric-3-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4"></i> mdi mdi-numeric-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4-box"></i> mdi
                        mdi-numeric-4-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-4-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-4-box-outline"></i> mdi
                        mdi-numeric-4-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5"></i> mdi mdi-numeric-5
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5-box"></i> mdi
                        mdi-numeric-5-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-5-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-5-box-outline"></i> mdi
                        mdi-numeric-5-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6"></i> mdi mdi-numeric-6
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6-box"></i> mdi
                        mdi-numeric-6-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-6-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-6-box-outline"></i> mdi
                        mdi-numeric-6-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7"></i> mdi mdi-numeric-7
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7-box"></i> mdi
                        mdi-numeric-7-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-7-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-7-box-outline"></i> mdi
                        mdi-numeric-7-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8"></i> mdi mdi-numeric-8
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8-box"></i> mdi
                        mdi-numeric-8-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-8-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-8-box-outline"></i> mdi
                        mdi-numeric-8-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9"></i> mdi mdi-numeric-9
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-box"></i> mdi
                        mdi-numeric-9-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-9-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-box-outline"></i> mdi
                        mdi-numeric-9-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-plus-box"></i> mdi
                        mdi-numeric-9-plus-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-plus-box-multiple-outline"></i>{" "}
                        mdi mdi-numeric-9-plus-box-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-numeric-9-plus-box-outline"></i>{" "}
                        mdi mdi-numeric-9-plus-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nut"></i> mdi mdi-nut
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-nutrition"></i> mdi mdi-nutrition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-oar"></i> mdi mdi-oar
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-octagon"></i> mdi mdi-octagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-octagon-outline"></i> mdi
                        mdi-octagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-octagram"></i> mdi mdi-octagram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-octagram-outline"></i> mdi
                        mdi-octagram-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-odnoklassniki"></i> mdi
                        mdi-odnoklassniki
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-office"></i> mdi mdi-office
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-office-building"></i> mdi
                        mdi-office-building
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-oil"></i> mdi mdi-oil
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-oil-temperature"></i> mdi
                        mdi-oil-temperature
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-omega"></i> mdi mdi-omega
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-onedrive"></i> mdi mdi-onedrive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-onenote"></i> mdi mdi-onenote
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-onepassword"></i> mdi
                        mdi-onepassword
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-opacity"></i> mdi mdi-opacity
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-open-in-app"></i> mdi
                        mdi-open-in-app
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-open-in-new"></i> mdi
                        mdi-open-in-new
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-openid"></i> mdi mdi-openid
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-opera"></i> mdi mdi-opera
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-orbit"></i> mdi mdi-orbit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-origin"></i> mdi mdi-origin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ornament"></i> mdi mdi-ornament
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ornament-variant"></i> mdi
                        mdi-ornament-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-owl"></i> mdi mdi-owl
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-package"></i> mdi mdi-package
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-package-down"></i> mdi
                        mdi-package-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-package-up"></i> mdi
                        mdi-package-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-package-variant"></i> mdi
                        mdi-package-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-package-variant-closed"></i> mdi
                        mdi-package-variant-closed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-first"></i> mdi
                        mdi-page-first
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-last"></i> mdi mdi-page-last
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-layout-body"></i> mdi
                        mdi-page-layout-body
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-layout-footer"></i> mdi
                        mdi-page-layout-footer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-layout-header"></i> mdi
                        mdi-page-layout-header
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-layout-sidebar-left"></i> mdi
                        mdi-page-layout-sidebar-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-page-layout-sidebar-right"></i>{" "}
                        mdi mdi-page-layout-sidebar-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-palette"></i> mdi mdi-palette
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-palette-advanced"></i> mdi
                        mdi-palette-advanced
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-palette-swatch"></i> mdi
                        mdi-palette-swatch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-panda"></i> mdi mdi-panda
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pandora"></i> mdi mdi-pandora
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-panorama"></i> mdi mdi-panorama
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-panorama-fisheye"></i> mdi
                        mdi-panorama-fisheye
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-panorama-horizontal"></i> mdi
                        mdi-panorama-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-panorama-vertical"></i> mdi
                        mdi-panorama-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-panorama-wide-angle"></i> mdi
                        mdi-panorama-wide-angle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paper-cut-vertical"></i> mdi
                        mdi-paper-cut-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paperclip"></i> mdi mdi-paperclip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-parking"></i> mdi mdi-parking
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-passport"></i> mdi mdi-passport
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-patreon"></i> mdi mdi-patreon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pause"></i> mdi mdi-pause
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pause-circle"></i> mdi
                        mdi-pause-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pause-circle-outline"></i> mdi
                        mdi-pause-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pause-octagon"></i> mdi
                        mdi-pause-octagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pause-octagon-outline"></i> mdi
                        mdi-pause-octagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paw"></i> mdi mdi-paw
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paw-off"></i> mdi mdi-paw-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-paypal"></i> mdi mdi-paypal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-peace"></i> mdi mdi-peace
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pen"></i> mdi mdi-pen
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil"></i> mdi mdi-pencil
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-box"></i> mdi
                        mdi-pencil-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-box-outline"></i> mdi
                        mdi-pencil-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-circle"></i> mdi
                        mdi-pencil-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-circle-outline"></i> mdi
                        mdi-pencil-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-lock"></i> mdi
                        mdi-pencil-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pencil-off"></i> mdi
                        mdi-pencil-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pentagon"></i> mdi mdi-pentagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pentagon-outline"></i> mdi
                        mdi-pentagon-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-percent"></i> mdi mdi-percent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-periodic-table"></i> mdi
                        mdi-periodic-table
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-periodic-table-co2"></i> mdi
                        mdi-periodic-table-co2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-periscope"></i> mdi mdi-periscope
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pharmacy"></i> mdi mdi-pharmacy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone"></i> mdi mdi-phone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-bluetooth"></i> mdi
                        mdi-phone-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-classNameic"></i> mdi
                        mdi-phone-classNameic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-forward"></i> mdi
                        mdi-phone-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-hangup"></i> mdi
                        mdi-phone-hangup
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-in-talk"></i> mdi
                        mdi-phone-in-talk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-incoming"></i> mdi
                        mdi-phone-incoming
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-lock"></i> mdi
                        mdi-phone-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-log"></i> mdi mdi-phone-log
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-minus"></i> mdi
                        mdi-phone-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-missed"></i> mdi
                        mdi-phone-missed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-outgoing"></i> mdi
                        mdi-phone-outgoing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-paused"></i> mdi
                        mdi-phone-paused
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-plus"></i> mdi
                        mdi-phone-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-return"></i> mdi
                        mdi-phone-return
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-rotate-landscape"></i> mdi
                        mdi-phone-rotate-landscape
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-rotate-portrait"></i> mdi
                        mdi-phone-rotate-portrait
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-settings"></i> mdi
                        mdi-phone-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-phone-voip"></i> mdi
                        mdi-phone-voip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pi"></i> mdi mdi-pi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pi-box"></i> mdi mdi-pi-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-piano"></i> mdi mdi-piano
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pickaxe"></i> mdi mdi-pickaxe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pier"></i> mdi mdi-pier
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pier-crane"></i> mdi
                        mdi-pier-crane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pig"></i> mdi mdi-pig
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pill"></i> mdi mdi-pill
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pillar"></i> mdi mdi-pillar
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pin"></i> mdi mdi-pin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pin-off"></i> mdi mdi-pin-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pin-off-outline"></i> mdi
                        mdi-pin-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pin-outline"></i> mdi
                        mdi-pin-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pine-tree"></i> mdi mdi-pine-tree
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pine-tree-box"></i> mdi
                        mdi-pine-tree-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pinterest"></i> mdi mdi-pinterest
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pinterest-box"></i> mdi
                        mdi-pinterest-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pinwheel"></i> mdi mdi-pinwheel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pinwheel-outline"></i> mdi
                        mdi-pinwheel-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pipe"></i> mdi mdi-pipe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pipe-disconnected"></i> mdi
                        mdi-pipe-disconnected
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pipe-leak"></i> mdi mdi-pipe-leak
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pirate"></i> mdi mdi-pirate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pistol"></i> mdi mdi-pistol
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-piston"></i> mdi mdi-piston
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pizza"></i> mdi mdi-pizza
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-airplane"></i> mdi
                        mdi-shield-airplane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play"></i> mdi mdi-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-box-outline"></i> mdi
                        mdi-play-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-circle"></i> mdi
                        mdi-play-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-circle-outline"></i> mdi
                        mdi-play-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-network"></i> mdi
                        mdi-play-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-pause"></i> mdi
                        mdi-play-pause
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-protected-content"></i> mdi
                        mdi-play-protected-content
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-play-speed"></i> mdi
                        mdi-play-speed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-check"></i> mdi
                        mdi-playlist-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-edit"></i> mdi
                        mdi-playlist-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-minus"></i> mdi
                        mdi-playlist-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-play"></i> mdi
                        mdi-playlist-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-plus"></i> mdi
                        mdi-playlist-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playlist-remove"></i> mdi
                        mdi-playlist-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-playstation"></i> mdi
                        mdi-playstation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plex"></i> mdi mdi-plex
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus"></i> mdi mdi-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-box"></i> mdi mdi-plus-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-box-outline"></i> mdi
                        mdi-plus-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-circle"></i> mdi
                        mdi-plus-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-circle-multiple-outline"></i>{" "}
                        mdi mdi-plus-circle-multiple-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-circle-outline"></i> mdi
                        mdi-plus-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-minus"></i> mdi
                        mdi-plus-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-minus-box"></i> mdi
                        mdi-plus-minus-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-network"></i> mdi
                        mdi-plus-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-one"></i> mdi mdi-plus-one
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-plus-outline"></i> mdi
                        mdi-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pocket"></i> mdi mdi-pocket
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-podcast"></i> mdi mdi-podcast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pokeball"></i> mdi mdi-pokeball
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pokemon-go"></i> mdi
                        mdi-pokemon-go
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-poker-chip"></i> mdi
                        mdi-poker-chip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-polaroid"></i> mdi mdi-polaroid
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-poll"></i> mdi mdi-poll
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-poll-box"></i> mdi mdi-poll-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-polymer"></i> mdi mdi-polymer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pool"></i> mdi mdi-pool
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-popcorn"></i> mdi mdi-popcorn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pot"></i> mdi mdi-pot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pot-mix"></i> mdi mdi-pot-mix
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pound"></i> mdi mdi-pound
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pound-box"></i> mdi mdi-pound-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power"></i> mdi mdi-power
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-cycle"></i> mdi
                        mdi-power-cycle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-off"></i> mdi mdi-power-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-on"></i> mdi mdi-power-on
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-plug"></i> mdi
                        mdi-power-plug
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-plug-off"></i> mdi
                        mdi-power-plug-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-settings"></i> mdi
                        mdi-power-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-sleep"></i> mdi
                        mdi-power-sleep
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket"></i> mdi
                        mdi-power-socket
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-au"></i> mdi
                        mdi-power-socket-au
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-eu"></i> mdi
                        mdi-power-socket-eu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-uk"></i> mdi
                        mdi-power-socket-uk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-socket-us"></i> mdi
                        mdi-power-socket-us
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-power-standby"></i> mdi
                        mdi-power-standby
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-powershell"></i> mdi
                        mdi-powershell
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-prescription"></i> mdi
                        mdi-prescription
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-presentation"></i> mdi
                        mdi-presentation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-presentation-play"></i> mdi
                        mdi-presentation-play
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer"></i> mdi mdi-printer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-3d"></i> mdi
                        mdi-printer-3d
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-alert"></i> mdi
                        mdi-printer-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-settings"></i> mdi
                        mdi-printer-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-printer-wireless"></i> mdi
                        mdi-printer-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-priority-high"></i> mdi
                        mdi-priority-high
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-priority-low"></i> mdi
                        mdi-priority-low
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-professional-hexagon"></i> mdi
                        mdi-professional-hexagon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-check"></i> mdi
                        mdi-progress-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-clock"></i> mdi
                        mdi-progress-clock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-download"></i> mdi
                        mdi-progress-download
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-progress-upload"></i> mdi
                        mdi-progress-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-projector"></i> mdi mdi-projector
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-projector-screen"></i> mdi
                        mdi-projector-screen
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-publish"></i> mdi mdi-publish
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-pulse"></i> mdi mdi-pulse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-puzzle"></i> mdi mdi-puzzle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-puzzle-outline"></i> mdi
                        mdi-puzzle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qi"></i> mdi mdi-qi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qqchat"></i> mdi mdi-qqchat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qrcode"></i> mdi mdi-qrcode
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qrcode-edit"></i> mdi
                        mdi-qrcode-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-qrcode-scan"></i> mdi
                        mdi-qrcode-scan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-quadcopter"></i> mdi
                        mdi-quadcopter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-quality-high"></i> mdi
                        mdi-quality-high
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-quality-low"></i> mdi
                        mdi-quality-low
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-quality-medium"></i> mdi
                        mdi-quality-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-quicktime"></i> mdi mdi-quicktime
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rabbit"></i> mdi mdi-rabbit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radar"></i> mdi mdi-radar
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radiator"></i> mdi mdi-radiator
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radiator-disabled"></i> mdi
                        mdi-radiator-disabled
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radiator-off"></i> mdi
                        mdi-radiator-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radio"></i> mdi mdi-radio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radio-handheld"></i> mdi
                        mdi-radio-handheld
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radio-tower"></i> mdi
                        mdi-radio-tower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radioactive"></i> mdi
                        mdi-radioactive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radiobox-blank"></i> mdi
                        mdi-radiobox-blank
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-radiobox-marked"></i> mdi
                        mdi-radiobox-marked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-raspberrypi"></i> mdi
                        mdi-raspberrypi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ray-end"></i> mdi mdi-ray-end
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ray-end-arrow"></i> mdi
                        mdi-ray-end-arrow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ray-start"></i> mdi mdi-ray-start
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ray-start-arrow"></i> mdi
                        mdi-ray-start-arrow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ray-start-end"></i> mdi
                        mdi-ray-start-end
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ray-vertex"></i> mdi
                        mdi-ray-vertex
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-react"></i> mdi mdi-react
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-read"></i> mdi mdi-read
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-receipt"></i> mdi mdi-receipt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-record"></i> mdi mdi-record
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-record-player"></i> mdi
                        mdi-record-player
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-record-rec"></i> mdi
                        mdi-record-rec
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-recycle"></i> mdi mdi-recycle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reddit"></i> mdi mdi-reddit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-redo"></i> mdi mdi-redo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-redo-variant"></i> mdi
                        mdi-redo-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reflect-horizontal"></i> mdi
                        mdi-reflect-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reflect-vertical"></i> mdi
                        mdi-reflect-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-refresh"></i> mdi mdi-refresh
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-regex"></i> mdi mdi-regex
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-registered-trademark"></i> mdi
                        mdi-registered-trademark
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-relative-scale"></i> mdi
                        mdi-relative-scale
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reload"></i> mdi mdi-reload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reminder"></i> mdi mdi-reminder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-remote"></i> mdi mdi-remote
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-remote-desktop"></i> mdi
                        mdi-remote-desktop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rename-box"></i> mdi
                        mdi-rename-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reorder-horizontal"></i> mdi
                        mdi-reorder-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reorder-vertical"></i> mdi
                        mdi-reorder-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-repeat"></i> mdi mdi-repeat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-repeat-off"></i> mdi
                        mdi-repeat-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-repeat-once"></i> mdi
                        mdi-repeat-once
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-replay"></i> mdi mdi-replay
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reply"></i> mdi mdi-reply
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reply-all"></i> mdi mdi-reply-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-reproduction"></i> mdi
                        mdi-reproduction
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-resistor"></i> mdi mdi-resistor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-resistor-nodes"></i> mdi
                        mdi-resistor-nodes
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-resize"></i> mdi mdi-resize
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-resize-bottom-right"></i> mdi
                        mdi-resize-bottom-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-responsive"></i> mdi
                        mdi-responsive
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-restart"></i> mdi mdi-restart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-restore"></i> mdi mdi-restore
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rewind"></i> mdi mdi-rewind
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rewind-outline"></i> mdi
                        mdi-rewind-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rhombus"></i> mdi mdi-rhombus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rhombus-medium"></i> mdi
                        mdi-rhombus-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rhombus-outline"></i> mdi
                        mdi-rhombus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rhombus-split"></i> mdi
                        mdi-rhombus-split
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ribbon"></i> mdi mdi-ribbon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rice"></i> mdi mdi-rice
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ring"></i> mdi mdi-ring
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-road"></i> mdi mdi-road
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-road-variant"></i> mdi
                        mdi-road-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-robot"></i> mdi mdi-robot
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-robot-industrial"></i> mdi
                        mdi-robot-industrial
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-robot-vacuum"></i> mdi
                        mdi-robot-vacuum
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-robot-vacuum-variant"></i> mdi
                        mdi-robot-vacuum-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rocket"></i> mdi mdi-rocket
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-room-service"></i> mdi
                        mdi-room-service
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-3d-variant"></i> mdi
                        mdi-rotate-3d-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-left"></i> mdi
                        mdi-rotate-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-left-variant"></i> mdi
                        mdi-rotate-left-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-right"></i> mdi
                        mdi-rotate-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-right-variant"></i> mdi
                        mdi-rotate-right-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rounded-corner"></i> mdi
                        mdi-rounded-corner
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-router-wireless"></i> mdi
                        mdi-router-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-router-wireless-settings"></i> mdi
                        mdi-router-wireless-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-routes"></i> mdi mdi-routes
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rowing"></i> mdi mdi-rowing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rss"></i> mdi mdi-rss
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rss-box"></i> mdi mdi-rss-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ruler"></i> mdi mdi-ruler
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-run"></i> mdi mdi-run
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-run-fast"></i> mdi mdi-run-fast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-safe"></i> mdi mdi-safe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sale"></i> mdi mdi-sale
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-salesforce"></i> mdi
                        mdi-salesforce
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sass"></i> mdi mdi-sass
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-satellite"></i> mdi mdi-satellite
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-satellite-uplink"></i> mdi
                        mdi-satellite-uplink
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-satellite-variant"></i> mdi
                        mdi-satellite-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sausage"></i> mdi mdi-sausage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-saxophone"></i> mdi mdi-saxophone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scale"></i> mdi mdi-scale
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scale-balance"></i> mdi
                        mdi-scale-balance
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scale-bathroom"></i> mdi
                        mdi-scale-bathroom
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scanner"></i> mdi mdi-scanner
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scanner-off"></i> mdi
                        mdi-scanner-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-school"></i> mdi mdi-school
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-scissors-cutting"></i> mdi
                        mdi-scissors-cutting
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screen-rotation"></i> mdi
                        mdi-screen-rotation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screen-rotation-lock"></i> mdi
                        mdi-screen-rotation-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-screwdriver"></i> mdi
                        mdi-screwdriver
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-script"></i> mdi mdi-script
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sd"></i> mdi mdi-sd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seal"></i> mdi mdi-seal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-search-web"></i> mdi
                        mdi-search-web
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-flat"></i> mdi mdi-seat-flat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-flat-angled"></i> mdi
                        mdi-seat-flat-angled
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-individual-suite"></i> mdi
                        mdi-seat-individual-suite
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-legroom-extra"></i> mdi
                        mdi-seat-legroom-extra
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-legroom-normal"></i> mdi
                        mdi-seat-legroom-normal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-legroom-reduced"></i> mdi
                        mdi-seat-legroom-reduced
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-recline-extra"></i> mdi
                        mdi-seat-recline-extra
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-seat-recline-normal"></i> mdi
                        mdi-seat-recline-normal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-security"></i> mdi mdi-security
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-account"></i> mdi
                        mdi-shield-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-account-outline"></i> mdi
                        mdi-shield-account-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-home"></i> mdi
                        mdi-shield-home
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-lock"></i> mdi
                        mdi-shield-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-off"></i> mdi
                        mdi-shield-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select"></i> mdi mdi-select
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-all"></i> mdi
                        mdi-select-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-compare"></i> mdi
                        mdi-select-compare
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-drag"></i> mdi
                        mdi-select-drag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-inverse"></i> mdi
                        mdi-select-inverse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-select-off"></i> mdi
                        mdi-select-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-selection"></i> mdi mdi-selection
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-selection-drag"></i> mdi
                        mdi-selection-drag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-selection-off"></i> mdi
                        mdi-selection-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send"></i> mdi mdi-send
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-send-lock"></i> mdi mdi-send-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-serial-port"></i> mdi
                        mdi-serial-port
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server"></i> mdi mdi-server
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-minus"></i> mdi
                        mdi-server-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-off"></i> mdi
                        mdi-server-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-plus"></i> mdi
                        mdi-server-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-remove"></i> mdi
                        mdi-server-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-server-security"></i> mdi
                        mdi-server-security
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-all"></i> mdi mdi-set-all
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-center"></i> mdi
                        mdi-set-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-center-right"></i> mdi
                        mdi-set-center-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-left"></i> mdi mdi-set-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-left-center"></i> mdi
                        mdi-set-left-center
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-left-right"></i> mdi
                        mdi-set-left-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-none"></i> mdi mdi-set-none
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-right"></i> mdi mdi-set-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-set-top-box"></i> mdi
                        mdi-set-top-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-settings"></i> mdi mdi-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-settings-box"></i> mdi
                        mdi-settings-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-settings-helper"></i> mdi
                        mdi-settings-helper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-settings-outline"></i> mdi
                        mdi-settings-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape"></i> mdi mdi-shape
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape-circle-plus"></i> mdi
                        mdi-shape-circle-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape-outline"></i> mdi
                        mdi-shape-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape-plus"></i> mdi
                        mdi-shape-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape-polygon-plus"></i> mdi
                        mdi-shape-polygon-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape-rectangle-plus"></i> mdi
                        mdi-shape-rectangle-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shape-square-plus"></i> mdi
                        mdi-shape-square-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-share"></i> mdi mdi-share
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-share-outline"></i> mdi
                        mdi-share-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-share-variant"></i> mdi
                        mdi-share-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield"></i> mdi mdi-shield
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-half-full"></i> mdi
                        mdi-shield-half-full
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-outline"></i> mdi
                        mdi-shield-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-plus"></i> mdi
                        mdi-shield-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-plus-outline"></i> mdi
                        mdi-shield-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-remove-outline"></i> mdi
                        mdi-shield-remove-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ship-wheel"></i> mdi
                        mdi-ship-wheel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shoe-formal"></i> mdi
                        mdi-shoe-formal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shoe-heel"></i> mdi mdi-shoe-heel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shopify"></i> mdi mdi-shopify
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shopping"></i> mdi mdi-shopping
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shopping-music"></i> mdi
                        mdi-shopping-music
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shovel"></i> mdi mdi-shovel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shovel-off"></i> mdi
                        mdi-shovel-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shower"></i> mdi mdi-shower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shower-head"></i> mdi
                        mdi-shower-head
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shredder"></i> mdi mdi-shredder
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shuffle"></i> mdi mdi-shuffle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shuffle-disabled"></i> mdi
                        mdi-shuffle-disabled
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shuffle-variant"></i> mdi
                        mdi-shuffle-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sigma"></i> mdi mdi-sigma
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sigma-lower"></i> mdi
                        mdi-sigma-lower
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-caution"></i> mdi
                        mdi-sign-caution
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-direction"></i> mdi
                        mdi-sign-direction
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sign-text"></i> mdi mdi-sign-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal"></i> mdi mdi-signal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-2g"></i> mdi mdi-signal-2g
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-3g"></i> mdi mdi-signal-3g
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-4g"></i> mdi mdi-signal-4g
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-5g"></i> mdi mdi-signal-5g
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-cellular-1"></i> mdi
                        mdi-signal-cellular-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-cellular-2"></i> mdi
                        mdi-signal-cellular-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-cellular-3"></i> mdi
                        mdi-signal-cellular-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-cellular-outline"></i> mdi
                        mdi-signal-cellular-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-hspa"></i> mdi
                        mdi-signal-hspa
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-hspa-plus"></i> mdi
                        mdi-signal-hspa-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-off"></i> mdi
                        mdi-signal-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-signal-variant"></i> mdi
                        mdi-signal-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silo"></i> mdi mdi-silo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silverware"></i> mdi
                        mdi-silverware
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silverware-fork"></i> mdi
                        mdi-silverware-fork
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silverware-fork-knife"></i> mdi
                        mdi-silverware-fork-knife
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silverware-spoon"></i> mdi
                        mdi-silverware-spoon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-silverware-variant"></i> mdi
                        mdi-silverware-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sim"></i> mdi mdi-sim
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sim-alert"></i> mdi mdi-sim-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sim-off"></i> mdi mdi-sim-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sina-weibo"></i> mdi
                        mdi-sina-weibo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sitemap"></i> mdi mdi-sitemap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-backward"></i> mdi
                        mdi-skip-backward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-forward"></i> mdi
                        mdi-skip-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-next"></i> mdi mdi-skip-next
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-next-circle"></i> mdi
                        mdi-skip-next-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-next-circle-outline"></i> mdi
                        mdi-skip-next-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-previous"></i> mdi
                        mdi-skip-previous
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-previous-circle"></i> mdi
                        mdi-skip-previous-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skip-previous-circle-outline"></i>{" "}
                        mdi mdi-skip-previous-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skull"></i> mdi mdi-skull
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skype"></i> mdi mdi-skype
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-skype-business"></i> mdi
                        mdi-skype-business
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slack"></i> mdi mdi-slack
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-slackware"></i> mdi mdi-slackware
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sleep"></i> mdi mdi-sleep
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sleep-off"></i> mdi mdi-sleep-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-smog"></i> mdi mdi-smog
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-snapchat"></i> mdi mdi-snapchat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-snowflake"></i> mdi mdi-snowflake
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-snowman"></i> mdi mdi-snowman
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-soccer"></i> mdi mdi-soccer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-soccer-field"></i> mdi
                        mdi-soccer-field
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sofa"></i> mdi mdi-sofa
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-solar-power"></i> mdi
                        mdi-solar-power
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-solid"></i> mdi mdi-solid
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort"></i> mdi mdi-sort
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-alphabetical"></i> mdi
                        mdi-sort-alphabetical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-ascending"></i> mdi
                        mdi-sort-ascending
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-descending"></i> mdi
                        mdi-sort-descending
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-numeric"></i> mdi
                        mdi-sort-numeric
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sort-variant"></i> mdi
                        mdi-sort-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-soundcloud"></i> mdi
                        mdi-soundcloud
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-branch"></i> mdi
                        mdi-source-branch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit"></i> mdi
                        mdi-source-commit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit-end"></i> mdi
                        mdi-source-commit-end
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit-end-local"></i> mdi
                        mdi-source-commit-end-local
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit-local"></i> mdi
                        mdi-source-commit-local
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit-next-local"></i> mdi
                        mdi-source-commit-next-local
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit-start"></i> mdi
                        mdi-source-commit-start
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-commit-start-next-local"></i>{" "}
                        mdi mdi-source-commit-start-next-local
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-fork"></i> mdi
                        mdi-source-fork
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-merge"></i> mdi
                        mdi-source-merge
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-source-pull"></i> mdi
                        mdi-source-pull
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-soy-sauce"></i> mdi mdi-soy-sauce
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speaker"></i> mdi mdi-speaker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speaker-bluetooth"></i> mdi
                        mdi-speaker-bluetooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speaker-off"></i> mdi
                        mdi-speaker-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speaker-wireless"></i> mdi
                        mdi-speaker-wireless
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-speedometer"></i> mdi
                        mdi-speedometer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spellcheck"></i> mdi
                        mdi-spellcheck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spotify"></i> mdi mdi-spotify
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spotlight"></i> mdi mdi-spotlight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spotlight-beam"></i> mdi
                        mdi-spotlight-beam
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spray"></i> mdi mdi-spray
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spray-bottle"></i> mdi
                        mdi-spray-bottle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square"></i> mdi mdi-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-edit-outline"></i> mdi
                        mdi-square-edit-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-inc"></i> mdi
                        mdi-square-inc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-inc-cash"></i> mdi
                        mdi-square-inc-cash
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-medium"></i> mdi
                        mdi-square-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-medium-outline"></i> mdi
                        mdi-square-medium-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-outline"></i> mdi
                        mdi-square-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-root"></i> mdi
                        mdi-square-root
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-root-box"></i> mdi
                        mdi-square-root-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-square-small"></i> mdi
                        mdi-square-small
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-squeegee"></i> mdi mdi-squeegee
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ssh"></i> mdi mdi-ssh
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stack-exchange"></i> mdi
                        mdi-stack-exchange
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stack-overflow"></i> mdi
                        mdi-stack-overflow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stadium"></i> mdi mdi-stadium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stairs"></i> mdi mdi-stairs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-standard-definition"></i> mdi
                        mdi-standard-definition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star"></i> mdi mdi-star
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-box"></i> mdi mdi-star-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-box-outline"></i> mdi
                        mdi-star-box-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-circle"></i> mdi
                        mdi-star-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-circle-outline"></i> mdi
                        mdi-star-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-face"></i> mdi mdi-star-face
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-four-points"></i> mdi
                        mdi-star-four-points
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-four-points-outline"></i> mdi
                        mdi-star-four-points-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-half"></i> mdi mdi-star-half
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-off"></i> mdi mdi-star-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-outline"></i> mdi
                        mdi-star-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-three-points"></i> mdi
                        mdi-star-three-points
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-star-three-points-outline"></i>{" "}
                        mdi mdi-star-three-points-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-steam"></i> mdi mdi-steam
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-steam-box"></i> mdi mdi-steam-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-steering"></i> mdi mdi-steering
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-steering-off"></i> mdi
                        mdi-steering-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-step-backward"></i> mdi
                        mdi-step-backward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-step-backward-2"></i> mdi
                        mdi-step-backward-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-step-forward"></i> mdi
                        mdi-step-forward
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-step-forward-2"></i> mdi
                        mdi-step-forward-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stethoscope"></i> mdi
                        mdi-stethoscope
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sticker"></i> mdi mdi-sticker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sticker-emoji"></i> mdi
                        mdi-sticker-emoji
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stocking"></i> mdi mdi-stocking
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stop"></i> mdi mdi-stop
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stop-circle"></i> mdi
                        mdi-stop-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stop-circle-outline"></i> mdi
                        mdi-stop-circle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-store"></i> mdi mdi-store
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-store-24-hour"></i> mdi
                        mdi-store-24-hour
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-stove"></i> mdi mdi-stove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-strava"></i> mdi mdi-strava
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-subdirectory-arrow-left"></i> mdi
                        mdi-subdirectory-arrow-left
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-subdirectory-arrow-right"></i> mdi
                        mdi-subdirectory-arrow-right
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-subtitles"></i> mdi mdi-subtitles
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-subtitles-outline"></i> mdi
                        mdi-subtitles-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-subway"></i> mdi mdi-subway
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-subway-variant"></i> mdi
                        mdi-subway-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-summit"></i> mdi mdi-summit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sunglasses"></i> mdi
                        mdi-sunglasses
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-surround-sound"></i> mdi
                        mdi-surround-sound
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-surround-sound-2-0"></i> mdi
                        mdi-surround-sound-2-0
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-surround-sound-3-1"></i> mdi
                        mdi-surround-sound-3-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-surround-sound-5-1"></i> mdi
                        mdi-surround-sound-5-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-surround-sound-7-1"></i> mdi
                        mdi-surround-sound-7-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-svg"></i> mdi mdi-svg
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-horizontal"></i> mdi
                        mdi-swap-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-horizontal-variant"></i> mdi
                        mdi-swap-horizontal-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-vertical"></i> mdi
                        mdi-swap-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swap-vertical-variant"></i> mdi
                        mdi-swap-vertical-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-swim"></i> mdi mdi-swim
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-switch"></i> mdi mdi-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sword"></i> mdi mdi-sword
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sword-cross"></i> mdi
                        mdi-sword-cross
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-symfony"></i> mdi mdi-symfony
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sync"></i> mdi mdi-sync
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sync-alert"></i> mdi
                        mdi-sync-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-sync-off"></i> mdi mdi-sync-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tab"></i> mdi mdi-tab
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tab-minus"></i> mdi mdi-tab-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tab-plus"></i> mdi mdi-tab-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tab-remove"></i> mdi
                        mdi-tab-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tab-unselected"></i> mdi
                        mdi-tab-unselected
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table"></i> mdi mdi-table
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-border"></i> mdi
                        mdi-table-border
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-column"></i> mdi
                        mdi-table-column
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-column-plus-after"></i> mdi
                        mdi-table-column-plus-after
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-column-plus-before"></i> mdi
                        mdi-table-column-plus-before
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-column-remove"></i> mdi
                        mdi-table-column-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-column-width"></i> mdi
                        mdi-table-column-width
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-edit"></i> mdi
                        mdi-table-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-large"></i> mdi
                        mdi-table-large
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-merge-cells"></i> mdi
                        mdi-table-merge-cells
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-of-contents"></i> mdi
                        mdi-table-of-contents
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-plus"></i> mdi
                        mdi-table-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-remove"></i> mdi
                        mdi-table-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-row"></i> mdi mdi-table-row
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-row-height"></i> mdi
                        mdi-table-row-height
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-row-plus-after"></i> mdi
                        mdi-table-row-plus-after
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-row-plus-before"></i> mdi
                        mdi-table-row-plus-before
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-row-remove"></i> mdi
                        mdi-table-row-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-search"></i> mdi
                        mdi-table-search
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-table-settings"></i> mdi
                        mdi-table-settings
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tablet"></i> mdi mdi-tablet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tablet-android"></i> mdi
                        mdi-tablet-android
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tablet-cellphone"></i> mdi
                        mdi-tablet-cellphone
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tablet-ipad"></i> mdi
                        mdi-tablet-ipad
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-taco"></i> mdi mdi-taco
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag"></i> mdi mdi-tag
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-faces"></i> mdi mdi-tag-faces
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-heart"></i> mdi mdi-tag-heart
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-minus"></i> mdi mdi-tag-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-multiple"></i> mdi
                        mdi-tag-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-outline"></i> mdi
                        mdi-tag-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-plus"></i> mdi mdi-tag-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-remove"></i> mdi
                        mdi-tag-remove
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tag-text-outline"></i> mdi
                        mdi-tag-text-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tape-measure"></i> mdi
                        mdi-tape-measure
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-target"></i> mdi mdi-target
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-target-variant"></i> mdi
                        mdi-target-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-taxi"></i> mdi mdi-taxi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-teach"></i> mdi mdi-teach
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-teamviewer"></i> mdi
                        mdi-teamviewer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-telegram"></i> mdi mdi-telegram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-telescope"></i> mdi mdi-telescope
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television"></i> mdi
                        mdi-television
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-box"></i> mdi
                        mdi-television-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-classNameic"></i> mdi
                        mdi-television-classNameic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-classNameic-off"></i>{" "}
                        mdi mdi-television-classNameic-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-guide"></i> mdi
                        mdi-television-guide
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-television-off"></i> mdi
                        mdi-television-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-temperature-celsius"></i> mdi
                        mdi-temperature-celsius
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-temperature-fahrenheit"></i> mdi
                        mdi-temperature-fahrenheit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-temperature-kelvin"></i> mdi
                        mdi-temperature-kelvin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tennis"></i> mdi mdi-tennis
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tent"></i> mdi mdi-tent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-terrain"></i> mdi mdi-terrain
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-test-tube"></i> mdi mdi-test-tube
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-test-tube-empty"></i> mdi
                        mdi-test-tube-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-test-tube-off"></i> mdi
                        mdi-test-tube-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text"></i> mdi mdi-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text-shadow"></i> mdi
                        mdi-text-shadow
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text-short"></i> mdi
                        mdi-text-short
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text-subject"></i> mdi
                        mdi-text-subject
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text-to-speech"></i> mdi
                        mdi-text-to-speech
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-text-to-speech-off"></i> mdi
                        mdi-text-to-speech-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-textbox"></i> mdi mdi-textbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-textbox-password"></i> mdi
                        mdi-textbox-password
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-texture"></i> mdi mdi-texture
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-theater"></i> mdi mdi-theater
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-theme-light-dark"></i> mdi
                        mdi-theme-light-dark
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer"></i> mdi
                        mdi-thermometer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermometer-lines"></i> mdi
                        mdi-thermometer-lines
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermostat"></i> mdi
                        mdi-thermostat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thermostat-box"></i> mdi
                        mdi-thermostat-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thought-bubble"></i> mdi
                        mdi-thought-bubble
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thought-bubble-outline"></i> mdi
                        mdi-thought-bubble-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thumb-down"></i> mdi
                        mdi-thumb-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thumb-down-outline"></i> mdi
                        mdi-thumb-down-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thumb-up"></i> mdi mdi-thumb-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thumb-up-outline"></i> mdi
                        mdi-thumb-up-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-thumbs-up-down"></i> mdi
                        mdi-thumbs-up-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ticket"></i> mdi mdi-ticket
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ticket-account"></i> mdi
                        mdi-ticket-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ticket-confirmation"></i> mdi
                        mdi-ticket-confirmation
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ticket-outline"></i> mdi
                        mdi-ticket-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ticket-percent"></i> mdi
                        mdi-ticket-percent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tie"></i> mdi mdi-tie
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tilde"></i> mdi mdi-tilde
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timelapse"></i> mdi mdi-timelapse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer"></i> mdi mdi-timer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer-10"></i> mdi mdi-timer-10
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer-3"></i> mdi mdi-timer-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer-off"></i> mdi mdi-timer-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer-sand"></i> mdi
                        mdi-timer-sand
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer-sand-empty"></i> mdi
                        mdi-timer-sand-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timer-sand-full"></i> mdi
                        mdi-timer-sand-full
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-timetable"></i> mdi mdi-timetable
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toggle-switch"></i> mdi
                        mdi-toggle-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toggle-switch-off"></i> mdi
                        mdi-toggle-switch-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toggle-switch-off-outline"></i>{" "}
                        mdi mdi-toggle-switch-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toggle-switch-outline"></i> mdi
                        mdi-toggle-switch-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toilet"></i> mdi mdi-toilet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toolbox"></i> mdi mdi-toolbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-toolbox-outline"></i> mdi
                        mdi-toolbox-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip"></i> mdi mdi-tooltip
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip-edit"></i> mdi
                        mdi-tooltip-edit
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip-image"></i> mdi
                        mdi-tooltip-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip-outline"></i> mdi
                        mdi-tooltip-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip-plus-outline"></i> mdi
                        mdi-tooltip-plus-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooltip-text"></i> mdi
                        mdi-tooltip-text
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooth"></i> mdi mdi-tooth
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tooth-outline"></i> mdi
                        mdi-tooth-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tor"></i> mdi mdi-tor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tournament"></i> mdi
                        mdi-tournament
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tower-beach"></i> mdi
                        mdi-tower-beach
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tower-fire"></i> mdi
                        mdi-tower-fire
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-towing"></i> mdi mdi-towing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-track-light"></i> mdi
                        mdi-track-light
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trackpad"></i> mdi mdi-trackpad
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trackpad-lock"></i> mdi
                        mdi-trackpad-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tractor"></i> mdi mdi-tractor
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trademark"></i> mdi mdi-trademark
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-traffic-light"></i> mdi
                        mdi-traffic-light
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-train"></i> mdi mdi-train
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-train-variant"></i> mdi
                        mdi-train-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tram"></i> mdi mdi-tram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transcribe"></i> mdi
                        mdi-transcribe
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transcribe-close"></i> mdi
                        mdi-transcribe-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transit-transfer"></i> mdi
                        mdi-transit-transfer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transition"></i> mdi
                        mdi-transition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-transition-masked"></i> mdi
                        mdi-transition-masked
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-translate"></i> mdi mdi-translate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trash-can"></i> mdi mdi-trash-can
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trash-can-outline"></i> mdi
                        mdi-trash-can-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-treasure-chest"></i> mdi
                        mdi-treasure-chest
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tree"></i> mdi mdi-tree
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trello"></i> mdi mdi-trello
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trending-down"></i> mdi
                        mdi-trending-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trending-neutral"></i> mdi
                        mdi-trending-neutral
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trending-up"></i> mdi
                        mdi-trending-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-triangle"></i> mdi mdi-triangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-triangle-outline"></i> mdi
                        mdi-triangle-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trophy"></i> mdi mdi-trophy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trophy-award"></i> mdi
                        mdi-trophy-award
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trophy-outline"></i> mdi
                        mdi-trophy-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trophy-variant"></i> mdi
                        mdi-trophy-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-trophy-variant-outline"></i> mdi
                        mdi-trophy-variant-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-truck"></i> mdi mdi-truck
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-truck-delivery"></i> mdi
                        mdi-truck-delivery
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-truck-fast"></i> mdi
                        mdi-truck-fast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-truck-trailer"></i> mdi
                        mdi-truck-trailer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tshirt-crew"></i> mdi
                        mdi-tshirt-crew
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tshirt-crew-outline"></i> mdi
                        mdi-tshirt-crew-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tshirt-v"></i> mdi mdi-tshirt-v
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tshirt-v-outline"></i> mdi
                        mdi-tshirt-v-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tumble-dryer"></i> mdi
                        mdi-tumble-dryer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tumblr"></i> mdi mdi-tumblr
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tumblr-box"></i> mdi
                        mdi-tumblr-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tumblr-reblog"></i> mdi
                        mdi-tumblr-reblog
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tune"></i> mdi mdi-tune
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-tune-vertical"></i> mdi
                        mdi-tune-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-twitch"></i> mdi mdi-twitch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-twitter"></i> mdi mdi-twitter
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-twitter-box"></i> mdi
                        mdi-twitter-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-twitter-circle"></i> mdi
                        mdi-twitter-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-twitter-retweet"></i> mdi
                        mdi-twitter-retweet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-two-factor-authentication"></i>{" "}
                        mdi mdi-two-factor-authentication
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-uber"></i> mdi mdi-uber
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ubuntu"></i> mdi mdi-ubuntu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ultra-high-definition"></i> mdi
                        mdi-ultra-high-definition
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-umbraco"></i> mdi mdi-umbraco
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-umbrella"></i> mdi mdi-umbrella
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-umbrella-closed"></i> mdi
                        mdi-umbrella-closed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-umbrella-outline"></i> mdi
                        mdi-umbrella-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-undo"></i> mdi mdi-undo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-undo-variant"></i> mdi
                        mdi-undo-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unfold-less-horizontal"></i> mdi
                        mdi-unfold-less-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unfold-less-vertical"></i> mdi
                        mdi-unfold-less-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unfold-more-horizontal"></i> mdi
                        mdi-unfold-more-horizontal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unfold-more-vertical"></i> mdi
                        mdi-unfold-more-vertical
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-ungroup"></i> mdi mdi-ungroup
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unity"></i> mdi mdi-unity
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-unreal"></i> mdi mdi-unreal
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-untappd"></i> mdi mdi-untappd
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-update"></i> mdi mdi-update
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload"></i> mdi mdi-upload
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload-multiple"></i> mdi
                        mdi-upload-multiple
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-upload-network"></i> mdi
                        mdi-upload-network
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-usb"></i> mdi mdi-usb
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-van-passenger"></i> mdi
                        mdi-van-passenger
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-van-utility"></i> mdi
                        mdi-van-utility
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vanish"></i> mdi mdi-vanish
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-variable"></i> mdi mdi-variable
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-arrange-above"></i> mdi
                        mdi-vector-arrange-above
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-arrange-below"></i> mdi
                        mdi-vector-arrange-below
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-bezier"></i> mdi
                        mdi-vector-bezier
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-circle"></i> mdi
                        mdi-vector-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-circle-variant"></i> mdi
                        mdi-vector-circle-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-combine"></i> mdi
                        mdi-vector-combine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-curve"></i> mdi
                        mdi-vector-curve
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-difference"></i> mdi
                        mdi-vector-difference
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-difference-ab"></i> mdi
                        mdi-vector-difference-ab
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-difference-ba"></i> mdi
                        mdi-vector-difference-ba
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-ellipse"></i> mdi
                        mdi-vector-ellipse
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-intersection"></i> mdi
                        mdi-vector-intersection
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-line"></i> mdi
                        mdi-vector-line
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-point"></i> mdi
                        mdi-vector-point
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-polygon"></i> mdi
                        mdi-vector-polygon
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-polyline"></i> mdi
                        mdi-vector-polyline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-radius"></i> mdi
                        mdi-vector-radius
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-rectangle"></i> mdi
                        mdi-vector-rectangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-selection"></i> mdi
                        mdi-vector-selection
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-square"></i> mdi
                        mdi-vector-square
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-triangle"></i> mdi
                        mdi-vector-triangle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vector-union"></i> mdi
                        mdi-vector-union
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-venmo"></i> mdi mdi-venmo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-shield-check"></i> mdi
                        mdi-shield-check
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vhs"></i> mdi mdi-vhs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vibrate"></i> mdi mdi-vibrate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video"></i> mdi mdi-video
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-3d"></i> mdi mdi-video-3d
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-4k-box"></i> mdi
                        mdi-video-4k-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-account"></i> mdi
                        mdi-video-account
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-image"></i> mdi
                        mdi-video-image
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-input-antenna"></i> mdi
                        mdi-video-input-antenna
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-input-component"></i> mdi
                        mdi-video-input-component
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-input-hdmi"></i> mdi
                        mdi-video-input-hdmi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-input-svideo"></i> mdi
                        mdi-video-input-svideo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-minus"></i> mdi
                        mdi-video-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-off"></i> mdi mdi-video-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-plus"></i> mdi
                        mdi-video-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-stabilization"></i> mdi
                        mdi-video-stabilization
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-switch"></i> mdi
                        mdi-video-switch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-video-vintage"></i> mdi
                        mdi-video-vintage
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-agenda"></i> mdi
                        mdi-view-agenda
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-array"></i> mdi
                        mdi-view-array
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-carousel"></i> mdi
                        mdi-view-carousel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-column"></i> mdi
                        mdi-view-column
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-dashboard"></i> mdi
                        mdi-view-dashboard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-dashboard-outline"></i> mdi
                        mdi-view-dashboard-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-dashboard-variant"></i> mdi
                        mdi-view-dashboard-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-day"></i> mdi mdi-view-day
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-grid"></i> mdi mdi-view-grid
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-headline"></i> mdi
                        mdi-view-headline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-list"></i> mdi mdi-view-list
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-module"></i> mdi
                        mdi-view-module
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-parallel"></i> mdi
                        mdi-view-parallel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-quilt"></i> mdi
                        mdi-view-quilt
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-sequential"></i> mdi
                        mdi-view-sequential
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-stream"></i> mdi
                        mdi-view-stream
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-view-week"></i> mdi mdi-view-week
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vimeo"></i> mdi mdi-vimeo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-violin"></i> mdi mdi-violin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-virtual-reality"></i> mdi
                        mdi-virtual-reality
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-visual-studio"></i> mdi
                        mdi-visual-studio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-visual-studio-code"></i> mdi
                        mdi-visual-studio-code
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vk"></i> mdi mdi-vk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vk-box"></i> mdi mdi-vk-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vk-circle"></i> mdi mdi-vk-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vlc"></i> mdi mdi-vlc
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-voice"></i> mdi mdi-voice
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-voicemail"></i> mdi mdi-voicemail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volleyball"></i> mdi
                        mdi-volleyball
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-high"></i> mdi
                        mdi-volume-high
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-low"></i> mdi
                        mdi-volume-low
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-medium"></i> mdi
                        mdi-volume-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-minus"></i> mdi
                        mdi-volume-minus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-mute"></i> mdi
                        mdi-volume-mute
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-off"></i> mdi
                        mdi-volume-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-volume-plus"></i> mdi
                        mdi-volume-plus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vote"></i> mdi mdi-vote
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vote-outline"></i> mdi
                        mdi-vote-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vpn"></i> mdi mdi-vpn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-vuejs"></i> mdi mdi-vuejs
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-walk"></i> mdi mdi-walk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wall"></i> mdi mdi-wall
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wall-sconce"></i> mdi
                        mdi-wall-sconce
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wall-sconce-flat"></i> mdi
                        mdi-wall-sconce-flat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wall-sconce-variant"></i> mdi
                        mdi-wall-sconce-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet"></i> mdi mdi-wallet
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet-giftcard"></i> mdi
                        mdi-wallet-giftcard
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet-membership"></i> mdi
                        mdi-wallet-membership
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wallet-travel"></i> mdi
                        mdi-wallet-travel
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wan"></i> mdi mdi-wan
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-washing-machine"></i> mdi
                        mdi-washing-machine
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch"></i> mdi mdi-watch
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-export"></i> mdi
                        mdi-watch-export
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-export-variant"></i> mdi
                        mdi-watch-export-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-import"></i> mdi
                        mdi-watch-import
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-import-variant"></i> mdi
                        mdi-watch-import-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-variant"></i> mdi
                        mdi-watch-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watch-vibrate"></i> mdi
                        mdi-watch-vibrate
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water"></i> mdi mdi-water
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-off"></i> mdi mdi-water-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-percent"></i> mdi
                        mdi-water-percent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-water-pump"></i> mdi
                        mdi-water-pump
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-watermark"></i> mdi mdi-watermark
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-waves"></i> mdi mdi-waves
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-cloudy"></i> mdi
                        mdi-weather-cloudy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-fog"></i> mdi
                        mdi-weather-fog
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-hail"></i> mdi
                        mdi-weather-hail
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-hurricane"></i> mdi
                        mdi-weather-hurricane
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-lightning"></i> mdi
                        mdi-weather-lightning
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-lightning-rainy"></i> mdi
                        mdi-weather-lightning-rainy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-night"></i> mdi
                        mdi-weather-night
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-partly-cloudy"></i> mdi
                        mdi-weather-partly-cloudy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-pouring"></i> mdi
                        mdi-weather-pouring
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-rainy"></i> mdi
                        mdi-weather-rainy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-snowy"></i> mdi
                        mdi-weather-snowy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-snowy-rainy"></i> mdi
                        mdi-weather-snowy-rainy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-sunny"></i> mdi
                        mdi-weather-sunny
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-sunset"></i> mdi
                        mdi-weather-sunset
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-sunset-down"></i> mdi
                        mdi-weather-sunset-down
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-sunset-up"></i> mdi
                        mdi-weather-sunset-up
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-windy"></i> mdi
                        mdi-weather-windy
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weather-windy-variant"></i> mdi
                        mdi-weather-windy-variant
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-web"></i> mdi mdi-web
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-webcam"></i> mdi mdi-webcam
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-webhook"></i> mdi mdi-webhook
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-webpack"></i> mdi mdi-webpack
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wechat"></i> mdi mdi-wechat
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weight"></i> mdi mdi-weight
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weight-kilogram"></i> mdi
                        mdi-weight-kilogram
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-weight-pound"></i> mdi
                        mdi-weight-pound
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-whatsapp"></i> mdi mdi-whatsapp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wheelchair-accessibility"></i> mdi
                        mdi-wheelchair-accessibility
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-whistle"></i> mdi mdi-whistle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-white-balance-auto"></i> mdi
                        mdi-white-balance-auto
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-white-balance-incandescent"></i>{" "}
                        mdi mdi-white-balance-incandescent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-white-balance-iridescent"></i> mdi
                        mdi-white-balance-iridescent
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-white-balance-sunny"></i> mdi
                        mdi-white-balance-sunny
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-widgets"></i> mdi mdi-widgets
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi"></i> mdi mdi-wifi
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-off"></i> mdi mdi-wifi-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-1"></i> mdi
                        mdi-wifi-strength-1
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-1-alert"></i> mdi
                        mdi-wifi-strength-1-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-1-lock"></i> mdi
                        mdi-wifi-strength-1-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-2"></i> mdi
                        mdi-wifi-strength-2
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-2-alert"></i> mdi
                        mdi-wifi-strength-2-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-2-lock"></i> mdi
                        mdi-wifi-strength-2-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-3"></i> mdi
                        mdi-wifi-strength-3
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-3-alert"></i> mdi
                        mdi-wifi-strength-3-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-3-lock"></i> mdi
                        mdi-wifi-strength-3-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-4"></i> mdi
                        mdi-wifi-strength-4
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-4-alert"></i> mdi
                        mdi-wifi-strength-4-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-4-lock"></i> mdi
                        mdi-wifi-strength-4-lock
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-alert-outline"></i>{" "}
                        mdi mdi-wifi-strength-alert-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-lock-outline"></i>{" "}
                        mdi mdi-wifi-strength-lock-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-off"></i> mdi
                        mdi-wifi-strength-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-off-outline"></i>{" "}
                        mdi mdi-wifi-strength-off-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wifi-strength-outline"></i> mdi
                        mdi-wifi-strength-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wii"></i> mdi mdi-wii
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wiiu"></i> mdi mdi-wiiu
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wikipedia"></i> mdi mdi-wikipedia
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-close"></i> mdi
                        mdi-window-close
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-closed"></i> mdi
                        mdi-window-closed
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-maximize"></i> mdi
                        mdi-window-maximize
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-minimize"></i> mdi
                        mdi-window-minimize
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-open"></i> mdi
                        mdi-window-open
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-window-restore"></i> mdi
                        mdi-window-restore
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-windows"></i> mdi mdi-windows
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-windows-classNameic"></i> mdi
                        mdi-windows-classNameic
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wiper"></i> mdi mdi-wiper
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wordpress"></i> mdi mdi-wordpress
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-worker"></i> mdi mdi-worker
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wrap"></i> mdi mdi-wrap
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wrench"></i> mdi mdi-wrench
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-wunderlist"></i> mdi
                        mdi-wunderlist
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xamarin"></i> mdi mdi-xamarin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xamarin-outline"></i> mdi
                        mdi-xamarin-outline
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xaml"></i> mdi mdi-xaml
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox"></i> mdi mdi-xbox
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller"></i> mdi
                        mdi-xbox-controller
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-alert"></i>{" "}
                        mdi mdi-xbox-controller-battery-alert
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-charging"></i>{" "}
                        mdi mdi-xbox-controller-battery-charging
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-empty"></i>{" "}
                        mdi mdi-xbox-controller-battery-empty
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-full"></i>{" "}
                        mdi mdi-xbox-controller-battery-full
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-low"></i>{" "}
                        mdi mdi-xbox-controller-battery-low
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-medium"></i>{" "}
                        mdi mdi-xbox-controller-battery-medium
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-battery-unknown"></i>{" "}
                        mdi mdi-xbox-controller-battery-unknown
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xbox-controller-off"></i> mdi
                        mdi-xbox-controller-off
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xda"></i> mdi mdi-xda
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xing"></i> mdi mdi-xing
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xing-box"></i> mdi mdi-xing-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xing-circle"></i> mdi
                        mdi-xing-circle
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xml"></i> mdi mdi-xml
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-xmpp"></i> mdi mdi-xmpp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-yahoo"></i> mdi mdi-yahoo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-yammer"></i> mdi mdi-yammer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-yeast"></i> mdi mdi-yeast
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-yelp"></i> mdi mdi-yelp
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-yin-yang"></i> mdi mdi-yin-yang
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-youtube"></i> mdi mdi-youtube
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-youtube-creator-studio"></i> mdi
                        mdi-youtube-creator-studio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-youtube-gaming"></i> mdi
                        mdi-youtube-gaming
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-youtube-tv"></i> mdi
                        mdi-youtube-tv
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-z-wave"></i> mdi mdi-z-wave
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zend"></i> mdi mdi-zend
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zip-box"></i> mdi mdi-zip-box
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zip-disk"></i> mdi mdi-zip-disk
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-aquarius"></i> mdi
                        mdi-zodiac-aquarius
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-aries"></i> mdi
                        mdi-zodiac-aries
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-cancer"></i> mdi
                        mdi-zodiac-cancer
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-capricorn"></i> mdi
                        mdi-zodiac-capricorn
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-gemini"></i> mdi
                        mdi-zodiac-gemini
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-leo"></i> mdi
                        mdi-zodiac-leo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-libra"></i> mdi
                        mdi-zodiac-libra
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-pisces"></i> mdi
                        mdi-zodiac-pisces
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-sagittarius"></i> mdi
                        mdi-zodiac-sagittarius
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-scorpio"></i> mdi
                        mdi-zodiac-scorpio
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-taurus"></i> mdi
                        mdi-zodiac-taurus
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-zodiac-virgo"></i> mdi
                        mdi-zodiac-virgo
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-blank"></i> mdi mdi-blank
                      </Col>
                    </Row>
                  </Card>
                </CardBody>
              </Card>
            </div>
          </Row>

          <Row>
            <div className="col-12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Size</h4>

                  <Card className="icon-demo-content">
                    <Row>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-18px mdi-account"></i> mdi-18px
                      </Col>

                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-24px mdi-account"></i> mdi-24px
                      </Col>

                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-36px mdi-account"></i> mdi-36px
                      </Col>

                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-48px mdi-account"></i> mdi-48px
                      </Col>
                    </Row>
                  </Card>
                </CardBody>
              </Card>
            </div>
          </Row>

          <Row>
            <div className="col-12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Rotate</h4>

                  <Card className="icon-demo-content">
                    <Row>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-45 mdi-account"></i>{" "}
                        mdi-rotate-45
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-90 mdi-account"></i>{" "}
                        mdi-rotate-90
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-135 mdi-account"></i>{" "}
                        mdi-rotate-135
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-180 mdi-account"></i>{" "}
                        mdi-rotate-180
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-225 mdi-account"></i>{" "}
                        mdi-rotate-225
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-270 mdi-account"></i>{" "}
                        mdi-rotate-270
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-rotate-315 mdi-account"></i>{" "}
                        mdi-rotate-315
                      </Col>
                    </Row>
                  </Card>
                </CardBody>
              </Card>
            </div>
          </Row>

          <Row>
            <div className="col-12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Spin</h4>

                  <Card className="icon-demo-content">
                    <Row>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spin mdi-loading"></i> mdi-spin
                      </Col>
                      <Col xl={3} lg={4} sm={6}>
                        <i className="mdi mdi-spin mdi-star"></i> mdi-spin
                      </Col>
                    </Row>
                  </Card>
                </CardBody>
              </Card>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default IconMaterial;
