import React from 'react'
import '../Contactpage/Contactpage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Contactpage = () => {
  return (
    <div className='contact'>
      <Navbar/>
      <div className="contact-centr">
        <h2 className='contact-title'>Телефоны контактных центров</h2>
        <p className='contact-item'>Круглосуточно, без выходных</p>
          <div className="contact-toshkent">
            <p className='contact-place'>Ташкент</p>
            <p className='contact-num'>+998931487733</p>
          </div>
          <div className="contact-toshkent">
            <p className='contact-place'>Наманган</p>
            <p className='contact-num'>+998993253304</p>
          </div>
          <div className="contact-toshkent">
            <p className='contact-place'>Алмалык</p>
            <p className='contact-num'>+998931487777</p>
          </div>
      </div>
      <div className="contact-otdel">
        <h2 className='contact-title'>Отдел поддержки клиентов</h2>
          <div className="contact-pochta">
            <p className='contact-place'>Электронная почта</p>
            <p className='contact-num'>rustambek0301@gmail.com</p>
          </div>
          <div className="contact-phone">
            <p className='contact-place'>Контактный телефон</p>
            <p className='contact-num'>+998935010770</p>
          </div>
      </div>
      <div className="contact-prav">
        <h2 className='contact-title'>Правообладателям</h2>
        <p className='contact-text'>По вопросам, возникшим в связи c предположительным неправомерным
           использованием товарных знаков, логотипов и 
          иных материалов, просим обращаться по мейлу  приложением подтверждающих документов
        </p>
        <div className="contact-elektron">
          <p className='contact-item'>Электронная почта</p>
          <p className='contact-num'>rustambek0301@gmail.com</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contactpage