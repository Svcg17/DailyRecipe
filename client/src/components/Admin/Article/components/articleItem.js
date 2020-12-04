import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

import AdminContext from '../../../../context/AdminContext';
import Loading from '../../Loading';

const ArticleItem = ({ history, article }) => {
    const { adminId } = useContext(AdminContext);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/auth/admin/${adminId}`).then(admin => {
            setAuthor(admin.data);
        });
    }, []);

    return (
        <div>
            <Row>
                <Col>
                    <Link to={`/admin/articles/edit/${article._id}`} >
                        {article.title}
                    </Link>
                </Col>
                <Col>{article.minuteRead}</Col>
                <Col>{article.category}</Col>
                <Col>{article.subcategory}</Col>
                <Col>{article.hashtags}</Col>
                <Col>{author ? author.email : null}</Col>
                <Col>{article.flagged}</Col>
            </Row>
        </div>
    );
};

export default ArticleItem;
