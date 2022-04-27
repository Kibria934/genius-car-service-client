import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../hooks/useServiceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetails(serviceId);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/service/${serviceId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setService(data);
  //     });
  // }, []);
  return (
    <div>
      <h1>serVice Id:{service.name}</h1>
      <h2>Hello is just catch you serviceDetails</h2>
      <Link to={`/checkout/${serviceId}`}> checkout</Link>
    </div>
  );
};

export default ServiceDetail;
