import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import { Editor } from 'react-draft-wysiwyg';

import Loading from '../../Loading';

const EditMeal = ({ history }) => {
    let { id } = useParams();
    let [meal, setMeal] = useState(null);
    let [status, setStatus] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/menu/${id}`).then(res => setMeal(res.data));
    }, []);
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_HOST}/api/menu/${id}`).then(res => {
            history.push('/admin/meals');
        })
    };

    return (
        <div>
            {
                meal ? 
                <Formik
                    initialValues={{meal}}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values.meal, null, 2));
                        const newValues = {
                            title: values.meal.title, 
                            // ingredients: values.meal.ingredients, 
                            // instructions: values.meal.instructions, 
                            duration: values.meal.duration, 
                            diet: values.meal.diet, 
                            servings: values.meal.servings, 
                            calPerServing: values.meal.calPerServing, 
                            isFeatured: values.meal.isFeatured, 
                            season: values.meal.season, 
                            cuisine: values.meal.cuisine, 
                            nutrition: values.meal.nutrition, 
                            allergens: values.meal.allergens
                        };
                        console.log(JSON.stringify(values.meal.title, null, 2));
                        console.log(newValues);
                        axios.put(`${process.env.REACT_APP_HOST}/api/menu/${id}`, newValues).then(res => {
                            if(res.status != 200) return setStatus(
                                <Alert color="danger">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                </Alert>
                            );
                            console.log(res.data);
                            setMeal(res.data);
                            setStatus(
                                <Alert color="success">
                                    Meal successfully updated!
                                </Alert>
                            );
                        })
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
                            {status}                        
                            <div className="container-fluid">
                                <Row className="form-wizard">
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <h4 className="mt-0 header-title">{meal.title}</h4>
                                                <p className="text-muted m-b-30 font-14">
                                                    Edit or delete this meal.
                                                </p>

                                                <fieldset>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="title" className="col-lg-3 col-form-label">Title</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} defaultValue={meal.title ? meal.title : null} id="meal.title" name="meal.title" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="duration" className="col-lg-3 col-form-label">Duration</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} defaultValue={meal.duration ? meal.duration : null} id="meal.duration" name="duration" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="ingredients" className="col-lg-3 col-form-label">Ingredients</label>
                                                                <div className="col-lg-9">
                                                                    <Editor
                                                                        toolbarClassName="toolbarClassName"
                                                                        wrapperClassName="wrapperClassName"
                                                                        editorClassName="editorClassName"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="instructions" className="col-lg-3 col-form-label">Instructions</label>
                                                                <div className="col-lg-9">
                                                                    <Editor
                                                                        toolbarClassName="toolbarClassName"
                                                                        wrapperClassName="wrapperClassName"
                                                                        editorClassName="editorClassName"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>                                                    

                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="diet" className="col-lg-3 col-form-label">Diet</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} defaultValue={meal.diet ? meal.diet : null} id="meal.diet" name="meal.diet" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="servings" className="col-lg-3 col-form-label">Servings</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.servings ? meal.servings : 1} id="meal.servings" name="meal.servings" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="calPerServing" className="col-lg-3 col-form-label">Calories Per Serving</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.calPerServing ? meal.calPerServing : 1} id="meal.calPerServing" name="meal.calPerServing" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="isFeatured" className="col-lg-3 col-form-label">Featured Recipe</label>
                                                                <div className="col-lg-1">
                                                                    <Field onChange={handleChange} type="checkbox" defaultValue={meal.isFeatured} id="meal.isFeatured" name="meal.isFeatured" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="season" className="col-lg-3 col-form-label">Season</label>
                                                                <div className="col-lg-9">
                                                                    <select onChange={handleChange} id="meal.season" name="meal.season" className="form-control">
                                                                        <option selected={meal.season && meal.season === 'Spring' ? true : false} value="Spring">Spring</option>
                                                                        <option selected={meal.season && meal.season === 'Summer' ? true : false} value="Summer">Summer</option>
                                                                        <option selected={meal.season && meal.season === 'Autumn' ? true : false} value="Autumn">Autumn</option>
                                                                        <option selected={meal.season && meal.season === 'Winter' ? true : false} value="Winter">Winter</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="cuisine" className="col-lg-3 col-form-label">Cuisine</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="text" defaultValue={meal.cuisine ? meal.cuisine : null} checked={meal.cuisine} id="meal.cuisine" name="meal.cuisine" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="cuisine" className="col-lg-3 col-form-label">Nutrition</label>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.energy" className="col-lg-3 col-form-label">Energy (kJ)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.energy ? meal.nutrition.energy : null} id="meal.nutrition.energy" name="meal.nutrition.energy" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.fat" className="col-lg-3 col-form-label">Fat (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.fat ? meal.nutrition.fat : null} id="meal.nutrition.fat" name="meal.nutrition.fat" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.saturatedFat" className="col-lg-3 col-form-label">Saturated Fat (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.saturatedFat ? meal.nutrition.saturatedFat : null} id="meal.nutrition.saturatedFat" name="meal.nutrition.saturatedFat" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.unsaturatedFat" className="col-lg-3 col-form-label">Unsaturated Fat (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.unsaturatedFat ? meal.nutrition.unsaturatedFat : null} id="meal.nutrition.unsaturatedFat" name="meal.nutrition.unsaturatedFat" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.carbs" className="col-lg-3 col-form-label">Carbs (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.carbs ? meal.nutrition.carbs : null} id="meal.nutrition.carbs" name="meal.nutrition.carbs" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.fiber" className="col-lg-3 col-form-label">Fiber (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.fiber ? meal.nutrition.fiber : null} id="meal.nutrition.fiber" name="meal.nutrition.fiber" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.sugars" className="col-lg-3 col-form-label">Sugars (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.sugars ? meal.nutrition.sugars : null} id="meal.nutrition.sugars" name="meal.nutrition.sugars" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.protein" className="col-lg-3 col-form-label">Protein (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.protein ? meal.nutrition.protein : null} id="meal.nutrition.protein" name="meal.nutrition.protein" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.others" className="col-lg-3 col-form-label">Others (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.others ? meal.nutrition.others : null} id="meal.nutrition.others" name="meal.nutrition.others" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.cholesterol" className="col-lg-3 col-form-label">Cholesterol (mg)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.cholesterol ? meal.nutrition.cholesterol : null} id="meal.nutrition.cholesterol" name="meal.nutrition.cholesterol" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.sodium" className="col-lg-3 col-form-label">Sodium (mg)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" defaultValue={meal.nutrition && meal.nutrition.sodium ? meal.nutrition.sodium : null} id="meal.nutrition.sodium" name="meal.nutrition.sodium" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="allergens" className="col-lg-3 col-form-label">Allergens</label>
                                                                <div className="col-lg-9">
                                                                    <textarea id="allergens" name="allergens" rows="4" className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <button onClick={handleDelete} type="button" className="btn btn-danger">Delete</button>
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </fieldset>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div> 
                        </Form>
                    )}
                </Formik>
                : <Loading />
            }
        </div>
    );
};

export default EditMeal;
