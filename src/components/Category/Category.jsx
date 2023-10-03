import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <>
            <li className="category_item">
                <Link to="/">{category.name}</Link>
            </li>
        </>
    );
};

export default Category;
