import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Homepage/Homepage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Lavash from "../../Components/Img/lavash.jpg"
import Sandvich from "../../Components/Img/sandwich.jpg"
import Xoddog from "../../Components/Img/xod-dog.jpg"
import Salted from '../../Components/Img/salted.jpg'
import Constant from '../../Components/Img/constant.jpg'
import Hot from '../../Components/Img/hot.jpg'
import Noodle from '../../Components/Img/noodle.png'
import Spicy from '../../Components/Img/spicy.jpg'
import Footer from '../../Components/Footer/Footer';

 
const Homepage = () => {
  return (
    <div className='home'>
      <Navbar/>
        <div className="swiper-one">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide><img src={Lavash} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sandvich} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Xoddog} alt="" /></SwiperSlide>
        </Swiper>
        </div>
        <div className="swiper-two" style={{marginTop: "50px"}}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
        >
          <SwiperSlide><img src={Lavash} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Sandvich} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Xoddog} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Lavash} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Sandvich} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Xoddog} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Lavash} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Sandvich} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
          <SwiperSlide><img src={Xoddog} alt="" style={{width: "300px", height: "150px"}}/></SwiperSlide>
        </Swiper>
        </div>
        <div className="list" 
        style={{display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "30px", 
        width: "100%", 
        height: "50px", 
        backgroundColor: "blueviolet",
        color: "white",
        fontFamily: "sans-serif"
        }}>
          <p className='list-name'>Lavash</p>
          <p className='list-name'>Desert</p>
          <p className='list-name'>Set</p>
          <p className='list-name'>Xaggi</p>
          <p className='list-name'>Burger</p>
          <p className='list-name'>Pizza</p>
          <p className='list-name'>Sendwich</p>
          <p className='list-name'>Donar</p>
          <p className='list-name'>Xot-dog</p>
          <p className='list-name'>Free</p>
          <p className='list-name'>Drink</p>
          <p className='list-name'>Salad</p>
          <p className='list-name'>Bread</p>
          <p className='list-name'>Sauce</p>
        </div>
        <div className="food-list">
          <div className="food-list-one">
            <div className="food-list-1">
              <img className='food-img' src={Salted} alt="" />
              <h3 className='food-title'>Spicy seasoned seafood noodles</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>2.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            <div className="food-list-1">
              <img className='food-img' src={Salted} alt="" />
              <h3 className='food-title'>x owls available</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>3.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            <div className="food-list-1">
              <img className='food-img' src={Salted} alt="" />
              <h3 className='food-title'>Salted Pasta with mushroom sauce</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>5.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            <div className="food-list-1">
              <img className='food-img' src={Salted} alt="" />
              <h3 className='food-title'>Beef dumpling in hot soup</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>3.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
          </div>
          <div className="food-list-two">
            <div className="food-list-1">
              <img className='food-img' src={Hot} alt="" />
              <h3 className='food-title'>Hot spicy fried rice with omelet</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>9.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            <div className="food-list-1">
              <img className='food-img' src={Spicy} alt="" />
              <h3 className='food-title'>Spicy instant noodle with</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>2.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            <div className="food-list-1">
              <img className='food-img' src={Constant} alt="" />
              <h3 className='food-title'>constant noodle special omelette</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>2.9 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            <div className="food-list-1">
              <img className='food-img' src={Noodle} alt="" />
              <h3 className='food-title'>noodle with spinach</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>0.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            </div>
            <div className="food-list-three">
            <div className="food-list-1">
              <img className='food-img' src={Salted} alt="" />
              <h3 className='food-title'>Salted Pasta with mushroom sauce</h3>
              <p className='food-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
              <div className="buttons">
                <p className='food-num'>5.29 сум</p>
                <button className='food-btn'>Заказать</button>
              </div>
            </div>
            </div>
          </div>
          <Footer/>
        </div>
  )
}

export default Homepage