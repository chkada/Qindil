import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">Welcome to Qindil!</h1>
      <p className="text-gray-700 text-lg mb-8">Empowering learning through games, assignments, and interactive dashboards.</p>
      <div className="space-x-4">
        <Link to="/student/dashboard" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">Students</Link>
        <Link to="/teacher/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Teachers</Link>
        <Link to="/admin" className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800">Admin</Link>
      </div>
    </div>
  );
};

export default LandingPage;