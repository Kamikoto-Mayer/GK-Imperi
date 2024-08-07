import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../Modal/ModalComponentProject';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  const updateProjectsPerPage = () => {
    if (window.innerWidth <= 480) {
      setProjectsPerPage(4);
    } else if (window.innerWidth <= 768) {
      setProjectsPerPage(4);
    } else if (window.innerWidth <= 1024) {
      setProjectsPerPage(6);
    } else {
      setProjectsPerPage(6);
    }
  };
  

  useEffect(() => {
    fetch('project_photo.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  useEffect(() => {
    updateProjectsPerPage();
    window.addEventListener('resize', updateProjectsPerPage);
    return () => {
      window.removeEventListener('resize', updateProjectsPerPage);
    };
  }, []);

  useEffect(() => {
	if (selectedProject) {
	  document.body.classList.add('no-scroll');
	} else {
	  document.body.classList.remove('no-scroll');
	}
	return () => {
	  document.body.classList.remove('no-scroll');
	};
 }, [selectedProject]);

  const displayedProjects = projects.slice(0, projectsPerPage);

  return (
    <section className="projects" id="projects">
      <div className="container projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="projects__title">Наши проекты</h2>
        </motion.div>
        <motion.div
          className="projects__grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1, staggerChildren: 0.2 },
            },
          }}
        >
          {displayedProjects.map(project => (
            <motion.div
              className="projects__item"
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img className="projects__image" src={project.image} alt={project.title} />
              <div className={`project__info project-info ${hoveredProject === project.id ? 'hovered' : ''}`}>
               	<div className="project-info__title">{project.title}</div>
						<div className="project-info__characteristics">
							<ul className='project-info__list-characteristics'> 
								{project.additionalServices.map((item, index) => (
								<li key={index}>{item}</li>
							))}
							</ul>
						</div>
						<div className='project-info__service service'>
							<ul className='service__list-title'>
								{Object.entries(project.services).map(([key, service]) => (
										<li key={key}>
											{service.title}
										</li>
								))}
							</ul>
							<ul className='service__list-price'>
								{Object.entries(project.services).map(([key, service]) => (
										<li key={key}>
											{service.price}
										</li>
								))}
							</ul>
						</div>
						<div className='project-info__button-wrapper'>
							<button className="project-info__button" onClick={() => setSelectedProject(project)}>Подробнее</button>
						</div>
					</div>
            </motion.div>
          ))}
        </motion.div>
        <div className="projects__more">
          <button className="show-modal" onClick={() => navigate('/projects')}>Ещё</button>
        </div>
      </div>

      {selectedProject && (
        <ModalComponent
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
