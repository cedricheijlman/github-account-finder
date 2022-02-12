import React, { useEffect, useState } from "react";
import Axios from "axios";
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
      <div className="homePage__searchResults"></div>
    </div>
  );
}

export default Home;
