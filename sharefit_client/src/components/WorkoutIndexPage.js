import React, { Component } from "react";
import { Workout } from "../requests";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

class WorkoutIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { workouts: [] };
  }

  componentDidMount() {
    Workout.index().then((workouts) => {
      this.setState((state) => {
        return {
          workouts: workouts,
        };
      });
    });
  }

  deleteWorkout(id) {
    this.setState((state) => {
      return {
        workouts: state.workouts.filter((w) => w.id !== id),
      };
    });
  }

  render() {
    return (
      <main>
        <h1 className="title">Workouts</h1>
        {this.state.workouts.map(({ id, title, description }) => (
          <Card key={id} border="primary" className="workoutCards">
            <Card.Body>
              <Link to={`/workouts/${id}`}>
                <Card.Title>{title}</Card.Title>
              </Link>

              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </main>
    );
  }
}

export default WorkoutIndexPage;
