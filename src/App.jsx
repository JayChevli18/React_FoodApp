import React from 'react'
import "./App.css"

const Header=()=>{
  return(
    <div className='header'>
      <div className='logo-container'>
        <img src='./food_logo.jpg' alt="Logo" className="logo"/>
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

const App = () => {
  return (
    <div>
        <Header></Header>
    </div>
  )
}

export default App
