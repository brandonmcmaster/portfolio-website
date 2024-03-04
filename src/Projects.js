import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import Platinum from './assets/platinum.png';
import Nandan from './assets/nandan.png';

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

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedRepos = ['drum-machine', 'interview-questions', 'todo', 'meal-planner-app'];

  useEffect(() => {
    fetch('https://api.github.com/users/brandonmcmaster/repos')
      .then(response => response.json())
      .then(data => {
        const filteredProjects = data.filter(project => selectedRepos.includes(project.name));
        setProjects(filteredProjects);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const websiteScreenshots = [
    {
      url: 'https://platinumon5th.com/',
      imageUrl: Platinum, // Use the actual import for your image here
    },
    {
      url: 'https://indigo-oval-h4fw.squarespace.com/',
      imageUrl: Nandan, // Use the actual import for your image here
    },
    // Add more as needed
  ];

  return (
    <div className="container mx-auto bg-cover bg-center text-white text-center p-20" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/02/19/58/59/240_F_219585941_fa6BJBVucTce3jjJ8Ohj4jwMKMIWHxkm.jpg')`, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="border-2 border-gray-200 rounded-lg p-10" style={{ backdropFilter: 'blur(6px)' }}>
        <h3 className="text-2xl font-semibold inline-flex items-center">
          <FaGithub className="mr-2" /> GitHub Projects <FaGithub className="ml-2" />
        </h3>
        <p className="mb-4">These are just a few of my projects on GitHub. If you want to view my GitHub profile...</p>
        <a href="https://github.com/brandonmcmaster" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View my GitHub profile!
        </a>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
              {projects.map(project => (
                <GitHubProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="my-8">
              {websiteScreenshots.map(({ url, imageUrl }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <img src={imageUrl} alt="Website screenshot" className="w-full h-auto my-4 shadow-lg rounded" />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
