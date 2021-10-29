import React, { useState, useEffect } from "react";
import ls from "../services/LocalStorage";
import "../stylesheet/app.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const saveData = () => {
    let data = { email, password };
    console.log(data);
    fetch("http://51.38.51.187:5050/api/v1/auth/log-in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((token) => {
        //Guardar el respultado con local storage
        const tokenBody = JSON.stringify(token);
        localStorage.setItem("token", tokenBody);
      });
  };
  return (
    <div className="App">
      <h1>LOGIN PAGE </h1>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
      </label>
      <br /> <br />
      <label htmlFor="password">
        password
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
      </label>
      <br /> <br />
      <button type="button" onClick={saveData}>
        Login
      </button>
    </div>
  );
};

export default Login;
