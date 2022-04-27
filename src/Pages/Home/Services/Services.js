import React, { useEffect, useState } from "react";
import UseServices from "../../../hooks/UseServices";
import Service from "../Home/Service/Service";
import "./Sevices.css";
const Services = () => {
  const [service] = UseServices();
  return (
    <div id="service" className="container ">
      <h3>Services:{service.length} </h3>
      <div className="card-container">
        {service.map((s) => (
          <Service key={s._id} service={s}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
