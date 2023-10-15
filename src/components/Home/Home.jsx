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
import { HiStar, HiOutlineStar } from "react-icons/hi";

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

            {/* <div className="show_details">
                {details.map((p) => 
                    
                    <div key={p.id} className="product_details d-flex">
                        <div className="image">
                            <img src={p.image} alt={p.title} />
                        </div>
                        <div className="details">
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
                                <p className="pt-3">({p.totalRatings})</p>
                            </div>
                            <p>
                                <span className="text-decoration-line-through">${p.privPrice}</span>
                                <span className="bold">${p.newPrice}</span>
                            </p>

                            <p>{p.description}</p>
                        </div>
                    </div>
                )}
            </div> */}

            <Modal show={show} onHide={handleClose}>
                <button onClick={handleClose}>x</button>
                {details.map((p) => (
                    <>
                        <div key={p.id} className="modal_body d-flex">
                            <div className="image">
                                <img src={p.image} alt={p.title} />
                            </div>
                            <div className="body">
                                <h4>{p.title}</h4>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex star">
                                        {[...Array(p.ratings)].map((_, index) => (
                                            <HiStar key={index}></HiStar>
                                        ))}
                                        {[...Array(5 - p.ratings)].map((_, index) => (
                                            <HiOutlineStar key={index}></HiOutlineStar>
                                        ))}
                                    </div>
                                    <p className="pt-3">({p.totalRatings})</p>
                                </div>
                                <p>
                                    <span className="text-decoration-line-through">${p.privPrice}</span>
                                    <span className="bold">${p.newPrice}</span>
                                </p>
                            </div>
                        </div>
                    </>
                ))}
            </Modal>
        </>
    );
};

export default Home;
