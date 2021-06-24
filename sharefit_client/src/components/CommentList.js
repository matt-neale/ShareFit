import React, { Fragment } from "react";
import CommentDetails from "./CommentDetails";

function CommentList(props) {
  const comments = props.workout.comments;
  const { currentUser } = props;
  return (
    <div id="commentList" className="commentList">
      {comments
        ? comments.map(({ body, author, created_at, id }, index) => (
            <Fragment key={index}>
              <CommentDetails
                workout_id={props.workout.id}
                id={id}
                currentUser={currentUser}
                body={body}
                author={author}
                created_at={new Date(created_at).toLocaleString()}
                deleteComment={props.deleteComment}
              />
              <br />
            </Fragment>
          ))
        : null}
    </div>
  );
}

export default CommentList;
