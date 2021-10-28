import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../stylesheet/users/userCard.scss";

const UserCard = ({ user }) => {
  return (
    <div className="container">
      <article className="user">
        <h4 className="user__name">{user.name}</h4>
        <Link to={`/user/${user.id}`}>
          {" "}
          <button className="user__button">Book a 3D consultation</button>{" "}
        </Link>
      </article>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
};

export default UserCard;
