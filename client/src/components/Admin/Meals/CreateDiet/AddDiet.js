import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Field } from 'formik';

const AddDiet = ({ hasName, index, diet, setDiet, dietCount, handleDelete }) => {
    const [localState, setLocalState] = useState([...diet]);

    useEffect(() => {
        const blankDiet = { name: '' };
        if(!hasName) {
            setDiet(x => [...x, blankDiet]);
        }
    }, []);

    const handleChange = e => {
        let newDiet = localState;
        console.log('local', index, diet.length);
        if(index < newDiet.length){
            // edit existing input
            newDiet[index].name = e.currentTarget.value;
            setDiet(x => [...newDiet]);
            console.log(newDiet);
        } else {
            // new input
            const newElement = { name: e.currentTarget.value };
            setLocalState(x => [...x, newElement]);
            setDiet(x => [...x, newElement]);
        }
    };

    return (
        <div>
            <Row>
                <Col>
                    <Field onChange={handleChange} type="text" id={`diet.name ${index}`} name={`diet.name ${index}`} defaultValue={hasName ? diet[index].name : null} className="form-control" />
                </Col>
                <Col>
                    <button onClick={() => handleDelete(null, index)} value={null} type="button" className="btn btn-danger">Delete</button>
                </Col>
            </Row>
        </div>    
    );
};

export default AddDiet;
