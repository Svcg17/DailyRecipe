import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

import ArticleItem from './components/articleItem';
import Loading from '../Loading';

const Article = ({ history }) => {
    const [articles, setArticles] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/articles`).then(res => {
            try {
                console.log(res.data);
                if (res && res.data && !res.data.message) {
                    setArticles(res.data);
                } else if (res && res.data.message) {
                    setError(res.data.message);
                }
            } catch (err) {
                setError(err);
            }
        })
    }, []);

    return (
        <div>
            <Row>
                <Col sm="12">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/admin/articles">Articles</Link>
                        </li>
                        <li className="breadcrumb-item active">View Articles</li>
                    </ol>
                </Col>
            </Row>
            <Row>
                <Col>Title</Col>
                <Col>Minutes to Read</Col>
                <Col>Category</Col>
                <Col>Subcategory</Col>
                <Col>Hashtags</Col>
                <Col>Author</Col>
                <Col>Flagged</Col>
            </Row>
            {
                articles ? 
                articles.map((article, ind) => <ArticleItem
                    key={ind}
                    history={history}
                    article={article}
                />)
                : error
            }
        </div>
    );
};

export default Article;
