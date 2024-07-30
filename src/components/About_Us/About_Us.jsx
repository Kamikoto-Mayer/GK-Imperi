import React from "react";
import "./About_Us.css";

import img1 from '../../img/about_us/about_us_img_1.png';
import img2 from '../../img/about_us/about_us_img_2.png';

export default function About_Us() {
	return (
		<section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2>О нас</h2>
            <p>
				Группа компаний "Империя” - Ваш надежный партнер в мире строительства, ремонта и недвижимости. Мы предлагаем полный комплекс услуг под ключ - от проектирования и строительства до дизайнерского ремонта и продажи готовых объектов.
            </p>
            <div className="about__stats">
              <h3>85%</h3>
              <p>Счастливых клиентов</p>
            </div>
          </div>
          <div className="about__images">
            <img src={img1} alt="Building 1" className="about__image"/>
            <img src={img2} alt="Building 2" className="about__image"/>
          </div>
        </div>
      </div>
    </section>
	);
}