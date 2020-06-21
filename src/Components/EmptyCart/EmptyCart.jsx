import React from "react";
import { ReactComponent as BagICon } from "../../assets/bag.svg";
import './EmptyCart.css';

export const EmptyCart = () => {
    return (
        <React.Fragment>
            <p id="cartNameInCartDetail"> Cart </p>
            <div className="emptyCart">
                <BagICon className="emptyLogo"/>
                <pre style={{ position:'absolute', fontSize: 24, fontWeight: 400, color: '#383737', right:'55px'}}> Cart is empty </pre>
            </div>
        </React.Fragment>
    )
}