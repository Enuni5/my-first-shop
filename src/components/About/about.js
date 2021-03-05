import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <h1>Estos son algunos recursos que usamos para hacer esta web:</h1>
      <p>Imágenes de los pecados: https://www.deviantart.com/j-witless</p>
      <div>
        Iconos hechos por{' '}
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>{' '}
        desde{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default About;
