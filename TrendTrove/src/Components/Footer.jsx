import React from 'react';
import "./Footer.css"
function Footer() {
  return (
    <footer style={{ backgroundColor: "#2c4152", color: "#cccccc" }}>
      <div className="footer-section font-link">
        <h3>Who We Are</h3>
        <ul>
          <li>Join Our Team</li>
          <li>Terms &amp; Conditions</li>
          <li>We Respect Your Privacy</li>
          <li>Fees &amp; Payments</li>
          <li>Returns &amp; Refunds Policy</li>
          <li>Promotions Terms &amp; Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help</h3>
        <ul>
          <li>Track Your Order</li>
          <li>Frequently Asked Questions</li>
          <li>Returns</li>
          <li>Cancellations</li>
          <li>Payments</li>
          <li>Customer Care</li>
          <li>How Do I Redeem My Coupon</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Shop by</h3>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>IndieStores</li>
          <li>New Arrivals</li>
          <li>Brand Directory</li>
          <li>HomeCollections</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow us</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram- AJIOlife</li>
          <li>Instagram- AJIO LUXE</li>
          <li>Twitter</li>
          <li>Pinterest</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
