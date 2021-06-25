import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

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
      <Fade right>
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
      </Fade>
      <Fade left>
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
      </Fade>
      <Fade right>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Fade>
    </Form>
  );
};

export default NewWorkoutForm;
