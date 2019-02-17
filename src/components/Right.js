import React from "react";
import { Link } from "react-router-dom";
import face2 from "../img/face2.jpeg";
import face3 from "../img/face3.jpeg";
import face7 from "../img/face7.jpg";

export default () => {
  return (
    <div className="right">
      <div className="right-top">
        <div className="right-top__header">
          <h1 className="right-top__header__heading">who to follow</h1>
          <span className="right-top__header__refresh">
            <i class="fas fa-redo-alt" />
            &nbsp; refresh
          </span>
        </div>
        <div className="right-top__profile">
          <div className="right-top__profile-info">
            <div className="right-top__profile-info__container">
              <img
                src={face2}
                alt="Avatar"
                className="right-top__profile-info__avatar"
              />
              <div className="right-top__profile-info__handle">
                <h1>Yomi Adedeji</h1>
                <p>Managing partner @Softcom</p>
              </div>
            </div>
          </div>
          <div className="right-top__profile-info__btn">
            <button className="outline__btn small">follow</button>
          </div>
          <span>
            <i class="fas fa-times" />
          </span>
        </div>

        <div className="right-top__profile">
          <div className="right-top__profile-info">
            <div className="right-top__profile-info__container">
              <img
                src={face3}
                alt="Avatar"
                className="right-top__profile-info__avatar"
              />
              <div className="right-top__profile-info__handle">
                <h1>Don Jazzy</h1>
                <p>
                  Music Producer, Artiste, CEO <br />
                  @Mavin Records
                </p>
              </div>
            </div>
          </div>
          <div className="right-top__profile-info__btn">
            <button className="outline__btn small">follow</button>
          </div>
          <span>
            <i class="fas fa-times" />
          </span>
        </div>

        <div className="right-top__profile">
          <div className="right-top__profile-info">
            <div className="right-top__profile-info__container">
              <img
                src={face7}
                alt="Avatar"
                className="right-top__profile-info__avatar"
              />
              <div className="right-top__profile-info__handle">
                <h1>Chimamanda Adichie</h1>
                <p>Award winning writer</p>
              </div>
            </div>
          </div>
          <div className="right-top__profile-info__btn">
            <button className="outline__btn small">follow</button>
          </div>
          <span>
            <i class="fas fa-times" />
          </span>
        </div>
      </div>

      <div className="right__middle">
        <h1>
          <span>1,231</span> Experts
        </h1>
        <p>
          <span className="right__middle-notification" /> 11 New
        </p>
      </div>

      <div className="right__footer">
        <ul className="right__footer-list">
          <li className="right__footer-list__item">
            <Link to="/">About</Link>
          </li>
          <li className="right__footer-list__item">
            <Link to="/">Contact</Link>
          </li>
          <li className="right__footer-list__item">
            <Link to="/">FAQs</Link>
          </li>
          <li className="right__footer-list__item">
            <Link to="/">Blog</Link>
          </li>
          <li className="right__footer-list__item">
            <Link to="/">Legal</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
