import React from "react";
import "./header.css";
import { HiPhone } from "react-icons/hi";

const HeaderTop = () => {
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="d-none d-md-block col-md-5 col-lg-6">
                            <div className="header_top_left">
                                <div className="call">
                                    <p>
                                        <span>
                                            <HiPhone></HiPhone>
                                        </span>
                                        <b className="pe-2">Call Us:</b>
                                        0123 456 789
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-7 col-lg-6">
                            <div className="header_top_right float-end">
                                <form>
                                    <label htmlFor="language" className="me-1">
                                        Language:
                                    </label>
                                    <select
                                        name="language"
                                        id="language"
                                        defaultValue="english"
                                        className="me-5"
                                    >
                                        <option value="english">English</option>
                                        <option value="french">French</option>
                                        <option value="german">German</option>
                                    </select>

                                    <label htmlFor="currency" className="me-1">
                                        Currency:
                                    </label>
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

export default HeaderTop;
