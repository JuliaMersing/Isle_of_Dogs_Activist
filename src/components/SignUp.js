import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/layout/form.scss";

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
    <>
      <Link className="form__link" to="/">
        <span className="form__icon">👈🏻</span>
      </Link>
      <div className="form">
        <label htmlFor="name" className="form__label">
          <input
            placeholder="Name"
            className="form__input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
        </label>
        <br /> <br />
        <label htmlFor="surname" className="form__label">
          <input
            placeholder="Surname"
            className="form__input"
            type="text"
            name="surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </label>{" "}
        <br /> <br />
        <label htmlFor="email" className="form__label">
          <input
            placeholder="Email"
            className="form__input"
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>{" "}
        <br /> <br />
        <label htmlFor="password" className="form__label">
          <input
            placeholder="Pasword"
            className="form__input"
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
        </label>
        <br /> <br />
        <button className="form__button" type="button" onClick={saveData}>
          Sign Up
        </button>
      </div>
    </>
  );
};
export default SignUp;
