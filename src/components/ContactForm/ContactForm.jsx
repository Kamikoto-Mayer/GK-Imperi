import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://dentasher7.temp.swtest.ru/send-message', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="contact-form-container" id='contact-form'>
      {submitted ? (
        <div className="success-message">Сообщение отправленно!</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Написать нам</h2>
          <label>
            Имя:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Сообщение:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
