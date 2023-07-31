import React from 'react';
import './style.css';
import Nav from './Nav/Nav';

export const Header = ({
  mainRef,
  aboutRef,
  admissionRef,
  pricingRef,
  educationRef,
  contactRef,
  menuRef,
  popupOpen,
  setPopupOpen,
}) => {
  const onContactClick = () => {
    setPopupOpen(true);
  };

  return (
    <header className="header">
      <div className="container" id="container__header">
        <div className="header-left">
          <img src="logo.svg" alt="Территория добра и успеха" width={250} />
        </div>
        <div className="header-center"></div>
        <div className="header-right">
          <p>
            Наш адрес:
            <br /> Екатеринбург, ул.Цилковского, 29 (Е)
            <span>7 минут от метро Чкаловская</span>
          </p>

          <img src="logo-2.svg" alt="Территория добра и успеха" width={100} />
          <button onClick={onContactClick}>Заказать звонок</button>
          <p>
            <strong>+7 (919) 368-26-27 </strong>
            <div className="second-row">
              <div className="round" />
              <span>ежедневно с 9 до 18 часов</span>
            </div>
          </p>
        </div>
      </div>

      <Nav
        mainRef={mainRef}
        aboutRef={aboutRef}
        admissionRef={admissionRef}
        pricingRef={pricingRef}
        educationRef={educationRef}
        contactRef={contactRef}
        menuRef={menuRef}
      />
    </header>
  );
};

export default Header;
