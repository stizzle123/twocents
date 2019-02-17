import React from "react";
import logo from "../img/logo.png";
import face6 from "../img/face6.jpeg";

export default () => {
  return (
    <div class="content">
      <div class="middle__top">
        <div class="middle__top-heading">
          <div class="middle__top-heading__info">
            <img src={logo} alt="Logo" class="middle__top-heading__avatar" />
            <div class="middle__top-heading__handle">
              <h1>New DM Feature</h1>
              <p>Sept. 24, 2018, 1:16 PM</p>
            </div>
          </div>
          <div class="middle__top-heading__icon">
            <i class="fas fa-ellipsis-h" />
          </div>
        </div>

        <div class="middle__top-content">
          <p>
            Hello Guys, <br />
            <br />
            <br />
            We'd like to say a big thank you to all those who took part in our
            survey &mdash; with the feedback you gave us, we are better equipped
            to take TwoCents to a new sense of what the product should morph
            into; we have learned a lot and have a pretty good understanding
            of... <span class="read-more">Read More</span>
          </p>
        </div>
        <div class="middle__top-content__footer">
          <i class="fas fa-thumbs-up" /> 101
        </div>
      </div>

      <div class="middle__bottom">
        <div class="middle__bottom-heading">
          <div class="middle__bottom-heading__info">
            <img
              src={face6}
              alt="Logo"
              class="middle__bottom-heading__avatar"
            />
            <div class="middle__bottom-heading__handle">
              <h1>
                Yele Bademosi <span>E</span>&nbsp; <small>Jan 2, 8:31 PM</small>{" "}
              </h1>
              <p>Angel Investor @Microtaction</p>
            </div>
          </div>
          <div class="middle__bottom-heading__icon">
            <i class="fas fa-ellipsis-h" />
          </div>
        </div>

        <div class="middle__bottom-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero
            repellendus velit labore voluptatum perferendis similique minima,
            corporis exercitationem sequi corrupti soluta harum aspernatur,
            distinctio debitis possimus accusamus id eius tempore, beatae
            asperiores illo. Quisquam, non harum. Porro, eum eaque!...
            <span class="read-more">Read More</span>
          </p>
        </div>

        <div class="middle__bottom-content__footer">
          <span>
            <i class="fas fa-thumbs-up" /> 103
          </span>
          <span>
            <i class="fas fa-eye" /> 366
          </span>
          <span>
            <i class="fas fa-comment-alt" /> 11
          </span>
        </div>
      </div>
    </div>
  );
};
