import React, {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import './Cart.css';
import {Link} from "react-router-dom";

const Cart = () => {
    const {cartLength} = useContext(CartContext);

    return (
        <Link to='/cart'>
            <i className="fas fa-shopping-bag cart">
                <span className="cartItemsNumber">{cartLength}</span>
            </i>
        </Link>
    );
};

export default Cart;