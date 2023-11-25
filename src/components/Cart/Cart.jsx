import React, { useState } from "react";
import "./Cart.css";
import { Modal, Offcanvas } from "react-bootstrap";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = ({ show, handleClose, cart, updateCart }) => {
    const increaseQuantity = (productIndex) => {
        const updatedCart = [...cart];
        updatedCart[productIndex].quantity++;
        updateCart(updatedCart);
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true}>
            <button className="close_btn" onClick={handleClose}>
                <HiX />
            </button>
            <h4 className="heading">Your Cart: {cart.length} Items</h4>
            <Modal.Body
                style={{
                    maxHeight: "calc(100vh - 210px)",
                    overflowY: "auto",
                }}
            >
                {cart.map((product, index) => (
                    <div key={product.id} className="cart_item d-flex">
                        <div className="image">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="cart_text">
                            <h5>{product.title}</h5>
                            <p className="price">${(product.newPrice * product.quantity).toFixed(2)}</p>
                            <div className="quantity">
                                <button className="q_btn" onClick={() => increaseQuantity(index)}>
                                    -
                                </button>
                                <input type="number" value={product.quantity} />
                                <button className="q_btn" onClick={() => increaseQuantity(index)}>
                                    +
                                </button>
                            </div>
                        </div>
                        <button className="remove_item">
                            <HiX />
                        </button>
                    </div>
                ))}
            </Modal.Body>
            <div className="subtotal d-flex align-items-center justify-content-between">
                <h4>Subtotal:</h4>
                <h3>$25</h3>
            </div>
            <div className="cart_checkout_btn d-flex justify-content-around">
                <Link onClick={handleClose} className="button1" to="/ViewCart">
                    View Cart
                </Link>
                <Link onClick={handleClose} className="button2" to="/Checkout">
                    Checkout
                </Link>
            </div>
        </Offcanvas>
    );
};

export default Cart;
