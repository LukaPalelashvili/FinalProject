import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from '../../Components/CartItem/CartItem';
import { EmptyCart } from '../../Components/EmptyCart/EmptyCart';
import Header from '../../Components/Header/Header';

export const Cart = () => {
    const { cartProducts, setCartProducts, setCartLength } = useContext(
        CartContext
    );
    const total = cartProducts.reduce((a, v) => a + v.qty * v.price, 0);
    const totalPrice = (
        <span className="totalprice">
            <hr /> Total Price:<strong> {total} GEL</strong>
            <hr />
        </span>
    );

    const removeProductFromCart = (id) => {
        const prToDelete = cartProducts.find((pr) => pr.id === id);
        cartProducts.splice(cartProducts.indexOf(prToDelete), 1);
        setCartProducts(cartProducts);
        updateCartLength();
    };

    const updateProductQty = (id, action) => {
        const prToUpdate = cartProducts.find((pr) => pr.id === id);

        if (prToUpdate) {
            if (action === 'plus') {
                cartProducts[cartProducts.indexOf(prToUpdate)].qty++;
            } else if (
                action === 'minus' &&
                cartProducts[cartProducts.indexOf(prToUpdate)].qty > 1
            ) {
                cartProducts[cartProducts.indexOf(prToUpdate)].qty--;
            }
        }

        setCartProducts(cartProducts);
        updateCartLength();
    };

    const updateCartLength = () => {
        setCartLength(cartProducts.reduce((a, v) => a + v.qty, 0));
    };

    return (
        <React.Fragment>
            <Header />
            <div className="wrapper">
                <p id="cartNameInCartDetail"> Cart </p>
                <div className="productCard">
                    {cartProducts.length ? (
                        cartProducts.map((pr) => (
                            <CartItem
                                key={pr.id}
                                updateQty={updateProductQty}
                                removeProduct={removeProductFromCart}
                                product={pr}
                            />
                        ))
                    ) : (
                        <EmptyCart />
                    )}
                    {cartProducts.length ? totalPrice : ''}
                </div>
            </div>
        </React.Fragment>
    );
};
