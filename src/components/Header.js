import React, { Component } from "react";
import { Link } from "react-router-dom";
import face1 from "../img/face1.jpeg";
import face2 from "../img/face2.jpeg";
import face3 from "../img/face3.jpeg";
import face5 from "../img/face5.jpeg";

class Header extends Component {
  onShowDropdown = _ => {
    const hover = document.querySelector(".hover");
    hover.classList.toggle("show");
  };

  render() {
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
          <div className="header__notifications-wrapper">
            <i
              className="fas fa-envelope header__notifications--icon"
              onClick={this.onShowDropdown}
            />
            <div className="header__notifications-dropdown hover">
              <p>View Messages</p>
              <ul className="header__notifications-dropdown__content">
                <li className="header__notifications-dropdown__items">
                  <div className="header__notifications-dropdown__info">
                    <img src={face2} alt="Avatar 2" />
                    <div className="header__notifications-dropdown__message">
                      <h3>Yomi Adedeji</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, expedita!
                      </p>
                    </div>
                    <p>2m</p>
                  </div>
                </li>
                <li className="header__notifications-dropdown__items">
                  <div className="header__notifications-dropdown__info">
                    <img src={face3} alt="Avatar 3" />
                    <div className="header__notifications-dropdown__message">
                      <h3>Don Jazzy</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, expedita!
                      </p>
                    </div>
                    <p>2m</p>
                  </div>
                </li>
                <li className="header__notifications-dropdown__items">
                  <div className="header__notifications-dropdown__info">
                    <img src={face5} alt="Avatar 4" />
                    <div className="header__notifications-dropdown__message">
                      <h3>Tobi Igbinedion</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut, expedita!
                      </p>
                    </div>
                    <p>2m</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
  }
}

export default Header;
