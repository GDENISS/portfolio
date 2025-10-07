import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCode, FaDatabase, FaGlobeAfrica, FaSatellite, FaMicrochip, FaUsers } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'Programming & Development',
      icon: <FaCode />,
      description: 'Proficient in Python, JavaScript (React, Node.js), and R for spatial analytics, data processing, and geospatial web app development.',
      proficiency: 90,
    },
    {
      title: 'GIS & Spatial Analysis',
      icon: <FaGlobeAfrica />,
      description: 'Experienced in ArcGIS Pro, QGIS, and GeoServer for spatial data management, map creation, and advanced spatial analysis including buffer, overlay, and hotspot modeling.',
      proficiency: 92,
    },
    {
      title: 'Remote Sensing & Earth Observation',
      icon: <FaSatellite />,
      description: 'Skilled in processing and interpreting satellite imagery (Landsat, Sentinel, MODIS) for environmental and urban analysis using Google Earth Engine and SNAP.',
      proficiency: 88,
    },
    {
      title: 'Spatial Databases & Geospatial Systems',
      icon: <FaDatabase />,
      description: 'Knowledgeable in PostgreSQL/PostGIS, MongoDB, and GeoDjango for building and managing geospatial databases integrated with web and GIS platforms.',
      proficiency: 85,
    },
    {
      title: 'Machine Learning & Spatial Intelligence',
      icon: <FaMicrochip />,
      description: 'Experienced in applying machine learning models for spatial prediction, land use classification, and protest risk modeling using scikit-learn and TensorFlow.',
      proficiency: 80,
    },
    {
      title: 'Professional & Soft Skills',
      icon: <FaUsers />,
      description: 'Strong in leadership, teamwork, communication, problem-solving, and project management in multidisciplinary geospatial environments.',
      proficiency: 95,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="skills-container" id="skills">
      <h1>My Skills</h1>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} variant="dark" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
