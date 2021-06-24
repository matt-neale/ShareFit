import React from "react";
import WorkoutDetails from "./WorkoutDetails";
import { Workout, Comment, Exercise } from "../requests";
import CommentList from "./CommentList";
import ExerciseList from "./ExerciseList";
import { useState, useEffect } from "react";
import NewCommentForm from "./NewCommentForm";
import NewExerciseForm from "./NewExerciseForm";

function WorkoutShowPage(props) {
  const [workout, setWorkout] = useState({});
  const { currentUser } = props;

  useEffect(() => {
    Workout.show(props.match.params.id).then((workout) => {
      setWorkout(workout);
    });
  }, [props.match.params.id]);

  const createExercise = (params) => {
    Exercise.create(props.match.params.id, params).then(() => {
      Workout.show(props.match.params.id).then((workout) => {
        setWorkout(workout);
      });
    });
  };

  const deleteExercise = (id) => {
    Exercise.destroy(id).then(() => {
      Workout.show(props.match.params.id).then((workout) => {
        setWorkout(workout);
      });
    });
  };

  const createComment = (params) => {
    Comment.create(props.match.params.id, params).then(() => {
      Workout.show(props.match.params.id).then((workout) => {
        setWorkout(workout);
      });
    });
  };

  const deleteComment = (id) => {
    Comment.destroy(id).then(() => {
      Workout.show(props.match.params.id).then((workout) => {
        setWorkout(workout);
      });
    });
  };

  return (
    <div>
      {workout ? (
        <main>
          <WorkoutDetails
            title={workout.title}
            description={workout.description}
            creator={workout.creator}
            created_at={new Date(workout.created_at).toLocaleString()}
          />
          <br />

          {currentUser ? (
            workout &&
            workout.creator &&
            workout.creator.id === currentUser.id ? (
              <>
                <h1 className="title">Add an exercise</h1>
                <NewExerciseForm
                  name={Exercise.name}
                  sets={Exercise.sets}
                  reps={Exercise.reps}
                  createExercise={createExercise}
                />
              </>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          <h1 className="title">Exercises</h1>
          <ExerciseList
            exercises={workout.exercises}
            deleteExercise={deleteExercise}
          />

          {currentUser ? (
            <NewCommentForm body={Comment.body} createComment={createComment} />
          ) : (
            ""
          )}
          <br />
          <CommentList
            currentUser={currentUser}
            workout={workout}
            deleteComment={deleteComment}
          />
        </main>
      ) : (
        ""
      )}
    </div>
  );
}

export default WorkoutShowPage;
