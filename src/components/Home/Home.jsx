import React, { useEffect, useState } from "react";
import "./home.css";
import object1 from "../../assets/object-2.png";
import { HiOutlineCreditCard, HiOutlineCurrencyDollar, HiOutlineTruck } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import image1 from "../../assets/category/category_img1.jpg";
import image2 from "../../assets/category/category_img2.jpg";
import image3 from "../../assets/category/category_img3.jpg";
import image4 from "../../assets/category/category_img4.jpg";
import FlashSale from "../FlashSale/FlashSale";
import JustForYou from "../JustForYou/JustForYou";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HiStar, HiOutlineStar, HiX, HiOutlineHeart } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGooglePlusG } from "react-icons/fa6";

const Home = () => {
    const categories = useLoaderData();
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [details, setDetails] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    const handleToggleClick = () => {
        setShowAll(!showAll);
    };
    const handleClickToView = (product) => {
        setDetails([{ ...product }]);
    };
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner_content">
                        <img src={object1} className="image1" alt="img" />
                        <img src={object1} className="image2" alt="img" />
                        <h4>Fresh Vegetables</h4>
                        <h1>100% Natural Organic</h1>
                        <p>Save up to 50% off on your firest order</p>
                        <button className="button1">Shop Collection</button>
                    </div>
                </div>
            </div>

            <div className="category_and_services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="categories">
                                <h3>Categories</h3>
                                <ul className="categories_items">
                                    {categories.map((category) => (
                                        <Category key={category.id} category={category}></Category>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="services">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="services_item d-flex">
                                            <span>
                                                <HiOutlineTruck className="icons"></HiOutlineTruck>
                                            </span>
                                            <div className="item_content">
                                                <h3>Free Delivery</h3>
                                                <p>For order over $100</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="services_item d-flex">
                                            <span>
                                                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
                                            </span>
                                            <div className="item_content">
                                                <h3>7 Days Return</h3>
                                                <p>If damaged product</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="services_item d-flex">
                                            <span>
                                                <HiOutlineCreditCard></HiOutlineCreditCard>
                                            </span>
                                            <div className="item_content">
                                                <h3>Secure Payment</h3>
                                                <p>100% secure payment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="pt-5 pb-3">Top Categories</h3>
                                <div className="row">
                                    <div className="col-md-6 col-lg-3">
                                        <div className="category_image">
                                            <img src={image1} alt="health care" />
                                            <a href="#">HEALTH CARE</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="category_image">
                                            <img src={image2} alt="health care" />
                                            <a href="#">HEALTH & BEAUTY</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="category_image">
                                            <img src={image3} alt="health care" />
                                            <a href="#">VEGETABLES</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="category_image">
                                            <img src={image4} alt="health care" />
                                            <a href="#">COSMETICS & BEAUTY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FlashSale products={products} handleClickToView={handleClickToView} details={details} handleShow={handleShow}></FlashSale>

            <JustForYou products={products} showAll={showAll} handleToggleClick={handleToggleClick} handleClickToView={handleClickToView} details={details} handleShow={handleShow}></JustForYou>

            {details.map((p) => (
                <div key={p.id}>
                    <Modal show={show} onHide={handleClose}>
                        <button className="close_btn" onClick={handleClose}>
                            <HiX />
                        </button>

                        <div className="modal_body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image">
                                        <img src={p.image} alt={p.title} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="body">
                                        <h3>{p.title}</h3>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex star">
                                                {[...Array(p.ratings)].map((_, index) => (
                                                    <HiStar key={index}></HiStar>
                                                ))}
                                                {[...Array(5 - p.ratings)].map((_, index) => (
                                                    <HiOutlineStar key={index}></HiOutlineStar>
                                                ))}
                                            </div>
                                            <p className="pt-3">{p.totalRatings}</p>
                                        </div>
                                        <p className="price">
                                            <span className="text-decoration-line-through">${p.privPrice}</span>
                                            <span className="bold">${p.newPrice}</span>
                                        </p>
                                        <div className="description d-flex">
                                            <h5 className="me-2 ">Description:</h5>
                                            <p>{p.description}</p>
                                        </div>
                                        <div className="quantity">
                                            <h5>Quantity:</h5>
                                            <div className="item">
                                                <button className="q_btn">-</button>
                                                <input type="text" />
                                                <button className="q_btn">+</button>
                                            </div>
                                        </div>
                                        <div className="cart_wishlist d-flex align-items-center gap-2">
                                            <button className="button1">Add to Cart</button>
                                            <a href="#">
                                                <span>
                                                    <HiOutlineHeart />
                                                </span>
                                                Add to Wishlist
                                            </a>
                                        </div>
                                        <div className="share d-flex align-items-center">
                                            <h5>Share:</h5>
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
                            </div>
                        </div>
                    </Modal>
                </div>
            ))}
        </>
    );
};

export default Home;
