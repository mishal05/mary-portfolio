import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Edit } from 'lucide-react';
import useAdminStore from '../store/adminStore';

const Projects = () => {
  const { isAdmin } = useAdminStore();
  const [projects, setProjects] = React.useState([
    {
      id: 1,
      title: 'Sign-ify Road Sign Detection System',
      description: 'An innovative road sign detection system utilizing YOLO technology implemented on Raspberry Pi. The system provides real-time detection and classification of traffic signs.',
      technologies: ['Python', 'YOLO', 'Raspberry Pi', 'OpenCV'],
      image: '/images/Signify.jpg',
      github: 'https://github.com/mishal05/',
      demo: 'https://drive.google.com/file/d/1MD0NFNQItR-NMTk3CYkSoGaT7UlL-YBV/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Student Placement Management System',
      description: 'A comprehensive system for managing student placements, including company details, student profiles, and interview scheduling.',
      technologies: ['Python', 'Django', 'SQLite', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/mishal05/',
      demo: 'https://drive.google.com/file/d/1E0KrWf1wn9wpaGHOenR0LCO-BnxT93MN/view?usp=drive_link'
    }
  ]);

  const handleEdit = (id: number) => {
    // Implementation for editing project details
    console.log('Editing project:', id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto py-12"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        {isAdmin && (
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Add Project
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                {isAdmin && (
                  <button
                    onClick={() => handleEdit(project.id)}
                    className="text-gray-500 hover:text-indigo-600"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                )}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                >
                  <Github className="h-5 w-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;