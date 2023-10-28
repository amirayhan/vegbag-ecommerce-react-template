import { React, useState } from "react";
import "./header.css";
import HeaderTop from "./HeaderTop";
import { Link } from "react-router-dom";
import { HiSearch, HiShoppingCart, HiUser, HiUserAdd } from "react-icons/hi";
import { Button } from "react-bootstrap";

const Header = ({ handleShow, cart }) => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-4">
                            <Link to="/" className="logo">
                                <h2>
                                    <span>vig</span>Bag
                                </h2>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-6 col-md-5 col-lg-4">
                            <form className="search_box">
                                <input
                                    type="text"
                                    placeholder="Search for products"
                                />
                                <button type="submit">
                                    <HiSearch />
                                </button>
                            </form>
                        </div>
                        <div className="col-3 col-sm-3 col-md-4 col-lg-4">
                            <ul className="header_right d-flex pt-2 float-end">
                                <li>
                                    <Link to="/login">
                                        <span className="icon pe-1">
                                            <HiUser></HiUser>
                                        </span>
                                        <span className="d-none d-lg-inline-block">
                                            Login
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <span className="icon pe-1">
                                            <HiUserAdd></HiUserAdd>
                                        </span>
                                        <span className="d-none d-lg-inline-block">
                                            Register
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleShow}
                                        className="cart_btn"
                                    >
                                        <span className="icon pe-1">
                                            <HiShoppingCart></HiShoppingCart>
                                        </span>
                                        <span className="basket text-white d-none d-lg-inline-block">
                                            Basket
                                        </span>
                                        <span className="quantity">
                                            {cart.length}
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
