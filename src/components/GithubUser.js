import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./githubuser.css";
function GithubUser() {
  const [userInfo, setUserInfo] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_GITHUB_URL}/users/${name}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
      .then((result) => {
        setUserInfo(result.data);
        console.log(result);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      {userInfo && (
        <div className="userContainer">
          <img src={userInfo.avatar_url} />
          <div className="user__text">
            <div className="user__name">
              <h2>{userInfo.login}</h2>
              <p>{userInfo.type}</p>
            </div>
            <p>{userInfo.bio}</p>
            <button>
              <a target="_blank" href={`https://github.com/${userInfo.login}`}>
                Go to Github profile
              </a>
            </button>
            <div>
              <p>{userInfo.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubUser;
