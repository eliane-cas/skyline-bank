import React from "react";
import logo from "../assets/img/logo-sky.png";
import { Hamburger } from "./Hamburger";
import { useState } from "react";

export const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="header">
      <img className="header_logo" src={logo}></img>
      <nav className="headernav">
        <ul className="header-nav">
          <li className="header-nav__item">
            <a
              href="#"
              class="header-nav__link
          "
            >
              Home
            </a>
          </li>
          <li className="header-nav__item">
            <a
              href="#features"
              class="header-nav__link
          "
            >
              Features
            </a>
          </li>
          <li className="header-nav__item">
            <a
              href="#pricing"
              class="header-nav__link
          "
            >
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <div className="header_CTA">
        <button className="btn btn-outline">Log in</button>
        <button className="btn btn-fill">Get Started</button>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .header-nav {
            display: ${hamburgerOpen ? "inline" : "none"};

            width: 100vw;
            left: 0;
            margin-top: 50px;
            position: fixed;
            background-color: #f5f2eb;
          }
        }
      `}</style>
    </header>
  );
};
