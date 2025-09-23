import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectShowcase from './components/ProjectShowcase';
import FigmaProjectDetail from './components/FigmaProjectDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProjectShowcase />} />
          <Route path="/figma/:projectId" element={<FigmaProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
