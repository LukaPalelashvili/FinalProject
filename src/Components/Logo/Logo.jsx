import React from "react";
import './Logo.css';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <div className="L">L</div>
                <div className="P">P</div>
            </div>
        </Link>
    );
};

export default Logo;