import React, { useState, useEffect } from "react";

export default function CartItem({ cart, handleDelete, totals }) {
  const [total, setTotal] = useState(0);

  const [count, setCount] = useState(1);
  useEffect(() => {
    setTotal(cart.price * count);
  }, [count]);

  const incrementHandler = () => {
    setCount(count + 1);
    setTotal(cart.price * count);
  };
  const decHandler = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
    total <= cart.price ? setTotal(cart.price) : setTotal(cart.price * count);
  };

  return (
    <div className="item  d-flex justify-content-between align-items-center ">
      <div className="i-img">
        <img src={cart.image} className="cart-image rounded" alt="" />
      </div>
      <div className="name">
        <div className="lead">{cart.name}</div>
      </div>
      <div className="lead">${cart.price}</div>
      <div className="changes d-flex justify-content-between align-items-center ">
        <button className="btn btn-danger" onClick={decHandler}>
          -
        </button>
        <p className="mt-3 p-2" value={count}>
          {count}
        </p>
        <button className="btn btn-primary" onClick={incrementHandler}>
          +
        </button>
        <div className="total m-4 p-3">
          <span className="badge pill-rounded bg-success m-2">Total</span> $
          {Math.round(total * 10) / 10}
        </div>
      </div>
    </div>
  );
}
