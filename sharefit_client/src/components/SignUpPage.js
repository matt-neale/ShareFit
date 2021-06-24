import React from "react";
import { User } from "../requests";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpPage = (props) => {
  const { onSignUp } = props;
  const handleSubmit = (event) => {
    const { currentTarget } = event;
    event.preventDefault();
    const formData = new FormData(currentTarget);
    const params = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation"),
    };
    User.create(params).then((res) => {
      if (res?.id) {
        onSignUp();
        props.history.push("/workouts");
      }
    });
  };

  return (
    <main>
      <h1 className="title">Sign Up</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="first_name"
            name="first_name"
            id="first_name"
            placeholder="Enter First Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="last_name"
            name="last_name"
            id="last_name"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Enter Password Again"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default SignUpPage;
