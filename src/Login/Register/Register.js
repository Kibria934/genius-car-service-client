import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
    // console.log(error);
    return;
  }

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    createUserWithEmailAndPassword(email, password);
    // console.log(email, password, name);
  };

  return (
    <div className="container f-container">
      <Form onSubmit={handleSubmit} className="f-container">
        <h1 className="text-primary mb-4 text-center">Register here!</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?
        <span className="text-danger link" onClick={() => navigate("/login")}>
          Please Login
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
