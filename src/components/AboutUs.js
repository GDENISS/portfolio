import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode, faMapMarkerAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <h2>ABOUT ME</h2>
      <div className="about-content">
        <div className="about-section">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <h3>Geospatial Information Systems (GIS)</h3>
          <p>
            I am a dedicated GIS and surveying specialist with a passion for leveraging technology to solve real-world problems. Currently pursuing my studies at Dedan Kimathi University of Technology, I am skilled in remote sensing, geospatial analysis, and programming within the geospatial domain.
          </p>
        </div>
        <div className="about-section">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Web Development</h3>
          <p>
            With experience in creating dynamic web applications, I am committed to delivering high-quality solutions in both academic and professional settings. Whether working on a complex project or leading a team, I am driven by a desire to innovate and create impactful solutions that streamline processes and enhance decision-making.
          </p>
        </div>
        <div className="about-section">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <h3>Surveying Tools</h3>
          <p>
            I am proficient in tools like Civil 3D, ArcGIS, and QGIS for surveying tasks. My technical expertise allows me to deliver accurate and efficient surveying solutions.
          </p>
        </div>
        <div className="about-section">
          <FontAwesomeIcon icon={faFutbol} className="icon" />
          <h3>Sports Analytics & Esports Management</h3>
          <p>
            My interests extend to GIS development, sports analytics, and esports management, where I aim to combine my technical expertise with my passion for sports.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
