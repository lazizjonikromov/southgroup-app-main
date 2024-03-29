import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "../tools/constants";

const NewProduct = () => {
    const [product, setProduct] = useState([])
    const getNewProduct = () => {
        axios.get(API + 'api/product')
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getNewProduct()
    }, [])

    return (
        <>
            <div className="newProduct">
                <div className="container">
                    <div className="row">
                        <h2><span>П</span>родукты</h2>
                        <Swiper
                            breakpoints={{
                                338: {
                                    // width: 540,
                                    slidesPerView: 1.4,
                                },
                                992: {
                                    // width: 768,
                                    slidesPerView: 3.5,
                                },
                            }}
                            slidesPerView={3.5}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper mt-5"
                        >
                            {product.slice(0, 10).map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={`/new-catalog/${item.id}`} className="card h-100">
                                            <img src={`../img/${item.image01}`} className="card-img-top w-100" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        
                        <Swiper
                            breakpoints={{
                                338: {
                                    // width: 540,
                                    slidesPerView: 1.4,
                                },
                                992: {
                                    // width: 768,
                                    slidesPerView: 3.5,
                                },
                            }}
                            slidesPerView={3.5}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper mt-5"
                        >
                            {product.slice(10, 20).map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={`/new-catalog/${item.id}`} className="card h-100">
                                            <img src={`../img/${item.image01}`} className="card-img-top w-100" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Swiper
                            breakpoints={{
                                338: {
                                    // width: 540,
                                    slidesPerView: 1.4,
                                },
                                992: {
                                    // width: 768,
                                    slidesPerView: 3.5,
                                },
                            }}
                            slidesPerView={3.5}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper mt-5"
                        >
                            {product.slice(20, 30).map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={`/new-catalog/${item.id}`} className="card h-100">
                                            <img src={`../img/${item.image01}`} className="card-img-top w-100" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewProduct