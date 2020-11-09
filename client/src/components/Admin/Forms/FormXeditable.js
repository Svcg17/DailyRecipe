import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Table } from "reactstrap";
import Editable from "react-bootstrap-editable";

class FormXeditable extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Form Xeditable</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Forms</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Xeditable</li>
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
                  <h4 className="card-title">Inline Example</h4>

                  <div className="table-responsive">
                    <Table responsive striped className="mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: "50%" }}>Inline</th>
                          <th>Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Simple Text Field</td>
                          <td>
                            <Editable
                              alwaysEditing={false}
                              disabled={false}
                              editText="superuser"
                              id={null}
                              isValueClickable={false}
                              mode="inline"
                              placement="top"
                              showText
                              type="textfield"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Empty text field, required</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="Empty"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              placement="top"
                              showText
                              type="textfield"
                              validate={null}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Select, local array, custom display</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="male"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              options={["male", "female"]}
                              placement="top"
                              showText
                              type="select"
                              validate={null}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>Combodate</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="Enter Date"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              placement="top"
                              showText
                              type="date"
                              validate={null}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Textarea, buttons below. Submit by ctrl+enter</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText="Awesome User"
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode="inline"
                              onSubmit={null}
                              onValidated={null}
                              placement="top"
                              showText
                              type="textarea"
                              validate={null}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
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

export default FormXeditable;
