import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

import Ingredient from '../Ingredient';

const CreateMeal = ({ history }) => {
    const [meal, setMeal] = useState(null);
    const [diet, setDiet] = useState(null);
    const [status, setStatus] = useState(null);
    const [ingredientCount, setIngredientCount] = useState(0);
    const [deleteAtIndex, setDeleteAtIndex] = useState([]);
    const [renderIngredients, setRenderIngredients] = useState([]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const addIngredient = () => {
        // setIngredientCount(ingredientCount + 1);
        let tempArr = [];
        console.log(ingredientCount);
        tempArr.push(<Ingredient key={ingredientCount} index={ingredientCount} history={history} meal={meal} setMeal={setMeal} deleteAtIndex={deleteAtIndex} setDeleteAtIndex={setDeleteAtIndex} />);
        setIngredientCount(ingredientCount + 1);
        setRenderIngredients(x => x.concat(tempArr));
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/diet`).then(res => {
            setDiet(res.data);
            if (res.data.instructions && res.data.instructions.length) {
                setEditorState(x => res.data.instructions.getCurrentContent().getPlainText());
            }
        });
        // const html = '';
        // const contentBlock = htmlToDraft(html);
        // if (contentBlock) {
        //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        //     console.log(EditorState.createWithContent(contentState));
        //     setEditorState(x => EditorState.createWithContent(contentState));
        // }
    }, []);

    const handleEditorState = newState => {
        console.log('editor', (newState));
        setEditorState(x => (newState));
    };

    return (
        <div>
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
                        newValues.ingredients = [];
                        if(meal.ingredients) {
                            meal.ingredients.map((m, ind) => {
                                if(!deleteAtIndex.includes(ind)) newValues.ingredients.push(m);
                            });
                        }
                        const contentState = editorState.getCurrentContent();
                        newValues.instructions = JSON.stringify(convertToRaw(contentState));
                        console.log(JSON.stringify(values.meal.title, null, 2));
                        console.log(newValues);
                        axios.post(`${process.env.REACT_APP_HOST}/api/menu`, newValues).then(res => {
                            if(res.status != 200) return setStatus(
                                <Alert color="danger">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                </Alert>
                            );
                            console.log(res.data);
                            setMeal(res.data);
                            setStatus(
                                <Alert color="success">
                                    Meal successfully created!
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
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/meals">Meals</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Create a New Meal</li>
                                        </ol>
                                        <Card>
                                            <CardBody>
                                                <h4 className="mt-0 header-title">Create a meal</h4>

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
                                                                        name="instructions"
                                                                        editorState={editorState}
                                                                        onEditorStateChange={handleEditorState}
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
                                                                    <Field as="select" onChange={handleChange} id="meal.diet" name="meal.diet" className="form-control">
                                                                        {
                                                                            diet ?
                                                                            diet.map(diett => (
                                                                                <option value={diett._id}>{diett.name}</option>
                                                                            )) : null
                                                                        }
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="servings" className="col-lg-3 col-form-label">Servings</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" id="meal.servings" name="meal.servings" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="calPerServing" className="col-lg-3 col-form-label">Calories Per Serving</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="number" PerServing id="meal.calPerServing" name="meal.calPerServing" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="isFeatured" className="col-lg-3 col-form-label">Featured Recipe</label>
                                                                <div className="col-lg-1">
                                                                    <Field onChange={handleChange} type="checkbox" name="meal.isFeatured" id="meal.isFeatured" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="season" className="col-lg-3 col-form-label">Season</label>
                                                                <div className="col-lg-9">
                                                                    <select onChange={handleChange} id="meal.season" name="meal.season" className="form-control">
                                                                        <option value="Spring">Spring</option>
                                                                        <option value="Summer">Summer</option>
                                                                        <option value="Autumn">Autumn</option>
                                                                        <option value="Winter">Winter</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="cuisine" className="col-lg-3 col-form-label">Cuisine</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} type="text" id="meal.cuisine" name="meal.cuisine" className="form-control" />
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
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.energy" name="meal.nutrition.energy" className="form-control" />
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
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.saturatedFat" name="meal.nutrition.saturatedFat" className="form-control" />
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
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.others" name="meal.nutrition.others" className="form-control" />
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
                                                                    <Field onChange={handleChange} type="number" id="meal.nutrition.sodium" name="meal.nutrition.sodium" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="allergens" className="col-lg-3 col-form-label">Allergens</label>
                                                                <div className="col-lg-9">
                                                                    <textarea id="allergens" onChange={handleChange} name="allergens" rows="4" className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
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
        </div>
    );
};

export default CreateMeal;
