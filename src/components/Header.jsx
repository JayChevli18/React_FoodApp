import React, { useState } from "react"
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import "../App.css";
export const Header = () => {
    const [btn, setBtn] = useState("Login");

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg'>
            <div className='logo-container'>
                <img src='../public/food_logo.jpg' alt="Logo" className="w-26" />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {useOnlineStatus() === true ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-4">
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
