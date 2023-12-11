import React from 'react';

const ModelPage = ({ category }) => {
  const models = {
    flowers: ['Rose', 'Sunflower', 'Tulip'],
    trees: ['Oak', 'Maple', 'Pine'],
    cars: ['Sedan', 'SUV', 'Sports Car'],
  };

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Models</h2>
      <ul>
        {models[category].map((model, index) => (
          <li key={index}>{model}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModelPage;
