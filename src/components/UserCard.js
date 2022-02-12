import React from "react";

function UserCard({ name, avatarUrl, id }) {
  return (
    <div key={id}>
      <img width={70} src={avatarUrl} />
      <h2>{name}</h2>
      <p>Visit Profile</p>
    </div>
  );
}

export default UserCard;
