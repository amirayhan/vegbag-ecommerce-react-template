import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <>
            <ul className="categories">
                <li>
                    <Link to="/">VEGETABLES</Link>
                </li>
                <li>
                    <Link to="/">ORGANIC PRODUCT</Link>
                </li>
                <li>
                    <Link to="/">MILKS AND DAIRIES</Link>
                </li>
                <li>
                    <Link to="/">COSMETICS & BEAUTY</Link>
                </li>
                <li>
                    <Link to="/">HEALTH CARE</Link>
                </li>
                <li>
                    <Link to="/">DIGITAL CAMERA</Link>
                </li>
                <li>
                    <Link to="/">SMART PHONES</Link>
                </li>
                <li>
                    <Link to="/">FURNITURE</Link>
                </li>
                <li>
                    <Link to="/">TOYS & GAME</Link>
                </li>
                <li>
                    <Link to="/">HEALTH & BEAUTY</Link>
                </li>
                <li>
                    <Link to="/">GIFT IDEAS</Link>
                </li>
                <li>
                    <Link to="/">HEALTH CARE</Link>
                </li>
            </ul>
        </>
    );
};

export default Categories;
