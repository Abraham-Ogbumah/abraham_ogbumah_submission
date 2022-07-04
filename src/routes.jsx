import React, { lazy, Component } from "react";
import { Router, Switch, Navigate, Redirect } from "react-router-dom";

const Category = lazy(() => import('./Pages/CategoryPage/CategoryPage.jsx'));
const Cart = lazy(() => import('./Pages/CartPage/CartPage.jsx'));
const ProductDisplay = lazy(() => import('./Pages/ProductPage/ProductPage'));

export const route = {
    category: "/category",
    cart: "/cart",
    productdisplay: "/productdisplay" 
}

export default class ProductRoutes extends Component {
    render() {
        return (
            <Router>
                <Switch path={route.category} exact element={<Category />} />
                <Switch path={route.cart} exact element={<Cart />} />
                <Switch path={route.productdisplay} exact element={<ProductDisplay />} />
                <Switch path="/" element={<Redirect to="/category" />} />
            </Router>
        )
    }
}