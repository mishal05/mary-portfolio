import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src="/images/mary-mishal-francis.jpg"
          alt="Mary Mishal Francis"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-600"
        />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Mary Mishal Francis
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Information Technology Graduate | Full Stack Developer | Data Analyst
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/mishal05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/marymishalfrancis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:marymishalfrancis@gmail.com"
            className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-transparent hover:bg-indigo-50"
          >
            Contact Me
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Latest Project
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Sign-ify Road Sign Detection System
          </h3>
          <p className="text-gray-600 mb-4">
            An innovative road sign detection system built using YOLO technology on Raspberry Pi
          </p>
          <Link
            to="/projects"
            className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
          >
            Learn more
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;