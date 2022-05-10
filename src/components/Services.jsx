import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'

const Services = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1400)
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


            <div className="services">
                <div className="container">
                    <div className="row">
                        <h2><span>Г</span>еодезические услуги</h2>
                    </div>
                    <div className="row mt-4">
                        <p className='mt-3'>
                            ООО «Геодезия Хизматлари» основана командой экспертов в области геодезии и ориентирована на выполнение инженерно — геодезических изысканий, кадастровых работ, комплекса геодезических работ в строительстве и высокоточных геодезических работ в промышленности.
                            Нашими клиентами являются государственные и частные организации, компании разных направлений и размеров, строительные и проектные организации, а также владельцы небольших частных объектов строительства. Мы делали изыскания для школ, пекарень, заводов, дорог, электростанций, аэропортов, грибных ферм…
                        </p>
                    </div>
                    <div className="row mt-4">
                        <h2>
                            <span>А</span>ренда геодезического оборудования
                        </h2>
                        <p className='mt-3'>
                            ООО «Геодезия Хизматлари» предоставляет возможность не только приобрести высококачественные геодезические инструменты по доступным ценам, но и взять их напрокат.

                            Аренда геодезического оборудования - правильное решение при выполнении разовых или небольших объемов работ в сфере геодезии, кадастра, строительства и землеустройства. Заказывая инструмент в аренду у нас, Вы получаете оборудование по очень демократичным ценам. Также Вы становитесь участником дисконтной программы на приобретение нового оборудования, что позволит сэкономить дополнительные средства.

                            ООО «Геодезия Хизматлари» предлагает выгодные условия проката измерительных приборов, позволяющие обойтись без покупки дорогостоящих устройств и избежать расходов, связанных с их эксплуатацией: поверкой, амортизацией, обслуживанием, хранением.
                        </p>
                    </div>

                    <div className="row mt-5">
                        <h2><span>П</span>оверка , Юстировка и ремонт</h2>
                    </div>
                    <div className="row mt-4">
                        <p>
                            На базе ООО «Геодезия Хизматлари» существует собственный сервисный центр, оснащенный современным оборудованием и укомплектованный квалифицированным персоналом. Главной его задачей является сведение к минимуму материальных и временных издержек заказчика при эксплуатации геодезического оборудования.

                            Сервисный центр компании производит ремонт геодезического оборудования: тахеометры;  спутниковое оборудования;   контроллеров; цифровых и оптических нивелиров; цифровых и оптических теодолитов; лазерного оборудования.
                            Наш сервисный центр использует при ремонте оригинальные запасные части и расходные материалы. Все работы выполняются по методикам заводов-изготовителей. Рабочие места наших инженеров оснащены инструментами, технологическим оборудованием и средствами измерений, предоставленными непосредственно изготовителями геодезической техники.

                            В комплекс услуг Сервисного центра компании ООО «Геодезия Хизматлари» входят: <br /><br />
                            •	диагностика приборов<br />
                            •	предпродажная подготовка<br />
                            •	гарантийный ремонт геодезического оборудования<br />
                            •	постгарантийный ремонт геодезического оборудования<br />
                            •	поверка геодезического оборудования
                        </p>
                        <p className='mt-5'>
                            Уважаемые коллеги мы рады приветствовать вас на нашем сайте геодезического оборудования South.
                            Компания “Geodeziya Xizmatlari” является официальным дистрибьютором SOUTH на территории Узбекистана.
                            <br /><br />
                            Компания SOUTH - это один из крупнейших производителей геодезического оборудования в мире, более 20 лет успешной работы, а также продаж по всему миру. Компания “Geodeziya Xizmatlari”  – это, в первую очередь, команда профессионалов, у которых за плечами опыт работы в полях, которые помогут вам подобрать оборудование в зависимости от ваших задач и потребностей, обеспечат для вас техническую поддержку, консультации, обучение, а также сервисное обслуживание геодезических приборов.
                            <br /><br />
                            Мы считаем своим основным критерием в работе — доступность, как по цене, так и по технологиям, но не в ущерб качеству. Поэтому нашим главным партнером является компания SOUTH. Их доступные решения, отлично подходят для нашей страны. Мы занимаемся локализацией и поддержкой данного оборудования, составляем инструкции и адаптируем под требования наших геодезистов, переводим ПО и тесно работаем с производителем над улучшениями. Перед поступлением на склад, приборы проходят тщательную проверку и подготовку к работе, мы даем гарантию и отвечаем за каждый проданный прибор.
                            <br /><br />
                            В продуктовой линейке компании “Geodeziya Xizmatlari”  геодезического оборудования South представлен широкий спектр геодезического оборудования: электронные тахеометры, нивелиры, теодолиты, GNSS/GPS оборудование, гидрографические эхолоты и различные аксессуары. Все оборудование, соответствует международным стандартам качества и надежности, и полноценно прослужит вам долгие годы. В лице нашей компании вы получаете сильного партнера, нацеленного на ваш успех.
                        </p>
                    </div>

                    <div className="row mt-5 d-flex ">
                        <img src="./img/sertificate-01.png" alt="" className='w-50' />
                        <img src="./img/sertificate-02.png" alt="" className='w-50' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services


