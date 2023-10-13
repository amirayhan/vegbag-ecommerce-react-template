import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
    const { image, title, privPrice, newPrice, ratings, totalRatings } = product;
    console.log(product);
    return (
        <div className="col-lg-3">
            <div className="product_item">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>
                    <span className="text-decoration-line-through">${privPrice}</span>
                    <span className="bold">${newPrice}</span>
                </p>
            </div>
        </div>
    );
};

export default ProductItem;
