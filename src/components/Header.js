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

  onShowDropdown2 = _ => {
    const hover = document.querySelector(".hover2");
    hover.classList.toggle("show");
  };

  onShowDropdown3 = _ => {
    const hover = document.querySelector(".hover3");
    hover.classList.toggle("show");
  };

  addOverlay = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("show");
  };

  removeOverlay = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("show");
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
              className="fas  fa-envelope header__notifications--icon"
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
          <div className="header__notifications-wrapper">
            <i
              className="fas fa-bell header__notifications--icon"
              onClick={this.onShowDropdown2}
            />
            <div className="header__notifications-dropdown hover2">
              <ul className="header__notifications-dropdown__content">
                <li className="header__notifications-dropdown__items">
                  <div className="header__notifications-dropdown__info">
                    <div className="header__notifications-dropdown__avatar">
                      <i class="fas fa-user" />
                    </div>
                    <div className="header__notifications-dropdown__message">
                      <h3>
                        Eva Ngugi <span>shared and Insight</span>
                      </h3>
                      <p>1 min(s) ago</p>
                    </div>
                  </div>
                </li>
                <li className="header__notifications-dropdown__items">
                  <div className="header__notifications-dropdown__info">
                    <div className="header__notifications-dropdown__avatar">
                      <i class="fas fa-user" />
                    </div>
                    <div className="header__notifications-dropdown__message">
                      <h3>
                        Kemi Leo and Dolaris <span>are now following you</span>
                      </h3>
                      <p>2 min(s) ago</p>
                    </div>
                  </div>
                </li>
                <li className="header__notifications-dropdown__items">
                  <div className="header__notifications-dropdown__info">
                    <div className="header__notifications-dropdown__avatar">
                      <p>Tc</p>
                    </div>
                    <div className="header__notifications-dropdown__message">
                      <h3>
                        TwoCents <span>shared a news post</span>
                      </h3>
                      <p>3 min(s) ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__notifications-wrapper">
            <img
              src={face1}
              alt="Profile Pic"
              className="header__notifications--avatar"
              onClick={this.onShowDropdown3}
            />
            <div className="header__notifications--avatar__dropdown hover3">
              <div className="header__notifications--avatar__dropdown-top">
                <ul className="header__notifications--avatar__list">
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-user" /> Profile
                  </li>
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-envelope" /> Messages
                  </li>
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-cog" /> Settings
                  </li>
                </ul>
              </div>

              <div className="header__notifications--avatar__dropdown-middle">
                <ul className="header__notifications--avatar__list">
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-info-circle" /> About
                  </li>
                  <li className="header__notifications--avatar__item">
                    <i class="far fa-newspaper" /> News
                  </li>
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-question-circle" /> FAQs
                  </li>
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-phone-square" /> Contact
                  </li>
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-file-alt" /> Legal
                  </li>
                </ul>
              </div>

              <div className="header__notifications--avatar__dropdown-bottom">
                <ul className="header__notifications--avatar__list">
                  <li className="header__notifications--avatar__item">
                    <i class="fas fa-sign-out-alt" /> Sign Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button className="header__post" onClick={this.addOverlay}>
          New Post
        </button>
        <div className="overlay">
          <div className="overlay-content">
            <div className="overlay-close" onClick={this.removeOverlay}>
              <i class="fas fa-times" />
            </div>
            <div className="overlay-content__header">
              <ul>
                <li>
                  <Link to="/" className="active">
                    Question
                  </Link>
                </li>
                <li>
                  <Link to="/">Insight</Link>
                </li>
              </ul>
            </div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  placeholder="Topic"
                />
                <label htmlFor="topic" className="form-label">
                  Topic
                </label>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="question"
                  id="question"
                  placeholder="Type your question"
                />
                <label htmlFor="question" className="form-label">
                  Type your question
                </label>
                <p className="float-right">47/200</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mention"
                  id="mention"
                  placeholder="@mention someone to ask for an answer"
                />
                <label htmlFor="mention" className="form-label">
                  @mention someone to ask for an answer
                </label>
              </div>
              <div className="form-group mb-3">
                <button className="btn-green" type="submit">
                  POST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
