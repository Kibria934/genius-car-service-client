import React, { useEffect, useState } from "react";

const UseServices = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [service];
};

export default UseServices;
