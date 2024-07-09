import React from 'react'
import '../Branchpage/Branchpage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Branchpage = () => {
  return (
    
    <div className='branch'>
      <Navbar/>
          <div className="branch-magic">
            <div className="branch-bobur">
            <h3 className='branch-adres'>MaxWay Magic City</h3>
            <p className='branch-street'>Magic City.улю Бабура, 174, Ташкентб Узбекистон</p>
            </div>
            <div className="branch-time">
              <p className='branch-work'>Часть работь</p>
              <p className='branch-oclock'>10:00-03:00</p>
            </div>
          </div>
          <div className="branch-magic">
            <div className="branch-bobur">
            <h3 className='branch-adres'>MaxWay Toshkent City</h3>
            <p className='branch-street'>Magic City.улю Navoiy, 26, Ташкентб Узбекистон</p>
            </div>
            <div className="branch-time">
              <p className='branch-work'>Часть работь</p>
              <p className='branch-oclock'>10:00-03:00</p>
            </div>
          </div>
          <div className="branch-magic">
            <div className="branch-bobur">
            <h3 className='branch-adres'>MaxWay Chilanzar City</h3>
            <p className='branch-street'>Magic City.улю Chilanzar, 3, Ташкентб Узбекистон</p>
            </div>
            <div className="branch-time">
              <p className='branch-work'>Часть работь</p>
              <p className='branch-oclock'>10:00-03:00</p>
            </div>
          </div>
      <Footer/>
    </div>
  )
}

export default Branchpage