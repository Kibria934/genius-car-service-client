import React from "react";
import google from "../../images/Google-G-Logo.png";
import Facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div className="text-danger fw-bold">
        error:{error?.message}
        {error1?.message}
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-success"></div>
        <p className="px-2 mt-2 fw-bold">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-success"></div>
      </div>
      <p>{errorElement}</p>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success fw-bold text-black fs-4 w-100"
      >
        <img
          style={{ width: "40px", marginRight: "10px" }}
          src={google}
          alt=""
        />
        Google sign In
      </button>
      <button className="btn border bg-info fw-bold text-black fs-4 mt-2 w-100">
        <img style={{ width: "40px" }} src={Facebook} alt="" />
        Facebook sign In
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="btn btn-success fw-bold text-black fs-4 mt-2 w-100"
      >
        <img style={{ width: "40px" }} className="me-2" src={github} alt="" />
        Github
      </button>
    </div>
  );
};

export default SocialLogin;
