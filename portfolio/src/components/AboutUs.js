import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAfrica,
  faCode,
  faMapMarkedAlt,
  faSatellite,
} from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <h2>ABOUT ME</h2>
      <div className="about-content">

        {/* GIS & Spatial Analysis */}
        <div className="about-section">
          <FontAwesomeIcon icon={faGlobeAfrica} className="icon" />
          <h3>Geospatial Information Systems (GIS)</h3>
          <p>
            I am a passionate <strong>Geomatics and GIS specialist</strong> with a strong focus on
            leveraging geospatial technology to address urban, environmental, and societal challenges.
            Currently pursuing a <strong>B.Sc. in Geomatics Engineering and Geospatial Information Systems</strong> at
            Dedan Kimathi University of Technology, I possess hands-on experience in
            <strong> spatial analysis, cartography, geodatabase design,</strong> and
            <strong> web-based GIS development</strong>.
          </p>
        </div>

        {/* Remote Sensing */}
        <div className="about-section">
          <FontAwesomeIcon icon={faSatellite} className="icon" />
          <h3>Remote Sensing & Earth Observation</h3>
          <p>
            I am skilled in processing and analyzing satellite imagery from sources such as
            <strong> Landsat, Sentinel,</strong> and <strong>MODIS</strong> for applications in
            environmental monitoring, urban change detection, and vegetation health assessment.
            My expertise extends to <strong>Google Earth Engine</strong> and
            <strong> Python-based image analysis</strong> for extracting meaningful geospatial insights.
          </p>
        </div>

        {/* Spatial Programming */}
        <div className="about-section">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Geospatial Programming & Web Development</h3>
          <p>
            I develop interactive and data-driven spatial applications using
            <strong> React, Node.js, and GeoDjango</strong>. My programming background includes
            <strong> Python, JavaScript, and R,</strong> which I use for building analytical tools,
            automating workflows, and integrating APIs with mapping platforms such as
            <strong> Leaflet</strong> and <strong>Mapbox</strong>.
          </p>
        </div>

        {/* Surveying & Geospatial Tools */}
        <div className="about-section">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
          <h3>Surveying & Geospatial Tools</h3>
          <p>
            Proficient in <strong>Civil 3D, ArcGIS Pro, QGIS,</strong> and <strong>Agisoft Metashape</strong>,
            I apply advanced surveying and photogrammetry techniques to achieve
            high-precision data collection, mapping, and modeling outcomes.
            I am also experienced in <strong>GNSS/GPS field data acquisition</strong> and
            <strong> UAV photogrammetry</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
