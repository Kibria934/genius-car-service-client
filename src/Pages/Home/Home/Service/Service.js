import React from "react";
import { Button, Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleParam = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="card flued w-100">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="flued" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price: {price}</p>
          <Card.Text>{description}</Card.Text>
          <Button onClick={() => handleParam(_id)} variant="primary">
            {name}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
