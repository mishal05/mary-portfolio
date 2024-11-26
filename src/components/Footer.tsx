import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mary Mishal Francis</h3>
            <p className="text-gray-600">
              Information Technology Graduate
              <br />
              Full Stack Developer | Data Analyst
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="text-gray-600 hover:text-indigo-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 hover:text-indigo-600">
                  Skills
                </a>
              </li>
              <li>
                <a href="/certifications" className="text-gray-600 hover:text-indigo-600">
                  Certifications
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mishal05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/marymishalfrancis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:marymishalfrancis@gmail.com"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mary Mishal Francis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;