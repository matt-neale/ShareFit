import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewCommentForm;
