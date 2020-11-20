import React, { useContext } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

import AdminContext from '../../../context/AdminContext';

const Profile = ({ history }) => {
    const { adminId, adminName, adminEmail, setAdmin } = useContext(AdminContext);
    console.log('admin name and email', adminId, adminName, adminEmail);

    return (
        <Formik
            key='adminProfile'
            initialValues={{ name: adminName, email: adminEmail }}
            onSubmit={async (values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                console.log(JSON.stringify(values, null, 2));
                await axios.put(`${process.env.REACT_APP_HOST}/api/auth/admin/${adminId}`, values);
                await axios.get(`${process.env.REACT_APP_HOST}/api/auth/logout`).then((err, res) => {
                    setAdmin(null);
                    if (err) console.log('error logging out', err);
                    else console.log('logged out', res);
                });
                setSubmitting(false);
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                setSubmitting
            }) => (
                <Form>
                    <h3>Update Profile</h3>
                    <Row className="form-group">
                        <label
                        htmlFor="name"
                        className="col-sm-2 col-form-label"
                        >
                        Name
                        </label>
                        <Col sm={10}>
                        <Field
                            className="form-control"
                            type="text"
                            // defaultValue="Artisanal kale"
                            id="name"
                            name="name"
                        />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <label
                        htmlFor="email"
                        className="col-sm-2 col-form-label"
                        >
                        Email
                        </label>
                        <Col sm={10}>
                        <Field
                            className="form-control"
                            type="email"
                            // defaultValue="Artisanal kale"
                            id="email"
                            name="email"
                        />
                        </Col>
                    </Row>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Profile;
