import React from "react";
import { Link } from "react-router-dom";

function BankInfo() {
  return (
    <section className="section cta-1">
      <h2 className="section-heading">Thank you for visiting Skyline Bank.</h2>
      <p className="cta-desc">
        This is a demo landing page designed to showcase a modern online banking
        experience. Feel free to explore the design and functionality.
      </p>
      <div className="btn-container btn-cta">
        <Link to="/">
          <button className="btn btn-outline">Go back to home</button>
        </Link>
      </div>
    </section>
  );
}

export default BankInfo;
