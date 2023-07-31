import React from 'react';
import './style.css';

function Main({ sectionRef, setPopupOpen }) {
  const onContactClick = () => {
    setPopupOpen(true)
  }

  return (
    <section className="main" ref={sectionRef}>
      <img src="deco1.svg" id="main-deco-1" alt="декоративныей элемент" />
      <img src="deco2.svg" id="main-deco-2" alt="декоративныей элемент" />
      <div className="container show" id="container__main" >
        <div className="main-left">
          <h1>Частная англо-китайская школа в Екатеринбурге</h1>
          <p>
            Образовательное учреждение с углублённым изучением{' '}
            <span className="main_span">математики, китайского</span> и
            <span className="main_span"> английского</span> языка для обучающихся с 1 по 4 класс
            включительно.
          </p>
          <div>
            <button onClick={onContactClick}>Заказать звонок</button>
            <span>
              Мы готовы проконсультировть Вас <br />
              прямо сейчас!
            </span>
          </div>
        </div>
        <div className="main-right">
          <img src="photo_1.png" alt="ученица" />
        </div>
      </div>
    </section>
  );
}

export default Main;
