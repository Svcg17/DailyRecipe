import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import EditMeal from '../EditMeal';
import Loading from '../../Loading';

const ViewCustomers = ({ history }) => {
    const [meals, setMeals] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/menu`).then(res => setMeals(res.data));
    }, []);

    return (
        <div>
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                    <Link to="/admin/meals">Meals</Link>
                </li>
                <li className="breadcrumb-item active">View Meals</li>
            </ol>
            <div className="text-right">
                <Link to="/admin/meals/create">
                    <button className="btn btn-primary">Create new meal</button>
                </Link>
            </div>
            <Row>
                <Col>Meal Name</Col>
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
                            <Col>{meal.duration}</Col>
                            <Col>{meal.servings}</Col>
                        </Row>
                    );
                })
                : <Loading />
            }
        </div>
    );
};

export default ViewCustomers;
