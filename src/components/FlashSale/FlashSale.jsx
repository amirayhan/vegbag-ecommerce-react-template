import React, { useEffect, useState } from "react";
import "./FlashSale.css";
import ProductItem from "../ProductItem/ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const FlashSale = ({ products, handleClickToView, details }) => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true,
        autoplaySpeed: 200000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div>
                <div className="container">
                    <h2 className="pb-2">Flash Sale</h2>
                    <div className="row">
                        <Slider {...settings}>
                            {products.map((product) => (
                                <ProductItem key={product.id} product={product} handleClickToView={handleClickToView} details={details}></ProductItem>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlashSale;
