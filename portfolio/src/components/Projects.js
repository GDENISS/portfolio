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
      title: 'dlt_hub',
      icon: faLaptopCode,
      description: 'DLT Hub (Data Load Tool) is an open-source Python framework that simplifies building and automating data pipelines. It allows developers to easily extract, transform, and load (ETL) data from diverse sources into destinations like databases or cloud storage, with automatic schema detection, incremental loading, and version control. Designed for flexibility, DLT Hub works seamlessly in Jupyter or Colab notebooks, making it ideal for analysts, data engineers, and researchers who want clean, reproducible, and scalable data workflows using pure Python.',
      colab: 'https://drive.google.com/file/d/1lA5NCliaLsOX19EqmLnJ6hvdxVi2evCZ/view?usp=drive_link',  // or link to repo or notebook
      tech: ['python'],
    },
    {
      title: 'Image analysis',
      icon: faLaptopCode,
      description: 'Mask generation in machine learning and remote sensing involves creating binary or labeled masks that identify specific features or regions of interest such as water bodies, vegetation, or urban areas within satellite or aerial imagery. These masks serve as ground truth data during model training, enabling supervised learning algorithms like convolutional neural networks to distinguish between classes based on spectral and spatial patterns. In remote sensing, mask generation is essential for tasks like land cover classification, change detection, and object segmentation, providing precise pixel level labels that improve the accuracy and reliability of geospatial machine learning models.',
      colab: 'https://colab.research.google.com/drive/12ajmaDnEzx3utqEO3DAF_oDLNpphMA-p?usp=drive_link',
      tech: ['…'],
    },
    {
      title: 'X scraping',
      icon: faLaptopCode,
      description: 'A project on X scraping focusing on collecting and analyzing public data from the X platform to study trends, opinions, or user behavior. It involves using Python tools like Tweepy or snscrape to gather tweets, hashtags, and engagement data, then cleaning and analyzing it with libraries such as Pandas and Matplotlib. The project helps uncover insights like sentiment, topic trends, or activity patterns, supporting research and decision making in areas such as social analysis, event monitoring, and public communication.',
      colab: 'https://colab.research.google.com/drive/1k-1RpDXA5H9J_3cchQammS3BSPs0IcMo?usp=drive_link',
      tech: ['python'],
    },
    {
      title: 'image segmentation',
      icon: faLaptopCode,
      description: 'Short description …',
      colab: 'The Image Segmentation Project uses machine learning to divide satellite images into distinct regions, identifying features like water, vegetation, and urban areas. It enhances land cover analysis and supports applications in urban planning, environmental monitoring, and disaster management.',
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
