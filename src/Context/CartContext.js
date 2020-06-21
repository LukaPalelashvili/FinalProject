import React, { useEffect, useState } from 'react';

export const CartContext = React.createContext(null);

export default (props) => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3100/getproducts')
            .then((res) => res.json())
            .then((res) => setProducts(res));
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                setCartProducts,
                cartLength,
                setCartLength,
                products,
                setProducts,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
