import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../stylesheet/layout/header.scss";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <header className="header">
          <img
            className="header__img"
            src={logo}
            title="Go to home"
            alt="Isle of dogs"
          />
          <h1 className="header__title">Isle of dogs</h1>
        </header>
      </Link>
    </div>
  );
}
