import React, { Component } from "react";
import NewWorkoutForm from "./NewWorkoutForm";
import { Workout } from "../requests";

class NewWorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.createWorkout = this.createWorkout.bind(this);
  }

  createWorkout(params) {
    Workout.create(params).then((workout) => {
      if (workout.errors) {
        this.setState({ errors: workout.errors });
      } else {
        this.props.history.push(`/workouts/${workout.id}`);
      }
    });
  }

  render() {
    return (
      <div>
        <NewWorkoutForm
          createWorkout={this.createWorkout}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default NewWorkoutPage;
