import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Form } from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class FormEditor extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Form Editors</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Forms</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Editors</li>
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
                  <h4 className="card-title">react-draft-wysiwyg</h4>
                  <p className="card-title-desc">
                    Bootstrap-wysihtml5 is a javascript plugin that makes it
                    easy to create simple, beautiful wysiwyg editors with the
                    help of wysihtml5 and Twitter Bootstrap.
                  </p>

                  <Form method="post">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    />
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default FormEditor;
