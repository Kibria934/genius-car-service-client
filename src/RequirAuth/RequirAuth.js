import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const RequirAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log(user);
  if (!user.emailVerified) {
    return (
      <div className="text-center w-100 mt-4">
        <h3 className="text-danger">Your email is not verified !!!</h3>;
        <button className="btn btn-primary ">Verify email</button>
      </div>
    );
  } else {
    return children;
  }
};

export default RequirAuth;
