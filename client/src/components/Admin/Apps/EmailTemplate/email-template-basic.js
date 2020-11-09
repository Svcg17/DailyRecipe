import React, { Component } from 'react';
import SettingMenu from '../../Shared/SettingMenu';
import { Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';

class EmailTemplateBasic extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }


    componentDidMount() {
    }

    render() {

        return (
            <React.Fragment>
                    <div className="container-fluid">

                        <div className="row align-items-center">
                            <Col sm={6}>
                                <div className="page-title-box">
                                    <h4 className="font-size-18">Alert Email</h4>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to="/#">Veltrix</Link></li>
                                        <li className="breadcrumb-item"><Link to="/#">Email Templates</Link></li>
                                        <li className="breadcrumb-item active">Alert Email</li>
                                    </ol>
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div className="float-right d-none d-md-block">
                                    <SettingMenu />
                                </div>
                            </Col>
                        </div>

                                <Row className="email-template">
                                    <Col md="12">
                                        <table className="body-wrap" style={{
                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0", width: "100%",
                                            backgroundColor: "#f6f6f6"
                                        }} bgcolor="#f6f6f6">
                                            <tbody>
                                                <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>

                                                    <td style={{
                                                        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0",
                                                        verticalAlign: "top"
                                                    }} valign="top"></td>

                                                    <td className="container" width="600" style={{
                                                        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                        fontSize: "14px", display: "block !important", maxWidth: "600px !important", clear: "both !impotant", margin: "0px auto",
                                                        verticalAlign: "top"
                                                    }} valign="top">

                                                        <div className="content" style={{
                                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", maxWidth: "600px",
                                                            display: "block", margin: "0px auto", padding: "20px"
                                                        }}>

                                                            <table className="main" width="100%" cellPadding="0" cellSpacing="0" itemProp="action" itemScope itemType="http://schema.org/ConfirmAction"
                                                                style={{
                                                                    fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", borderRadius: "3px",
                                                                    margin: "0px", border: "none"
                                                                }}>
                                                                <tbody>
                                                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>

                                                                        <td className="content-wrap" style={{
                                                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                            fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "30px", border: "3px solid #3c4ccf", borderRadius: "7px",
                                                                            backgroundColor: "#fff"
                                                                        }} valign="top">

                                                                            <meta itemProp="name" content="Confirm Email" style={{
                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", margin: "0px"
                                                                            }} />

                                                                            <table width="100%" cellPadding="0" cellSpacing="0" style={{
                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", margin: "0px",
                                                                            }}>
                                                                                <tbody>
                                                                                    <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                                        <td className="content-block" style={{
                                                                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                            boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                                        }} valign="top">
                                                                                            Please confirm your email address by clicking the link below.
                                                                </td>
                                                                                    </tr>

                                                                                    <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                                        <td className="content-block" style={{
                                                                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                            fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                                        }} valign="top">
                                                                                            We may need to send you critical information about our service and it is important that we have an accurate email address.
                                                                </td>
                                                                                    </tr>

                                                                                    <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                                        <td className="content-block" itemProp="handler" itemScope itemType="http://schema.org/HttpActionHandler"
                                                                                            style={{
                                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px",
                                                                                                verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                                            }} valign="top">

                                                                                            <Link to="#" color="primary" itemProp="url" style={{
                                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px",
                                                                                                color: "#FFF", textDecoration: "none", lineHeight: "2em", fontWeight: "bold", textAlign: "center",
                                                                                                cursor: "pointer", display: "inline-block", borderRadius: "5px", textTransform: "capitalize",
                                                                                                backgroundColor: "#02a499", margin: "0", borderColor: "#02a499", borderStyle: "solid",
                                                                                                borderWidth: "8px 16px"
                                                                                            }} >
                                                                                                Confirm email address</Link>

                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                                        <td className="content-block" style={{
                                                                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                            fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                                        }} valign="top">
                                                                                            <b>Veltrix</b>
                                                                                            <p>Support Team</p>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                                        <td className="content-block" style={{
                                                                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                            fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0", textAlign: "center"
                                                                                        }} valign="top">
                                                                                            © {new Date().getFullYear()} Veltrix
                                                                            </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                           
                    </div>
            </React.Fragment>
        );
    }
}

export default EmailTemplateBasic;
