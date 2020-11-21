import React, { useEffect, useState } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';

import RenderRecipes from './components/RenderRecipes';

import styles from './WeeklySelection.module.scss';

const WeeklySelection = ({ history }) => {
    const [value, onChange] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [plans, setPlans] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [weekly, setWeekly] = useState(null);

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

    const handlePlan = e => {
      const planId = e.currentTarget.id;
      axios.get(`${process.env.REACT_APP_HOST}/api/plan/${planId}`).then(res => {
        setRecipes(x => [...res.data]);
      });
      setSelectedPlan(x => planId);

      console.log('selected plan', planId);
    };

    return (
    <div className={styles.calendar}>
      <Calendar 
        onChange={onChange}
        value={value}
        minDate={new Date()}
        calendarType="US"
        className={styles.col1}
      />
      <div className={styles.col2}>
          <Row>
            <Col xs={2}>Start Date</Col>
            <Col xs={10}>{startDate ? `${startDate.getMonth()}-${startDate.getDate()}-${startDate.getFullYear()}` : null}</Col>
          </Row>
          <Row>
            <Col xs={2}>End Date</Col>
            <Col xs={10}>{endDate ? `${startDate.getMonth()}-${endDate.getDate()}-${startDate.getFullYear()}`: null}</Col>
          </Row>
          <Row>
            <Col xs={2}>Plans</Col>
            <Col xs={10}>
              <div className="btn-group" role="group" aria-label="Basic example">

                {plans ? plans.map(plan => {
                    return <button type="button" id={plan._id} name={plan._id} className="btn btn-light" onClick={handlePlan}>{plan.name}</button>
                }) : null}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>Recipes</Col>
            <Col xs={10}>
              <RenderRecipes history={history} recipes={recipes} setRecipes={setRecipes} />
            </Col>
          </Row>
      </div>
    </div>
  )
};

export default WeeklySelection;
