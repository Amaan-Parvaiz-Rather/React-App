import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <ul className="social-links">
              <li><a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
              <li><a href="www.x.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
              <li><a href="www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Terms</h5>
            <ul className="Quick-links">
              <li><a href="faq">F.A.Q</a></li>
              <li><a href="termofservice">Terms of Service</a></li>
              <li><a href="support">Support</a></li>
              <li><a href="feedback">Feedback</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Address</h5>
            <ul className="address-links">
              <li><i className="fa fa-location-arrow" /><p>123 Main St, Anytown, USA</p></li>
              <li><i className="fa fa-phone" /> <p>(123) 456-7890</p></li>
              <li><i className="fa fa-envelope" /><p>(info@example.com)</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <h3>CodeSquad</h3>
        <div className="Copyright"><p>© 2024 CodeSquad, Inc.</p></div>
      </div>
    </footer>
  );
};

export default Footer;