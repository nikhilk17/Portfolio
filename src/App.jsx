import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/LandingPage/Home';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
