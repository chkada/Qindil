import React from 'react';
import { useParams } from 'react-router-dom';

const ClassView = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Class: {id}</h1>
      <p>This is a placeholder view for the selected class.</p>
    </div>
  );
};

export default ClassView;