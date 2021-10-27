import React, { useState, useEffect } from "react";
import ls from "./LogalStorage";
import "../stylesheet/app.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function saveData() {
    let data = { email, password };
    fetch("http://51.38.51.187:5050/api/v1/auth/log-in.catch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((resultAccess) => {
          ls.set("resultAccess", resultAccess);
    });
  }
  return (
    <div className="App">
      <h1>LOGIN PAGE </h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button type="button" onClick={saveData}>
        Login
      </button>
    </div>
  );
};
export default Login;