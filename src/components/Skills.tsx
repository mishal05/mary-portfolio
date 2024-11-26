import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, BarChart, Terminal } from 'lucide-react';
// import {Git} from 'lucid-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Django', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Jupyter Notebook', level: 80 }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto py-12"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-indigo-600">{category.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h2>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                      className="bg-indigo-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <BarChart className="h-6 w-6 text-indigo-600" />
          Key Strengths
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            'Problem Solving',
            'Team Collaboration',
            'Quick Learning',
            'Attention to Detail',
            'Project Management',
            'Technical Documentation'
          ].map((strength, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 rounded-lg p-3 text-center text-indigo-600 font-medium"
            >
              {strength}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;