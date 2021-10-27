import React, { useState } from "react";
import "../stylesheet/app.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function saveData() {
    let data = { name, surname, email, password };
    fetch("http://51.38.51.187:5050/api/v1/auth/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result", result);
      });
    });
  }
  return (
    <div className="App">
      <h1>SIGN UP </h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="text"
        name="surname"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />{" "}
      <br /> <br />
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
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
