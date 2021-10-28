import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/users/userDetail.scss";
import AppointmentPicker from "../Booking/AppointmentPicker";
import PropTypes from "prop-types";

const UserDetail = ({ user }) => {
  return (
    <div className="userId">
      <article className="userId__card">
        <div className="userId__details">
          <h4 className="userId__name"> {user.name}</h4>
          <ul>
            <li className="userId__list">Email: {user.email}</li>
          </ul>
        </div>
      </article>
      <Link className="userId__link" to="/">
        <span className="userId__icon">👈🏻</span>
      </Link>
      <AppointmentPicker />
    </div>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  email: PropTypes.string,
};

export default UserDetail;
