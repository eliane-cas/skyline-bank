import React from "react";
import heroimg from "../assets/img/credit-card.gif";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-heading">Skyline Bank</h1>
      <h2 className="hero-subheading">
        Your Future, Simplified – Banking Made Effortless, Fast, and Secure.{" "}
        <br></br>
        Banking Built for the Modern World – Secure, Fast, and Flexible.
      </h2>
      <div className="btn-container">
        <Link to="/bankinfo">
          <button className="btn btn-fill">Request a free demo</button>
        </Link>
        <Link to="/bankinfo">
          <button className="btn btn-outline">Get started</button>
        </Link>
      </div>

      <div className="hero-img">
        <img src={heroimg}></img>
      </div>
      <div className="stats-container">
        <div className="stat_item">
          <div className="stat-icon icon-group"></div>
          <div className="stat-num">10,000+</div>
          <div className="stat-text">Satisfied Customers</div>
        </div>
        <div className="stat_item">
          <div className="stat-icon icon-clock"></div>
          <div className="stat-num">99.9%</div>
          <div className="stat-text">Uptime</div>
        </div>
        <div className="stat_item">
          <div className="stat-icon icon-headset"></div>
          <div className="stat-num">24/7</div>
          <div className="stat-text">Support</div>
        </div>
        <div className="stat_item">
          <div className="stat-icon icon-dollar"></div>
          <div className="stat-num">0</div>
          <div className="stat-text">Hidden Fees</div>
        </div>
        <div className="stat_item">
          <div className="stat-icon icon-shield"></div>
          <div className="stat-num">256&#9866;Bit</div>
          <div className="stat-text">Encryption</div>
        </div>
      </div>
    </div>
  );
};
