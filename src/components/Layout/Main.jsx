import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Main = () => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        console.log(savedCart);
        setCart(savedCart);
    }, [products]);
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find((pd) => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Header handleShow={handleShow}></Header>
            <Outlet context={([cart, setCart], handleAddToCart)}></Outlet>
            <Footer></Footer>
            <Cart show={show} cart={cart} handleClose={handleClose}></Cart>
        </div>
    );
};

export default Main;
