import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

class IconFontAwesome extends Component {
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
                                <h4 className="font-size-18">Font Awesome</h4>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="/#">Veltrix</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/#">Icons</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Font Awesome</li>
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
                                    <p className="card-title-desc mb-2">Use <code>&lt;i class="fab fa-500px"&gt;&lt;/i&gt;</code> <span className="badge badge-success">v 5.8.1</span>.</p>

                                    <div className="row icon-demo-content">
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-500px"></i> fab fa-500px
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-accessible-icon"></i> fab fa-accessible-icon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-accusoft"></i> fab fa-accusoft
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-acquisitions-incorporated"></i> fab fa-acquisitions-incorporated
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ad"></i> fas fa-ad
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-address-book"></i> fas fa-address-book
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-address-book"></i> fas fa-address-book
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-address-card"></i> fas fa-address-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-address-card"></i> fas fa-address-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-adjust"></i> fas fa-adjust
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-adn"></i> fab fa-adn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-adobe"></i> fab fa-adobe
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-adversal"></i> fab fa-adversal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-affiliatetheme"></i> fab fa-affiliatetheme
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-air-freshener"></i> fas fa-air-freshener
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-airbnb"></i> fab fa-airbnb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-algolia"></i> fab fa-algolia
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-align-center"></i> fas fa-align-center
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-align-justify"></i> fas fa-align-justify
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-align-left"></i> fas fa-align-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-align-right"></i> fas fa-align-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-alipay"></i> fab fa-alipay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-allergies"></i> fas fa-allergies
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-amazon"></i> fab fa-amazon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-amazon-pay"></i> fab fa-amazon-pay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ambulance"></i> fas fa-ambulance
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-american-sign-language-interpreting"></i> fas fa-american-sign-language-interpreting
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-amilia"></i> fab fa-amilia
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-anchor"></i> fas fa-anchor
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-android"></i> fab fa-android
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-angellist"></i> fab fa-angellist
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-double-down"></i> fas fa-angle-double-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-double-left"></i> fas fa-angle-double-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-double-right"></i> fas fa-angle-double-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-double-up"></i> fas fa-angle-double-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-down"></i> fas fa-angle-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-left"></i> fas fa-angle-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-right"></i> fas fa-angle-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angle-up"></i> fas fa-angle-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angry"></i> fas fa-angry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-angry"></i> fas fa-angry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-angrycreative"></i> fab fa-angrycreative
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-angular"></i> fab fa-angular
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ankh"></i> fas fa-ankh
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-app-store"></i> fab fa-app-store
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-app-store-ios"></i> fab fa-app-store-ios
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-apper"></i> fab fa-apper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-apple"></i> fab fa-apple
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-apple-alt"></i> fas fa-apple-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-apple-pay"></i> fab fa-apple-pay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-archive"></i> fas fa-archive
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-archive"></i> fas fa-archive
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-alt-circle-down"></i> fas fa-arrow-alt-circle-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-arrow-alt-circle-down"></i> far fa-arrow-alt-circle-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-alt-circle-left"></i> fas fa-arrow-alt-circle-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-arrow-alt-circle-left"></i> far fa-arrow-alt-circle-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-alt-circle-right"></i> fas fa-arrow-alt-circle-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-arrow-alt-circle-right"></i> far fa-arrow-alt-circle-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-alt-circle-up"></i> fas fa-arrow-alt-circle-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-arrow-alt-circle-up"></i> far fa-arrow-alt-circle-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-circle-down"></i> fas fa-arrow-circle-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-circle-left"></i> fas fa-arrow-circle-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-circle-right"></i> fas fa-arrow-circle-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-circle-up"></i> fas fa-arrow-circle-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-down"></i> fas fa-arrow-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-left"></i> fas fa-arrow-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-right"></i> fas fa-arrow-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrow-up"></i> fas fa-arrow-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrows-alt"></i> fas fa-arrows-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrows-alt-h"></i> fas fa-arrows-alt-h
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-arrows-alt-v"></i> fas fa-arrows-alt-v
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-artstation"></i> fab fa-artstation
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-assistive-listening-systems"></i> fas fa-assistive-listening-systems
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-asterisk"></i> fas fa-asterisk
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-asymmetrik"></i> fab fa-asymmetrik
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-at"></i> fas fa-at
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-atlas"></i> fas fa-atlas
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-atlassian"></i> fab fa-atlassian
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-atom"></i> fas fa-atom
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-audible"></i> fab fa-audible
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-audio-description"></i> fas fa-audio-description
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-autoprefixer"></i> fab fa-autoprefixer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-avianex"></i> fab fa-avianex
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-aviato"></i> fab fa-aviato
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-award"></i> fas fa-award
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-aws"></i> fab fa-aws
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-baby"></i> fas fa-baby
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-baby-carriage"></i> fas fa-baby-carriage
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-backspace"></i> fas fa-backspace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-backward"></i> fas fa-backward
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bacon"></i> fas fa-bacon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-balance-scale"></i> fas fa-balance-scale
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ban"></i> fas fa-ban
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-band-aid"></i> fas fa-band-aid
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bandcamp"></i> fab fa-bandcamp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-barcode"></i> fas fa-barcode
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bars"></i> fas fa-bars
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-baseball-ball"></i> fas fa-baseball-ball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-basketball-ball"></i> fas fa-basketball-ball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bath"></i> fas fa-bath
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-battery-empty"></i> fas fa-battery-empty
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-battery-full"></i> fas fa-battery-full
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-battery-half"></i> fas fa-battery-half
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-battery-quarter"></i> fas fa-battery-quarter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-battery-three-quarters"></i> fas fa-battery-three-quarters
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-battle-net"></i> fab fa-battle-net
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bed"></i> fas fa-bed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-beer"></i> fas fa-beer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-behance"></i> fab fa-behance
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-behance-square"></i> fab fa-behance-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bell"></i> fas fa-bell
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-bell"></i> far fa-bell
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bell-slash"></i> fas fa-bell-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-bell-slash"></i> far fa-bell-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bezier-curve"></i> fas fa-bezier-curve
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bible"></i> fas fa-bible
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bicycle"></i> fas fa-bicycle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bimobject"></i> fab fa-bimobject
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-binoculars"></i> fas fa-binoculars
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-biohazard"></i> fas fa-biohazard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-birthday-cake"></i> fas fa-birthday-cake
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bitbucket"></i> fab fa-bitbucket
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bitcoin"></i> fab fa-bitcoin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bity"></i> fab fa-bity
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-black-tie"></i> fab fa-black-tie
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-blackberry"></i> fab fa-blackberry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-blender"></i> fas fa-blender
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-blender-phone"></i> fas fa-blender-phone
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-blind"></i> fas fa-blind
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-blog"></i> fas fa-blog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-blogger"></i> fab fa-blogger
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-blogger-b"></i> fab fa-blogger-b
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bluetooth"></i> fab fa-bluetooth
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bluetooth-b"></i> fab fa-bluetooth-b
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bold"></i> fas fa-bold
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bolt"></i> fas fa-bolt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bomb"></i> fas fa-bomb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bone"></i> fas fa-bone
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bong"></i> fas fa-bong
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-book"></i> fas fa-book
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-book-dead"></i> fas fa-book-dead
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-book-medical"></i> fas fa-book-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-book-open"></i> fas fa-book-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-book-reader"></i> fas fa-book-reader
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bookmark"></i> fas fa-bookmark
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-bookmark"></i> far fa-bookmark
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-bootstrap"></i> fab fa-bootstrap
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bowling-ball"></i> fas fa-bowling-ball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-box"></i> fas fa-box
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-box-open"></i> fas fa-box-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-boxes"></i> fas fa-boxes
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-braille"></i> fas fa-braille
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-brain"></i> fas fa-brain
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bread-slice"></i> fas fa-bread-slice
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-briefcase"></i> fas fa-briefcase
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-briefcase-medical"></i> fas fa-briefcase-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-broadcast-tower"></i> fas fa-broadcast-tower
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-broom"></i> fas fa-broom
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-brush"></i> fas fa-brush
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-btc"></i> fab fa-btc
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-buffer"></i> fab fa-buffer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bug"></i> fas fa-bug
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-building"></i> fas fa-building
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-building"></i> fas fa-building
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bullhorn"></i> fas fa-bullhorn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bullseye"></i> fas fa-bullseye
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-burn"></i> fas fa-burn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-buromobelexperte"></i> fab fa-buromobelexperte
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bus"></i> fas fa-bus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-bus-alt"></i> fas fa-bus-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-business-time"></i> fas fa-business-time
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-buysellads"></i> fab fa-buysellads
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calculator"></i> fas fa-calculator
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar"></i> fas fa-calendar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar"></i> fas fa-calendar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-alt"></i> fas fa-calendar-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-alt"></i> fas fa-calendar-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-check"></i> fas fa-calendar-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-calendar-check"></i> far fa-calendar-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-day"></i> fas fa-calendar-day
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-minus"></i> fas fa-calendar-minus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-calendar-minus"></i> far fa-calendar-minus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-plus"></i> fas fa-calendar-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-calendar-plus"></i> far fa-calendar-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-times"></i> fas fa-calendar-times
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-calendar-times"></i> far fa-calendar-times
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-calendar-week"></i> fas fa-calendar-week
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-camera"></i> fas fa-camera
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-camera-retro"></i> fas fa-camera-retro
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-campground"></i> fas fa-campground
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-canadian-maple-leaf"></i> fab fa-canadian-maple-leaf
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-candy-cane"></i> fas fa-candy-cane
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cannabis"></i> fas fa-cannabis
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-capsules"></i> fas fa-capsules
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-car"></i> fas fa-car
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-car-alt"></i> fas fa-car-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-car-alt"></i> fas fa-car-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-car-crash"></i> fas fa-car-crash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-car-side"></i> fas fa-car-side
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-down"></i> fas fa-caret-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-left"></i> fas fa-caret-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-right"></i> fas fa-caret-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-square-down"></i> fas fa-caret-square-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-caret-square-down"></i> far fa-caret-square-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-square-left"></i> fas fa-caret-square-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-caret-square-left"></i> far fa-caret-square-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-square-right"></i> fas fa-caret-square-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-caret-square-right"></i> far fa-caret-square-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-square-up"></i> fas fa-caret-square-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-caret-square-up"></i> far fa-caret-square-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-caret-up"></i> fas fa-caret-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-carrot"></i> fas fa-carrot
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cart-arrow-down"></i> fas fa-cart-arrow-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cart-plus"></i> fas fa-cart-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cash-register"></i> fas fa-cash-register
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cat"></i> fas fa-cat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-amazon-pay"></i> fab fa-cc-amazon-pay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-amex"></i> fab fa-cc-amex
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-apple-pay"></i> fab fa-cc-apple-pay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-diners-club"></i> fab fa-cc-diners-club
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-discover"></i> fab fa-cc-discover
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-jcb"></i> fab fa-cc-jcb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-mastercard"></i> fab fa-cc-mastercard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-paypal"></i> fab fa-cc-paypal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-stripe"></i> fab fa-cc-stripe
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cc-visa"></i> fab fa-cc-visa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-centercode"></i> fab fa-centercode
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-centos"></i> fab fa-centos
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-certificate"></i> fas fa-certificate
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chair"></i> fas fa-chair
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chalkboard"></i> fas fa-chalkboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chalkboard-teacher"></i> fas fa-chalkboard-teacher
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chalkboard-teacher"></i> fas fa-chalkboard-teacher
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chart-area"></i> fas fa-chart-area
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chart-bar"></i> fas fa-chart-bar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chart-bar"></i> fas fa-chart-bar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chart-line"></i> fas fa-chart-line
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chart-pie"></i> fas fa-chart-pie
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-check"></i> fas fa-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-check-circle"></i> fas fa-check-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-check-circle"></i> fas fa-check-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-check-double"></i> fas fa-check-double
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-check-square"></i> fas fa-check-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-check-square"></i> fas fa-check-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cheese"></i> fas fa-cheese
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess"></i> fas fa-chess
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-bishop"></i> fas fa-chess-bishop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-board"></i> fas fa-chess-board
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-king"></i> fas fa-chess-king
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-knight"></i> fas fa-chess-knight
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-pawn"></i> fas fa-chess-pawn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-pawn"></i> fas fa-chess-pawn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chess-rook"></i> fas fa-chess-rook
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-circle-down"></i> fas fa-chevron-circle-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-circle-left"></i> fas fa-chevron-circle-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-circle-right"></i> fas fa-chevron-circle-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-circle-up"></i> fas fa-chevron-circle-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-down"></i> fas fa-chevron-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-left"></i> fas fa-chevron-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-right"></i> fas fa-chevron-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-chevron-up"></i> fas fa-chevron-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-child"></i> fas fa-child
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-chrome"></i> fab fa-chrome
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-chromecast"></i> fab fa-chromecast
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-church"></i> fas fa-church
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-circle"></i> fas fa-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-circle"></i> fas fa-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-circle-notch"></i> fas fa-circle-notch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-city"></i> fas fa-city
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clinic-medical"></i> fas fa-clinic-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clipboard"></i> fas fa-clipboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clipboard"></i> fas fa-clipboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clipboard-check"></i> fas fa-clipboard-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clipboard-list"></i> fas fa-clipboard-list
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clock"></i> fas fa-clock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-clock"></i> far fa-clock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-clone"></i> fas fa-clone
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-clone"></i> far fa-clone
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-closed-captioning"></i> fas fa-closed-captioning
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-closed-captioning"></i> far fa-closed-captioning
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud"></i> fas fa-cloud
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-download-alt"></i> fas fa-cloud-download-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-meatball"></i> fas fa-cloud-meatball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-moon"></i> fas fa-cloud-moon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-moon-rain"></i> fas fa-cloud-moon-rain
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-rain"></i> fas fa-cloud-rain
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-showers-heavy"></i> fas fa-cloud-showers-heavy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-sun"></i> fas fa-cloud-sun
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-sun-rain"></i> fas fa-cloud-sun-rain
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cloud-upload-alt"></i> fas fa-cloud-upload-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cloudscale"></i> fab fa-cloudscale
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cloudsmith"></i> fab fa-cloudsmith
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cloudversify"></i> fab fa-cloudversify
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cocktail"></i> fas fa-cocktail
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-code"></i> fas fa-code
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-code-branch"></i> fas fa-code-branch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-codepen"></i> fab fa-codepen
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-codiepie"></i> fab fa-codiepie
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-coffee"></i> fas fa-coffee
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cog"></i> fas fa-cog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cogs"></i> fas fa-cogs
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-coins"></i> fas fa-coins
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-columns"></i> fas fa-columns
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comment"></i> fas fa-comment
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-comment"></i> far fa-comment
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comment-alt"></i> fas fa-comment-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-comment-alt"></i> far fa-comment-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comment-dollar"></i> fas fa-comment-dollar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comment-dots"></i> fas fa-comment-dots
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-comment-dots"></i> far fa-comment-dots
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comment-medical"></i> fas fa-comment-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comment-slash"></i> fas fa-comment-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comments"></i> fas fa-comments
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-comments"></i> far fa-comments
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-comments-dollar"></i> fas fa-comments-dollar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-compact-disc"></i> fas fa-compact-disc
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-compass"></i> fas fa-compass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-compass"></i> far fa-compass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-compress"></i> fas fa-compress
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-compress-arrows-alt"></i> fas fa-compress-arrows-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-concierge-bell"></i> fas fa-concierge-bell
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-confluence"></i> fab fa-confluence
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-connectdevelop"></i> fab fa-connectdevelop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-contao"></i> fab fa-contao
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cookie"></i> fas fa-cookie
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cookie-bite"></i> fas fa-cookie-bite
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-copy"></i> fas fa-copy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-copy"></i> far fa-copy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-copyright"></i> fas fa-copyright
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-copyright"></i> far fa-copyright
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-couch"></i> fas fa-couch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cpanel"></i> fab fa-cpanel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons"></i> fab fa-creative-commons
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-by"></i> fab fa-creative-commons-by
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-nc"></i> fab fa-creative-commons-nc
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-nc-eu"></i> fab fa-creative-commons-nc-eu
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-nc-jp"></i> fab fa-creative-commons-nc-jp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-nd"></i> fab fa-creative-commons-nd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-pd"></i> fab fa-creative-commons-pd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-pd-alt"></i> fab fa-creative-commons-pd-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-remix"></i> fab fa-creative-commons-remix
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-sa"></i> fab fa-creative-commons-sa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-sampling"></i> fab fa-creative-commons-sampling
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-sampling-plus"></i> fab fa-creative-commons-sampling-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-share"></i> fab fa-creative-commons-share
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-creative-commons-zero"></i> fab fa-creative-commons-zero
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-credit-card"></i> fas fa-credit-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-credit-card"></i> fas fa-credit-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-critical-role"></i> fab fa-critical-role
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-crop"></i> fas fa-crop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-crop-alt"></i> fas fa-crop-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cross"></i> fas fa-cross
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-crosshairs"></i> fas fa-crosshairs
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-crow"></i> fas fa-crow
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-crown"></i> fas fa-crown
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-crutch"></i> fas fa-crutch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-css3"></i> fab fa-css3
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-css3-alt"></i> fab fa-css3-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cube"></i> fas fa-cube
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cubes"></i> fas fa-cubes
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-cut"></i> fas fa-cut
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-cuttlefish"></i> fab fa-cuttlefish
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-d-and-d"></i> fab fa-d-and-d
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-d-and-d-beyond"></i> fab fa-d-and-d-beyond
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-d-and-d-beyond"></i> fab fa-d-and-d-beyond
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-database"></i> fas fa-database
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-deaf"></i> fas fa-deaf
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-delicious"></i> fab fa-delicious
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-democrat"></i> fas fa-democrat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-deploydog"></i> fab fa-deploydog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-deskpro"></i> fab fa-deskpro
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-desktop"></i> fas fa-desktop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dev"></i> fab fa-dev
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-deviantart"></i> fab fa-deviantart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dharmachakra"></i> fas fa-dharmachakra
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dhl"></i> fab fa-dhl
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-diagnoses"></i> fas fa-diagnoses
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-diaspora"></i> fab fa-diaspora
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice"></i> fas fa-dice
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-d20"></i> fas fa-dice-d20
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-d6"></i> fas fa-dice-d6
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-five"></i> fas fa-dice-five
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-four"></i> fas fa-dice-four
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-one"></i> fas fa-dice-one
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-six"></i> fas fa-dice-six
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-three"></i> fas fa-dice-three
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dice-two"></i> fas fa-dice-two
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-digg"></i> fab fa-digg
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-digital-ocean"></i> fab fa-digital-ocean
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-digital-tachograph"></i> fas fa-digital-tachograph
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-directions"></i> fas fa-directions
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-discord"></i> fab fa-discord
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-discourse"></i> fab fa-discourse
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-divide"></i> fas fa-divide
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dizzy"></i> fas fa-dizzy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dizzy"></i> fas fa-dizzy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dna"></i> fas fa-dna
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dochub"></i> fab fa-dochub
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-docker"></i> fab fa-docker
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dog"></i> fas fa-dog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dollar-sign"></i> fas fa-dollar-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dolly"></i> fas fa-dolly
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dolly-flatbed"></i> fas fa-dolly-flatbed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-donate"></i> fas fa-donate
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-door-closed"></i> fas fa-door-closed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-door-open"></i> fas fa-door-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dot-circle"></i> fas fa-dot-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-dot-circle"></i> far fa-dot-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dove"></i> fas fa-dove
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-download"></i> fas fa-download
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-draft2digital"></i> fab fa-draft2digital
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-drafting-compass"></i> fas fa-drafting-compass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dragon"></i> fas fa-dragon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-draw-polygon"></i> fas fa-draw-polygon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dribbble"></i> fab fa-dribbble
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dribbble-square"></i> fab fa-dribbble-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dropbox"></i> fab fa-dropbox
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-drum"></i> fas fa-drum
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-drum-steelpan"></i> fas fa-drum-steelpan
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-drumstick-bite"></i> fas fa-drumstick-bite
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-drupal"></i> fab fa-drupal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dumbbell"></i> fas fa-dumbbell
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dumpster"></i> fas fa-dumpster
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dumpster-fire"></i> fas fa-dumpster-fire
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-dungeon"></i> fas fa-dungeon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-dyalog"></i> fab fa-dyalog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-earlybirds"></i> fab fa-earlybirds
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ebay"></i> fab fa-ebay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-edge"></i> fab fa-edge
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-edit"></i> fas fa-edit
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-edit"></i> far fa-edit
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-egg"></i> fas fa-egg
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-egg"></i> fas fa-egg
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-elementor"></i> fab fa-elementor
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ellipsis-h"></i> fas fa-ellipsis-h
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ellipsis-v"></i> fas fa-ellipsis-v
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ello"></i> fab fa-ello
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ember"></i> fab fa-ember
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-empire"></i> fab fa-empire
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope"></i> fas fa-envelope
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope"></i> fas fa-envelope
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope-open"></i> fas fa-envelope-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope-open"></i> fas fa-envelope-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope-open-text"></i> fas fa-envelope-open-text
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope-square"></i> fas fa-envelope-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-envelope-square"></i> fas fa-envelope-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-equals"></i> fas fa-equals
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-eraser"></i> fas fa-eraser
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-erlang"></i> fab fa-erlang
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ethereum"></i> fab fa-ethereum
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ethernet"></i> fas fa-ethernet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-etsy"></i> fab fa-etsy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-euro-sign"></i> fas fa-euro-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-evernote"></i> fab fa-evernote
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-exchange-alt"></i> fas fa-exchange-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-exclamation"></i> fas fa-exclamation
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-exclamation-circle"></i> fas fa-exclamation-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-exclamation-triangle"></i> fas fa-exclamation-triangle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-expand"></i> fas fa-expand
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-expand-arrows-alt"></i> fas fa-expand-arrows-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-expeditedssl"></i> fab fa-expeditedssl
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-external-link-alt"></i> fas fa-external-link-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-external-link-square-alt"></i> fas fa-external-link-square-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-eye"></i> fas fa-eye
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-eye"></i> far fa-eye
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-eye-dropper"></i> fas fa-eye-dropper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-eye-slash"></i> fas fa-eye-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-eye-slash"></i> far fa-eye-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-facebook"></i> fab fa-facebook
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-facebook-f"></i> fab fa-facebook-f
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-facebook-messenger"></i> fab fa-facebook-messenger
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-facebook-square"></i> fab fa-facebook-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fantasy-flight-games"></i> fab fa-fantasy-flight-games
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fast-backward"></i> fas fa-fast-backward
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fast-forward"></i> fas fa-fast-forward
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fax"></i> fas fa-fax
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-feather"></i> fas fa-feather
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-feather-alt"></i> fas fa-feather-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fedex"></i> fab fa-fedex
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fedora"></i> fab fa-fedora
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-female"></i> fas fa-female
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fighter-jet"></i> fas fa-fighter-jet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-figma"></i> fab fa-figma
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file"></i> fas fa-file
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file"></i> far fa-file
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-alt"></i> fas fa-file-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-alt"></i> far fa-file-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-archive"></i> fas fa-file-archive
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-archive"></i> far fa-file-archive
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-audio"></i> fas fa-file-audio
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-audio"></i> far fa-file-audio
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-code"></i> fas fa-file-code
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-code"></i> far fa-file-code
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-contract"></i> fas fa-file-contract
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-csv"></i> fas fa-file-csv
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-download"></i> fas fa-file-download
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-excel"></i> fas fa-file-excel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-excel"></i> far fa-file-excel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-export"></i> fas fa-file-export
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-image"></i> fas fa-file-image
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-image"></i> far fa-file-image
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-import"></i> fas fa-file-import
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-invoice"></i> fas fa-file-invoice
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-invoice-dollar"></i> fas fa-file-invoice-dollar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-medical"></i> fas fa-file-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-medical-alt"></i> fas fa-file-medical-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-pdf"></i> fas fa-file-pdf
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-pdf"></i> far fa-file-pdf
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-powerpoint"></i> fas fa-file-powerpoint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-powerpoint"></i> far fa-file-powerpoint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-prescription"></i> fas fa-file-prescription
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-signature"></i> fas fa-file-signature
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-upload"></i> fas fa-file-upload
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-video"></i> fas fa-file-video
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-file-video"></i> far fa-file-video
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-word"></i> fas fa-file-word
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-file-word"></i> fas fa-file-word
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fill"></i> fas fa-fill
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fill-drip"></i> fas fa-fill-drip
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-film"></i> fas fa-film
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-filter"></i> fas fa-filter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fingerprint"></i> fas fa-fingerprint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fire"></i> fas fa-fire
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fire-alt"></i> fas fa-fire-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fire-extinguisher"></i> fas fa-fire-extinguisher
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-firefox"></i> fab fa-firefox
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-first-aid"></i> fas fa-first-aid
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-first-order"></i> fab fa-first-order
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-first-order-alt"></i> fab fa-first-order-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-firstdraft"></i> fab fa-firstdraft
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fish"></i> fas fa-fish
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-fist-raised"></i> fas fa-fist-raised
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flag"></i> fas fa-flag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-flag"></i> far fa-flag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flag-checkered"></i> fas fa- flag-checkered
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flag-usa"></i> fas fa-flag-usa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flag-usa"></i> fas fa-flag-usa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flask"></i> fas fa-flask
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flask"></i> fas fa-flask
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-flickr"></i> fab fa-flickr
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-flipboard"></i> fab fa-flipboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-flushed"></i> fas fa-flushed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-flushed"></i> far fa-flushed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fly"></i> fab fa-fly
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-folder"></i> fas fa-folder
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-folder"></i> far fa-folder
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-folder-minus"></i> fas fa-folder-minus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-folder-open"></i> fas fa-folder-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-folder-open"></i> far fa-folder-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-folder-plus"></i> fas fa-folder-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-font"></i> fas fa-font
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-font-awesome"></i> fab fa-font-awesome
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-font-awesome"></i> fab fa-font-awesome
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-font-awesome-flag"></i> fab fa-font-awesome-flag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fonticons"></i> fab fa-fonticons
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fonticons-fi"></i> fab fa-fonticons-fi
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-football-ball"></i> fas fa-football-ball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fort-awesome"></i> fab fa-fort-awesome
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fort-awesome-alt"></i> fab fa-fort-awesome-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-forumbee"></i> fab fa-forumbee
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-forward"></i> fas fa-forward
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-foursquare"></i> fab fa-foursquare
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-free-code-camp"></i> fab fa-free-code-camp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-freebsd"></i> fab fa-freebsd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-frog"></i> fas fa-frog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-frown"></i> fas fa-frown
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-frown"></i> fas fa-frown
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-frown-open"></i> fas fa-frown-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-frown-open"></i> fas fa-frown-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-fulcrum"></i> fab fa-fulcrum
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-funnel-dollar"></i> fas fa-funnel-dollar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-futbol"></i> fas fa-futbol
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-futbol"></i> far fa-futbol
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-galactic-republic"></i> fab fa-galactic-republic
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-galactic-senate"></i> fab fa-galactic-senate
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gamepad"></i> fas fa-gamepad
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gas-pump"></i> fas fa-gas-pump
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gavel"></i> fas fa-gavel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gem"></i> fas fa-gem
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-gem"></i> far fa-gem
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-genderless"></i> fas fa-genderless
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-get-pocket"></i> fab fa-get-pocket
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gg"></i> fab fa-gg
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gg-circle"></i> fab fa-gg-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ghost"></i> fas fa-ghost
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gift"></i> fas fa-gift
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gifts"></i> fas fa-gifts
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-git"></i> fab fa-git
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-git-square"></i> fab fa-git-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-github"></i> fab fa-github
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-github-alt"></i> fab fa-github-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-github-square"></i> fab fa-github-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gitkraken"></i> fab fa-gitkraken
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gitlab"></i> fab fa-gitlab
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gitter"></i> fab fa-gitter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-glass-cheers"></i> fas fa-glass-cheers
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-glass-martini"></i> fas fa-glass-martini
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-glass-martini-alt"></i> fas fa-glass-martini-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-glass-whiskey"></i> fas fa-glass-whiskey
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-glasses"></i> fas fa-glasses
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-glide"></i> fab fa-glide
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-glide-g"></i> fab fa-glide-g
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-globe"></i> fas fa-globe
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-globe-africa"></i> fas fa-globe-africa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-globe-americas"></i> fas fa-globe-americas
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-globe-asia"></i> fas fa-globe-asia
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-globe-europe"></i> fas fa-globe-europe
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gofore"></i> fab fa-gofore
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-golf-ball"></i> fas fa-golf-ball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-goodreads"></i> fab fa-goodreads
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-goodreads-g"></i> fab fa-goodreads-g
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google"></i> fab fa-google
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google-drive"></i> fab fa-google-drive
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google-play"></i> fab fa-google-play
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google-plus"></i> fab fa-google-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google-plus-g"></i> fab fa-google-plus-g
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google-plus-square"></i> fab fa-google-plus-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-google-wallet"></i> fab fa-google-wallet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-gopuram"></i> fas fa-gopuram
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-graduation-cap"></i> fas fa-graduation-cap
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gratipay"></i> fab fa-gratipay
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-grav"></i> fab fa-grav
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-greater-than"></i> fas fa-greater-than
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-greater-than-equal"></i> fas fa-greater-than-equal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grimace"></i> fas fa-grimace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grimace"></i> far fa-grimace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin"></i> fas fa-grin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin"></i> far fa-grin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-alt"></i> fas fa-grin-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-alt"></i> far fa-grin-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-beam"></i> fas fa-grin-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-beam"></i> far fa-grin-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-beam-sweat"></i> fas fa-grin-beam-sweat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-beam-sweat"></i> far fa-grin-beam-sweat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-hearts"></i> fas fa-grin-hearts
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-hearts"></i> far fa-grin-hearts
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-squint"></i> fas fa-grin-squint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-squint"></i> far fa-grin-squint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-squint-tears"></i> fas fa-grin-squint-tears
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-squint-tears"></i> far fa-grin-squint-tears
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-stars"></i> fas fa-grin-stars
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-stars"></i> far fa-grin-stars
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-tears"></i> fas fa-grin-tears
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-tears"></i> far fa-grin-tears
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-tongue"></i> fas fa-grin-tongue
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-tongue"></i> far fa-grin-tongue
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-tongue-squint"></i> fas fa-grin-tongue-squint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-tongue-squint"></i> far fa-grin-tongue-squint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-tongue-wink"></i> fas fa-grin-tongue-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-tongue-wink"></i> far fa-grin-tongue-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grin-wink"></i> fas fa-grin-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-grin-wink"></i> far fa-grin-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grip-horizontal"></i> fas fa-grip-horizontal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grip-lines"></i> fas fa-grip-lines
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grip-lines-vertical"></i> fas fa-grip-lines-vertical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-grip-vertical"></i> fas fa-grip-vertical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gripfire"></i> fab fa-gripfire
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-grunt"></i> fab fa-grunt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-guitar"></i> fas fa-guitar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-gulp"></i> fab fa-gulp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-h-square"></i> fas fa-h-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hacker-news"></i> fab fa-hacker-news
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hacker-news-square"></i> fab fa-hacker-news-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hackerrank"></i> fab fa-hackerrank
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hamburger"></i> fas fa-hamburger
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hammer"></i> fas fa-hammer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hamsa"></i> fas fa-hamsa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-holding"></i> fas fa-hand-holding
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-holding-heart"></i> fas fa-hand-holding-heart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-holding-usd"></i> fas fa-hand-holding-usd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-lizard"></i> fas fa-hand-lizard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-lizard"></i> fas fa-hand-lizard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-middle-finger"></i> fas fa-hand-middle-finger
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-paper"></i> fas fa-hand-paper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-paper"></i> far fa-hand-paper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-peace"></i> fas fa-hand-peace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-peace"></i> far fa-hand-peace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-point-down"></i> fas fa-hand-point-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-point-down"></i> far fa-hand-point-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-point-left"></i> fas fa-hand-point-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-point-left"></i> far fa-hand-point-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-point-right"></i> fas fa-hand-point-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-point-right"></i> far fa-hand-point-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-point-up"></i> fas fa-hand-point-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-point-up"></i> far fa-hand-point-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-pointer"></i> fas fa-hand-pointer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-pointer"></i> far fa-hand-pointer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-rock"></i> fas fa-hand-rock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-rock"></i> far fa-hand-rock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-scissors"></i> fas fa-hand-scissors
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-scissors"></i> far fa-hand-scissors
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hand-spock"></i> fas fa-hand-spock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hand-spock"></i> far fa-hand-spock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hands"></i> fas fa-hands
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hands-helping"></i> fas fa-hands-helping
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-handshake"></i> fas fa-handshake
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-handshake"></i> far fa-handshake
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hanukiah"></i> fas fa-hanukiah
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hard-hat"></i> fas fa-hard-hat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hashtag"></i> fas fa-hashtag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hat-wizard"></i> fas fa-hat-wizard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-haykal"></i> fas fa-haykal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hdd"></i> fas fa-hdd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-heading"></i> fas fa-heading
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-headphones"></i> fas fa-headphones
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-headphones-alt"></i> fas fa-headphones-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-headset"></i> fas fa-headset
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-heart"></i> fas fa-heart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-heart"></i> far fa-heart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-heart-broken"></i> fas fa-heart-broken
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-heartbeat"></i> fas fa-heartbeat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-helicopter"></i> fas fa-helicopter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-highlighter"></i> fas fa-highlighter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hiking"></i> fas fa-hiking
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hippo"></i> fas fa-hippo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hips"></i> fab fa-hips
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hire-a-helper"></i> fab fa-hire-a-helper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-history"></i> fas fa-history
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hockey-puck"></i> fas fa-hockey-puck
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-holly-berry"></i> fas fa-holly-berry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-home"></i> fas fa-home
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hooli"></i> fab fa-hooli
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hornbill"></i> fab fa-hornbill
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-horse"></i> fas fa-horse
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-horse-head"></i> fas fa-horse-head
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hospital"></i> fas fa-hospital
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hospital"></i> far fa-hospital
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hospital-symbol"></i> fas fa-hospital-symbol
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hot-tub"></i> fas fa-hot-tub
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hotdog"></i> fas fa-hotdog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hotel"></i> fas fa-hotel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hotjar"></i> fab fa-hotjar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hourglass"></i> fas fa-hourglass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-hourglass"></i> far fa-hourglass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hourglass-end"></i> fas fa-hourglass-end
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hourglass-half"></i> fas fa-hourglass-half
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hourglass-start"></i> fas fa-hourglass-start
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-house-damage"></i> fas fa-house-damage
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-houzz"></i> fab fa-houzz
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-hryvnia"></i> fas fa-hryvnia
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-html5"></i> fab fa-html5
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-hubspot"></i> fab fa-hubspot
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-i-cursor"></i> fas fa-i-cursor
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ice-cream"></i> fas fa-ice-cream
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-icicles"></i> fas fa-icicles
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-id-badge"></i> fas fa-id-badge
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-id-badge"></i> fas fa-id-badge
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-id-card"></i> fas fa-id-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-id-card"></i> far fa-id-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-id-card-alt"></i> fas fa-id-card-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-igloo"></i> fas fa-igloo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-image"></i> fas fa-image
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-image"></i> far fa-image
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-images"></i> fas fa-images
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-images"></i> far fa-images
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-imdb"></i> fab fa-imdb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-inbox"></i> fas fa-inbox
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-indent"></i> fas fa-indent
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-industry"></i> fas fa-industry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-infinity"></i> fas fa-infinity
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-info"></i> fas fa-info
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-info-circle"></i> fas fa-info-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-instagram"></i> fab fa-instagram
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-intercom"></i> fab fa-intercom
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-internet-explorer"></i> fab fa-internet-explorer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-invision"></i> fab fa-invision
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ioxhost"></i> fab fa-ioxhost
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-italic"></i> fas fa-italic
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-itch-io"></i> fab fa-itch-io
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-itunes"></i> fab fa-itunes
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-itunes-note"></i> fab fa-itunes-note
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-java"></i> fab fa-java
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-jedi"></i> fas fa-jedi
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-jedi-order"></i> fab fa-jedi-order
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-jenkins"></i> fab fa-jenkins
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-jira"></i> fab fa-jira
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-joget"></i> fab fa-joget
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-joint"></i> fas fa-joint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-joomla"></i> fab fa-joomla
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-journal-whills"></i> fas fa-journal-whills
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-js"></i> fab fa-js
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-js-square"></i> fab fa-js-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-jsfiddle"></i> fab fa-jsfiddle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-kaaba"></i> fas fa-kaaba
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-kaggle"></i> fab fa-kaggle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-key"></i> fas fa-key
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-keybase"></i> fab fa-keybase
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-keyboard"></i> fas fa-keyboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-keyboard"></i> fas fa-keyboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-keycdn"></i> fab fa-keycdn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-khanda"></i> fas fa-khanda
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-kickstarter"></i> fab fa-kickstarter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-kickstarter-k"></i> fab fa-kickstarter-k
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-kiss"></i> fas fa-kiss
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-kiss"></i> far fa-kiss
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-kiss-beam"></i> fas fa-kiss-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-kiss-beam"></i> far fa-kiss-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-kiss-wink-heart"></i> fas fa-kiss-wink-heart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-kiss-wink-heart"></i> far fa-kiss-wink-heart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-kiwi-bird"></i> fas fa-kiwi-bird
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-korvue"></i> fab fa-korvue
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-landmark"></i> fas fa-landmark
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-language"></i> fas fa-language
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laptop"></i> fas fa-laptop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laptop-code"></i> fas fa-laptop-code
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laptop-medical"></i> fas fa-laptop-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-laravel"></i> fab fa-laravel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-lastfm"></i> fab fa-lastfm
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-lastfm-square"></i> fab fa-lastfm-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laugh"></i> fas fa-laugh
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-laugh"></i> far fa-laugh
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laugh-beam"></i> fas fa-laugh-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-laugh-beam"></i> far fa-laugh-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laugh-squint"></i> fas fa-laugh-squint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-laugh-squint"></i> far fa-laugh-squint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-laugh-wink"></i> fas fa-laugh-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-laugh-wink"></i> far fa-laugh-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-layer-group"></i> fas fa-layer-group
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-leaf"></i> fas fa-leaf
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-leanpub"></i> fab fa-leanpub
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-lemon"></i> fas fa-lemon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-lemon"></i> far fa-lemon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-less"></i> fab fa-less
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-less-than"></i> fas fa-less-than
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-less-than-equal"></i> fas fa-less-than-equal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-level-down-alt"></i> fas fa-level-down-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-level-up-alt"></i> fas fa-level-up-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-life-ring"></i> fas fa-life-ring
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-life-ring"></i> far fa-life-ring
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-lightbulb"></i> fas fa-lightbulb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-lightbulb"></i> far fa-lightbulb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-line"></i> fab fa-line
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-link"></i> fas fa-link
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-linkedin"></i> fab fa-linkedin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-linkedin-in"></i> fab fa-linkedin-in
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-linode"></i> fab fa-linode
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-linux"></i> fab fa-linux
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-lira-sign"></i> fas fa-lira-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-list"></i> fas fa-list
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-list-alt"></i> fas fa-list-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-list-alt"></i> fas fa-list-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-list-ol"></i> fas fa-list-ol
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-list-ul"></i> fas fa-list-ul
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-location-arrow"></i> fas fa-location-arrow
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-lock"></i> fas fa-lock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-lock-open"></i> fas fa-lock-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-long-arrow-alt-down"></i> fas fa-long-arrow-alt-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-long-arrow-alt-left"></i> fas fa-long-arrow-alt-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-long-arrow-alt-right"></i> fas fa-long-arrow-alt-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-long-arrow-alt-up"></i> fas fa-long-arrow-alt-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-low-vision"></i> fas fa-low-vision
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-luggage-cart"></i> fas fa-luggage-cart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-lyft"></i> fab fa-lyft
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-magento"></i> fab fa-magento
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-magic"></i> fas fa-magic
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-magnet"></i> fas fa-magnet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mail-bulk"></i> fas fa-mail-bulk
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mailchimp"></i> fab fa-mailchimp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-male"></i> fas fa-male
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mandalorian"></i> fab fa-mandalorian
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map"></i> fas fa-map
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-map"></i> far fa-map
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map-marked"></i> fas fa-map-marked
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map-marked-alt"></i> fas fa-map-marked-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map-marker"></i> fas fa-map-marker
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map-marker-alt"></i> fas fa-map-marker-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map-pin"></i> fas fa-map-pin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-map-signs"></i> fas fa-map-signs
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-markdown"></i> fab fa-markdown
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-marker"></i> fas fa-marker
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mars"></i> fas fa-mars
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mars-double"></i> fas fa-mars-double
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mars-stroke"></i> fas fa-mars-stroke
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mars-stroke-h"></i> fas fa-mars-stroke-h
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mars-stroke-v"></i> fas fa-mars-stroke-v
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mask"></i> fas fa-mask
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mastodon"></i> fab fa-mastodon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-maxcdn"></i> fab fa-maxcdn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-medal"></i> fas fa-medal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-medapps"></i> fab fa-medapps
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-medium"></i> fab fa-medium
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-medium-m"></i> fab fa-medium-m
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-medkit"></i> fas fa-medkit
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-medrt"></i> fab fa-medrt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-meetup"></i> fab fa-meetup
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-megaport"></i> fab fa-megaport
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-meh"></i> fas fa-meh
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-meh"></i> far fa-meh
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-meh-blank"></i> fas fa-meh-blank
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-meh-blank"></i> far fa-meh-blank
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-meh-rolling-eyes"></i> fas fa-meh-rolling-eyes
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-meh-rolling-eyes"></i> far fa-meh-rolling-eyes
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-memory"></i> fas fa-memory
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mendeley"></i> fab fa-mendeley
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-menorah"></i> fas fa-menorah
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mercury"></i> fas fa-mercury
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-meteor"></i> fas fa-meteor
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-microchip"></i> fas fa-microchip
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-microphone"></i> fas fa-microphone
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-microphone-alt"></i> fas fa-microphone-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-microphone-alt-slash"></i> fas fa-microphone-alt-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-microphone-slash"></i> fas fa-microphone-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-microscope"></i> fas fa-microscope
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-microsoft"></i> fab fa-microsoft
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-minus"></i> fas fa-minus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-minus-circle"></i> fas fa-minus-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-minus-square"></i> fas fa-minus-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-minus-square"></i> far fa-minus-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mitten"></i> fas fa-mitten
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mix"></i> fab fa-mix
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mixcloud"></i> fab fa-mixcloud
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-mizuni"></i> fab fa-mizuni
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mobile"></i> fas fa-mobile
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mobile-alt"></i> fas fa-mobile-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-modx"></i> fab fa-modx
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-monero"></i> fab fa-monero
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-bill"></i> fas fa-money-bill
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-bill-alt"></i> fas fa-money-bill-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-bill-alt"></i> fas fa-money-bill-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-bill-wave"></i> fas fa-money-bill-wave
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-bill-wave-alt"></i> fas fa-money-bill-wave-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-check"></i> fas fa-money-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-money-check-alt"></i> fas fa-money-check-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-monument"></i> fas fa-monument
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-moon"></i> fas fa-moon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-moon"></i> far fa-moon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mortar-pestle"></i> fas fa-mortar-pestle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mosque"></i> fas fa-mosque
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-motorcycle"></i> fas fa-motorcycle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mountain"></i> fas fa-mountain
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mouse-pointer"></i> fas fa-mouse-pointer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-mug-hot"></i> fas fa-mug-hot
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-music"></i> fas fa-music
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-napster"></i> fab fa-napster
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-neos"></i> fab fa-neos
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-network-wired"></i> fas fa-network-wired
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-neuter"></i> fas fa-neuter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-newspaper"></i> fas fa-newspaper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-newspaper"></i> fas fa-newspaper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-nimblr"></i> fab fa-nimblr
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-nintendo-switch"></i> fab fa-nintendo-switch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-node"></i> fab fa-node
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-node-js"></i> fab fa-node-js
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-not-equal"></i> fas fa-not-equal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-notes-medical"></i> fas fa-notes-medical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-npm"></i> fab fa-npm
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ns8"></i> fab fa-ns8
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-nutritionix"></i> fab fa-nutritionix
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-object-group"></i> fas fa-object-group
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-object-group"></i> fas fa-object-group
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-object-ungroup"></i> fas fa-object-ungroup
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-odnoklassniki"></i> fab fa-odnoklassniki
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-odnoklassniki-square"></i> fab fa-odnoklassniki-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-oil-can"></i> fas fa-oil-can
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-old-republic"></i> fab fa-old-republic
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-om"></i> fas fa-om
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-opencart"></i> fab fa-opencart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-openid"></i> fab fa-openid
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-opera"></i> fab fa-opera
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-optin-monster"></i> fab fa-optin-monster
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-osi"></i> fab fa-osi
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-otter"></i> fas fa-otter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-outdent"></i> fas fa-outdent
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-page4"></i> fab fa-page4
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pagelines"></i> fab fa-pagelines
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pager"></i> fas fa-pager
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paint-brush"></i> fas fa-paint-brush
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paint-roller"></i> fas fa-paint-roller
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-palette"></i> fas fa-palette
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-palfed"></i> fab fa-palfed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pallet"></i> fas fa-pallet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paper-plane"></i> fas fa-paper-plane
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-paper-plane"></i> far fa-paper-plane
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paperclip"></i> fas fa-paperclip
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-parachute-box"></i> fas fa-parachute-box
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paragraph"></i> fas fa-paragraph
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-parking"></i> fas fa-parking
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-passport"></i> fas fa-passport
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pastafarianism"></i> fas fa-pastafarianism
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paste"></i> fas fa-paste
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-patreon"></i> fab fa-patreon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pause"></i> fas fa-pause
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pause-circle"></i> fas fa-pause-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-pause-circle"></i> far fa-pause-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-paw"></i> fas fa-paw
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-paypal"></i> fab fa-paypal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-peace"></i> fas fa-peace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pen"></i> fas fa-pen
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pen-alt"></i> fas fa-pen-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pen-fancy"></i> fas fa-pen-fancy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pen-nib"></i> fas fa-pen-nib
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pen-square"></i> fas fa-pen-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pencil-alt"></i> fas fa-pencil-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pencil-ruler"></i> fas fa-pencil-ruler
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-penny-arcade"></i> fab fa-penny-arcade
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-people-carry"></i> fas fa-people-carry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pepper-hot"></i> fas fa-pepper-hot
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-percent"></i> fas fa-percent
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-percentage"></i> fas fa-percentage
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-periscope"></i> fab fa-periscope
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-person-booth"></i> fas fa-person-booth
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-phabricator"></i> fab fa-phabricator
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-phoenix-framework"></i> fab fa-phoenix-framework
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-phoenix-squadron"></i> fab fa-phoenix-squadron
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-phone"></i> fas fa-phone
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-phone-slash"></i> fas fa-phone-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-phone-square"></i> fas fa-phone-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-phone-volume"></i> fas fa-phone-volume
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-php"></i> fab fa-php
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pied-piper"></i> fab fa-pied-piper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pied-piper-alt"></i> fab fa-pied-piper-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pied-piper-hat"></i> fab fa-pied-piper-hat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pied-piper-pp"></i> fab fa-pied-piper-pp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-piggy-bank"></i> fas fa-piggy-bank
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pills"></i> fas fa-pills
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pinterest"></i> fab fa-pinterest
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pinterest-p"></i> fab fa-pinterest-p
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pinterest-square"></i> fab fa-pinterest-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pizza-slice"></i> fas fa-pizza-slice
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-place-of-worship"></i> fas fa-place-of-worship
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plane"></i> fas fa-plane
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plane-arrival"></i> fas fa-plane-arrival
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plane-departure"></i> fas fa-plane-departure
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-play"></i> fas fa-play
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-play-circle"></i> fas fa-play-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-play-circle"></i> far fa-play-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-playstation"></i> fab fa-playstation
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plug"></i> fas fa-plug
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plus"></i> fas fa-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plus-circle"></i> fas fa-plus-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-plus-square"></i> fas fa-plus-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-plus-square"></i> far fa-plus-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-podcast"></i> fas fa-podcast
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-poll"></i> fas fa-poll
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-poll-h"></i> fas fa-poll-h
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-poo"></i> fas fa-poo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-poo-storm"></i> fas fa-poo-storm
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-poop"></i> fas fa-poop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-portrait"></i> fas fa-portrait
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pound-sign"></i> fas fa-pound-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-power-off"></i> fas fa-power-off
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-pray"></i> fas fa-pray
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-praying-hands"></i> fas fa-praying-hands
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-prescription"></i> fas fa-prescription
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-prescription-bottle"></i> fas fa-prescription-bottle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-prescription-bottle-alt"></i> fas fa-prescription-bottle-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-print"></i> fas fa-print
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-procedures"></i> fas fa-procedures
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-product-hunt"></i> fab fa-product-hunt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-project-diagram"></i> fas fa-project-diagram
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-pushed"></i> fab fa-pushed
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-puzzle-piece"></i> fas fa-puzzle-piece
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-python"></i> fab fa-python
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-qq"></i> fab fa-qq
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-qrcode"></i> fas fa-qrcode
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-question"></i> fas fa-question
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-question-circle"></i> fas fa-question-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-question-circle"></i> far fa-question-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-quidditch"></i> fas fa-quidditch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-quinscape"></i> fab fa-quinscape
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-quora"></i> fab fa-quora
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-quote-left"></i> fas fa-quote-left
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-quote-right"></i> fas fa-quote-right
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-quran"></i> fas fa-quran
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-r-project"></i> fab fa-r-project
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-radiation"></i> fas fa-radiation
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-radiation-alt"></i> fas fa-radiation-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-rainbow"></i> fas fa-rainbow
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-random"></i> fas fa-random
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-raspberry-pi"></i> fab fa-raspberry-pi
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ravelry"></i> fab fa-ravelry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-react"></i> fab fa-react
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-reacteurope"></i> fab fa-reacteurope
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-readme"></i> fab fa-readme
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-rebel"></i> fab fa-rebel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-receipt"></i> fas fa-receipt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-recycle"></i> fas fa-recycle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-red-river"></i> fab fa-red-river
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-reddit"></i> fab fa-reddit
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-reddit-alien"></i> fab fa-reddit-alien
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-reddit-square"></i> fab fa-reddit-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-redhat"></i> fab fa-redhat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-redo"></i> fas fa-redo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-redo-alt"></i> fas fa-redo-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-registered"></i> fas fa-registered
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-registered"></i> far fa-registered
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-renren"></i> fab fa-renren
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-reply"></i> fas fa-reply
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-reply-all"></i> fas fa-reply-all
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-replyd"></i> fab fa-replyd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-republican"></i> fas fa-republican
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-researchgate"></i> fab fa-researchgate
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-resolving"></i> fab fa-resolving
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-restroom"></i> fas fa-restroom
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-retweet"></i> fas fa-retweet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-rev"></i> fab fa-rev
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ribbon"></i> fas fa-ribbon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ring"></i> fas fa-ring
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-road"></i> fas fa-road
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-robot"></i> fas fa-robot
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-rocket"></i> fas fa-rocket
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-rocketchat"></i> fab fa-rocketchat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-rockrms"></i> fab fa-rockrms
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-route"></i> fas fa-route
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-rss"></i> fas fa-rss
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-rss-square"></i> fas fa-rss-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ruble-sign"></i> fas fa-ruble-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ruler"></i> fas fa-ruler
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ruler-combined"></i> fas fa-ruler-combined
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ruler-horizontal"></i> fas fa-ruler-horizontal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ruler-vertical"></i> fas fa-ruler-vertical
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-running"></i> fas fa-running
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-rupee-sign"></i> fas fa-rupee-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sad-cry"></i> fas fa-sad-cry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-sad-cry"></i> far fa-sad-cry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sad-tear"></i> fas fa-sad-tear
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-sad-tear"></i> far fa-sad-tear
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-safari"></i> fab fa-safari
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-salesforce"></i> fab fa-salesforce
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sass"></i> fab fa-sass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-satellite"></i> fas fa-satellite
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-satellite-dish"></i> fas fa-satellite-dish
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-save"></i> fas fa-save
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-save"></i> far fa-save
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-schlix"></i> fab fa-schlix
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-school"></i> fas fa-school
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-screwdriver"></i> fas fa-screwdriver
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-scribd"></i> fab fa-scribd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-scroll"></i> fas fa-scroll
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sd-card"></i> fas fa-sd-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-search"></i> fas fa-search
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-search-dollar"></i> fas fa-search-dollar
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-search-location"></i> fas fa-search-location
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-search-minus"></i> fas fa-search-minus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-search-plus"></i> fas fa-search-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-searchengin"></i> fab fa-searchengin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-seedling"></i> fas fa-seedling
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sellcast"></i> fab fa-sellcast
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sellsy"></i> fab fa-sellsy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-server"></i> fas fa-server
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-servicestack"></i> fab fa-servicestack
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shapes"></i> fas fa-shapes
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-share"></i> fas fa-share
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-share-alt"></i> fas fa-share-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-share-alt-square"></i> fas fa-share-alt-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-share-square"></i> fas fa-share-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-share-square"></i> far fa-share-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shekel-sign"></i> fas fa-shekel-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shield-alt"></i> fas fa-shield-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ship"></i> fas fa-ship
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shipping-fast"></i> fas fa-shipping-fast
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-shirtsinbulk"></i> fab fa-shirtsinbulk
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shoe-prints"></i> fas fa-shoe-prints
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shopping-bag"></i> fas fa-shopping-bag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shopping-basket"></i> fas fa-shopping-basket
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shopping-cart"></i> fas fa-shopping-cart
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-shopware"></i> fab fa-shopware
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-shuttle-van"></i> fas fa-shuttle-van
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sign"></i> fas fa-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sign-in-alt"></i> fas fa-sign-in-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sign-language"></i> fas fa-sign-language
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sign-out-alt"></i> fas fa-sign-out-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-signal"></i> fas fa-signal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-signature"></i> fas fa-signature
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sim-card"></i> fas fa-sim-card
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-simplybuilt"></i> fab fa-simplybuilt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sistrix"></i> fab fa-sistrix
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sitemap"></i> fas fa-sitemap
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sith"></i> fab fa-sith
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-skating"></i> fas fa-skating
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sketch"></i> fab fa-sketch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-skiing"></i> fas fa-skiing
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-skiing-nordic"></i> fas fa-skiing-nordic
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-skull"></i> fas fa-skull
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-skull-crossbones"></i> fas fa-skull-crossbones
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-skyatlas"></i> fab fa-skyatlas
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-skype"></i> fab fa-skype
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-slack"></i> fab fa-slack
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-slack-hash"></i> fab fa-slack-hash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-slash"></i> fas fa-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sleigh"></i> fas fa-sleigh
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sliders-h"></i> fas fa-sliders-h
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-slideshare"></i> fab fa-slideshare
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-smile"></i> fas fa-smile
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-smile"></i> far fa-smile
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-smile-beam"></i> fas fa-smile-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-smile-beam"></i> far fa-smile-beam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-smile-wink"></i> fas fa-smile-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-smile-wink"></i> far fa-smile-wink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-smog"></i> fas fa-smog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-smoking"></i> fas fa-smoking
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-smoking-ban"></i> fas fa-smoking-ban
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sms"></i> fas fa-sms
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-snapchat"></i> fab fa-snapchat
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-snapchat-ghost"></i> fab fa-snapchat-ghost
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-snapchat-square"></i> fab fa-snapchat-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-snowboarding"></i> fas fa-snowboarding
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-snowflake"></i> fas fa-snowflake
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-snowflake"></i> far fa-snowflake
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-snowman"></i> fas fa-snowman
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-snowplow"></i> fas fa-snowplow
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-socks"></i> fas fa-socks
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-solar-panel"></i> fas fa-solar-panel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort"></i> fas fa-sort
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-alpha-down"></i> fas fa-sort-alpha-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-alpha-up"></i> fas fa-sort-alpha-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-amount-down"></i> fas fa-sort-amount-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-amount-up"></i> fas fa-sort-amount-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-down"></i> fas fa-sort-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-numeric-down"></i> fas fa-sort-numeric-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-numeric-up"></i> fas fa-sort-numeric-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sort-up"></i> fas fa-sort-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-soundcloud"></i> fab fa-soundcloud
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sourcetree"></i> fab fa-sourcetree
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-spa"></i> fas fa-spa
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-space-shuttle"></i> fas fa-space-shuttle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-speakap"></i> fab fa-speakap
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-speaker-deck"></i> fab fa-speaker-deck
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-spider"></i> fas fa-spider
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-spinner"></i> fas fa-spinner
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-splotch"></i> fas fa-splotch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-spotify"></i> fab fa-spotify
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-spray-can"></i> fas fa-spray-can
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-square"></i> fas fa-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-square"></i> far fa-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-square-full"></i> fas fa-square-full
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-square-root-alt"></i> fas fa-square-root-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-squarespace"></i> fab fa-squarespace
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-stack-exchange"></i> fab fa-stack-exchange
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-stack-overflow"></i> fab fa-stack-overflow
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stamp"></i> fas fa-stamp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-star"></i> fas fa-star
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-star"></i> far fa-star
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-star-and-crescent"></i> fas fa-star-and-crescent
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-star-half"></i> fas fa-star-half
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-star-half"></i> far fa-star-half
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-star-half-alt"></i> fas fa-star-half-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-star-of-david"></i> fas fa-star-of-david
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-star-of-life"></i> fas fa-star-of-life
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-staylinked"></i> fab fa-staylinked
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-steam"></i> fab fa-steam
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-steam-square"></i> fab fa-steam-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-steam-symbol"></i> fab fa-steam-symbol
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-step-backward"></i> fas fa-step-backward
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-step-forward"></i> fas fa-step-forward
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stethoscope"></i> fas fa-stethoscope
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-sticker-mule"></i> fab fa-sticker-mule
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sticky-note"></i> fas fa-sticky-note
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-sticky-note"></i> far fa-sticky-note
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stop"></i> fas fa-stop
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stop-circle"></i> fas fa-stop-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-stop-circle"></i> far fa-stop-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stopwatch"></i> fas fa-stopwatch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-store"></i> fas fa-store
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-store-alt"></i> fas fa-store-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-strava"></i> fab fa-strava
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stream"></i> fas fa-stream
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-street-view"></i> fas fa-street-view
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-strikethrough"></i> fas fa-strikethrough
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-stripe"></i> fab fa-stripe
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-stripe-s"></i> fab fa-stripe-s
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-stroopwafel"></i> fas fa-stroopwafel
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-studiovinari"></i> fab fa-studiovinari
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-stumbleupon"></i> fab fa-stumbleupon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-stumbleupon-circle"></i> fab fa-stumbleupon-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-subscript"></i> fas fa-subscript
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-subway"></i> fas fa-subway
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-suitcase"></i> fas fa-suitcase
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-suitcase-rolling"></i> fas fa-suitcase-rolling
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sun"></i> fas fa-sun
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-sun"></i> far fa-sun
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-superpowers"></i> fab fa-superpowers
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-superscript"></i> fas fa-superscript
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-supple"></i> fab fa-supple
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-surprise"></i> fas fa-surprise
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-surprise"></i> far fa-surprise
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-suse"></i> fab fa-suse
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-swatchbook"></i> fas fa-swatchbook
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-swimmer"></i> fas fa-swimmer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-swimming-pool"></i> fas fa-swimming-pool
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-symfony"></i> fab fa-symfony
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-synagogue"></i> fas fa-synagogue
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sync"></i> fas fa-sync
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-sync-alt"></i> fas fa-sync-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-syringe"></i> fas fa-syringe
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-table"></i> fas fa-table
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-table-tennis"></i> fas fa-table-tennis
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tablet"></i> fas fa-tablet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tablet-alt"></i> fas fa-tablet-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tablets"></i> fas fa-tablets
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tachometer-alt"></i> fas fa-tachometer-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tag"></i> fas fa-tag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tags"></i> fas fa-tags
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tape"></i> fas fa-tape
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tasks"></i> fas fa-tasks
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-taxi"></i> fas fa-taxi
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-teamspeak"></i> fab fa-teamspeak
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-teeth"></i> fas fa-teeth
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-teeth-open"></i> fas fa-teeth-open
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-telegram"></i> fab fa-telegram
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-telegram-plane"></i> fab fa-telegram-plane
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-temperature-high"></i> fas fa-temperature-high
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-temperature-low"></i> fas fa-temperature-low
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-tencent-weibo"></i> fab fa-tencent-weibo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tenge"></i> fas fa-tenge
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-terminal"></i> fas fa-terminal
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-text-height"></i> fas fa-text-height
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-text-width"></i> fas fa-text-width
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-th"></i> fas fa-th
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-th-large"></i> fas fa-th-large
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-th-list"></i> fas fa-th-list
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-the-red-yeti"></i> fab fa-the-red-yeti
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-theater-masks"></i> fas fa-theater-masks
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-themeco"></i> fab fa-themeco
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-themeisle"></i> fab fa-themeisle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thermometer"></i> fas fa-thermometer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thermometer-empty"></i> fas fa-thermometer-empty
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thermometer-full"></i> fas fa-thermometer-full
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thermometer-half"></i> fas fa-thermometer-half
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thermometer-quarter"></i> fas fa-thermometer-quarter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thermometer-three-quarters"></i> fas fa-thermometer-three-quarters
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-think-peaks"></i> fab fa-think-peaks
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thumbs-down"></i> fas fa-thumbs-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-thumbs-down"></i> far fa-thumbs-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thumbs-up"></i> fas fa-thumbs-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-thumbs-up"></i> far fa-thumbs-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-thumbtack"></i> fas fa-thumbtack
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-ticket-alt"></i> fas fa-ticket-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-times"></i> fas fa-times
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-times-circle"></i> fas fa-times-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-times-circle"></i> far fa-times-circle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tint"></i> fas fa-tint
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tint-slash"></i> fas fa-tint-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tired"></i> fas fa-tired
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-tired"></i> far fa-tired
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-toggle-off"></i> fas fa-toggle-off
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-toggle-on"></i> fas fa-toggle-on
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-toilet"></i> fas fa-toilet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-toilet-paper"></i> fas fa-toilet-paper
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-toolbox"></i> fas fa-toolbox
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tools"></i> fas fa-tools
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tooth"></i> fas fa-tooth
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-torah"></i> fas fa-torah
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-torii-gate"></i> fas fa-torii-gate
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tractor"></i> fas fa-tractor
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-trade-federation"></i> fab fa-trade-federation
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-trademark"></i> fas fa-trademark
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-traffic-light"></i> fas fa-traffic-light
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-train"></i> fas fa-train
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tram"></i> fas fa-tram
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-transgender"></i> fas fa-transgender
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-transgender-alt"></i> fas fa-transgender-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-trash"></i> fas fa-trash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-trash-alt"></i> fas fa-trash-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-trash-alt"></i> far fa-trash-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-trash-restore"></i> fas fa-trash-restore
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-trash-restore-alt"></i> fas fa-trash-restore-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tree"></i> fas fa-tree
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-trello"></i> fab fa-trello
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-tripadvisor"></i> fab fa-tripadvisor
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-trophy"></i> fas fa-trophy
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-truck"></i> fas fa-truck
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-truck-loading"></i> fas fa-truck-loading
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-truck-monster"></i> fas fa-truck-monster
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-truck-moving"></i> fas fa-truck-moving
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-truck-pickup"></i> fas fa-truck-pickup
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tshirt"></i> fas fa-tshirt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tty"></i> fas fa-tty
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-tumblr"></i> fab fa-tumblr
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-tumblr-square"></i> fab fa-tumblr-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-tv"></i> fas fa-tv
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-twitch"></i> fab fa-twitch
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-twitter"></i> fab fa-twitter
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-twitter-square"></i> fab fa-twitter-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-typo3"></i> fab fa-typo3
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-uber"></i> fab fa-uber
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ubuntu"></i> fab fa-ubuntu
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-uikit"></i> fab fa-uikit
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-umbrella"></i> fas fa-umbrella
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-umbrella-beach"></i> fas fa-umbrella-beach
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-underline"></i> fas fa-underline
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-undo"></i> fas fa-undo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-undo-alt"></i> fas fa-undo-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-uniregistry"></i> fab fa-uniregistry
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-universal-access"></i> fas fa-universal-access
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-university"></i> fas fa-university
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-unlink"></i> fas fa-unlink
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-unlock"></i> fas fa-unlock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-unlock-alt"></i> fas fa-unlock-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-untappd"></i> fab fa-untappd
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-upload"></i> fas fa-upload
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ups"></i> fab fa-ups
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-usb"></i> fab fa-usb
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user"></i> fas fa-user
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-user"></i> far fa-user
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-alt"></i> fas fa-user-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-alt-slash"></i> fas fa-user-alt-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-astronaut"></i> fas fa-user-astronaut
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-check"></i> fas fa-user-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-check"></i> fas fa-user-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-user-check"></i> far fa-user-check
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-clock"></i> fas fa-user-clock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-cog"></i> fas fa-user-cog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-edit"></i> fas fa-user-edit
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-friends"></i> fas fa-user-friends
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-graduate"></i> fas fa-user-graduate
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-injured"></i> fas fa-user-injured
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-lock"></i> fas fa-user-lock
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-md"></i> fas fa-user-md
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-minus"></i> fas fa-user-minus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-ninja"></i> fas fa-user-ninja
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-nurse"></i> fas fa-user-nurse
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-plus"></i> fas fa-user-plus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-secret"></i> fas fa-user-secret
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-shield"></i> fas fa-user-shield
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-slash"></i> fas fa-user-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-tag"></i> fas fa-user-tag
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-tie"></i> fas fa-user-tie
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-user-times"></i> fas fa-user-times
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-users"></i> fas fa-users
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-users-cog"></i> fas fa-users-cog
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-usps"></i> fab fa-usps
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-ussunnah"></i> fab fa-ussunnah
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-utensil-spoon"></i> fas fa-utensil-spoon
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-utensils"></i> fas fa-utensils
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vaadin"></i> fab fa-vaadin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-vector-square"></i> fas fa-vector-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-venus"></i> fas fa-venus
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-venus-double"></i> fas fa-venus-double
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-venus-mars"></i> fas fa-venus-mars
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-viacoin"></i> fab fa-viacoin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-viadeo"></i> fab fa-viadeo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-viadeo-square"></i> fab fa-viadeo-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-vial"></i> fas fa-vial
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-vials"></i> fas fa-vials
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-viber"></i> fab fa-viber
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-video"></i> fas fa-video
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-video-slash"></i> fas fa-video-slash
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-vihara"></i> fas fa-vihara
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vimeo"></i> fab fa-vimeo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vimeo-square"></i> fab fa-vimeo-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vimeo-v"></i> fab fa-vimeo-v
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vine"></i> fab fa-vine
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vk"></i> fab fa-vk
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vnv"></i> fab fa-vnv
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-volleyball-ball"></i> fas fa-volleyball-ball
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-volume-down"></i> fas fa-volume-down
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-volume-mute"></i> fas fa-volume-mute
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-volume-off"></i> fas fa-volume-off
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-volume-up"></i> fas fa-volume-up
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-vote-yea"></i> fas fa-vote-yea
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-vr-cardboard"></i> fas fa-vr-cardboard
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-vuejs"></i> fab fa-vuejs
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-walking"></i> fas fa-walking
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wallet"></i> fas fa-wallet
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-warehouse"></i> fas fa-warehouse
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-water"></i> fas fa-water
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wave-square"></i> fas fa-wave-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-waze"></i> fab fa-waze
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-weebly"></i> fab fa-weebly
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-weibo"></i> fab fa-weibo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-weight"></i> fas fa-weight
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-weight-hanging"></i> fas fa-weight-hanging
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-weixin"></i> fab fa-weixin
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-whatsapp"></i> fab fa-whatsapp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-whatsapp-square"></i> fab fa-whatsapp-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wheelchair"></i> fas fa-wheelchair
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-whmcs"></i> fab fa-whmcs
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wifi"></i> fas fa-wifi
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wikipedia-w"></i> fab fa-wikipedia-w
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wind"></i> fas fa-wind
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-window-close"></i> fas fa-window-close
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-window-close"></i> far fa-window-close
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-window-maximize"></i> fas fa-window-maximize
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-window-maximize"></i> far fa-window-maximize
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-window-minimize"></i> fas fa-window-minimize
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="far fa-window-minimize"></i> far fa-window-minimize
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-window-restore"></i> fas fa-window-restore
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-window-restore"></i> fas fa-window-restore
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-windows"></i> fab fa-windows
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wine-bottle"></i> fas fa-wine-bottle
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wine-glass"></i> fas fa-wine-glass
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wine-glass-alt"></i> fas fa-wine-glass-alt
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wix"></i> fab fa-wix
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wizards-of-the-coast"></i> fab fa-wizards-of-the-coast
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wolf-pack-battalion"></i> fab fa-wolf-pack-battalion
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wolf-pack-battalion"></i> fab fa-wolf-pack-battalion
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wordpress"></i> fab fa-wordpress
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wordpress-simple"></i> fab fa-wordpress-simple
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wpbeginner"></i> fab fa-wpbeginner
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wpexplorer"></i> fab fa-wpexplorer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wpforms"></i> fab fa-wpforms
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-wpressr"></i> fab fa-wpressr
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-wrench"></i> fas fa-wrench
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-x-ray"></i> fas fa-x-ray
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-xbox"></i> fab fa-xbox
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-xing"></i> fab fa-xing
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-xing-square"></i> fab fa-xing-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-y-combinator"></i> fab fa-y-combinator
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yahoo"></i> fab fa-yahoo
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yammer"></i> fab fa-yammer
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yandex"></i> fab fa-yandex
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yandex-international"></i> fab fa-yandex-international
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yarn"></i> fab fa-yarn
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yelp"></i> fab fa-yelp
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-yen-sign"></i> fas fa-yen-sign
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fas fa-yin-yang"></i> fas fa-yin-yang
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-yoast"></i> fab fa-yoast
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-youtube"></i> fab fa-youtube
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-youtube-square"></i> fab fa-youtube-square
                                            </Col>
                                        <Col xl={3} lg={4} sm={6}>
                                            <i className="fab fa-zhihu"></i> fab fa-zhihu
                                            </Col>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>

                </div>
            </React.Fragment>
        );
    }
}

export default IconFontAwesome;
