import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useServiceDetails = (serviceId) => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
          .then((res) => res.json())
          .then((data) => {
            setService(data);
          });
      }, [serviceId]);
  return [service,setService]
};

export default useServiceDetails;