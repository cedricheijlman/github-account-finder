import React from "react";
import { Link } from "react-router-dom";
import "./usercard.css";
function UserCard({ name, avatarUrl, id }) {
  return (
    <div className="userCard" key={id}>
      <img height={70} width={70} src={avatarUrl} />
      <div>
        <h2>{name}</h2>
        <Link to={`/user/${name}`}>
          <p>Visit Profile</p>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
