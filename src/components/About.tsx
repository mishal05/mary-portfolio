import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start gap-6 mb-8">
          <img
            src="/images/mary-mishal-francis.jpg"
            alt="Mary Mishal Francis"
            className="w-48 h-48 rounded-lg object-cover shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mary Mishal Francis</h2>
            <p className="text-gray-600 mb-4">
              I'm a passionate Information Technology graduate with a keen interest in full-stack development
              and data analytics. My journey in tech has equipped me with a diverse skill set and
              a problem-solving mindset.
            </p>
            <div className="flex items-center gap-2 text-indigo-600">
              <GraduationCap className="h-5 w-5" />
              <span>Class of 2024</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Award className="h-5 w-5 text-indigo-600" />
              Education
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Bachelor's in Information Technology</h4>
              <p className="text-gray-600">Rajagiri School of Engineering and Technology</p>
              <p className="text-gray-500">2020 - 2024</p>
              <p className="text-indigo-600 font-medium">CGPA: 7.71</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-600" />
              Technical Background
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                Specialized in full-stack development with a focus on:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Web Development (React, Django)</li>
                <li>Database Management (SQL)</li>
                <li>Data Visualization (Power BI)</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Interests</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Full Stack Development',
              description: 'Building end-to-end web applications with modern technologies'
            },
            {
              title: 'AI & Machine Learning',
              description: 'Exploring computer vision and deep learning applications'
            },
            {
              title: 'Data Analytics',
              description: 'Creating insightful visualizations and reports using Power BI'
            }
          ].map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <h4 className="font-medium text-gray-900 mb-2">{interest.title}</h4>
              <p className="text-gray-600">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;