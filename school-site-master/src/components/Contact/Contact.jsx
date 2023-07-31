import React from 'react';
import './style.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Contact = ({ sectionRef, setPopupOpen, popupOpen }) => {
  const onContactClick = () => {
    setPopupOpen(true)
  }

  return (
    <section className="contact" ref={sectionRef}>
      {/* <div className="container" id="container__contact"> */}
      <div className="contact_info">
        <div className="contact_info_socials">
          <img src="logo-3.svg" alt="" width={100} height={100} id={'contact_logo'}/>
          <div>
            <h4>Контактная информация:</h4>

            <span>
              <img src="location-icon.png" alt="Местоположение" width={25} />
              г. Екатеринбург, ул. Циолковского, 29 (Е)
            </span>

            <span>
              <img src="phone-icon.png" alt="Телефон" width={25} />
              +7 (900) 197 44 33 WhatsApp | Telegram
            </span>

            <span>
              <img src="insta-icon.png" alt="Инстаграм" width={25} />
              <a href="https://www.instagram.com/tdu.school">@tdu.school</a>
            </span>

            <span>
              <img src="weblink-icon.png" alt="Сайт" width={25} />
              <a href="#">tduschool.ru</a>
            </span>
            <button id="contact_button" onClick={onContactClick}>Задать вопрос</button>
          </div>
        </div>

        <YMaps>
          <Map defaultState={{ center: [56.804362, 60.60511], zoom: 14 }} className="map">
            <Placemark defaultGeometry={[56.804362, 60.60511]} />
          </Map>
        </YMaps>
        {/* <div className="location"></div> */}
      </div>

      {/* </div> */}
    </section>
  );
};

export default Contact;
