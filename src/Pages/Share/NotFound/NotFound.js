import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound">
      <div className="n-left">
        <h1 className="px-4 text-success">404</h1>
      </div>
      <div className="n-right">
        <h1 className="text-danger">Not Found here somthing</h1>
      </div>
    </div>
  );
};

export default NotFound;
