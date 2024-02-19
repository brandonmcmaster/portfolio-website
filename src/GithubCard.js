// GitHubProjectCard.js

import React from 'react';

const GitHubProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{project.name}</div>
        <p className="text-base" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">View on GitHub</a>
      </div>
    </div>
  );
};



export default GitHubCard;
