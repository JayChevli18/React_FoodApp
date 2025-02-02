import React, { useState } from "react"

export const Header = () => {
    const [btn, setBtn]=useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src='./food_logo.jpg' alt="Logo" className="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login"
                        onClick={()=>{
                            btn==="Login" ? setBtn("Logout") : setBtn("Login");
                        }}
                    >
                        {btn}
                    </button>
                </ul>
            </div>
        </div>
    )
}
