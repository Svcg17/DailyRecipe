import React, { useEffect, useState } from "react";
import SettingMenu from "../../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import 'react-calendar/dist/Calendar.css';

import RenderRecipes from './components/RenderRecipes';

import styles from './WeeklySelection.module.scss';

const WeeklySelection = ({ history }) => {
    const [value, setValue] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [plans, setPlans] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [recipeStatus, setRecipeStatus] = useState(null);
    const [weekly, setWeekly] = useState(null);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_HOST}/api/plans`).then(res => setPlans(res.data));
      const currentDay = new Date().getDay();
      const daysAhead = 6 - currentDay;
      const daysBefore = currentDay - 0;
      let first = new Date(new Date());
      let last = new Date(new Date());
      first = new Date(first.setDate(value.getDate() - daysBefore));
      last = new Date(last.setDate(value.getDate() + daysAhead));
      first = new Date(first.setHours(0,0,0,0));
      // first = first.toISOString();
      last = new Date(last.setHours(0,0,0,0));
      // last = last.toISOString();
      setStartDate(first);
      setEndDate(last);
      axios.get(`${process.env.REACT_APP_HOST}/api/weekly}`).then(res => {
        if (res.data) {
          // const newSet = new Set([...res.data.recipes]);
          // console.log('newset', newSet);
          // setRecipeStatus(x => newSet);
          setWeekly(x => [...res.data]);
        }
      });
    }, []);

    useEffect(() => console.log('WEEK', weekly), [weekly]);

    useEffect(() => {
      const currentDay = value.getDay();
      const daysAhead = 6 - currentDay;
      const daysBefore = currentDay - 0;
      let first = new Date(value);
      let last = new Date(value);
      first = new Date(first.setDate(value.getDate() - daysBefore));
      last = new Date(last.setDate(value.getDate() + daysAhead));
      first = new Date(first.setHours(0,0,0,0));
      last = new Date(last.setHours(0,0,0,0));
      // first = first.toISOString();
      // last = last.toISOString();
      setStartDate(first);
      setEndDate(last);
    }, [value]);

    useEffect(() => {
      if (startDate && endDate) {
        // console.log(startDate.toISOString(), endDate.toISOString());
        // axios.get(`${process.env.REACT_APP_HOST}/api/weekly/date/${startDate.toISOString()}/${endDate.toISOString()}`).then(res => {
        axios.get(`${process.env.REACT_APP_HOST}/api/weekly`).then(res => {
          if (res.data) {
            // const newSet = new Set([...res.data.recipes]);
            // console.log('newset', newSet);
            // setRecipeStatus(x => newSet);
            setWeekly(x => [...res.data]);
          }
        });
      }
      if (weekly) {
        let week = weekly.find(x => x.plan === selectedPlan && x.startDate === startDate.toISOString() && x.endDate === endDate.toISOString());
        if (week) {
          week = new Set([...week.recipes]);
          console.log('SET RECIPES', week);
          setRecipeStatus(x => week);
        }
        else {
          setRecipeStatus(new Set());
        }
      }
    }, [startDate, endDate]);

    const handlePlan = async e => {
      const planId = await e.currentTarget.id;
      await axios.get(`${process.env.REACT_APP_HOST}/api/plan/${planId}`).then(async res => {
        if (res){
          await setRecipes(x => [...res.data]);
        } 
      });
      if (weekly) {
        let week = await weekly.find(x => x.plan === planId && x.startDate === startDate.toISOString() && x.endDate === endDate.toISOString());
        if (week) {
          week = await new Set([...week.recipes]);
          console.log('SET RECIPES', week);
          await setRecipeStatus(x => week);
        }
        else {
          await setRecipeStatus(new Set());
        }
      }
      await setSelectedPlan(x => planId);

      // console.log('selected plan', planId);
    };

    return (
      <div>
        {
          weekly ? 
          <Formik
              key={weekly._id}
              initialValues={{ weekly }}
              onSubmit={({ setSubmitting }) => {
                  alert(JSON.stringify(weekly, null, 2));
                  console.log(JSON.stringify(weekly, null, 2));
                  try {
                    axios.put(`${process.env.REACT_APP_HOST}/api/weekly`, weekly).then(res => {
                      console.log('SUCCESS');
                    });
                  } catch (err) {
                    console.log('err', err);
                  }
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
                  <Field hidden value={weekly} onChange={handleChange} onBlur={handleBlur} />
                  <div className={styles.calendar}>
                      <Calendar 
                        onChange={setValue}
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
                                    return <button key={plan._id} type="button" id={plan._id} name={plan._id} className="btn btn-light" onClick={handlePlan}>{plan.name}</button>
                                }) : null}
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={2}>Recipes</Col>
                            <Col xs={10}>
                              {
                                recipes && recipeStatus ? <RenderRecipes 
                                  key={`${selectedPlan}`}
                                  history={history} 
                                  startDate={startDate}
                                  endDate={endDate}
                                  recipes={recipes} 
                                  setRecipes={setRecipes} 
                                  selectedPlan={selectedPlan} 
                                  setSelectedPlan={setSelectedPlan} 
                                  recipeStatus={recipeStatus} 
                                  setRecipeStatus={setRecipeStatus} 
                                  weekly={weekly}
                                  setWeekly={setWeekly}
                                  handleChange={handleChange}
                                /> : null
                              }
                            </Col>
                          </Row>
                      </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">Save</button>
                  </div>
                </Form>
          )}
          </Formik> : null
        }
      </div>
  );
};

export default WeeklySelection;
