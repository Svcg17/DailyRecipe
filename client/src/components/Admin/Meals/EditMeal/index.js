import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import { Editor } from 'react-draft-wysiwyg';

import Loading from '../../Loading';
import Ingredient from '../Ingredient';

const EditMeal = ({ history }) => {
    let { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [status, setStatus] = useState(null);
    const [ingredientCount, setIngredientCount] = useState(0);
    const [deleteAtIndex, setDeleteAtIndex] = useState([]);
    const [renderIngredients, setRenderIngredients] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/menu/${id}`).then(res => {
            setMeal(res.data);
            let renderAddIngredients = renderIngredients;
            if(res.data.ingredients){
                res.data.ingredients.map((ingredient, index) => {
                    renderAddIngredients.push(<Ingredient key={index} index={index} history={history} meal={res.data} setMeal={setMeal} deleteAtIndex={deleteAtIndex} setDeleteAtIndex={setDeleteAtIndex} />);
                });
                setIngredientCount(res.data.ingredients.length);
                setRenderIngredients(renderAddIngredients);
                console.log('asdfasarr', renderIngredients);
            }
            // setIngredientCount(res.data.ingredients.length);
        });
    }, []);

    // useEffect(() => {
    //     let renderAddIngredients = renderIngredients;
    //     console.log(meal, renderAddIngredients, 'after deleting');
    //     setRenderIngredients([...renderAddIngredients]);
    //     console.log(renderIngredients);
    // }, [deleteAtIndex]);

    const addIngredient = () => {
        // setIngredientCount(ingredientCount + 1);
        let tempArr = [];
        console.log(ingredientCount);
        tempArr.push(<Ingredient key={ingredientCount} index={ingredientCount} history={history} meal={meal} setMeal={setMeal} deleteAtIndex={deleteAtIndex} setDeleteAtIndex={setDeleteAtIndex} />);
        setIngredientCount(ingredientCount + 1);
        setRenderIngredients(x => x.concat(tempArr));
    };
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_HOST}/api/menu/${id}`).then(res => {
            history.push('/admin/meals');
        })
    };
    // let renderAddIngredients = [];
    // for(let i=0;i<ingredientCount;i++){
    //     console.log(i, meal.ingredients[i], 'check');
    //     renderAddIngredients.push(<Ingredient key={i} index={i} history={history} meal={meal} setMeal={setMeal} setIngredientCount={setIngredientCount} />);
    // }

    return (
        <div>
            {
                meal ? 
                <Formik
                    key={meal._id}
                    initialValues={{meal}}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values.meal, null, 2));
                        let newValues = {
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
                        newValues.ingredients = [];
                        if(meal.ingredients) {
                            meal.ingredients.map((m, ind) => {
                                if(!deleteAtIndex.includes(ind)) newValues.ingredients.push(m);
                            });
                        }
                        console.log(JSON.stringify(values.meal, null, 2));

                        axios.put(`${process.env.REACT_APP_HOST}/api/menu/${id}`, newValues).then(res => {
                            if(res.status != 200) return setStatus(
                                <Alert color="danger">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                </Alert>
                            );
                            history.push('/admin/meals');
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
                            <Field hidden value={meal} onChange={handleChange} onBlur={handleBlur} />
                            {status}
                            <div className="container-fluid">
                                <Row className="form-wizard">
                                    <Col sm="12">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/meals">View Meals</Link>
                                            </li>
                                            <li className="breadcrumb-item active">{meal.title}</li>
                                        </ol>
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
                                                                    <Field onChange={handleChange} id="meal.title" name="meal.title" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.duration" className="col-lg-3 col-form-label">Duration</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} id="meal.duration" name="meal.duration" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="ingredients" className="col-lg-3 col-form-label">Ingredients</label>
                                                                <div className="col-lg-9">
                                                                    <div>
                                                                        {renderIngredients.map((rend, ind) => (
                                                                            <div key={ind}>
                                                                                {
                                                                                    !deleteAtIndex.includes(ind) ? (rend) : null
                                                                                }
                                                                            </div>
                                                                        ))}
                                                                    </div>

                                                                    <div>
                                                                        <span>Add Ingredient </span>
                                                                        <i className="mdi mdi-plus-circle-outline" onClick={addIngredient} style={{cursor: "pointer"}}></i>
                                                                    </div>
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
                                                                    <Field onChange={handleChange}  id="meal.diet" name="meal.diet" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="servings" className="col-lg-3 col-form-label">Servings</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number"  id="meal.servings" name="meal.servings" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="calPerServing" className="col-lg-3 col-form-label">Calories Per Serving</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number"  id="meal.calPerServing" name="meal.calPerServing" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="isFeatured" className="col-lg-3 col-form-label">Featured Recipe</label>
                                                                <div className="col-lg-1">
                                                                    <Field onChange={handleChange} type="checkbox"  id="meal.isFeatured" name="meal.isFeatured" className="form-control" />
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
                                                                    <Field onChange={handleChange} type="text"  checked={meal.cuisine} id="meal.cuisine" name="meal.cuisine" className="form-control" />
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
                                                                    <Field onChange={handleChange} type="number"  id="meal.nutrition.energy" name="meal.nutrition.energy" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.fat" className="col-lg-3 col-form-label">Fat (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.fat" name="meal.nutrition.fat" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.saturatedFat" className="col-lg-3 col-form-label">Saturated Fat (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number"  id="meal.nutrition.saturatedFat" name="meal.nutrition.saturatedFat" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.unsaturatedFat" className="col-lg-3 col-form-label">Unsaturated Fat (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.unsaturatedFat" name="meal.nutrition.unsaturatedFat" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.carbs" className="col-lg-3 col-form-label">Carbs (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.carbs" name="meal.nutrition.carbs" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.fiber" className="col-lg-3 col-form-label">Fiber (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.fiber" name="meal.nutrition.fiber" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.sugars" className="col-lg-3 col-form-label">Sugars (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.sugars" name="meal.nutrition.sugars" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.protein" className="col-lg-3 col-form-label">Protein (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.protein" name="meal.nutrition.protein" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.others" className="col-lg-3 col-form-label">Others (g)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number"  id="meal.nutrition.others" name="meal.nutrition.others" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.cholesterol" className="col-lg-3 col-form-label">Cholesterol (mg)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.cholesterol" name="meal.nutrition.cholesterol" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label htmlFor="meal.nutrition.sodium" className="col-lg-3 col-form-label">Sodium (mg)</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number"  id="meal.nutrition.sodium" name="meal.nutrition.sodium" className="form-control" />
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
