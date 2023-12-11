import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NavigationPage from './NavigatePage';
import ModelPage from './ModelPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category" element={<NavigationPage />} />
        <Route path="/:category/models" element={<ModelPage />} />
      </Routes>
    </Router>
  );
};

export default App;
