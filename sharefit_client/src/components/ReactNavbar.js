import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

import { Session } from "../requests";

function ReactNavbar({ currentUser, onSignOut }) {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut();
    });
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>ShareFit</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/workouts">
          <Nav.Link href="/workouts">Workouts</Nav.Link>
        </LinkContainer>
        {currentUser ? (
          <>
            <LinkContainer to="/workouts/new">
              <Nav.Link>Add Workout</Nav.Link>
            </LinkContainer>

            <Nav.Link disabled>Hello, {currentUser.full_name}</Nav.Link>

            <Button variant="outline-primary" onClick={handleSignOut}>
              Sign out
            </Button>
          </>
        ) : (
          <>
            <LinkContainer to="/sign_up">
              <Nav.Link>Sign up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sign_in">
              <Nav.Link>Sign in</Nav.Link>
            </LinkContainer>
          </>
        )}
      </Nav>
    </Navbar>
  );
}
export default ReactNavbar;
