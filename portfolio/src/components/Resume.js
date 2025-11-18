import React from 'react';

const Resume = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }} id='resume'>
      <h1 style={{ fontFamily: 'Kumar One, cursive', fontSize: '1.5em' }}>Githinji Mwangi's Resume</h1>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2em' }}>Click the button below to download my resume:</p>
      <a href="https://drive.google.com/file/d/1wa7n2WvVfQ-45H98m1zkm5K0s2_0IyDX/view?usp=sharing" download="Githinji_Mwangi_Resume.pdf">
        <button style={{
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#000000',
          color: 'white',
          border: '2px solid #4CAF50',
          cursor: 'pointer',
          borderRadius: '15px',
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
