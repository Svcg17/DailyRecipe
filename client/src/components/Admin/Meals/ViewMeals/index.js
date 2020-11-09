import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const ViewCustomers = () => {
    const [meals, setMeals] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/menu`).then(res => setMeals(res.data));
    }, []);
    console.log(meals);
    return (
        <div>
            <Row>
                <Col>Meal Name</Col>
                <Col>Diet</Col>
                <Col>Duration</Col>
                <Col>Servings</Col>
            </Row>
            {
                meals ? 
                meals.map(meal => {
                    return (
                        <Row>
                            <Col>{meal.title}</Col>
                            <Col>{meal.diet}</Col>
                            <Col>{meal.duration}</Col>
                            <Col>{meal.servings}</Col>
                        </Row>
                    );
                })
                : null
            }
        </div>
    );
};

export default ViewCustomers;
