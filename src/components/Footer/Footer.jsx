import React from 'react';
import './Footer.css';
import img from '../../img/header/Логотип белый 1.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
				<img src={img}></img>
          <p>Группа компаний "Империя" предоставляет полный спектр услуг в области строительства и недвижимости, помогая вам найти и создать идеальное пространство для жизни и работы.</p>
        </div>
        <div className="footer__section">
          <h3><a href='#header'>ГК ИМПЕРИЯ</a></h3>
          <ul>
            <li><a href='#specializations'>Наша специализация</a></li>
            <li><a href='#about'>О компании</a></li>
            <li><a href='#projects'>Проекты</a></li>
            <li><a href='#contact-form'>Контакты</a></li>
          </ul>
        </div>
        <div className="footer__section">
		  	<div className="footer__section-address">
			  <h3>Адрес</h3>
          	<a href="https://yandex.ru/maps/-/CDfPY8Pz" target="_blank">г. Армавир, Железнодорожная ул. 53А, этаж 1</a>
			</div>
			<div className="footer__section-tel">
				<h3>Телефон</h3>
          	<a href="tel:+7 (909) 461-75-94">+7 (909) 461-75-94</a>
			</div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© Copyright 2024 Email: gkimperia.ru</p>
      </div>
    </footer>
  );
};

export default Footer;
