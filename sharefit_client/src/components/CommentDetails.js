import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CommentDetails({
  body,
  author,
  created_at,
  id,
  workout_id,
  deleteComment,
  currentUser,
}) {
  return (
    <Card>
      <Card.Header>{author ? author.full_name : null}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p id="commentBody">{body}</p>
          <footer className="blockquote-footer">{created_at}</footer>
        </blockquote>

        {currentUser && author.id === currentUser.id ? (
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => deleteComment(id)}
          >
            Delete
          </Button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}

export default CommentDetails;
