import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
        <h3 className='navbar-logo'>SFood</h3>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Главная</Link>
            <Link to="/branch" className="navbar-link">Филиаль</Link>
            <Link to="/our" className="navbar-link">О нас</Link>
            <Link to="/contact" className="navbar-link">Контакть</Link>
          </li>
        </ul>
        <i class='fa fa-shopping-cart'></i>
        <button className='navbar-btn'>Войти</button>
    </div> 
  )
}

export default Navbar