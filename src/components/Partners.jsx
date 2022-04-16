import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="container">
          <h2><span>Н</span>аши партнеры</h2>
          <div className="row partner d-flex align-items-center">
            <div className="col-lg-5 left">
              <h5>Компании сотрудничают с нами по всему миру</h5>
              <p>На данный момент дилерская сеть фабрики «Экми-Мебель» насчитывает более 30 салонов по всей Украине. Сейчас мы заинтересованы  в расширении сети и предлагаем выгодные условия для сотрудничества.
                <br /><br />                Основным преимуществом фабрики является изготовление любого индивидуального изделия, мягкой мебели и аксессуаров из наших основных коллекций. Также присутствует линейка оригинальных интерьерных корпусных изделий.</p>
            </div>
            <div className="col-lg-5 right">
              <div className='top-span'></div>
              <img src="./img/nivelir-header-03.webp" alt=""/>
              <div className='bot-span'></div>
            </div>
          </div>
          
          <div className="brend-partners">
            <div className="container">
              <div className="row">
                <Swiper
                  breakpoints={{
                    338: {
                      // width: 540,
                      slidesPerView: 2,
                    },
                    992: {
                      // width: 768,
                      slidesPerView: 3,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="./img/partners-01.svg" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-02.svg" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-03.jpg" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-04.png" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-06.jpg" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-07.png" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-08.png" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-09.jpg" alt="" className='w-100' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/partners-10.svg" alt="" className='w-100' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Partners

