import React from 'react'

const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 our-contact">
              <h2><span>Н</span>аш адрес:</h2>
              <div className="contact">
                <img src="./img/location.png" alt="" />
                <div className="contact-text ml-3">
                  <h4>Город Ташкент, Мирабадский район, Улица. Богсарой 45, офис 401</h4>
                  <h5>Пн-Сб 09:00 - 21:00</h5>
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
              <iframe className='w-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11988.079578932638!2d69.30549347141117!3d41.30843081161489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa193c5c2e7c5a340!2sKoko%20Digital%20Agency!5e0!3m2!1sru!2s!4v1647415474430!5m2!1sru!2s" height="500px" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts

