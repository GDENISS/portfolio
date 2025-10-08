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

    
    {
      title: 'dlt_hub',
      icon: faLaptopCode,
      description: 'DLT Hub is an open-source Python tool for automating ETL pipelines, offering easy data extraction, transformation, and loading with schema detection, incremental updates, and version control for scalable, reproducible workflows.',
      colab: 'https://drive.google.com/file/d/1lA5NCliaLsOX19EqmLnJ6hvdxVi2evCZ/view?usp=drive_link',  // or link to repo or notebook
      tech: ['python'],
    },
    {
      title: 'Image analysis',
      icon: faLaptopCode,
      description: 'The Mask Generation Project creates labeled masks from satellite imagery to identify features like water, vegetation, and urban areas. These masks train machine learning models for accurate land cover classification, change detection, and object segmentation in remote sensing.',
      colab: 'https://colab.research.google.com/drive/12ajmaDnEzx3utqEO3DAF_oDLNpphMA-p?usp=drive_link',
      tech: ['…'],
    },
    {
      title: 'X scraping',
      icon: faLaptopCode,
      description: 'The X Scraping Project collects and analyzes public data from the X platform to study trends, opinions, and user behavior. Using Python tools like Tweepy and Pandas, it extracts and visualizes tweets and hashtags to reveal patterns in sentiment, topics, and engagement.',
      colab: 'https://colab.research.google.com/drive/1k-1RpDXA5H9J_3cchQammS3BSPs0IcMo?usp=drive_link',
      tech: ['python'],
    },
    {
      title: 'image segmentation',
      icon: faLaptopCode,
      description: 'Short description …',
      colab: 'The Image Segmentation Project applies machine learning to divide satellite imagery into regions that reveal land cover features like vegetation, water, and urban areas. It improves classification accuracy and supports environmental monitoring, urban planning, and disaster management.',
      tech: ['python'],
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
