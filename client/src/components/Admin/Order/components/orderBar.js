import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";

const OrderBar = ({ 
    history,
    order
}) => {
    return (
        <div>
            <Row>
                <Col>{order.user.name}</Col>
                <Col>
                    <ul>
                        {
                            order.recipes.map(recipe => <li>{recipe}</li>)
                        }
                    </ul>
                </Col>
                <Col>{order.servings}</Col>
                <Col>{order.deliveryDate}</Col>
                <Col>{order.status}</Col>
            </Row>
        </div>
    );
};

export default OrderBar;
