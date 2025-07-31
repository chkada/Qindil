import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setClasses([
      { id: 'class-a', name: 'Class A', description: 'Introductory Arabic', level: 'Beginner' },
      { id: 'class-b', name: 'Class B', description: 'Intermediate Grammar', level: 'Intermediate' },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-xl"
            onClick={() => navigate(`/teacher/classes/${cls.id}`)}
          >
            <h2 className="text-xl font-semibold">{cls.name}</h2>
            <p className="text-sm text-gray-600">{cls.description}</p>
            <p className="text-sm text-indigo-600">Level: {cls.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;