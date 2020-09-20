import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <nav className="header">

            {/*Logo on left http://pngimg.com/uploads/amazon/amazon_PNG24.png*/}
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
            {/*Search box*/}
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>
            {/*3 links*/}
            <div className="header__nav">
                {/*1st link*/}
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLine1">Hello</span>
                    <span className="header__optionLine2">Sign In</span>
                </div>
                </Link>
                {/*2nd link*/}

                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLine1">Return</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
                </Link>
                {/*3rd link*/}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                </Link>

                <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLine2 header_basketcount">0</span>
                </div>
                </Link>



            </div>
            

            {/*Basket icon with number*/}
        </nav>
    );
}

export default Header;
