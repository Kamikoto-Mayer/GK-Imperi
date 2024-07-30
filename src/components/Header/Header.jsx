import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import img from '../../img/header/Логотип белый 1.svg';

const Header = () => {
	const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleShowHome = () => {
	navigate('/');
 };

  return (
    <header className="header" id="header">
      <div className="container-header">
        <div className="header__wrapper">
          <div className='header__wrapper_main'>
            <img src={img} alt="logo" className="title"></img>
            <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#" onClick={handleShowHome}>Главная</a></li>
                <li><a href="#specializations" onClick={toggleMenu}>Наша специализация</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Проекты</a></li>
                <li><a href="#about" onClick={toggleMenu}>О нас</a></li>
					 <li><a href="#contacts" onClick={toggleMenu}>Контакты</a></li>
              </ul>
            </nav>
          </div>
          {/* <div className='header__wrapper_contact'>
            <a className="contact-button" href="#contact-form">Оставить заявку</a>
          </div> */}
          <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
