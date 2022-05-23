import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../tools/constants";

export default function App() {
    const [category, setCategory] = useState([])

    const getAllCategory = () => {
        axios.get(API + 'api/category')
            .then((res) => {
                setCategory(res.data)
            })
            .catch(err => { console.log(err); })
    }

    useEffect(() => {
        getAllCategory()
    }, [])
    return (
        <>

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-10  mx-auto header-swiper">
                            <Swiper
                                effect={"cube"}
                                grabCursor={true}
                                speed={2000}
                                cubeEffect={{
                                    centeredSlides: true,
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                // autoplay={{
                                //     delay: 5000,
                                //     disableOnInteraction: false,
                                // }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, EffectCube, Pagination]}
                                className="swiper mySwiper">

                                <div className="swiper-wrapper">
                                    {/* {category.splice(0,4)?.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index} style={{ transition: 'all 0.3s ease' }} className="swiper-slide card position-relative">
                                                <img src={`/img/${item.header_image}`} alt="" className="card-img" />
                                                <div className="blur"></div>
                                                <div className="card-img-overlay zed">
                                                    <h5 className="card-title">
                                                        {item.name}
                                                    </h5>
                                                    <Link to={`/catalog/${item.id}`} className="myBtn uppercase"
                                                    ><span></span> Перейти в Каталог
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })} */}
                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <Link to='/catalog/1'>
                                            <img src="/img/taxeometr-header-01.webp" alt="" className="card-img" />
                                            <div className="blur"></div>
                                            <div className="card-img-overlay zed">
                                                {/* <h5 className="card-title">
                                                    Тахеометры
                                                </h5>
                                                <Link to='/catalog/1' className="myBtn uppercase"
                                                ><span></span> Перейти в Каталог
                                                </Link> */}
                                            </div>
                                        </Link>
                                    </SwiperSlide>

                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <Link to='/catalog/2'>
                                            <img src="/img/gnss-header-02.webp" alt="" className="card-img" />
                                            <div className="blur"></div>
                                            <div className="card-img-overlay zed">
                                                {/* <h5 className="card-title">
                                                GNSS приемники
                                            </h5>
                                            <Link to='/catalog/2' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог
                                            </Link> */}
                                            </div>
                                        </Link>
                                    </SwiperSlide>

                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <Link to='/catalog/3'>
                                            <img src="/img/nivelir-header-03.webp" alt="" className="card-img" />
                                            <div className="blur"></div>
                                            <div className="card-img-overlay zed">
                                                {/* <h5 className="card-title">
                                                Нивелиры
                                            </h5>
                                            <Link to='/catalog/3' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог
                                            </Link> */}
                                            </div>
                                        </Link>
                                    </SwiperSlide>

                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <Link to='/catalog/4'>
                                            <img src="/img/lazerniy-header-04.webp" alt="" className="card-img" />
                                            <div className="blur"></div>
                                            <div className="card-img-overlay zed">
                                                {/* <h5 className="card-title">
                                                Лазерные дальномеры
                                            </h5>
                                            <Link to='/catalog/4' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог
                                            </Link> */}
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                </div>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
