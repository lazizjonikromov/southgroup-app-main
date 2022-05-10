import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import Catalog from './Catalog';
import { Swiper, SwiperSlide } from "swiper/react";

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { API } from '../tools/constants';
import { ScaleLoader } from 'react-spinners';

const SeeNewProduct = (props) => {
    const [product, setProduct] = useState({})
    const [descr, setDescr] = useState([])
    const [description_key, setDescription_key] = useState([])
    const [description_value, setDescription_value] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const getNewProduct = () => {
        setLoading(true)
        axios.get(API + `api/product/${props.match.params.id}`)
            .then((res) => {
                setProduct(res.data)
                console.log(product);
                setDescr(res.data.big_description)
                setDescription_key(res.data.description_key)
                setDescription_value(res.data.description_value)
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
        setTimeout(() => {
            console.clear()
        }, 1000)
    }, [])
    return (
        <>
            {loading ?
                <div className="loader">
                    <img src="/img/south.png" alt="" />
                    <ScaleLoader
                        className="loader"
                        loading={loading}
                        size="70"
                        color="#d6171f"
                    />
                </div> : ''}
            <div className="seeNewProduct pt-5 mt-5">
                <div className="container">
                    <h3 className='seehnone'>{product.title}</h3>

                    <div className="row align-items-center">

                        <div className="col-lg-6 flex-column flex-lg-row d-flex productImages">

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
                            <h3 className='seehblock'>{product.title}</h3>
                            <br />
                            <h4 className='mt-3 mb-3 xr'>
                                <span>Х</span>АРАКТЕРИСТИКИ
                            </h4>
                            <br />
                            <table>
                                <tbody className='d-flex justify-content-between'>
                                    <tr className='d-flex flex-column'>
                                        {description_key?.map((item, index) => {
                                            return (
                                                <>

                                                    <td key={item.id}>
                                                        {item}
                                                    </td>

                                                    <br />
                                                </>
                                            )
                                        })}
                                    </tr>
                                    <tr className='d-flex flex-column align-items-end'>
                                        {description_value?.map((item, index) => {
                                            return (
                                                <>

                                                    <td className='td' key={item.id}>
                                                        {item}
                                                    </td>

                                                    <br />
                                                </>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            </table>

                            {/* <table>
                                <tbody className='d-flex justify-content-between'>
                                    <tr className='d-flex flex-column'>
                                        {description_key?.map((item, index) => {
                                            return (
                                                <>

                                                    <td key={item.id}>
                                                        {item}
                                                    </td>

                                                    <br />
                                                </>
                                            )
                                        })}
                                    </tr>
                                    <tr className='d-flex flex-column align-items-end'>
                                        {description_value?.map((item, index) => {
                                            return (
                                                <>

                                                    <td className='td' key={item.id}>
                                                        {item}
                                                    </td>

                                                    <br />
                                                </>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            </table> */}

                            {/* <ul>
                                {description_key?.map((item, index) => {
                                    return (
                                        <>

                                            <li key={index + 1}>
                                                {item}
                                            </li>

                                            <hr />
                                        </>
                                    )
                                })}
                                {description_value?.map((item, index) => {
                                    return (
                                        <>

                                            <li key={index + 1}>
                                                {item}
                                            </li>

                                            <hr />
                                        </>
                                    )
                                })}
                            </ul> */}

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

                                            <h5 key={item.id}>{item}</h5>


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



