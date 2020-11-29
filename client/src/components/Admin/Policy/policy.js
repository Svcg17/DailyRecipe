import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';

import styles from './policy.module.scss';

const Policy = ({ history }) => {
    const [policy, setPolicy] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/policy`).then(res => {
            if (res.data && res.data.length) {
                setPolicy(res.data[0]);
            }
        });
    });

    return (
        <Formik
            initialValues={{
                privacyPolicy: '',
                termsOfService: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                console.log(JSON.stringify(values, null, 2));
                axios.put(`${process.env.REACT_APP_HOST}/api/policy`, values).then(res => console.log('success', res.data));
                setSubmitting(false);
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                setSubmitting
            }) => (
                <Form className={styles.flex}>
                    <label htmlFor="privacyPolicy">Privacy Policy</label>
                    <Field name="privacyPolicy" as="textarea" />
                    <label htmlFor="termsOfService">Terms of Service</label>
                    <Field name="termsOfService" as="textarea" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default Policy;
