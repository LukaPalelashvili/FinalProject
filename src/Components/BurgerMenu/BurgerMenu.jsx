import React from "react";
import './BurgerMenu.css';
import {Link} from "react-router-dom";

const BurgerMenu = () => {
    return (
        <div className="burgermenu">
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span/>
                    <span/>
                    <span/>

                    <ul id="menu">
                        <Link to="/">
                            <li>მთავარი</li>
                        </Link>
                        <Link to="/about">
                            <li>ჩვენს შეხახებ</li>
                        </Link>
                        <Link to="/contact">
                            <li>კონტაქტი</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default BurgerMenu;