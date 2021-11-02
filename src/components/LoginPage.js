import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/layout/form.scss";

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
    <>
      <Link to="/">
        <span className="form__icon">👈🏻</span>
      </Link>
      <div className="form">
        <label htmlFor="email" className="form__label">
          <input
            className="form__input"
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
        </label>
        <br /> <br />
        <label htmlFor="password" className="form__label">
          <input
            className="form__input"
            placeholder="Pasword"
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
        </label>
        <br /> <br />
        <button type="submit" className="form__button" onClick={saveData}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
