import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header className="header">
        <nav className="container">
          {/* <img src=".//logo-bbam.png" alt="logo" className="logopng" /> */}
          <div className="title">
            <p>
              <span id="span1">Macau</span>
              <br /> British Chamber of Commerce
            </p>
          </div>
          <ul className="list">
            <li className="li">HELLO</li>
            <li className="li">HELLO</li>
            <li className="li">HELLO</li>
            <li className="li">HELLO</li>
            <li className="li">HELLO</li>
            <li className="li">HELLO</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
