import React, { useState } from "react"
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btn, setBtn] = useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src='../public/food_logo.jpg' alt="Logo" className="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li className="px-4">
                        Online Status: {useOnlineStatus() === true ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            Cart
                        </Link>
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            btn === "Login" ? setBtn("Logout") : setBtn("Login");
                        }}
                    >
                        {btn}
                    </button>
                </ul>
            </div>
        </div>
    )
}
