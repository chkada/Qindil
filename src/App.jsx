import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load other components
const Students = React.lazy(() => import('./pages/Students'));
const Teachers = React.lazy(() => import('./pages/Teachers'));
const Admin = React.lazy(() => import('./pages/Admin'));
const TeacherDashboard = React.lazy(() => import('./pages/TeacherDashboard'));
const ClassView = React.lazy(() => import('./pages/ClassView'));

const Layout = ({ children }) => (
  <div className="app-container">
    <Navbar />
    <main className="main-content">
      {children}
    </main>
  </div>
);

const App = () => (
  <Router>
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student/dashboard" element={<Students />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/teacher/classes/:id" element={<ClassView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </Router>
);

export default App;