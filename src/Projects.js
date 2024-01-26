import React, { useState, useEffect } from 'react';
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaPython, FaLinux, FaSpotify, FaGithub } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si'; // Additional libraries for specific icons


const GitHubProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">
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
  const selectedRepos = ['drum-machine', 'interview-questions', 'todo', 'meal-planner-app']; // Replace with your actual repo names


  useEffect(() => {
    fetch('https://api.github.com/users/brandonmcmaster/repos')
      .then(response => response.json())
      .then(data => {
        // Filter projects based on the selected repositories
        const filteredProjects = data.filter(project => selectedRepos.includes(project.name));
        setProjects(filteredProjects);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="my-10">
      <div className="text-center p-5">
      <h2 className="text-4xl font-bold inline-flex items-center">
          <FaSpotify className="mr-2" /> My Music <FaSpotify className="ml-2" />
        </h2>
        <br></br>
        <h3>These are songd that I have written, produced, and performed on.</h3>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Spotify Playlists */}
        <iframe 
  style={{ borderRadius: "12px" }} 
  src="https://open.spotify.com/embed/playlist/0nSPK6FtcqF2dWxrCkxNoi?utm_source=generator&theme=0" 
  width="40%" 
  height="380" 
  frameBorder="0" 
  allowFullScreen="" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy">
</iframe>
{/* Add more Spotify players */}
      </div>
<br></br>
      <p className="text-center p-5">These are some of music videos that I have been a part of!</p>
<br></br>
      <div className="flex flex-wrap justify-center">
        {/* YouTube Videos */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/qHeh6RofFdU?si=J7YV3xOMAq7WSs14" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        {/* Add more YouTube iframes */}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* YouTube Videos */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/Eg8-JMSV9aY?si=Vdbkm_NhJBAy4KTA" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        {/* Add more YouTube iframes */}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* YouTube Videos */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/poZLiypLJzQ?si=i14X0ybNrhMkeDPH" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        {/* Add more YouTube iframes */}
      </div>

      

      <div className="p-5">
        {/* GitHub Projects */}
     <div className="text-center p-5">
     <h3 className="text-2xl font-semibold inline-flex items-center">
            <FaGithub className="mr-2" /> GitHub Projects <FaGithub className="ml-2" />
          </h3>
        <p className="mb-4">These are just a few of my projects on GitHub. If you want to view my GitHub profile...</p>
        
        {/* Button linking to GitHub profile */}
        <a href="https://github.com/brandonmcmaster" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click here!
        </a>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {projects.map(project => (
              <GitHubProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>

      <div className="text-center p-5">
          <h3 className="text-2xl font-semibold mb-4">Want to get in touch?</h3>
          <br></br>
          <a href="contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact me!
          </a>
        </div>

      <div className="flex justify-center flex-wrap p-5">
        {/* Technology Icons */}
        <FaReact className="h-10 w-10 m-2" />
        <FaVuejs className="h-10 w-10 m-2 text-green-500" />
        <FaHtml5 className="h-10 w-10 m-2 text-orange-500" />
        <FaCss3Alt className="h-10 w-10 m-2 text-blue-500" />
        <FaPython className="h-10 w-10 m-2 text-yellow-400" />
        <FaLinux className="h-10 w-10 m-2 text-white" />
        <SiFirebase className="h-10 w-10 m-2 text-yellow-600" />
        {/* Add more icons or custom images for other technologies */}
      </div>
    </div>
    </div>
  );
};

export default Projects;
