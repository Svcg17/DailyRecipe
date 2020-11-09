import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody } from "reactstrap";

// Form Wizard Steps
import WizardFormFirstPageRoot from "./FormWizardSteps/WizardFormFirstPage";
import WizardFormSecondPageRoot from "./FormWizardSteps/WizardFormSecondPage";
import WizardFormThirdPageRoot from "./FormWizardSteps/WizardFormThirdPage";
import WizardFormFourPageRoot from "./FormWizardSteps/WizardFormFourPage";

class FormWizard extends Component {
  constructor(props) {
    super(props);
    this.nextPageRoot = this.nextPageRoot.bind(this);
    this.previousPageRoot = this.previousPageRoot.bind(this);

    this.state = {
      pageRoot: 1
    };
  }
  nextPageRoot() {
    this.setState({ pageRoot: this.state.pageRoot + 1 });
  }

  previousPageRoot() {
    this.setState({ pageRoot: this.state.pageRoot - 1 });
  }

  render() {
    const { onSubmitRoot } = this.props;
    const { pageRoot } = this.state;

    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Form Wizard</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Forms</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Wizard</li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <Row className="form-wizard">
            <Col sm="12">
              <Card>
                <CardBody>
                  <h4 className="mt-0 header-title">Form Wizard</h4>
                  <p className="text-muted m-b-30 font-14">
                    A powerful React wizard plugin that supports accessibility
                  </p>

                  {pageRoot === 1 && (
                    <WizardFormFirstPageRoot onSubmit={this.nextPageRoot} />
                  )}
                  {pageRoot === 2 && (
                    <WizardFormSecondPageRoot
                      previousPage={this.previousPageRoot}
                      onSubmit={this.nextPageRoot}
                    />
                  )}
                  {pageRoot === 3 && (
                    <WizardFormThirdPageRoot
                      previousPage={this.previousPageRoot}
                      onSubmit={this.nextPageRoot}
                    />
                  )}
                  {pageRoot === 4 && (
                    <WizardFormFourPageRoot
                      previousPage={this.previousPageRoot}
                      onSubmit={onSubmitRoot}
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default FormWizard;
