import img1 from "../assets/img/saving.gif";
import img2 from "../assets/img/customer.gif";
import img3 from "../assets/img/mobile.gif";
import img4 from "../assets/img/audit.gif";

export const FourFeatures = () => {
  return (
    <section className="section section-4" id="features">
      {" "}
      <h2 className="section-heading">What Sets Us Apart</h2>
      <p className="section-desc">
        Skyline Bank is designed to provide innovative, cutting-edge solutions
        to make banking easier and more secure.
      </p>
      <div className="grid_features-b">
        <div className="grid-item grid-item-large">
          <img src={img4} className="grid-item-img-large"></img>
          <h4 className="grid-item-title feature-title">
            Personalized Financial Insights
          </h4>
          <span className="grid-item-desc">
            Our AI analyzes your transactions to provide insights and help you
            budget smarter. Track your spending trends and get recommendations
            tailored to your financial goals.
          </span>
        </div>
        <div className="grid-item ">
          <img src={img3} className="grid-item-img"></img>
          <h4 className="grid-item-title feature-title">
            Seamless Mobile Experience
          </h4>
          <span className="grid-item-desc ">
            Banking on the go has never been easier with our intuitive mobile
            app. Access your account anytime, manage your finances, and make
            transfers in just a few taps.
          </span>
        </div>
        <div className="grid-item ">
          <img src={img2} className="grid-item-img"></img>
          <h4 className="grid-item-title feature-title">
            24/7 Customer Support
          </h4>
          <span className="grid-item-desc ">
            Talk to real people whenever you need help, day or night. Our team
            is always ready to assist, ensuring you get the support you need
            without delay.
          </span>
        </div>
        <div className="grid-item grid-item-large">
          <img src={img1} className="grid-item-img-large"></img>
          <h4 className="grid-item-title feature-title">No Minimum Balance</h4>
          <span className="grid-item-desc">
            Bank with freedom—no account balance requirements. Enjoy full access
            to all services without the pressure to maintain a minimum balance.
          </span>
        </div>
      </div>
    </section>
  );
};
