/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header id="home">
      <div className="container">
        <div className="header d-lg-flex justify-content-between align-items-center">
          <div className="header-agile">
            <h1 tabIndex="0" className="brand">
              <img src="assets/images/imagenya" alt="logo salon irfan" className="logo-brand" />
              Salon Irfan
            </h1>
          </div>
          <div>
            <nav>
              <label htmlFor="drop" className="toggle mt-lg-0 mt-1">
                <span className="fa fa-bars" aria-hidden="true" />
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu">
                <li className={`m-2 top-content ${activeLink === '/' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/' ? 'active-link' : ''}`}
                    to="/"
                    onClick={() => handleLinkClick('/')}
                  >
                    Home
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/about' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/about' ? 'active-link' : ''}`}
                    to="/about"
                    onClick={() => handleLinkClick('/about')}
                  >
                    Tentang
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/services' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/services' ? 'active-link' : ''}`}
                    to="/services"
                    onClick={() => handleLinkClick('/services')}
                  >
                    Layanan
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/gallery' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/gallery' ? 'active-link' : ''}`}
                    to="/gallery"
                    onClick={() => handleLinkClick('/gallery')}
                  >
                    Galeri
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
