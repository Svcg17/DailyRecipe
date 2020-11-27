import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

const UserBar = ({ 
    history,
    user
}) => {
    return (
        <div>
            <Row>
                <Col>{user.name}</Col>
                <Col>{user.email}</Col>
                <Col>{user.address}</Col>
                <Col>{user.phone}</Col>
                <Col>{user.points}</Col>
            </Row>
        </div>
    );
};

export default UserBar;
