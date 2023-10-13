import React from "react";
import "./ProductItem.css";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const ProductItem = ({ product }) => {
    const { image, title, privPrice, newPrice, ratings, totalRatings } = product;
    console.log(product);
    return (
        <div className="product_item">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <div className="flex star">
                {[...Array(ratings)].map((_, index) => (
                    <HiStar key={index}></HiStar>
                ))}
                {[...Array(5 - ratings)].map((_, index) => (
                    <HiOutlineStar key={index}></HiOutlineStar>
                ))}
            </div>
            <p>
                <span className="text-decoration-line-through">${privPrice}</span>
                <span className="bold">${newPrice}</span>
            </p>
        </div>
    );
};

export default ProductItem;
