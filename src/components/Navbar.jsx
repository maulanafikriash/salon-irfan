/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isToggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isHomeActive = activeLink === '/' || activeLink === '/beranda';

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setToggleActive(false);
  };

  const handleToggleClick = () => {
    setToggleActive(!isToggleActive);
  };

  return (
    <header id="home" className="fixed-top">
      <div className="container">
        <div className="header d-lg-flex justify-content-between align-items-center">
          <div className="header-agile">
            <h1 tabIndex={0} className="brand">
              <img
                src="assets/images/logo-salon-nav.webp"
                alt="logo salon irfan"
                className="logo-brand"
              />
              Salon Irfan
            </h1>
          </div>
          <div>
            <nav>
              <label className="toggle mt-lg-0 mt-1" onClick={handleToggleClick}>
                {isToggleActive ? <FaTimes /> : <FaBars />}
              </label>
              <ul className={`menu ${isToggleActive ? 'show' : ''}`}>
                <li className={`m-2 top-content ${isHomeActive ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${isHomeActive ? 'active-link' : ''}`}
                    to="/"
                    onClick={() => handleLinkClick('/')}
                  >
                    Beranda
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/tentang' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/tentang' ? 'active-link' : ''}`}
                    to="/tentang"
                    onClick={() => handleLinkClick('/tentang')}
                  >
                    Tentang
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/layanan' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/layanan' ? 'active-link' : ''}`}
                    to="/layanan"
                    onClick={() => handleLinkClick('/layanan')}
                  >
                    Layanan
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/pemesanan' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/pemesanan' ? 'active-link' : ''}`}
                    to="/pemesanan"
                    onClick={() => handleLinkClick('/pemesanan')}
                  >
                    Pemesanan
                  </Link>
                </li>
                <li className={`m-2 top-content ${activeLink === '/galeri' ? 'active' : ''}`}>
                  <Link
                    className={`text-decoration-none p-2 ${activeLink === '/galeri' ? 'active-link' : ''}`}
                    to="/galeri"
                    onClick={() => handleLinkClick('/galeri')}
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
