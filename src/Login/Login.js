import axios from "axios";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
    const [sendEmailVerification, sending1, error1] = useSendEmailVerification(
      auth
    );

  let from = location.state?.from?.pathname || "/";
  const [user, loading, error] = useAuthState(auth);
if(user){
  navigate(from, { replace: true });
}

  const handleSubmit =async(e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setEmail(email);
    const password = passwordRef.current.value;
    console.log(email, password);
   await signInWithEmailAndPassword(auth, email, password).catch((error) =>
    toast.error(error.code)
    );
    const {data}=await axios.post(`http://localhost:5000/login`,{email})
    console.log(data);
    localStorage.setItem('token', data.token)
 
    sendEmailVerification();
     
  };

  return (
    <div className="container f-container">
      <Form onSubmit={handleSubmit} className="f-container">
        <h1 className="text-primary mb-4 text-center">Login here!</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
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
        New to genious car?
        <span
          className="text-danger link"
          onClick={() => navigate("/register")}
        >
          Please register
        </span>
      </p>
      <p>
        Forgate password?
        <span
          className="text-danger link"
          onClick={async () => {
            await sendPasswordResetEmail(email);
            alert("Sent email");
          }}
        >
          Reset password
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
