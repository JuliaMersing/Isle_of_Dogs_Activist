import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="page__wrapper">
        <h1 className="page__title">Why we are here?</h1>
        <p className="page__paragraph">
          An outbreak of canine influenza spreads through the city of Megasaki
          with the risk of contagion to humans. The city's authoritarian mayor,
          Kenji Kobayashi, ratifies an official decree banishing all dogs to
          Garbage Island, which is immediately approved despite the insistence
          of Professor Watanabe, the mayor's political opponent, who claims to
          be close to creating a cure.
        </p>
        <h1 className="page__title">Who are we?</h1>
        <p className="page__paragraph">
          {" "}
          Like many of us, six months ago Atari lost his best friend Spots. We
          believe there is a cure for the disease, but the government is hiding
          it, so we are willing to fly to Trash Island and get all our friends
          back. We have a great team and a better canine pack on the ground led
          by Chief. Will you join us in this adventure?
        </p>
        <div className="page__buttons">
          <button
            className="page__button"
            onClick={() => history.push("/SignUp")}
          >
            Sign Up
          </button>
          <button
            className="page__button"
            onClick={() => history.push("/Login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
