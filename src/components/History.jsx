import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
    return (
        <>
            <div className="history">
                <div className="container">

                    <div className="row d-flex justify-content-center history-01 mt-5">
                        <div className="col-lg-6 left">
                            <div className="img">
                                <img src="./img/taxeometr-header-01.webp" alt="" className='w-100' />
                            </div>
                            <div className="span"></div>
                        </div>
                        <div className="col-lg-6 right">
                            <span className='furn'>south</span>
                            <h3 className='mb-4'>
                                <span>А</span>ренда геодезического оборудования
                            </h3>
                            <p>ООО «Геодезия Хизматлари» предоставляет возможность не только приобрести высококачественные геодезические инструменты по доступным ценам, но и взять их напрокат. Аренда геодезического оборудования - правильное решение при выполнении разовых или небольших объемов работ в сфере геодезии, кадастра, строительства и землеустройства. Заказывая инструмент в аренду у нас, Вы получаете оборудование по очень демократичным ценам.</p>
                            <Link to='/services' className='myBtn'><span></span>Подробнее</Link>
                        </div>
                    </div>

                    <h2><span>Н</span>аша история</h2>
                    <div className="row history-02">
                        <div className="col-lg-5 left">
                            <h5>Компания SOUTH - это один из крупнейших производителей геодезического оборудования в мире, более 20 лет успешной работы</h5>
                            <p>ООО «Геодезия Хизматлари» основана командой экспертов в области геодезии и ориентирована на выполнение инженерно — геодезических изысканий, кадастровых работ, комплекса геодезических работ в строительстве и высокоточных геодезических работ в промышленности. Нашими клиентами являются государственные и частные организации, компании разных направлений и размеров, строительные и проектные организации, а также владельцы небольших частных объектов строительства. Мы делали изыскания для школ, пекарень, заводов, дорог, электростанций, аэропортов, грибных ферм…</p>
                            <div className="span"></div>
                        </div>
                        <div className="col-lg-6 right">
                            <img src="./img/gnss-header-02.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History