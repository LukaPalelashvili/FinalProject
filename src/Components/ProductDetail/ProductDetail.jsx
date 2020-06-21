import React, { useContext, useState } from 'react';
import './ProductDetail.css';
import { CartContext } from '../../Context/CartContext';
import Header from '../Header/Header';

const ProductDetail = (props) => {
    const {
        products,
        cartProducts,
        setCartProducts,
        setCartLength,
    } = useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [cartClicked, setCartClicked] = useState(false);
    const prID = props.match.params.id;
    const product = products.find((pr) => pr.id === Number(prID));
    const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    const addToCart = (prod) => {
        setCartClicked(true);

        if (!selectedSize) return;

        let exists = cartProducts.find((pr) => pr.id === prod.id);

        if (exists) {
            cartProducts[cartProducts.indexOf(exists)].qty++;
        } else {
            cartProducts.push({ ...product, size: selectedSize, qty: 1 });
        }

        setCartProducts(cartProducts);
        setCartLength(cartProducts.reduce((a, v) => a + v.qty, 0));
    };

    return (
        <React.Fragment>
            <Header />
            <div className="productDescription">
                <div className="productIMG">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="mainDescrption">
                    <div className="produqtisShesaxeb">
                        <h1 id="aboutHeadline"> {product.title} </h1>
                        <p id="aboutText">{product.descr}</p>
                        <p className="detailPrice"> {product.price} GEL </p>
                    </div>

                    {cartClicked && !selectedSize && (
                        <span style={{ color: 'red' }}>Choose Size</span>
                    )}
                    <div className="DetailsizesWrapper">
                        <span className="size-title">Size: </span>
                        {sizes.map((size) => {
                            return (
                                <button
                                    value={size}
                                    className={`buttonSize ${
                                        selectedSize === size ? 'active' : null
                                    }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className="detailProductsbutton"
                        onClick={() => addToCart(product)}
                    >
                        {' '}
                        + Add to cart
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductDetail;
