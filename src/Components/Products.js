import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Products({ products, addCart }) {
  const [isOpen, setOpen] = useState(false);
  const addItem = (items) => {
    setOpen(true);
    addCart(items);
  };
  let toggle = () => {
    setOpen(false);
  };
  setTimeout(() => {
    setOpen(false);
  }, 7000);
  return (
    <div className="container">
      {isOpen ? (
        <>
          <div
            class="modal fade show"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="product-modal"
            aria-hidden="false"
            style={{ display: "block", paddingRight: "17pz" }}
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="product-modal">
                    Product status
                  </h5>
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={toggle}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="lead">Product added to the cart</div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                    onClick={toggle}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="store row m-5">
        {products.map((items, idx) => (
          <div className="col-md-4 mt-4 " key={idx}>
            <div className="img">
              <img src={items.image} className="proImg rounded" alt="" />
            </div>
            <div className="name d-flex justify-content-around align-items-center box ">
              <div className="lead p-2">{items.name}</div>
              <div className="love">
                <i className="fas fa-heart"></i>
                <i
                  className="fas fa-shopping-cart"
                  onClick={() => addItem(items)}
                ></i>
              </div>
              <div className="price lead">${items.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
