import React from "react";
import face2 from "../img/face2.jpeg";
import face3 from "../img/face3.jpeg";
import face4 from "../img/face4.jpeg";
import face5 from "../img/face5.jpeg";

export default () => {
  return (
    <div className="left">
      <div className="left__header">For You</div>
      <div className="left__sessions">
        <h1 className="left__sessions-heading">sessions</h1>
        <div className="left__sessions-icon">
          <i className="fas fa-redo-alt" />
          &nbsp; refresh
        </div>
      </div>

      <div className="left__users-info">
        <div className="left__users-info__profile">
          <img
            src={face2}
            alt="Avatar 2"
            className="left__users-info__avatar"
          />
          <div className="left__users-info__data">
            <h3>Yomi Adedeji</h3>
            <p>
              Managing partner <span>@Softcom</span>
            </p>
          </div>
        </div>
        <div className="left__users-info__cancel">
          <i className="fas fa-times" />
        </div>
      </div>

      <div className="left__users-info">
        <div className="left__users-info__profile">
          <img
            src={face3}
            alt="Avatar 2"
            className="left__users-info__avatar"
          />
          <div className="left__users-info__data">
            <h3>Don Jazzy</h3>
            <p>
              Music Producer, Artiste, CEO, <span>@Mavin</span> Records
            </p>
          </div>
        </div>
        <div className="left__users-info__cancel">
          <i className="fas fa-times" />
        </div>
      </div>

      <div className="left__users-insight">
        <h1 className="left__users-insight__sessions">insights</h1>
        <div className="left__users-insight__icon">
          <i className="fas fa-redo-alt" />
          &nbsp; refresh
        </div>
      </div>

      <div className="left__users-summary">
        <div className="left__users-summary__wrapper">
          <div className="left__users-summary__content">
            <div className="left__users-summary__profile">
              <img
                src={face4}
                alt="Avatar 4"
                className="left__users-summary__avatar"
              />
              <div className="left__users-summary__handle">
                <h3>Cyrus Majebi</h3>
                <p>
                  Co-founder, <span>@TwoCents</span>
                </p>
              </div>
            </div>
            <div className="left__users-summary__cancel">
              <i className="fas fa-times" />
            </div>
          </div>
          <p className="left__users-summary__post">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            aspernatur?
          </p>
        </div>
      </div>

      <div className="left__users-summary">
        <div className="left__users-summary__wrapper">
          <div className="left__users-summary__content">
            <div className="left__users-summary__profile">
              <img
                src={face5}
                alt="Avatar 5"
                className="left__users-summary__avatar"
              />
              <div className="left__users-summary__handle">
                <h3>Tobi Igbinedion</h3>
                <p>
                  Co-founder, <span>@TwoCents</span>
                </p>
              </div>
            </div>
            <div className="left__users-summary__cancel">
              <i className="fas fa-times" />
            </div>
          </div>
          <p className="left__users-summary__post">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            aspernatur?
          </p>
        </div>
      </div>

      <div className="left__users-questions">
        <div className="left__users-questions__top">
          <h1 className="left__users-questions__heading">questions</h1>
          <div className="left__users-questions__icon">
            <i className="fas fa-redo-alt" />
            &nbsp; refresh
          </div>
        </div>
        <div className="left__users-questions__faq">
          <p>Does MTN's new mobile mobile pose a threat to Paga?</p>
          <div className="left__users-questions__cancel">
            <i className="fas fa-times" />
          </div>
        </div>

        <div className="left__users-questions__faq">
          <p>Did Mr Biggs make a mistake by freelancing their business?</p>
          <div className="left__users-questions__cancel">
            <i className="fas fa-times" />
          </div>
        </div>
      </div>
    </div>
  );
};
