import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="section cta-1">
      <h2 className="section-heading">
        Ready to Revolutionize Your Banking Experience?
      </h2>
      <p className="cta-desc">
        Open an account in minutes and take control of your financial future
        today.
      </p>
      <div className="btn-container btn-cta">
        <Link to="/bankinfo">
          <button className="btn btn-outline">Start</button>
        </Link>
        <Link to="/bankinfo">
          <button className="btn btn-fill">Join Skyline Bank Now</button>
        </Link>
      </div>
    </section>
  );
};
