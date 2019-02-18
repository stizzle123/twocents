import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-home"></i>
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-envelope"></i>
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-bell"></i>
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-cog"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
