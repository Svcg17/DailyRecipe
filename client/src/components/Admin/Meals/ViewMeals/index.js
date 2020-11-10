import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import EditMeal from '../EditMeal';

const ViewCustomers = ({ history }) => {
    const [meals, setMeals] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/menu`).then(res => setMeals(res.data));
    }, []);

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
                        <Row key={meal._id}>
                            <Col>
                                <Link to={`/admin/meals/${meal._id}`} >
                                    {meal.title}
                                </Link>
                            </Col>
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
