import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import useAdminStore from '../store/adminStore';

const Certifications = () => {
  const { isAdmin } = useAdminStore();
  const [certifications, setCertifications] = React.useState([
    {
      id: 1,
      title: 'Software Engineer Certification',
      issuer: 'HackerRank',
      date: '25 November 2024',
      description: 'Earned by passing a role-specific certification test covering problem solving, SQL, and REST API skills.',
      credential: 'https://www.hackerrank.com/certificates/ec4c7af29006',
      image: 'https://hrcdn.net/og/default.jpg'
    },
    {
      id: 2,
      title: 'Tata Group Data Visualisation: Empowering Business with Effective Insights',
      issuer: 'Forage',
      date: 'August 2024',
      description: 'Completed a comprehensive job simulation focused on data visualization techniques and best practices.',
      credential: 'https://drive.google.com/file/d/1E2nBHIjESgfx50LRpj4U2BYpZMgbPDqK/view?usp=sharing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Accenture Nordics Developer Virtual Internship',
      issuer: 'Forage',
      date: 'November 2024',
      description: 'Gained hands-on experience in defining technical requirements, scaling infrastructure, reading and debugging code, conducting unit and user acceptance testing, performing security assessments, implementing IAM policies, and advising on data privacy for machine learning algorithms.',
      credential: 'https://drive.google.com/file/d/11PPNoCuQyZs7WL4zQi18JfhPp-Q5grqs/view?usp=sharing',
      image: 'https://a.mktgcdn.com/p/ay2U5iINUpUf_XFYXetVkdpHkt-tYWAo7yLSK-zrkFo/384x384.jpg'
    },
    {
      id: 4,
      title: 'Power BI Workshop',
      issuer: 'TechTip24',
      date: 'August 2024',
      description: ' Developed comprehensive data visualization dashboards for an e-commerce dataset containing over 51,000 entries using Power BI.',
      credential: 'https://drive.google.com/file/d/1Mm7wM4dM9WM2Hw2RdfUlLSAcKF8zy2D2/view?usp=drive_link',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto py-12"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Certifications</h1>
        {isAdmin && (
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Add Certification
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <span className="mr-2">View Credential</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;