import React from "react";

export const CartItem = ({ product, removeProduct, updateQty }) => {
    return (
        <div className="productCardContainer">
            <div className="SizesAndIMG">
                <div>
                    <img className="surati" src={product.image} alt={product.title} />
                </div>
                <div className="aboutOfPriceInCard">
                    <p className="satauri">{product.title}</p>
                    <p className="prodcutPrice167"><span style={{ fontSize: 16, color: 'gray' }}>Price : </span>{product.price} GEL</p>
                    <p className="prodcutPrice167"><span
                        style={{ fontSize: 16, color: 'gray' }}>Total Price : </span> {product.price * product.qty}GEL
                    </p>
                </div>
            </div>
            <div className="productFilter">
                <button className="deleteOfButton" onClick={() => removeProduct(product.id)}>Remove</button>
                <br />
                <div className="changer">
                    <button className="change" onClick={ () => updateQty(product.id, 'minus') }>-</button>
                    <span style={{ color: '#383737', fontWeight: '700', fontSize: 32 }}> { product.qty } </span>
                    <button className="change" onClick={ () => updateQty(product.id, 'plus') }> + </button>
                </div>
            </div>
        </div>
    );
};