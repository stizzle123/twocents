import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-home" />
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-envelope" />
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-bell" />
          </Link>
        </li>
        <li className="footer__list-item">
          <Link to="/" className="footer__list-link">
            <i class="fas fa-cog" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
