import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="#">DECK</a>
          </li>
          <li className="item">
            <a href="#">TECNOLOGY</a>
          </li>
          <li className="item">
            <a href="#">IDEAS</a>
          </li>
          <li className="item">
            <a href="#">LEADERSHIP</a>
          </li>
          <li className="item">
            <a href="#">VIDEO</a>
          </li>
          <li className="item">
            <a href="#">ENTRETEIMENT</a>
          </li>
          <li className="item">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
