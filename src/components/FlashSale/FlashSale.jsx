import React, { useEffect, useState } from "react";
import "./FlashSale.css";
import ProductItem from "../ProductItem/ProductItem";

const FlashSale = () => {
    const [products, setPorducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setPorducts(data));
    }, []);
    return (
        <>
            <div>
                <div className="container">
                    <h2 className="pb-2">Flash Sale</h2>
                    <div className="row">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product}></ProductItem>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlashSale;
