import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { Link } from 'react-router-dom';

const Card = ({ id, title, price, image, freeShipping }) => {
    const { setCartProducts } = useContext(CartContext);
    const { cartProducts } = useContext(CartContext);
    const { setCartLength } = useContext(CartContext);

    const addToCartHandler = (product) => {
        let exists = cartProducts.find((pr) => pr.id === product.id);

        if (exists) {
            cartProducts[cartProducts.indexOf(exists)].qty++;
        } else {
            cartProducts.push({ ...product, qty: 1 });
        }

        setCartProducts(cartProducts);
        setCartLength(cartProducts.reduce((a, v) => a + v.qty, 0));
    };

    return (
        <div key={id} className="product">
            <img className="productsimg" src={image} alt={title} />
            <Link
                to={`/products/${id}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                <div className="name-price">
                    <p> {title} </p>
                    <p> {price} GEL</p>
                </div>
            </Link>
            <button
                className="productsbutton"
                onClick={() => addToCartHandler({ id, title, price, image })}
            >
                + Add to cart
            </button>
        </div>
    );
};

export default Card;
