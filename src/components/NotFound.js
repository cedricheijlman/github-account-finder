import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404 PAGE NOT FOUND</h1>
      <button>
        <Link to={"/"}>Back to home</Link>
      </button>
    </div>
  );
}

export default NotFound;
