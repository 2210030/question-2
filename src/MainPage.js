import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/flowers">
        <button>Flowers</button>
      </Link>
      <Link to="/trees">
        <button>Trees</button>
      </Link>
      <Link to="/cars">
        <button>Cars</button>
      </Link>
    </div>
  );
};

export default MainPage;
