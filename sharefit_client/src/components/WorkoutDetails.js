import React from "react";
import Card from "react-bootstrap/Card";

function WorkoutDetails({ title, description, creator, created_at }) {
  return (
    <Card border="primary" className="workoutCards">
      <Card.Body>
        <Card.Title id="showPageTitle">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>By: {creator ? creator.full_name : null}</Card.Text>
        <Card.Text>Created on {created_at}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkoutDetails;
