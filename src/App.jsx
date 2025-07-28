import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Admin from './pages/Admin';
import TeacherDashboard from './pages/TeacherDashboard';
import ClassView from './pages/ClassView';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/student/dashboard" element={<Students />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/teacher/classes/:id" element={<ClassView />} />
    </Routes>
  </Router>
);

export default App;