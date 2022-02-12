import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <h1>Github Account Finder</h1>
      <div className="rightNav">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
}

export default Header;
