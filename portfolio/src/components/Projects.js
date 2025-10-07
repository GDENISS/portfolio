import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faSatellite,
  faGlobeAfrica,
  faLaptopCode,
  faDatabase,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Geospatial Protest Risk Analysis System',
      icon: faGlobeAfrica,
      description:
        'An interactive Web GIS platform analyzing protest risk patterns in Nairobi County using spatial statistics, GeoDjango, and React-based visualization dashboards.',
      github: 'https://github.com/GDENISS/Protest_Manager', 
    },

    {
      title: 'Global Data Tracker',
      icon: faSatellite,
      description:
        'The COVID-19 Global Data Tracker is a Python-based data analysis project that dives into global COVID-19 trends using the Our World in Data dataset. It processes and visualizes data on cases, deaths, and vaccinations across countries, delivering insights through charts and maps. Perfect for data enthusiasts, researchers, or anyone curious about pandemic trends, this project showcases data cleaning, exploratory data analysis (EDA), and visualization using Python.',
      github: 'https://github.com/GDENISS/Global_data_tracker_project',
    },
    {
      title: 'Echoes of Heritage – Cultural Storytelling Platform',
      icon: faLaptopCode,
      description:
        'A full-stack storytelling platform that preserves and shares African cultural narratives. Includes user authentication, media uploads, and dynamic story feeds.',
      github: 'https://github.com/GDENISS/Protest_Manager',
    },
    {
      title: 'Machine learning and Deeplearning',
      icon: faMapMarkedAlt,
      description:
        'I have worked on projects integrating GIS, and web technologies from processing satellite imagery with deep learning to developing interactive AI tools using Gradio. i am experienced in model training and deployment with TensorFlow and PyTorch, exploring large language models, and experimenting with generative AI for content creation. These projects reflect my focus on applying data driven and geospatial intelligence to solve real world challenges.',
      github: 'https://github.com/GDENISS/DeepWorks',
    },
    {
      title: 'Geospatial Developers Website',
      icon: faDatabase,
      description:
        'Developed a full stack web appplication for the geospatial developers club at Dedan Kimathi University that is scalable and allows them to clearly identify themselves ass one og the most innoviaative club within the uiversity',
      github: 'https://github.com/GDENISS/THE-GTM-WEBSITE-PROJECT',
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <FontAwesomeIcon icon={project.icon} className="project-icon" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
