import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <AboutUs />
      <Projects />
      <Skills />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
