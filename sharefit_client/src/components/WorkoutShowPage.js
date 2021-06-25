import React from "react";
import WorkoutDetails from "./WorkoutDetails";
import { Workout, Comment, Exercise } from "../requests";
import CommentList from "./CommentList";
import ExerciseList from "./ExerciseList";
import { useState, useEffect } from "react";
import NewCommentForm from "./NewCommentForm";
import NewExerciseForm from "./NewExerciseForm";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

function WorkoutShowPage(props) {
  const [workout, setWorkout] = useState({});
  const { currentUser } = props;

  const refresh = () => {
    Workout.show(props.match.params.id).then((workout) => {
      setWorkout(workout);
    });
  };

  useEffect(() => {
    refresh();
  }, [props.match.params.id]);

  const createExercise = (params) => {
    Exercise.create(props.match.params.id, params).then(() => {
      refresh();
    });
  };

  const deleteExercise = (id) => {
    Exercise.destroy(id).then(() => {
      refresh();
    });
  };

  const createComment = (params) => {
    Comment.create(props.match.params.id, params).then(() => {
      refresh();
    });
  };

  const deleteComment = (id) => {
    Comment.destroy(id).then(() => {
      refresh();
    });
  };

  return (
    <div>
      {workout ? (
        <main>
          <Zoom bottom>
            <WorkoutDetails
              title={workout.title}
              description={workout.description}
              creator={workout.creator}
              created_at={new Date(workout.created_at).toLocaleString()}
            />
          </Zoom>

          {currentUser ? (
            workout &&
            workout.creator &&
            workout.creator.id === currentUser.id ? (
              <>
                <Zoom>
                  <h1 className="title">Add an exercise</h1>
                </Zoom>
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

          <Zoom>
            <h1 className="title">Exercises</h1>
          </Zoom>
          <Zoom bottom>
            <ExerciseList
              exercises={workout.exercises}
              deleteExercise={deleteExercise}
            />
          </Zoom>

          {currentUser ? (
            <NewCommentForm body={Comment.body} createComment={createComment} />
          ) : (
            ""
          )}
          <Slide bottom>
            <CommentList
              currentUser={currentUser}
              workout={workout}
              deleteComment={deleteComment}
            />
          </Slide>
        </main>
      ) : (
        ""
      )}
    </div>
  );
}

export default WorkoutShowPage;
