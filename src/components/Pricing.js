import icon1 from "../assets/img/SVG/pig.svg";
import icon2 from "../assets/img/SVG/diamond.svg";
import icon3 from "../assets/img/SVG/suitcase.svg";

export const Pricing = () => {
  return (
    <section className="section" id="pricing">
      {" "}
      <h2 className="section-heading">Pricing Plans</h2>
      <p className="section-desc">Choose the Plan That Suits You</p>
      <div className="pricing_grid">
        <div className="pricing_card">
          <img src={icon1} className="pricing-icon"></img>
          <h4 className="price_title">Basic Plan</h4>
          <p className="price_subtitle">Perfect for everyday banking.</p>
          <ul className="pricing_list">
            <li className="pricing_perk">No monthly fees</li>
            <li className="pricing_perk">Free domestic transfers</li>
            <li className="pricing_perk">Real-time transaction alerts</li>
            <li className="pricing_perk">AI-powered budgeting</li>
            <li className="pricing_perk">24/7 support</li>
          </ul>
          <button className="btn btn-price">Start</button>
        </div>
        <div className="pricing_card">
          <img src={icon2} className="pricing-icon"></img>
          <h4 className="price_title">Premium Plan</h4>
          <p className="price_subtitle">More features for growing needs.</p>
          <ul className="pricing_list">
            <li className="pricing_perk">Everything in Basic</li>
            <li className="pricing_perk">Free international transfers</li>
            <li className="pricing_perk">Higher interest rates on savings</li>
            <li className="pricing_perk">Priority customer support</li>
            <li className="pricing_perk">Customizable savings goals</li>
          </ul>
          <button className="btn btn-price">Start</button>
        </div>
        <div className="pricing_card">
          <img src={icon3} className="pricing-icon"></img>
          <h4 className="price_title">Business Plan</h4>
          <p className="price_subtitle">Built for businesses.</p>
          <ul className="pricing_list">
            <li className="pricing_perk">Everything in Premium</li>
            <li className="pricing_perk">Multiple account users</li>
            <li className="pricing_perk">Dedicated account manager</li>
            <li className="pricing_perk">Automated expense reporting</li>
            <li className="pricing_perk">Custom financial insights</li>
          </ul>
          <button className="btn btn-price">Start</button>
        </div>
      </div>
    </section>
  );
};
