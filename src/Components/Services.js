import React from "react";

function services() {
  return (
    <div className="container services">
      <div className="row text-center text-secondary">
        <div className="col-md-4">
          <div className="items ">
            <div className="icon">
              <i className="fas fa-truck"></i>
            </div>
            <div className="title">
              <h3>Free shipping</h3>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetu adipisicing elit sed
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="items ">
            <div className="icon">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <div className="title">
              <h3>Fast payment</h3>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetu adipisicing elit sed
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="items ">
            <div className="icon">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="title">
              <h3>Shopping interactively</h3>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetu adipisicing elit sed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
