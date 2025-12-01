import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-header">
          <p className="navbar-brand mb-0">Blog de programação</p>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item" id="home">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item" id="about">
            <Link className="nav-link" to="/about">SOBRE</Link>
          </li>
          <li className="nav-item" id="contact">
            <Link className="nav-link" to="/contact">CONTATO</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;