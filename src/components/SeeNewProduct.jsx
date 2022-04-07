import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Modal, ModalBody } from 'reactstrap'
import Catalog from './Catalog';
import { Swiper, SwiperSlide } from "swiper/react";

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { API } from '../tools/constants';

const SeeNewProduct = (props) => {
    const [product, setProduct] = useState({})
    const [descr, setDescr] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const getNewProduct = () => {
        setLoading(true)
        axios.get(API + `api/product/${props.match.params.id}`)
            .then((res) => {
                setProduct(res.data)
                setDescr(res.data.big_description)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getNewProduct()
    }, [])
    return (
        <>
            {loading ?
                <div className="loader">
                    <HashLoader loading={loading} size="40" color="red" />
                </div> : ''}
            <div className="seeNewProduct pt-5 mt-5">
                <div className="container">
                    
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex productImages">
                            {/* <img onClick={() => setIsOpen(true)} className='w-100' style={{ cursor: 'pointer', backgroundColor: 'red' }} src={`/img/${product.image}`} alt="" /> */}
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Thumbs]}
                                className="mySwiper2 w-75"
                            >
                                <SwiperSlide>

                                    <a
                                        href={`/img/${product.image01}`}
                                        data-fancybox="gallery"
                                    >
                                        <img alt='south-group' src={`/img/${product.image01}`} className='w-100 h-100 seeproductimg' />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <a
                                        href={`/img/${product.image02}`}
                                        data-fancybox="gallery"
                                    >
                                        <img alt='south-group' src={`/img/${product.image02}`} className='w-100 h-100 seeproductimg' />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <a
                                        href={`/img/${product.image03}`}
                                        data-fancybox="gallery"
                                    >
                                        <img alt='south-group' src={`/img/${product.image03}`} className='w-100 h-100 seeproductimg' />
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <a
                                        href={`/img/${product.image04}`}
                                        data-fancybox="gallery"
                                    >
                                        <img alt='south-group' src={`/img/${product.image04}`} className='w-100 h-100 seeproductimg' />
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={false}
                                spaceBetween={10}
                                direction={"vertical"}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper w-10"
                            >
                                <SwiperSlide>
                                    <img alt='south-group' src={`/img/${product.image01}`} className='w-100 h-100 seeproductimg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='south-group' src={`/img/${product.image02}`} className='w-100 h-100 seeproductimg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='south-group' src={`/img/${product.image03}`} className='w-100 h-100 seeproductimg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='south-group' src={`/img/${product.image04}`} className='w-100 h-100 seeproductimg' />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="col-lg-6 ml-auto">
                            <h3>{product.title}</h3>

                            <p className="mt-4">{product.description}</p>

                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h2><span>О</span>писание</h2>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mt-4 big_desc">
                            <div className="col-12">
                                {descr?.map((item, index) => {
                                    return (
                                        <>
                                            <h5 key={index + 1}>{item}</h5>


                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            <Modal className='modal-lg' isOpen={isOpen} toggle={() => setIsOpen(false)} >
                <ModalBody>
                    <img src={`/img/${product.image}`} className='w-100' alt="" />
                </ModalBody>
            </Modal>

            <Catalog />

        </>
    )
}

export default SeeNewProduct



