import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            Home
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            Messages
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            Notifications
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
