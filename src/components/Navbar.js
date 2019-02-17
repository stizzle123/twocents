import React from "react";
import Logo from "../img/logo.png";
import face1 from "../img/face1.jpeg";

export default () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <i class="fas fa-search" />
      </div>

      <div className="navbar__avatar">
        <img src={face1} alt="Avatar" />
      </div>
    </div>
  );
};
