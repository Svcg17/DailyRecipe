import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

import Loading from '../Loading';

import AdminContext from '../../../context/AdminContext';

const EditArticle = ({ history }) => {
    const { adminId } = useContext(AdminContext);
    const [article, setArticle] = useState(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    let { id } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/articles/${id}`).then(res => {
            const raw = JSON.parse(res.data.description);
            const contentState = convertFromRaw(raw);
            setEditorState(EditorState.createWithContent(contentState));
            setArticle(res.data);
        });
    }, []);

    const handleEditorState = newState => {
        console.log('editor', (newState));
        setEditorState(x => (newState));
    };

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_HOST}/api/articles/${id}`).then(res => console.log('successfully deleted', res.data));
    };

    return (
        <div>
            { article && editorState ? 
                <Formik
                    initialValues={{ 
                        title: article.title,
                        minuteRead: article.minuteRead,
                        description: editorState,
                        category: article.category,
                        subcategory: article.subcategory,
                        hashtags: article.hashtags,
                        author: article.author    
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        let newValues = values;
                        const contentState = editorState.getCurrentContent();
                        newValues.description = JSON.stringify(convertToRaw(contentState));
                        axios.put(`${process.env.REACT_APP_HOST}/api/articles/${id}`, newValues).then(res => {
                            console.log('edited article', res.data);
                        })
                        alert(JSON.stringify(newValues, null, 2));
                        console.log(JSON.stringify(newValues, null, 2));
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
                            <div className="container-fluid">
                                <Row className="form-wizard">
                                    <Col sm="12">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/articles">Articles</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Edit Article</li>
                                        </ol>
                                        <Card>
                                            <CardBody>
                                                <h4 className="mt-0 header-title">Edit Article</h4>
                                                <fieldset>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="title" className="col-lg-3 col-form-label">Title</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} id="title" name="title" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="minuteRead" className="col-lg-3 col-form-label">Minutes to Read</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} id="minuteRead" name="minuteRead" type="number" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                            <label htmlFor="description" className="col-lg-3 col-form-label">Description</label>
                                                                <div className="col-lg-9">
                                                                    <Editor
                                                                        name="description"
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
                                                                <label htmlFor="category" className="col-lg-3 col-form-label">Category</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} id="category" name="category" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="subcategory" className="col-lg-3 col-form-label">Subategory</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} id="subcategory" name="subcategory" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group row">
                                                                <label htmlFor="hashtags" className="col-lg-3 col-form-label">Hashtags</label>
                                                                <div className="col-lg-9">
                                                                    <Field onChange={handleChange} id="hashtags" name="hashtags" type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                                                        <button className="btn btn-primary" type="submit">Submit</button>
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
            : null }
        </div>
    );
};

export default EditArticle;
