import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  const ondelete = (idx) => {
    cart.filter((el) => el.idx !== idx);
  };

  return (
    <div className="container mt-5 ">
      {cart.length < 1 ? (
        <p className="text-danger nocart">
          Nothing in your basket <div className="space"> </div>
          <Link to="/" style={{ marginLeft: "2px" }}>
            {" "}
            HomePage
          </Link>
        </p>
      ) : (
        <>
          <h3 className="text-center">Cart Items</h3>
          {cart.map((cart, idx) => (
            <div className="items" key={idx}>
              <CartItem
                cart={cart}
                id={idx}
                handleDelete={() => ondelete(idx)}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
