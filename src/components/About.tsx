import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Star } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A passionate Information Technology graduate with a dynamic approach to technology and innovation.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Mary Mishal Francis
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            I'm a technology enthusiast with a keen interest in full-stack development
            and data analytics. My journey in tech has equipped me with a diverse skill set 
            and a problem-solving mindset that drives innovation.
          </p>
          <div className="flex justify-center items-center gap-2 text-indigo-600">
            <GraduationCap className="h-6 w-6" />
            <span className="text-lg font-medium">Class of 2024</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3 border-b pb-2">
              <Award className="h-6 w-6 text-indigo-600" />
              Education
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl text-gray-900 mb-2">Bachelor's in Information Technology</h4>
              <p className="text-gray-600 mb-1">Rajagiri School of Engineering and Technology</p>
              <p className="text-gray-500 mb-2">2020 - 2024</p>
              <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full inline-block">
                CGPA: 7.71
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3 border-b pb-2">
              <Code className="h-6 w-6 text-indigo-600" />
              Technical Background
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-gray-600 mb-4 font-medium">
                Specialized Skills:
              </p>
              <ul className="space-y-2">
                {[
                  'Web Development (React, Django)',
                  'Database Management (SQL)',
                  'Data Visualization (Power BI)',
                  'Version Control (Git)'
                ].map((skill, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <Star className="h-4 w-4 text-indigo-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Professional Interests
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Full Stack Development',
              description: 'Crafting end-to-end web applications with cutting-edge technologies',
              icon: Code
            },
            {
              title: 'AI & Machine Learning',
              description: 'Diving deep into computer vision and intelligent systems',
              icon: Award
            },
            {
              title: 'Data Analytics',
              description: 'Transforming raw data into meaningful insights and visualizations',
              icon: Star
            }
          ].map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all group"
            >
              <div className="mb-4 flex justify-center">
                <interest.icon className="h-10 w-10 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-2">{interest.title}</h4>
              <p className="text-gray-600">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;