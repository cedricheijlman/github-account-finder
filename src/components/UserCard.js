import React from "react";
import "./usercard.css";
function UserCard({ name, avatarUrl, id }) {
  return (
    <div className="userCard" key={id}>
      <img height={70} width={70} src={avatarUrl} />
      <div>
        <h2>{name}</h2>
        <p>Visit Profile</p>
      </div>
    </div>
  );
}

export default UserCard;
