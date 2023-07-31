import React from 'react';
import './style.css';

const Admission = ({ sectionRef }) => {
  return (
    <section className="admission" ref={sectionRef}>
      <div className="container reveal" id="container__admission">
        <h2>
          Как <span className="colored-span">поступить</span> в школу?
        </h2>

        <img src="admission-steps.svg" alt="" width={100} id="steps-visual" />

        <div className="admission-steps">
          <div className="admission-steps_item" id="admission-step-1">
            <div>
              <h4>Заявка на обучение</h4>
              <p>
                Позвоните нам по телефону или оставьте заявку на сайте. Менеджер свяжется с вами в
                удобное для вас время.
              </p>
            </div>
          </div>

          <div className="admission-steps_item" id="admission-step-2">
            <img src="deco5.svg" id="main-deco-5" alt="декоративныей элемент" />
            <div>
              <h4>Знакомство со школой</h4>
              <p>
                Для новых учеников мы проводим дни открытых дверей. Вы можете не только увидеть
                школу, но и познакомиться с одноклассниками.
              </p>
            </div>
          </div>

          <div className="admission-steps_item" id="admission-step-3">
            <div>
              <h4>Зачисление</h4>
              <p>
                Зачисление в школу и начало обучения. Наши преподователи помогут адаптироваться в
                новом классе.
              </p>
            </div>
            <img src="deco5.svg" id="main-deco-6" alt="декоративныей элемент" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
