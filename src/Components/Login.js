import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./Api";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [isEmailSent, setIsEmailSent] = useState(false);

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
    if (token) {
      localStorage.setItem(enteredEmail, token);
      setIsEmailSent(false);
      navigate("/welcome");
    }
  };

  const sendVerificationEmail = async () => {
    const enteredEmail = emailRef.current.value;
    const idToken = localStorage.getItem(enteredEmail);
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA6Bh9-tRa9uPURWKUS7JJc9T04h1Dph3M`;
    const data = {
      requestType: 'VERIFY_EMAIL',
      idToken: idToken
    };
    try {
      await axios.post(url, data);
      setIsEmailSent(true);
    } catch (error) {
      console.error(error);
    }
  };

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
          {isEmailSent ? (
            <div>Email sent!</div>
          ) : (
            <Button variant="secondary" onClick={sendVerificationEmail}>
              Verify Email
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default Login;



