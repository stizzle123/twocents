import React from "react";
import { Link } from "react-router-dom";
import face1 from "../img/face1.jpeg";

export default () => {
  return (
    <div className="header">
      <Link to="/" className="header__brand">
        Tc
      </Link>
      <ul className="header__list">
        <li className="header__item">
          <Link to="/" className="header__link">
            Home
          </Link>
        </li>
        <li className="header__item">
          <Link to="/" className="header__link">
            Sessions
          </Link>
        </li>
        <li className="header__item">
          <Link to="/" className="header__link">
            Topics
          </Link>
        </li>
      </ul>
      <div className="header__search-container">
        <input
          type="text"
          className="header__search-container--box"
          placeholder="Search..."
        />
        <i className="fas fa-search" />
      </div>
      <div className="header__notifications">
        <i className="fas fa-envelope header__notifications--icon" />
        <i className="fas fa-bell header__notifications--icon" />
        <img
          src={face1}
          alt="Profile Pic"
          className="header__notifications--avatar"
        />
      </div>
      <button className="header__post">New Post</button>
    </div>
  );
};
