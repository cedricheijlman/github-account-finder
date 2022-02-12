import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "./UserCard";
function Home() {
  const [search, setSearch] = useState(null);
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    Axios.get(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${search}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }).then((result) => {
      console.log(result);
      setResult(result.data.items);
    });
  };

  return (
    <div className="homePage">
      <h1>Search for an Github account</h1>
      <div className="homePage__search">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        />
        <button onClick={handleSearch}>Go</button>
      </div>
      <div className="homePage__searchResults">
        {result &&
          result.length !== 0 &&
          result.map((user) => {
            return <UserCard name={user.login} avatarUrl={user.avatar_url} />;
          })}
      </div>
    </div>
  );
}

export default Home;
