import React from "react";
import logo from "../assets/img/logo-sky.png";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header_logo" src={logo}></img>
      </Link>

      <nav className="headernav">
        <ul className="header-nav">
          <li className="header-nav__item">
            <a
              href="
              /#"
              class="header-nav__link
          "
            >
              Home
            </a>
          </li>
          <li className="header-nav__item">
            <a
              href="/#features"
              onClick={(e) => handleNavigation(e, "features")}
              class="header-nav__link
          "
            >
              Features
            </a>
          </li>
          <li className="header-nav__item">
            <a
              href="/#pricing"
              onClick={(e) => handleNavigation(e, "pricing")}
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
        <Link to="/bankinfo">
          <button className="btn btn-outline">Log in</button>
        </Link>
        <Link to="/bankinfo">
          <button className="btn btn-fill">Get Started</button>
        </Link>
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
