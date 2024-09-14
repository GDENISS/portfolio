import React from 'react';
import './Home.css';
import image from './images/profile.png';

const Home = () => {
    return (
        <div>
            <div className="home" id="home">
          
                <div className="profile-pic-container">
                    <img src={image} alt="Profile" className="profile-pic" />
                </div>
                <div className="intro">
                    <h2>Hi</h2>
                    <h2>THERE</h2>
                    <h2>I AM MWANGI</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
