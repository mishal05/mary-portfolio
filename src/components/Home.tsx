import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Mary Mishal Francis
          </h1>
          
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { 
              icon: <Code className="h-10 w-10 text-indigo-600 mx-auto mb-4" />, 
              title: "Full Stack Development",
              description: "Creating robust web applications with modern technologies"
            },
            { 
              icon: <Database className="h-10 w-10 text-purple-600 mx-auto mb-4" />, 
              title: "Data Analysis",
              description: "Extracting insights from complex datasets"
            },
            { 
              icon: <Server className="h-10 w-10 text-blue-600 mx-auto mb-4" />, 
              title: "IT Solutions",
              description: "Innovative technological problem-solving"
            }
          ].map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            View Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Contact Me
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;