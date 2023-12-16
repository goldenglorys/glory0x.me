import React, { Component, useState } from 'react';
import logo from '../../../assets/svgs/logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const toggleMenu = () => setIsClosed(!isClosed);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="logo_container pt-4">
          <Link to="/">
            <img className="w-32" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu_btn_wrapper">
          <button className={isClosed ? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      {!isClosed ? (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={toggleMenu}>
                  Résumé
                </Link>
              </li>
            </ul>

            <div className="social_box">
              <h3>Connect With Me</h3>
              <a href="mailto:olusolagloryolamide@gmail.comm" className="mt-4">
                olusolagloryolamide@gmail.com
              </a>
              <div className="social_icons">
                <a href="https://github.com/goldenglorys">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/glorydot0x">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/glory-olusola">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        ''
      )}
    </div>
  );
}
