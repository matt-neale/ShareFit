import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal/Fade";

function HomePage() {
  return (
    <Fade>
      <main>
        <Jumbotron id="mainInfo">
          <h2>Welcome to ShareFit</h2>
          <br />
          <p>
            This is the number one place where fitness enthusiasts come to share
            knowledge.
          </p>
          <p>
            Our mission is to keep you on track with your goals with the
            motivation and tools to not only reach those goals but smash right
            past them.
          </p>
          <p>Ready to get started? Get signed up to realize your potential.</p>
          <LinkContainer to="/sign_up">
            <Button variant="outline-primary">Sign Up</Button>
          </LinkContainer>
        </Jumbotron>
        <br />
        <Carousel id="carousel" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Consistency</h3>
              <p>Work towards your goals and hold yourself accountable.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://anytimestrength.com/wp-content/uploads/2021/03/Dumbbell-Exercises-1600x1067.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Interaction</h3>
              <p>Get feedback from the community and have your own input.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1600/https://www.brandsfind.com/wp-content/uploads/2019/06/shutterstock_695214214-1600x1067.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Progression</h3>
              <p>
                Tools to help you reach new heights are always at your
                fingertips.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </main>
    </Fade>
  );
}

export default HomePage;
