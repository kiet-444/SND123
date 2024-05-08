import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setmenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className="nav-menu">
           <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
           <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
           <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
           <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
        </div>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        
        </div>
    </div>
  )
}

export default Navbar