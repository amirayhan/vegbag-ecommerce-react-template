import React from "react";
import "./Home.css";
import object1 from "../../assets/object-2.png";

const Home = () => {
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
        </>
    );
};

export default Home;
