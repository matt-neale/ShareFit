import React from "react";
import { Session } from "../requests";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignInPage(props) {
  const { onSignIn } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const params = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    Session.create(params).then((data) => {
      if (data.id) {
        onSignIn();
        props.history.push("/workouts");
      }
    });
  }

  return (
    <main>
      <h1 className="title">Sign In</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
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
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
}

export default SignInPage;
