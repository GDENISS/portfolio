import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCode, FaDatabase, FaGlobe, FaMicrochip, FaUsers } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'Programming',
      icon: <FaCode />,
      description: 'Proficient in Python, React and R.',
      proficiency: 90,
    },
    {
      title: 'Software Proficiency',
      icon: <FaDatabase />,
      description: 'Experienced with IDEs, Civil 3d, Arcgis Pro, Quantum gis(QGIS) and Agisoft.',
      proficiency: 85,
    },
    {
      title: 'GIS & Remote Sensing',
      icon: <FaGlobe />,
      description: 'Skilled in GIS software, satellite imagery, and geospatial data analysis.',
      proficiency: 80,
    },
    {
      title: 'Technical Skills',
      icon: <FaMicrochip />,
      description: 'Knowledgeable in cloud services like Google earth engine,machine learning and datascience.',
      proficiency: 75,
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      description: 'Excellent communication, teamwork, problem-solving, time management and adaptability.',
      proficiency: 95,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="skills-container" id='skills'>
      <h1>My Skills</h1>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} variant="black" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
