import React from "react";
import "./ProductItem.css";
import { HiStar, HiOutlineStar, HiOutlineShoppingCart, HiOutlineEye, HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProductItem = ({ product, handleClickToView, details }) => {
    const { image, title, privPrice, newPrice, ratings, totalRatings } = product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="product_item">
                <div className="image">
                    <img src={image} alt={title} />
                    <ul className="overlay">
                        <li>
                            <button className="shadow-sm">
                                <HiOutlineShoppingCart></HiOutlineShoppingCart>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleClickToView(product);
                                    handleShow();
                                }}
                                className="shadow-sm"
                            >
                                <HiOutlineEye></HiOutlineEye>
                            </button>
                        </li>
                        <li>
                            <button className="shadow-sm">
                                <HiOutlineHeart></HiOutlineHeart>
                            </button>
                        </li>
                    </ul>
                </div>
                <h4>{title}</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex star">
                        {[...Array(ratings)].map((_, index) => (
                            <HiStar key={index}></HiStar>
                        ))}
                        {[...Array(5 - ratings)].map((_, index) => (
                            <HiOutlineStar key={index}></HiOutlineStar>
                        ))}
                    </div>
                    <p className="pt-3">({totalRatings})</p>
                </div>
                <p>
                    <span className="text-decoration-line-through">${privPrice}</span>
                    <span className="bold">${newPrice}</span>
                </p>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <h1>{details.title}</h1>
                </Modal.Header>
                <Modal.Body>{details.id}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            ;
        </>
    );
};

export default ProductItem;
