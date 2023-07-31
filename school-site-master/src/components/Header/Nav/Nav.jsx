import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

const Nav = ({
  mainRef,
  aboutRef,
  admissionRef,
  pricingRef,
  educationRef,
  contactRef,
  menuRef,
}) => {
  const scrollPosition = useScrollPosition();
  const [main, setMain] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [admission, setAdmission] = React.useState(null);
  const [pricing, setPricing] = React.useState(null);
  const [education, setEducation] = React.useState(null);
  const [contact, setContact] = React.useState(null);


  React.useEffect(() => {
    setMain(mainRef);
    setAbout(aboutRef);
    setAdmission(admissionRef);
    setPricing(pricingRef);
    setEducation(educationRef);
    setContact(contactRef);
  }, [mainRef, aboutRef, admissionRef, pricingRef, educationRef, contactRef]);

  const calculatePosition = (element) => {
    if (element == null) {
      return;
    }
    // console.log(element.current.offsetTop)
    if (
      scrollPosition + 600 >= element.current.offsetTop &&
      scrollPosition + 600 <= element.current.offsetTop + element.current.offsetHeight &&
      scrollPosition + 1250 < document.body.scrollHeight
    ) {
      
      return true;
    } else if (
      element === contact &&
      scrollPosition + 400 >= element.current.offsetTop - 400 &&
      scrollPosition + 400 <= element.current.offsetTop + element.current.offsetHeight + 300
    ) {
      
      return true;
    }

    return false;
  };
  // console.log()
  return (
    <nav  className={(window.innerWidth > 1100) ? (scrollPosition > 130) ? 'nav sticky' : 'nav' :  (scrollPosition > 80) ? 'nav sticky' : 'nav' } >
      <div className="container">
        <ul>
          <li>
            <NavLink
              className={calculatePosition(main) ? 'activeLink' : ''}
              onClick={() => window.scrollTo(0, 0)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              className={calculatePosition(about) ? 'activeLink' : ''}
              onClick={() => about.current.scrollIntoView()}
            >
              О школе
            </NavLink>
          </li>
          <li>
            <NavLink
              className={calculatePosition(pricing) ? 'activeLink' : ''}
              onClick={() => window.scrollTo(0, pricing.current.offsetTop - 250)}
            >
              Стоимость
            </NavLink>
          </li>
          <li>
            <NavLink
              className={calculatePosition(education) ? 'activeLink' : ''}
              onClick={() => education.current.scrollIntoView()}
            >
              Расписание
            </NavLink>
          </li>
          <li>
            <NavLink
              className={calculatePosition(admission) ? 'activeLink' : ''}
              onClick={() => admission.current.scrollIntoView()}
            >
              Поступление
            </NavLink>
          </li>

          <li>
            <NavLink
              className={calculatePosition(contact) ? 'activeLink' : ''}
              onClick={() => contact.current.scrollIntoView()}
            >
              Контакты
            </NavLink>
          </li>
          <img src="logo-3.svg" alt="Территория добра и успеха" width={80} />
          <img
            src="menu.svg"
            width={35}
            height={35}
            id="menu"
            alt="menu"
            onClick={() => {
              menuRef.current.classList.remove('menu-closed');
            }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
