import React from "react";
import ExerciseDetails from "./ExerciseDetails";
import Table from "react-bootstrap/Table";

function ExerciseList(props, deleteExercise) {
  const exercises = props.exercises;
  return (
    <div className="exerciseTable">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        {exercises
          ? exercises.map(({ name, sets, reps, id }, index) => (
              <ExerciseDetails
                key={index}
                id={id}
                name={name}
                sets={sets}
                reps={reps}
              />
            ))
          : null}
      </Table>
    </div>
  );
}

export default ExerciseList;
