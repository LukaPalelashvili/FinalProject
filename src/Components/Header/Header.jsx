import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Header.css';
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";

const Header = () => {
    return (
        <header>
            <div className="header">
                <BurgerMenu/>
                <Logo/>
                <Cart/>
            </div>
        </header>
    )
};

export default Header;