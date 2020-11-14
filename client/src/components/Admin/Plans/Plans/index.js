import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';

import Loading from '../../Loading';
import AddPlan from './AddPlan';

const Plans = ({ history }) => {
    const [plans, setPlans] = useState(null);
    const [diet, setDiet] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [planCount, setPlanCount] = useState(0);
    const [deleteAtIndex, setDeleteAtIndex] = useState([]);
    const [renderPlan, setRenderPlan] = useState([]);

    useEffect(async () => {
        let dietRes;
        await axios.get(`${process.env.REACT_APP_HOST}/api/diet`).then(res => {
            setDiet(res.data);
            dietRes = res.data;
        });
        axios.get(`${process.env.REACT_APP_HOST}/api/plans`).then(async plansRes => {
            setPlans(plansRes.data);
            setPlanCount(plansRes.data.length);
            let arr = [];
            await Promise.all(plansRes.data.map(async (plan, index) => {
                await arr.push(<AddPlan hasId={true} key={index} index={index} plans={plansRes.data} diet={dietRes} recipes={recipes} setDeleteAtIndex={setDeleteAtIndex} setPlans={setPlans} setRecipes={setRecipes} />);
            }));
            await setRenderPlan(arr);
        });
    }, []);

    const addPlan = () => {
        setPlanCount(x => x + 1);
        const newElement = (<AddPlan hasId={false} key={planCount} index={planCount} plans={plans} diet={diet} recipes={recipes} setDeleteAtIndex={setDeleteAtIndex} setPlans={setPlans} setRecipes={setRecipes} />);
        setRenderPlan(x => [...x, newElement]);
    };

    return (
        <div>
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                    <Link to="/admin/plans">Plans</Link>
                </li>
                <li className="breadcrumb-item active">Plans</li>
            </ol>
            <div>
                <h3>The "Menu" portion for each plan contains the meals/recipes included in it. The meals/recipes are automatically chosen and updated by matching the diet and servings properties. If you want to change the diet and servings of a meal/recipe, please go to the "Meals" category in the sidebar and click "View Meals"</h3>
            </div>
            <Row>
                <Col>Plan Name</Col>
                <Col>Diet</Col>
                <Col>Description</Col>
                <Col>Price per Serving</Col>
                <Col>Servings</Col>
                <Col>Recipes per Week</Col>
                <Col></Col>
            </Row>
            {
                plans && diet && renderPlan ? 
                <Formik
                    key='plans'
                    initialValues={{plans}}
                    onSubmit={async (values, { setSubmitting }) => {
                        alert(JSON.stringify(plans, null, 2));
                        console.log(JSON.stringify(plans, null, 2));
                        await Promise.all(plans.map((plan, ind) => {
                            if(deleteAtIndex.includes(ind) && '_id' in plan) {
                                // delete
                                axios.delete(`${process.env.REACT_APP_HOST}/api/plan/${plan._id}`);
                            } else if(!deleteAtIndex.includes(ind) && '_id' in plan) {
                                // put
                                axios.put(`${process.env.REACT_APP_HOST}/api/plan/${plan._id}`, plan);
                            } else if(!deleteAtIndex.includes(ind) && !('_id' in plan)) {
                                // post
                                axios.post(`${process.env.REACT_APP_HOST}/api/plans`, plan);
                            }
                        }));
                        await axios.put('/api/plan/menu');
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
                            <Field hidden value={plans} onChange={handleChange} onBlur={handleBlur} />
                            <Field hidden value={recipes} onChange={handleChange} onBlur={handleBlur} />
                            {
                                renderPlan ? (
                                    renderPlan.map((plan, index) => {
                                        if (deleteAtIndex.includes(index)) return null;
                                        return plan;
                                    })
                                ) : <Loading />
                            }
                            <div>
                                <span>Add Plan </span>
                                <i onClick={addPlan} className="mdi mdi-plus-circle-outline" style={{cursor: "pointer"}}></i>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </Form>
                    )}
                </Formik> : <Loading />
            }
        </div>
    );
};

export default Plans;