import React from "react";

function ExerciseDetails({ name, sets, reps, id }) {
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{sets}</td>
        <td>{reps}</td>
      </tr>
    </tbody>
  );
}

export default ExerciseDetails;
