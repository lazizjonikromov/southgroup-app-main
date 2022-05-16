import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'

const Contacts = () => {
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
      <div className="contacts">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 our-contact">
              <h2><span>Н</span>аш адрес:</h2>
              <div className="contact">
                <img src="./img/location.png" alt="" />
                <div className="contact-text ml-3">
                  <h4>Город Ташкент, Яккасарайский район, 45 улица Марьям Якубовой, офис 401</h4>
                  <h5>Пн-Вс 09:00 - 19:00</h5>
                </div>
              </div>
              <div className="contact d-flex mt-5">
                <img src="./img/phone-mobile.png" alt="" />
                <div className="contact-text ml-3">
                  <h4>Контакты:</h4>
                  <h5>+998 99 381 55 51</h5>
                  <h5>+998 99 381 55 50</h5>
                  <h5>+998 99 381 55 53</h5>
                </div>
              </div>
              <div className="contact d-flex mt-5">
                <img src="./img/warning.png" alt="" />
                <div className="contact-text ml-3">
                  <h4>Ориентир: Гостиница Россия, Тенге Банк</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 map">
              <iframe className='w-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.825644905572!2d69.26399623002476!3d41.29469316957734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc973cece51e56d44!2sSouth%20Group!5e0!3m2!1sru!2s!4v1652705692643!5m2!1sru!2s" height="500" 
              loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts

