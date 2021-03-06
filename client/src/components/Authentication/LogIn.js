import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import UserContext from '../../context/UserContext';
import './Authentication.css';

/** Logs in an existing user */
const LogIn = ({ history }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);

  /** Handles form submition by calling API in backend */
  const handleSignIn = (event) => {
    event.preventDefault();

    const request = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    };

    fetch(`${process.env.REACT_APP_HOST}/api/auth/login`, request)
      .then((response) => {
        response.json().then((data) => {
          if (data.error) setError(data.error); // http response error
          else {
            setUser(data.token);
            history.push('/');
          }
        });
      })
      .catch((error) => {
        console.log('An error happened', error); // network error
        setError(error.toString());
      });
  };

  /** Sets form's state when fields are changed by the user */
  const handleChange = (event) => {
    const key = event.target.name;
    setFormState({ ...formState, [key]: event.target.value });
  };

  return (
        <Container className='my-5 formContainer'>
            <h2 className='my-3'>Log In</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name='email'
                        onChange={handleChange}
                        type='email'
                        placeholder='Enter email'
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        onChange={handleChange}
                        type='password'
                        placeholder='Enter password'
                        minLength='8'
                        required />
                </Form.Group>
                {error.length
                  ? <Form.Control.Feedback type='invalid' className='d-block'>{error.length ? error : ''}</Form.Control.Feedback>
                  : ''}
                <Button variant='primary' type='submit'>Continue</Button>
            </Form>
        </Container>
  );
};
export default LogIn;
