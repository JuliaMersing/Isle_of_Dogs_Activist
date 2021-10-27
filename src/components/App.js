import React from "react";
import SignUp from "./SignUp";
import Login from "./LoginPage";
import UserList from "./Users/UserList";

const App = () => {
  return (
    <div>
      <SignUp />
      <Login />
      <UserList />
    </div>
  );
};

export default App;
