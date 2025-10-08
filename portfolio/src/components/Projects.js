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
      github: 'https://github.com/GDENISS/Echoes-of-Heritage',
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
    {
      title: 'DLT Hub',
      icon: faLaptopCode,
      description:
        'An open-source Python tool for automating ETL pipelines, offering easy data extraction, transformation, and loading with schema detection, incremental updates, and version control.',
      colab: 'https://colab.research.google.com/drive/1lA5NCliaLsOX19EqmLnJ6hvdxVi2evCZ',
      tech: ['Python','jupyter'],
    },
    {
      title: 'Mask Generation',
      icon: faLaptopCode,
      description:
        'Creates labeled masks from satellite imagery to identify features like water, vegetation, and urban areas for model training and accurate land cover analysis.',
      colab: 'https://colab.research.google.com/drive/12ajmaDnEzx3utqEO3DAF_oDLNpphMA-p',
      tech: ['Python','jupyter'],
    },
    {
      title: 'X Scraping',
      icon: faLaptopCode,
      description:
        'Collects and analyzes public data from X to study trends, opinions, and user behavior using Python tools like Tweepy and Pandas for sentiment and engagement analysis.',
      colab: 'https://colab.research.google.com/drive/1k-1RpDXA5H9J_3cchQammS3BSPs0IcMo',
      tech: ['Python','jupyter'],
    },
    {
      title: 'Image Segmentation',
      icon: faLaptopCode,
      description:
        'Applies machine learning to divide satellite imagery into regions revealing land cover types like vegetation, water, and urban areas for improved environmental monitoring.',
      colab: 'https://colab.research.google.com/drive/16pkRpBx5e7VjBnWe7k2uT34HrembZ6OI',
      tech: ['Python','jupyter'],
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

              {p.github && (
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
              )}

              {p.colab && (
                <a
                  href={p.colab}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Colab{' '}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="link-icon"
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
