import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

import UserBar from './components/UserBar';
import Loading from '../Loading';


const User = ({ history }) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/users`).then(res => {
            if (res && res.data) {
                setUsers(res.data);
            }
        });
    }, []);

    return (
        <div>
            <Row>
                <Col>Name</Col>
                <Col>Email</Col>
                <Col>Address</Col>
                <Col>Phone</Col>
                <Col>Points</Col>
            </Row>
            { users ? users.map((user, ind) => (
                <UserBar
                    key={ind}
                    history={history}
                    user={user}
                />
            )) : <Loading /> }
        </div>
    );
};

export default User;
