import React from 'react';
import '../Navbar.css'; // Add a CSS file for custom styles
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-container bg-dark text-white">
      <div className="d-flex flex-column flex-shrink-0 p-3">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-3">
            <NavLink to="/" className="nav-link text-light" activeClassName="active" exact>
                Home
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/transfer" className="nav-link text-light" activeClassName="active">
                Transfer
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/account" className="nav-link text-light" activeClassName="active">
                Account
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/card" className="nav-link text-light" activeClassName="active">
                Card
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/profile" className="nav-link text-light" activeClassName="active">
                Profile
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/applycard" className="nav-link text-light" activeClassName="active">
                Apply For Card
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <a href="/" className="nav-link text-light">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
