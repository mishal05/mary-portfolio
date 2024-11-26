import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column for contact info */}
        <div className="space-y-8 bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h2>
          <div className="space-y-6">
            <a
              href="mailto:marymishalfrancis@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 text-lg justify-center"
            >
              <Mail className="h-6 w-6 text-indigo-600" />
              <span>marymishalfrancis@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-700 text-lg justify-center">
              <Phone className="h-6 w-6 text-indigo-600" />
              <span>+91 8943821304</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-lg justify-center">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <span>Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Right column for follow me */}
        <div className="space-y-8 bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Follow Me</h2>
          <div className="space-y-6 text-center">
            <a
              href="https://github.com/mishal05"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 text-lg hover:text-indigo-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marymishalfrancis"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 text-lg hover:text-indigo-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
