import React from "react";
import { useRef } from "react";
import {Link,useNavigate } from "react-router-dom";
import { login } from "./Api";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const user = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    const token = await login(user);
      authActions.isAuthenticated({
        token: token,
        userId: enteredEmail,
        isAuthenticated: true,
      }
    );
    localStorage.setItem(enteredEmail, token)
  }

  return (
    <div className="login">
      <div>
        <h3>Login</h3>
      </div>
      <Form onSubmit={loginHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" ref={emailRef} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
        </Form.Group>

        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;

