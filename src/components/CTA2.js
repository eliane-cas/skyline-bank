import { Link } from "react-router-dom";

export const CTA2 = () => {
  return (
    <section className="section section_cta2">
      <h2 className="section-heading">Transform the Way You Bank</h2>
      <p className="cta-desc">
        Join thousands who trust Skyline Bank to manage their finances smarter.
      </p>
      <div className="btn-container btn-cta btn-cta-2">
        <Link to="/bankinfo">
          {" "}
          <button className="btn btn-outline">Start</button>
        </Link>
        <Link to="/bankinfo">
          <button className="btn btn-fill">Open Your Account Today</button>
        </Link>
      </div>
    </section>
  );
};
