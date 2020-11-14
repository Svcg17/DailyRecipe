import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';

import Loading from '../../Loading';

const AddPlan = ({ history, hasId, index, plans, diet, recipes, setDeleteAtIndex, setPlans, setRecipes }) => {
    const [localState, setLocalState] = useState([...plans]);
    const [localRecipes, setLocalRecipes] = useState([...recipes]);

    useEffect(() => {
        if(!hasId) {
            const newElement = {
                name: null,
                diet: null,
                recipesPerWeek: 0,
                servings: 0,
                pricePerServing: 0,
                menu: null
            };
            setPlans(x => [...x, newElement]);
        }
    }, []);

    useEffect(() => {
        if(localState.length === plans.length) {
            let newRecipes = recipes;
            if(index < localState.length && localState[index].diet && localState[index].servings) {
                axios.get(`${process.env.REACT_APP_HOST}/api/plan/${localState[index].diet}/${localState[index].servings}`).then(res => {
                    if(index < localRecipes.length) {
                        console.log('res', res.data);
                        newRecipes[index] = res.data;
                        console.log('new recipes', newRecipes);
                    } else {
                        newRecipes.push(res.data);
                    }
                    console.log('updated recipes', newRecipes, index);
                    setLocalRecipes(x => [...newRecipes]);
                    setRecipes(x => [...newRecipes]);
                });
            }
        }
    }, [localState]);

    const handleChange = e => {
        let newState = localState;
        const param = e.currentTarget.id.split(' ')[0];
        // console.log(newState, index, newState.length);
        if(index < newState.length) {
            // edit existing input
            newState[index][param] = e.currentTarget.value;
            setLocalState(x => [...newState]);
            setPlans(x => [...newState]);
        } else {
            // new input
            let newElement = {
                name: null,
                diet: null,
                recipesPerWeek: 0,
                servings: 0,
                pricePerServing: 0,
                menu: null
            };
            newElement[param] = e.currentTarget.value;
            setLocalState(x => [...x, newElement]);
            setPlans(x => [...x, newElement]);
        }
    };

    const handleDelete = () => {
        setDeleteAtIndex(x => [...x, index]);
    };

    return (
        <div>
            <Row>
                <Col><Field onChange={handleChange} type="text" defaultValue={hasId ? plans[index].name : null} id={`name ${index}`} name={`name ${index}`} className="form-control" /></Col>
                <Col>
                    <Field onChange={handleChange} as="select" id={`diet ${index}`} name={`diet ${index}`} className="form-control">
                        <option disabled selected value> -- select an option -- </option>
                        {
                            diet ?
                            diet.map((diett, ind) => (
                                <option key={`${index} ${ind}`} selected={hasId && diett._id === plans[index].diet ? true : false} value={diett._id}>{diett.name}</option>
                            )) : null
                        }
                    </Field>
                </Col>
                <Col><Field onChange={handleChange} defaultValue={hasId ? plans[index].description : null} type="text" id={`description ${index}`} name={`description ${index}`} className="form-control" /></Col>
                <Col><Field onChange={handleChange} defaultValue={hasId ? plans[index].pricePerServing : null} type="number" id={`pricePerServing ${index}`} name={`pricePerServing ${index}`} className="form-control" /></Col>
                <Col><Field onChange={handleChange} defaultValue={hasId ? plans[index].servings : null} type="number" id={`servings ${index}`} name={`servings ${index}`} className="form-control" /></Col>
                <Col><Field onChange={handleChange} defaultValue={hasId ? plans[index].recipesPerWeek : null} type="number" id={`recipesPerWeek ${index}`} name={`recipesPerWeek ${index}`} className="form-control" /></Col>
                <Col><button onClick={handleDelete} value={null} type="button" className="btn btn-danger">Delete</button></Col>
            </Row>
            <div>
                <h4>Menu</h4>
                <ul>
                    { recipes && recipes[index] ? (
                        recipes[index].map((recipe, ind) => (
                            <li key={`recipes ${ind}`}>
                                {recipe.title}
                            </li>
                        ))
                    ) : null }
                </ul>
            </div>
        </div>
    );
};

export default AddPlan;