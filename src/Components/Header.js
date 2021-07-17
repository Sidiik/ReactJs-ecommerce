import React from "react";
import { Link } from "react-router-dom";
function Header({ cart }) {
  return (
    <div className="container mt-2">
      <div className="main-header d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link to="/" style={styles}>
            {" "}
            <h1>Tour.</h1>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <Link to="/" style={styles}>
              {" "}
              <li>Home</li>{" "}
            </Link>
            <li>Collection</li>
            <li>Designs</li>
            <li>Tools</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="icons">
          <div className="love rounded">
            <i className="fas fa-heart"></i>
            <span className="m-1 p1 bg-primary badge rounded-pill">{0}</span>
          </div>
          <div className="cart">
            <Link to="/cartItems">
              <i className="fas fa-shopping-cart"></i>

              <span className="m-1 p1 bg-primary badge rounded-pill">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

const styles = {
  color: "black",
  textDecoration: "none",
};
