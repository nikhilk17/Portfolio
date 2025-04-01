import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import HomePage from './pages/LandingPage/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic routes for projects */}
        <Route path="/projects/:projectId" element={<ProjectDetailsWrapper />} />
      </Routes>
    </Router>
  );
};

// This wrapper handles the params and passes them as props
const ProjectDetailsWrapper = () => {
  // Once Router is set up, we can use router hooks here
  const params = useParams();
  return <ProjectDetails projectId={params.projectId} />;
};

export default AppRouter;
