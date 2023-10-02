import React from "react";
import "./Header.css";
import { HiPhone } from "react-icons/hi";

const Header = () => {
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header_top_left">
                                <div className="call">
                                    <p>
                                        <span>
                                            <HiPhone></HiPhone>
                                        </span>
                                        <b>Call Us:</b>
                                        0123 456 789
                                    </p>
                                </div>
                            </div>
                            <div className="header_top_right">
                                <form>
                                    <label htmlFor="language">Language:</label>
                                    <select
                                        name="language"
                                        id="language"
                                        defaultValue="english"
                                    >
                                        <option value="english">English</option>
                                        <option value="french">French</option>
                                        <option value="german">German</option>
                                    </select>

                                    <label htmlFor="currency">Currency</label>
                                    <select
                                        name="currency"
                                        id="currency"
                                        defaultValue="usd"
                                    >
                                        <option value="usd">USD</option>
                                        <option value="gbp">GBP</option>
                                        <option value="eur">EUR</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
