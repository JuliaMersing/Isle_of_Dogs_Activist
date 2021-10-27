import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getApiData from "../services/Api";
import SignUp from "./SignUp";
import Login from "./LoginPage";
import UserList from "./Users/UserList";

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
    <div>
      <Switch>
        <Route exact path="/">
          <SignUp />
          <Login />
        </Route>
        <Route path="/users">
          <UserList Users={users} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
