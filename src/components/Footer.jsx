import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../tools/constants'

const Footer = () => {
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
            <div className="footer">
                <div className="container">
                    <div className="row foot">
                        <div className="col-lg-3 col-md-12">
                            <div className="logo-footer">
                                <Link to='/' href="#">
                                    <img src="/img/logo.png" style={{ width: '250px' }} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <ul className="d-flex flex-column">
                                <h2>Меню</h2>
                                <li>
                                    <Link to='/catalog'>
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/services' href="#"> Услуги </Link>
                                </li>

                                <li>
                                    <Link to='/about' href="#"> О компании </Link>
                                </li>
                                <li>
                                    <Link to='/contacts' href="#"> Контакты </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex flex-column">
                            <h2>Каталог</h2>
                            {category?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/catalog/${item.id}`}> {item.name} </Link>
                                    </li>
                                )
                            })}
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex flex-column connect-footer">
                            <h2>Связаться с нами</h2>
                            <div className="icon-footer">
                                <a href='https://www.instagram.com/southgroup_uz' target={'_blank'}>
                                    <img style={{ width: '30px', height: '30px' }} src="/img/instagram.png" alt="" />
                                </a>
                                <a href='https://t.me/southgroup_uz' target={'_blank'}>
                                    <img style={{ width: '30px', height: '30px' }} src="/img/telegram.png" alt="" />
                                </a>
                                <a href="tel: +998993815551">
                                    <img style={{ width: '30px', height: '30px' }} src="/img/phone.png" alt="" />
                                </a>
                            </div>
                            
                            <Link to='/contacts' className='myBtn mt-3'>
                                <span></span> Персональная консультация →
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>
                        © 2022 Southgroup. Powered by <a href="https://kokoagency.uz">kOkO digital agency</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Footer
