import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatePresence } from 'framer-motion';
import ProjectDetails from './components/ProjectDetails';
import PageTransition from './components/PageTransition';
import HomePage from './pages/Home';
import Cursor from './components/Cursor';

// This is the part that depends on router
const AnimatedRoutes = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  return (
    <>
    {/* New page renders in the background */}
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      {/* Transition overlay only renders if not the initial mount */}
      <AnimatePresence mode="sync">
        {!isInitialMount.current && <PageTransition key={location.pathname} />}
      </AnimatePresence>
  </>
  );
};

const App = () => {
  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
       <Cursor/>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;