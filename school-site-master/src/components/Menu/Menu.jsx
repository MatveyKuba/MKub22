import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

function Menu({ mainRef, aboutRef, admissionRef, pricingRef, educationRef, contactRef, menuRef }) {
  const scrollPosition = useScrollPosition();
  const [main, setMain] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [admission, setAdmission] = React.useState(null);
  const [pricing, setPricing] = React.useState(null);
  const [education, setEducation] = React.useState(null);
  const [contact, setContact] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  React.useEffect(() => {
    setMain(mainRef);
    setAbout(aboutRef);
    setAdmission(admissionRef);
    setPricing(pricingRef);
    setEducation(educationRef);
    setContact(contactRef);
    setMenu(menuRef)
  }, [mainRef, aboutRef, admissionRef, pricingRef, educationRef, contactRef,menuRef]);

  return (
    <div ref={menuRef} className={'menu menu-closed'}>
      <span>
        <img
          src="close.svg"
          alt="close"
          width={35}
          height={35}
          onClick={() => {
            menu.current.classList.add('menu-closed');
          }}
        />
      </span>
      <ul>
        <li>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              menu.current.classList.add('menu-closed');
            }}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              about.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            О школе
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              window.scrollTo(0, pricing.current.offsetTop - 150);
              menu.current.classList.add('menu-closed');
            }}
          >
            Стоимость
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              education.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Расписание
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              admission.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Поступление
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              contact.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
