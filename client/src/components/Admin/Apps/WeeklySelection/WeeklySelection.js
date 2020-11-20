import React, { useEffect, useState } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import axios from 'axios';

import 'react-calendar/dist/Calendar.css';

import styles from './WeeklySelection.module.scss';

const WeeklySelection = () => {
    const [value, onChange] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [plans, setPlans] = useState(null);
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/plans`).then(res => setPlans(res.data));
    }, []);

    useEffect(() => {
        const currentDay = value.getDay();
        const daysAhead = 6 - currentDay;
        const daysBefore = currentDay - 0;
        let first = new Date(value);
        let last = new Date(value);
        first = new Date(first.setDate(value.getDate() - daysBefore));
        last = new Date(last.setDate(value.getDate() + daysAhead));
        setStartDate(first);
        setEndDate(last);
    }, [value]);

    return (
    <div className={styles.calendar}>
      <Calendar 
        onChange={onChange}
        value={value}
        minDate={new Date()}
        calendarType="US"
      />
      <div>
          <Row>
            <Col xs={6}>Start Date</Col>
            <Col xs={6}>{startDate ? `${startDate.getMonth()}-${startDate.getDate()}-${startDate.getFullYear()}` : null}</Col>
          </Row>
          <Row>
            <Col xs={6}>End Date</Col>
            <Col xs={6}>{endDate ? `${startDate.getMonth()}-${endDate.getDate()}-${startDate.getFullYear()}`: null}</Col>
          </Row>
          <Row>
            <Col>Plans</Col>
            <Col>
                {plans ? plans.map(plan => {
                    return <option>{plan.name}</option>
                }) : null}
            </Col>
          </Row>
          <Row>
            <Col>Recipes</Col>
            <Col>
                <select>
                    {/* {recipes ? recipes.map(recipe => {
                        return <option>{recipe.name}</option>
                    }) : null} */}
                </select>
            </Col>
          </Row>
      </div>
    </div>
  )
};

export default WeeklySelection;
