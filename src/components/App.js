import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getApiData from "../services/Api";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
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
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Login">
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
