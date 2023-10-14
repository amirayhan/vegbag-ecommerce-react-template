import React, { useEffect, useState } from "react";
import "./JustForYou.css";
import ProductItem from "../ProductItem/ProductItem";

const JustForYou = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    const handleToggleClick = () => {
        setShowAll(!showAll);
    };
    return (
        <div className="just_for_you py-5">
            <div className="container">
                <h2>Just for You</h2>
                <div className="row">
                    {products.slice(0, showAll ? products.length : 12).map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <ProductItem product={product}></ProductItem>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center pt-4 pb-3">
                    <button onClick={handleToggleClick} className="button1 d-inline">
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JustForYou;