import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-data">
            <div className="footer-list">
                <h1 className='footer-logo'>SFood</h1>
                <p className='footer-title'>Главная</p>
                <p className='footer-title'>Филиалы</p>
                <p className='footer-title'>О нас</p>
                <p className='footer-title'>Контакты</p>
            </div>
            <div className="food-media">
                <h2 className='footer-tittle'>Присоединяйтесь к нам</h2>
                <button className='footer-icon'><i class='fa fa-telegram' ></i></button>
                <button className='footer-icon1'><i class='fa fa-instagram'></i></button>
                <button className='footer-icon2'> <i class='fa fa-youtube-play' ></i></button>
            <div className="footer-contact">
                    <h2 className='footer-num'>Заказывайте по номеру</h2>
                    <p className='footer-phone'>+998931487733</p>
            </div>
        </div>
    </div>
        <div className="footer-name">
            <p className='footer-year'>© 2020–2022, ООО «IT-TIME», официальный сайт</p>
            <p className='footer-who'>Developed by Rustambek</p>
        </div>
    </div>
  )
}

export default Footer