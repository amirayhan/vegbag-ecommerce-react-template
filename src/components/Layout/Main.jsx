import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

const Main = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Header handleShow={handleShow}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Cart show={show} handleClose={handleClose}></Cart>
        </div>
    );
};

export default Main;
