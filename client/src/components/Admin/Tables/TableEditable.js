import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

const products = [
  { id: 1, age: 25, qty: 1500, cost: 1000 },
  { id: 2, age: 34, qty: 1900, cost: 1300 },
  { id: 3, age: 67, qty: 1300, cost: 1300 },
  { id: 4, age: 23, qty: 1100, cost: 6400 },
  { id: 5, age: 78, qty: 1400, cost: 4000 }
];

const columns = [
  {
    dataField: "id",
    text: "ID"
  },
  {
    dataField: "age",
    text: "Age(AutoFill)"
  },
  {
    dataField: "qty",
    text: "Qty(AutoFill and Editable)"
  },
  {
    dataField: "cost",
    text: "Cost(Editable)"
  }
];

class TableEditable extends Component {
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
                <h4 className="font-size-18">Editable Table</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/#">Veltrix</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/#">Tables</Link>
                  </li>
                  <li className="breadcrumb-item active">Editable Table</li>
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
            <Col>
              <Card>
                <CardBody>
                  <p className="card-title-desc">
                    Value of the input will be updated on press enter key. It
                    will not update inputs value on blur of input.
                  </p>
                  <BootstrapTable
                    keyField="id"
                    data={products}
                    columns={columns}
                    cellEdit={cellEditFactory({ mode: "click" })}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default TableEditable;
