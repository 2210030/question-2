import React from 'react';
import { useParams } from 'react-router-dom';

const NavigatePage = () => {
  const { category } = useParams();

  let bgColor;
  switch (category) {
    case 'flowers':
      bgColor = 'blue';
      break;
    case 'trees':
      bgColor = 'green';
      break;
    case 'cars':
      bgColor = 'red';
      break;
    default:
      bgColor = 'white';
  }

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
    </div>
  );
};

export default NavigatePage;
