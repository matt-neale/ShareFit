import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

const NewCommentForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      body: formData.get("body"),
    };

    props.createComment(params);
  };
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Fade left>
        <Form.Group>
          <Form.Label>Add comment here</Form.Label>
          <Form.Control
            htmlFor="body"
            id="body"
            name="body"
            as="textarea"
            rows={3}
            placeholder="eg. This was exhausting!"
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

export default NewCommentForm;
