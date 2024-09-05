import React from 'react';

const Resume = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }} id='resume'>
      <h1 style={{ fontFamily: 'Kumar One, cursive', fontSize: '2.5em' }}>Githinji Mwangi's Resume</h1>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2em' }}>Click the button below to download my resume:</p>
      <a href="/Githinji_Mwangi_Resume.pdf" download="Githinji_Mwangi_Resume.pdf">
        <button style={{
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: '2px solid #4CAF50',
          cursor: 'pointer',
          borderRadius: '5px',
          transition: 'background-color 0.3s, border-color 0.3s',
          fontFamily: 'Arial, sans-serif'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}>
          Download Resume
        </button>
      </a>
    </div>
  );
}

export default Resume;
