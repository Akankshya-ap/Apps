import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
function Header() {
    return (
        <nav className="header">

            {/*Logo on left http://pngimg.com/uploads/amazon/amazon_PNG24.png*/}
            <Link to="/login">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
            {/*Search box*/}
            <input type="text" className="header__searcgInput" />
            {/*3 links*/}
            {/*Basket icon with number*/}
        </nav>
    );
}

export default Header;
