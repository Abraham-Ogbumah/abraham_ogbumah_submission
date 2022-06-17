import React, { lazy, Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Category = lazy(() => import('./Pages/Category'));
const Cart = lazy(() => import('./Pages/Cart'));
const ProductDisplay = lazy(() => import('./Pages/ProductDisplay'));

export const route = {
    category: "/category",
    cart: "/cart",
    productdisplay: "/productdisplay" 
}

export default class ProductRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path={route.category} exact element={<Category />} />
                <Route path={route.cart} exact element={<Cart />} />
                <Route path={route.productdisplay} exact element={<ProductDisplay />} />
                <Route path="/" element={<Navigate to="/category" />} />
            </Routes>
        )
    }
}