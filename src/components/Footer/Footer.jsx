import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGooglePlusG } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_content">
                    <Link to="/" className="logo">
                        <h2>
                            <span>vig</span>Bag
                        </h2>
                    </Link>
                    <ul className="menu d-flex gap-5">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Latest Products</a>
                        </li>
                        <li>
                            <a href="#">Payment Process</a>
                        </li>
                        <li>
                            <a href="#">Our Partner</a>
                        </li>
                        <li>
                            <a href="#">Flash Offers</a>
                        </li>
                    </ul>
                    <ul className="social_icon d-flex gap-4">
                        <li>
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaLinkedinIn></FaLinkedinIn>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
