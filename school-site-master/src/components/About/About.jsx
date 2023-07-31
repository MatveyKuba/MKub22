import React from 'react';
import './style.css';

const About = ({ sectionRef }) => {
  return (
    <section className="about" ref={sectionRef}>
      
      <div className="container " id="container__about" >
        <div className="container__about_info ">
          <div className='reveal'>
            <img src="photo_2.png" width="100%" alt="Ученики" />
            <h2 id='mobile-h2'>
              О НАШЕЙ <span className="colored-span">ШКОЛЕ</span>
            </h2>
            <article>
              Учебная траектория нашей школы, учитывающая личностные особенности ребенка, помогает
              ему более щадящим способом овладевать базовыми и углубленными знаниями по предметам.
              Ежедневные уроки английского языка по программе языковой гимназии способствуют
              скорейшему и более качественному овладению и усвоению знаний, навыков и умений с более
              легким их последующим применением в реальных языковых ситуациях.
            </article>
          </div>
          <div  className='reveal'>
            <h2 id='mobile-h2-2'>
              <span className="colored-span">ИСТОРИЯ</span> СОЗДАНИЯ
            </h2>
            <article>
              Здравствуйте, меня зовут Ермилова Ольга. Я 18 лет являюсь основателем и лидером группы
              компаний DIKO GROUP.
              <br /> Предприниматель, сертифицированный коуч, психолог. <br />
              Мы с мужем Игнатом родители Федора 12 лет, Мирона 8 лет и Таисии 7 лет. <br />
              Воспитывая абсолютно разных троих детей мы приобрели опыт обучения в разных школах, в
              том числе и за границей. За это время мы укоренились в своем намерение взять
              ответственность за образование и развитие детей на себя и открыть свою уникальную
              школу с подходом и процессами, которые позволят учитывать индивидуальные особенности
              детей, проявить их сильные стороны и найти внутреннюю опору и мотивацию внутри себя, в
              рамках учебного процесса и в жизни в целом.
            </article>
            <img src="photo_3.png" width="100%" alt="Наша семья" />
          </div>
          
        </div>

        <div className="missions reveal">
          <h2>
            <span className="colored-span">ОСНОВНЫЕ</span> ЗАДАЧИ
          </h2>
          <ul>
            <li>
              Формирование прочных базовых учебных знаний,
              <br /> навыков и умений
            </li>
            <li>Углубленное изучение математики, английского языка и китайского языка</li>
            <li>Овладение навыками бесконфликтного поведения в коллективе</li>
            <li>Формирование учебной осознанности и желания узнавать новое</li>
            <li>Развитие лучших личностных качеств</li>
            <li>Формирование устойчивости психики к адаптации пубертатного периода</li>
          </ul>
        </div>
      </div>
      <img src="deco3.svg" id="main-deco-3" alt="декоративныей элемент" />
      <img src="deco4.svg" id="main-deco-4" alt="декоративныей элемент" />
    </section>
  );
};

export default About;