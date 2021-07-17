import React from "react";

export default function footer() {
  return (
    <div className="footer">
      <div className="actual-footer">
        <div className="row">
          <div className="col-md-3">
            <h1>Tour</h1>
            &copy; 2021 Tour . All rights Reserved
            <div className="follow-us">
              <h5>FOLLOW US</h5>
              <ul className="footer-lists">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h5>About us</h5>

            <ul className="footer-lists">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
            <h5>SUBSCRIBE</h5>
            <p>Get E-mail updates about our latest shop and special offers</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email address"
            />
            <a href="#" className="link">
              SUBSCRIBE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
