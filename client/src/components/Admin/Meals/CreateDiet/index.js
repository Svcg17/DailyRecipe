import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';

import Loading from '../../Loading';
import AddDiet from './AddDiet';

const CreateDiet = ({ history }) => {
    const [diet, setDiet] = useState(null);
    const [dietCount, setDietCount] = useState(0);
    const [deleteAtIndex, setDeleteAtIndex] = useState([]);
    const [renderDiet, setRenderDiet] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/diet`).then(res => {
            setDiet(res.data);
            let arr = [];
            res.data.map((x, index) => arr.push(<AddDiet key={index} hasName={true} index={index} diet={res.data} setDiet={setDiet} dietCount={dietCount} handleDelete={handleDelete} />));
            setRenderDiet(arr);
            setDietCount(res.data.length);
        });
    }, []);

    const addDiet = () => {
        setDietCount(x => x + 1);
        const newElement = (<AddDiet key={dietCount} hasName={false} index={dietCount} diet={diet} setDiet={setDiet} dietCount={dietCount} handleDelete={handleDelete} />);
        setRenderDiet(x => [...x, newElement]);
    };

    const handleDelete = (value, index) => {
        setDeleteAtIndex(x => [...x, index]);
    };

    return (
        <div>
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                    <Link to="/admin/meals">Meals</Link>
                </li>
                <li className="breadcrumb-item active">Diet</li>
            </ol>
            <Row>
                <Col>Diet Name</Col>
            </Row>
            {
                diet ? 
                <Formik
                    key='diet'
                    initialValues={{diet}}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(diet, null, 2));
                        console.log(JSON.stringify(diet, null, 2));
                        let submittedValues = [];
                        diet.map((d, ind) => {
                            if(!deleteAtIndex.includes(ind) && '_id' in d) {
                                // put
                                axios.put(`${process.env.REACT_APP_HOST}/api/diet/${d._id}`, d).then(res => console.log(res.data, 'success put'));
                            } else if('_id' in d && deleteAtIndex.includes(ind)) {
                                // delete
                                axios.delete(`${process.env.REACT_APP_HOST}/api/diet/${d._id}`).then(res => console.log(res.data, 'success delete'));
                            } else if(!('_id' in d) && !deleteAtIndex.includes(ind)) {
                                // post
                                console.log('post');
                                axios.post(`${process.env.REACT_APP_HOST}/api/diet`, d).then(res => console.log(res.data, 'success post'));
                            }
                        });
                        console.log(submittedValues);
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
                            <Field hidden value={diet} onChange={handleChange} onBlur={handleBlur} />
                            {
                                renderDiet.map((diett, index) => {
                                    if(deleteAtIndex.includes(index)) return null;
                                    return diett;
                                })
                            }
                            <div>
                                <span>Add Diet </span>
                                <i onClick={addDiet} className="mdi mdi-plus-circle-outline" style={{cursor: "pointer"}}></i>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </Form>
                    )}
                </Formik> : <Loading />
            }
        </div>
    );
};

export default CreateDiet;

