import React from 'react';
import './style.css';
function Education({ sectionRef }) {
  return (
    <section className="education" ref={sectionRef}>
      <div className="container reveal" id="container__education" >
        <h2>
          <span className="colored-span">Распорядок</span> дня
        </h2>
        <div id='container__education_info'>
          <table>
            <tr>
              <td>8:30 - 9:10</td>
              <td>1-й урок</td>
            </tr>
            <tr>
              <td>9:20 - 10:00</td>
              <td>2-й урок</td>
            </tr>
            <tr>
              <td>10:10 - 10:50</td>
              <td>3-й урок</td>
            </tr>
            <tr>
              <td>10:50 - 11:10</td>
              <td>Второй завтрак</td>
            </tr>
            <tr>
              <td>11:10 - 11:50</td>
              <td>4-й урок</td>
            </tr>
            <tr>
              <td>12:00 - 12:40</td>
              <td>5-й урок</td>
            </tr>
            <tr>
              <td>12:40 - 13:20</td>
              <td>6-й урок</td>
            </tr>
            <tr>
              <td>13:30 - 14:00</td>
              <td>Обед</td>
            </tr>
            <tr>
              <td>14:00 - 14:40</td>
              <td>Прогулка</td>
            </tr>
            <tr>
              <td>14:40 - 15:00</td>
              <td>Время для общения (свободное)</td>
            </tr>
            <tr>
              <td>15:00 - 16:00</td>
              <td>Выполнение домашних заданий</td>
            </tr>
            <tr>
              <td>16:00 - 16:20</td>
              <td>Полдник</td>
            </tr>
            <tr>
              <td>16:20 - 17:20</td>
              <td>Факультативные занятия</td>
            </tr>
            <tr>
              <td>17:20 - 18:00</td>
              <td>Просмотр фильмов, обучающих видео, чтение книг (обсуждение)</td>
            </tr>
            <tr>
              <td>18:00</td>
              <td>Завершение дня</td>
            </tr>
          </table>
          <img src='photo_4.png' alt='' width={550}/>
        </div>
      </div>
    </section>
  );
}

export default Education;
