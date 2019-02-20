import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import face1 from "../img/face1.jpeg";

class Navbar extends Component {
  showDropdown = () => {
    const dropdown = document.querySelector(".dropdown");

    dropdown.classList.toggle("show");
  };

  render() {
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
          <img src={face1} alt="Avatar" onClick={this.showDropdown} />
          <ul className="dropdown">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
