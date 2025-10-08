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
        'An interactive Web GIS platform analyzing protest risk patterns in Nairobi County using spatial statistics, GeoDjango, and React dashboards.',
      github: 'https://github.com/GDENISS/Protest_Manager',
      tech: ['GeoDjango', 'React', 'PostGIS', 'Leaflet'],
    },
    {
      title: 'Global Data Tracker (COVID-19)',
      icon: faSatellite,
      description:
        'A Python-based project exploring COVID-19 global trends (cases, vaccinations, mortality) using data cleaning, EDA, and visualizations.',
      github: 'https://github.com/GDENISS/Global_data_tracker_project',
      tech: ['Pandas', 'Matplotlib', 'Plotly', 'Jupyter'],
    },
    {
      title: 'Echoes of Heritage – Cultural Storytelling',
      icon: faLaptopCode,
      description:
        'A full-stack storytelling platform for African narratives: user authentication, media uploads, and dynamic story feeds.',
      github: 'https://github.com/GDENISS/Echoes-of-Heritage',  // fixed
      tech: ['Node.js', 'React', 'Express', 'MongoDB'],
    },
    {
      title: 'Machine Learning & Deep Learning Works',
      icon: faMapMarkedAlt,
      description:
        'Projects integrating GIS and deep learning: processing satellite imagery, AI tools with Gradio, model training and deployment (TensorFlow, PyTorch).',
      github: 'https://github.com/GDENISS/DeepWorks',
      tech: ['TensorFlow', 'PyTorch', 'Gradio', 'Satellite Imagery'],
    },
    {
      title: 'Geospatial Developers Club Website',
      icon: faDatabase,
      description:
        'Scalable full-stack web app for the Geospatial Developers Club at Dedan Kimathi University, showcasing the club’s identity and projects.',
      github: 'https://github.com/GDENISS/THE-GTM-WEBSITE-PROJECT',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    },

    // Placeholder entries for your Colab projects (fill in name/description/tech/github)
    {
      title: 'Colab Project 1',
      icon: faLaptopCode,
      description: 'Short description of what this project does …',
      github: '#',  // or link to repo or notebook
      tech: ['…'],
    },
    {
      title: 'Colab Project 2',
      icon: faLaptopCode,
      description: 'Short description …',
      github: '#',
      tech: ['…'],
    },
    {
      title: 'Colab Project 3',
      icon: faLaptopCode,
      description: 'Short description …',
      github: '#',
      tech: ['…'],
    },
    {
      title: 'Colab Project 4',
      icon: faLaptopCode,
      description: 'Short description …',
      github: '#',
      tech: ['…'],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="wrapper">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-card">
              <FontAwesomeIcon icon={p.icon} className="project-icon" />
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              {p.tech && (
                <div className="tech-stack">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              )}

              <a
                href={p.github}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub{' '}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="link-icon"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
