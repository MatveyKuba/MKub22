import React from 'react';
import './style.css';

function Pricing({ sectionRef }) {
  return (
    <section className="pricing" ref={sectionRef}>
      <div className="container reveal" id="container__pricing" >
        <h1>Стоимость обучения в частной школе</h1>
        <div className="container__pricing_items">
          <div>
            Система{' '}
            <span className="colored-span">
              «Все включено»: <br />
              45 000 рублей
            </span>{' '}
            в месяц
            <br />
            (Учебный год 405 000 рублей)
          </div>
          <div>
            Организационный сбор:
            <br /> <span className="colored-span">30 000 рублей</span> один раз в год
          </div>
          <div>
            Аттестационный сбор: <br />
            <span className="colored-span">7 000 рублей</span> один раз в год
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
