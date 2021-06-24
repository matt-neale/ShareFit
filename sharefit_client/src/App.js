import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User } from "./requests";
import ReactNavbar from "./components/ReactNavbar";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import WorkoutIndexPage from "./components/WorkoutIndexPage";
import WorkoutShowPage from "./components/WorkoutShowPage";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import AuthRoute from "./components/AuthRoute";
import NewWorkoutPage from "./components/NewWorkoutPage";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return User.current().then((user) => {
      if (user?.id) {
        this.setState((state) => {
          return { user };
        });
      }
    });
  };

  onSignOut = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <div className="content-container">
          <BrowserRouter>
            <ReactNavbar
              currentUser={this.state.user}
              onSignOut={this.onSignOut}
            />
            <br />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/sign_in"
                render={(routeProps) => (
                  <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
                )}
              />
              <Route
                exact
                path="/sign_up"
                render={(routeProps) => (
                  <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />
                )}
              />
              <AuthRoute
                // The !! turns something "truthy" or "falsy" to true and false respectively
                isAuthenticated={!!this.state.user}
                exact
                path="/workouts/new"
                component={NewWorkoutPage}
              />
              <Route
                path="/workouts/:id"
                render={(routeProps) => (
                  <WorkoutShowPage
                    {...routeProps}
                    currentUser={this.state.user}
                  />
                )}
              />
              <Route path="/workouts/" component={WorkoutIndexPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
