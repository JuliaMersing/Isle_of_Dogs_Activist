import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import getApiData from "../services/Api";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import SignUp from "./SignUp";
import Login from "./LoginPage";
import UserList from "./Users/UserList";
import "../stylesheet/app.scss";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      getApiData().then((usersData) => {
        setUsers(usersData);
      });
    }
  }, []);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="page__wrapper">
            <h1 className="page__title">Why we are here?</h1>
            <p className="page__paragraph">
              An outbreak of canine influenza spreads through the city of
              Megasaki with the risk of contagion to humans. The city's
              authoritarian mayor, Kenji Kobayashi, ratifies an official decree
              banishing all dogs to Garbage Island, which is immediately
              approved despite the insistence of Professor Watanabe, the mayor's
              political opponent, who claims to be close to creating a cure.
            </p>
            <h1 className="page__title">Who are we?</h1>
            <p className="page__paragraph">
              {" "}
              Like many of us, six months ago Atari lost his best friend Spots.
              We believe there is a cure for the disease, but the government is
              hiding it, so we are willing to fly to Trash Island and get all
              our friends back. We have a great team and a better canine pack on
              the ground led by Chief. Will you join us in this adventure?
            </p>
          </div>
          <div className="page__buttons">
            <button className="page__button">Sign Up</button>
            <button className="page__button">Login</button>
          </div>
          <SignUp />
          <Login />
        </Route>
        <Route path="/users">
          <UserList users={users} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
