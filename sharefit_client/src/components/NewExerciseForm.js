import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewExerciseForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      name: formData.get("name"),
      sets: formData.get("sets"),
      reps: formData.get("reps"),
    };
    props.createExercise(params);
  };
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Exercise name</Form.Label>
        <Form.Control
          htmlFor="name"
          id="name"
          name="name"
          type="text"
          placeholder="eg. Dumbbell shoulder press"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Sets</Form.Label>
        <Form.Control
          htmlFor="sets"
          id="sets"
          name="sets"
          type="text"
          placeholder="Please enter an integer"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Reps</Form.Label>
        <Form.Control
          htmlFor="reps"
          id="reps"
          name="reps"
          type="text"
          placeholder="Please enter an integer"
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewExerciseForm;
