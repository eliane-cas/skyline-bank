import Logo from "../assets/img/logo-sky.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_links_container">
        <div className="links_column">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">About Us</a>
        </div>
        <div className="links_column">
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="links_column">
          <a href="#">Security</a>
          <a href="#">Press</a>
          <a href="#">Partner with Us</a>
          <a href="#">Investor Relations</a>
          <a href="#">Help Center</a>
        </div>
      </div>
      <div className="footer_info">
        <p className="footer_copy">Copyright by Skyline Bank &copy;</p>
        <img src={Logo} className="footer_logo"></img>
      </div>
    </footer>
  );
};
