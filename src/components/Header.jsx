import React from "react"

export const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}
