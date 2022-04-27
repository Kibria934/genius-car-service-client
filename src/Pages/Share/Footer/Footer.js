import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="container d-flex justify-content-center absolute">
      <span className="fs-4 m-2 p-3 text-center">
        Copyright &copy;{" "}
        <span className="text-success fw-bold text-decoration-underline">
          {year}
        </span>
      </span>
    </footer>
  );
};

export default Footer;
