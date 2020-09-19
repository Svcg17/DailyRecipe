import React, { useState, useContext } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import UserContext from '../Context/UserContext';

/** User SignUp function component */
const SignUp = ({ history }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);

  /** Handles form submition */
  const handleSignIn = (event) => {
    event.preventDefault();

    const request = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    };
    fetch('http://localhost:5000/api/auth/register', request)
      .then((response) => {
        // http response error
        response.json().then((data) => {
          if (data.error) setError(data.error);
          else {
            setUser(data.user);
            console.log(data.user);
            history.push('/delivery'); // go to /delivery
          }
        });
      })
      .catch((error) => {
        console.log('An error happened', error);
        setError(error);
      }); // network error
  };

  /** Handles change on form's input fields */
  const handleChange = (event) => {
    const key = event.target.name;
    setFormState({ ...formState, [key]: event.target.value });
  };

  return (
    <Container className='my-5'>
      <h2 className='my-3'>Sign up to begin</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name='name'
            onChange={handleChange}
            placeholder='Enter your name'
            required
          />
        </Form.Group>
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
            required
            aria-describedby="passwordHelpBlock" />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be at least 8 characters long.
          </Form.Text>
        </Form.Group>
        {error.length
          ? <Form.Control.Feedback type='invalid' className='d-block'>{ error.length ? error : '' }</Form.Control.Feedback>
          : ''}
        <Button variant='primary' type='submit'>Continue</Button>
      </Form>
    </Container>
  );
};

export default SignUp;