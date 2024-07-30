import React, { useEffect, useRef } from 'react';
import './ModalComponent.css';

export default function ModalComponent({ project, onClose }) {
	const modalRef = useRef();

	useEffect(() => {
		const handleKeyDown = (event) => {
		  if (event.key === 'Escape') {
			 onClose();
		  }
		};
  
		document.addEventListener('keydown', handleKeyDown);
  
		return () => {
		  document.removeEventListener('keydown', handleKeyDown);
		};
	 }, [onClose]);
  
	 const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
		  onClose();
		}
	 };

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-content" ref={modalRef}>
        <button className="close" onClick={onClose}>&times;</button>
        <img className="modal-image" src={project.image} alt={project.title} />
        <div className="modal-details">
          <div className="modal-left">
            <h2 className="modal-title">{project.title}</h2>
            <h3 className="modal-subtitle">{project.subtitle}</h3>
            <p className="modal-description">{project.description}</p>
          </div>
          <div className="modal-right">
            <h3 className="services-title">Стоимость услуг</h3>
            <ul className="services-list">
              {Object.entries(project.services).map(([key, service]) => (
                <li key={key}>
                  <span className="service-title">{service.title}</span>
                  <span className="service-price">{service.price}</span>
                </li>
              ))}
            </ul>
            <h3 className="additional-services-title">Дополнительные услуги</h3>
            <ul className="additional-services">
              {project.additionalServices && project.additionalServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
				<a href="https://wa.me/79673111555" className="submit-button">Оставить заявку</a>
          </div>
        </div>
      </div>
    </div>
  );
}