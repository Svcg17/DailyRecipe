import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';

import OrderBar from './components/orderBar';
import Loading from '../Loading';
import styles from './order.module.scss';

const Order = ({ history }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const asyncEffect = async () => {
            let arr = [];
            await axios.get(`${process.env.REACT_APP_HOST}/api/orders`).then(async ords => {
                if (ords && ords.data) {
                    arr = ords.data;
                    for(let i=0;i<arr.length;i++){
                        await axios.get(`${process.env.REACT_APP_HOST}/api/users/${arr[i].user}`).then(async usrs => {
                            if (usrs && usrs.data) {
                                arr[i].user = {
                                    userId: arr[i].user,
                                    name: usrs.data.name
                                }
                                for(let j=0;j<arr[i].recipes.length;j++){
                                    await axios.get(`${process.env.REACT_APP_HOST}/api/menu/${arr[i].recipes[j]}`).then(async rcps => {
                                        if (rcps && rcps.data) {
                                            arr[i].recipes[j] = rcps.data.title;
                                        }
                                    });
                                }
                            }
                        });
                    }
                    await setOrder(arr);
                }
            });
        };
        asyncEffect();
    }, []);

    return (
        <div>
            <Row>
                <Col>Customer</Col>
                <Col>Recipes</Col>
                <Col>Servings</Col>
                <Col>Delivery Date</Col>
                <Col>Status</Col>
            </Row>
            { order ? order.map((ord, ind) => (
                <OrderBar
                    key={ind}
                    history={history}
                    order={ord}
                />
            )) : <Loading /> }
        </div>
    );

};

export default Order;
