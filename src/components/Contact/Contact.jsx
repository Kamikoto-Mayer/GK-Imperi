import React from 'react';
import './Contact.css';

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__header">
          <h2>Контакты</h2>
        </div>
        <div className="contacts__content">
          <div className="contacts__info">
            <h3>Группа компаний "Империя"</h3>
            <p>Адрес: <a href="https://yandex.ru/maps/-/CDfPY8Pz" target="_blank">г. Армавир, Железнодорожная ул. 53А, этаж 1</a></p>
            <p>Телефон: <a href="tel:+7 (909) 461-75-94">+7 (909) 461-75-94</a></p>
            <p>Email: info@imperia.ru</p>
            <p>Рабочие часы:
				<br/>Пн-Пт, 9:00 - 18:00,
				<br/>Сб-Вс, 10:00 - 17:00</p>
          </div>
          <div className="contacts__map">
			 <iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A69a3cf09c06da14420aa6d5f32ee866d9a60affda6b02b19f6ef805f5c6bad1d&amp;source=constructor"
				width="600"
				height="450"
				style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="company-location"
				></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
