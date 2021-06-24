import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewWorkoutForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    props.createWorkout(params);
  };
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Workout Title</Form.Label>
        <Form.Control
          htmlFor="title"
          id="title"
          name="title"
          type="text"
          placeholder="eg. Awesome shoulder routine"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          htmlFor="description"
          id="description"
          name="description"
          as="textarea"
          rows={3}
          placeholder="eg. Should really get the delts fired up!"
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewWorkoutForm;
