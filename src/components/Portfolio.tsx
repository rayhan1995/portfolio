import React, { useState } from 'react';
import { ExternalLink, Github, Star, Download, Play, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const playStoreApps = [
    {
      title: 'QR Code & Barcode Scanner',
      category: 'Tools',
      description: 'Advanced QR Code & Barcode Scanner App With NO Ads',
      image: 'https://play-lh.googleusercontent.com/ud-SU0KiTPfyrul00INNSFWotT6QmDLdmZ5zWUeScBmqFd2q5d5dUxGz14P3k0nh4Q=w480-h960-rw',
      downloads: '1K+',
      rating: 4.8,
      technologies: ['Flutter', 'Firebase','Github'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.technoob.qrcode',
      features: ['QR Scan', 'Barcode Scan', 'Call to Action']
    },
    {
      title: 'Bangladesh Television | BTV',
      category: 'Entertainment',
      description: 'Live Stream of Btv, Btv World, Sangsad, Btv Chattogram',
      image: 'https://play-lh.googleusercontent.com/jn12e7Nlat38L1l9B4z7bT57hW7_-KqMOzJ67q-yIRMumZjUNJjZClVjznfMkbVrDLBT=w480-h960-rw',
      downloads: '100K+',
      rating: 3.8,
      technologies: ['Flutter', 'Android', 'IOS'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.btv.livetv',
      features: ['Live Tv']
    },
    {
      title: 'ExpenseWise',
      category: 'Finance',
      description: 'Smart expense tracking with automatic categorization',
      image: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: '100K+',
      rating: 4.7,
      technologies: ['Flutter', 'Machine Learning', 'Banking APIs'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.expensewise',
      features: ['Auto Categorization', 'Budget Alerts', 'Expense Reports']
    }
  ];

  const webProjects = [
    {
      title: 'ECommerce Platform',
      category: 'E-Commerce',
      description: 'Full-featured online marketplace with multi-vendor support',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Stripe'],
      liveUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      features: ['Multi-vendor', 'Payment Gateway', 'Admin Dashboard', 'Mobile Responsive']
    },
    {
      title: 'Learning Management System',
      category: 'Education',
      description: 'Modern LMS with interactive courses and progress tracking',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'WebRTC', 'AWS'],
      liveUrl: 'https://demo-lms.example.com',
      githubUrl: 'https://github.com/yourusername/lms-platform',
      features: ['Video Streaming', 'Interactive Quizzes', 'Progress Analytics', 'Certificates']
    },
    {
      title: 'Real Estate Portal',
      category: 'Real Estate',
      description: 'Comprehensive property listing platform with virtual tours',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Maps API', 'Image Processing'],
      liveUrl: 'https://demo-realestate.example.com',
      githubUrl: 'https://github.com/yourusername/realestate-portal',
      features: ['Virtual Tours', 'Advanced Search', 'Agent Portal', 'Mobile App']
    }
  ];

  const allProjects = [
    ...playStoreApps.map(app => ({ ...app, type: 'mobile' })),
    ...webProjects.map(project => ({ ...project, type: 'web' }))
  ];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === activeFilter);

  // Function to handle external link clicks
  const handleExternalLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio Showcase</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A collection of mobile applications and web projects that demonstrate 
              technical expertise and creative problem-solving
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'mobile', label: 'Mobile Apps' },
                { key: 'web', label: 'Web Projects' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 shadow-neumorphic hover:shadow-neumorphic-inset'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-100 rounded-3xl overflow-hidden shadow-neumorphic hover:shadow-neumorphic-large transition-all duration-500 transform hover:-translate-y-2 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === 'mobile' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {project.type === 'mobile' ? 'Mobile App' : 'Web Project'}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    {project.type === 'mobile' ? (
                      <button 
                        onClick={() => handleExternalLink(project.playStoreUrl)}
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer"
                        title="View on Play Store"
                      >
                        <Download size={16} className="text-gray-700" />
                      </button>
                    ) : (
                      <>
                        <button 
                          onClick={() => handleExternalLink(project.liveUrl)}
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} className="text-gray-700" />
                        </button>
                        <button 
                          onClick={() => handleExternalLink(project.githubUrl)}
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 cursor-pointer"
                          title="View Code"
                        >
                          <Github size={16} className="text-gray-700" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
                      <p className="text-blue-600 text-sm font-medium">{project.category}</p>
                    </div>
                    {project.type === 'mobile' && project.rating && (
                      <div className="flex items-center space-x-1 bg-gray-200 shadow-neumorphic-inset px-2 py-1 rounded-full">
                        <Star size={12} className="text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold">{project.rating}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Downloads/Stats for Mobile Apps */}
                  {project.type === 'mobile' && project.downloads && (
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Download size={14} />
                        <span>{project.downloads} downloads</span>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-200 shadow-neumorphic-inset px-2 py-1 rounded-full text-xs text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.type === 'mobile' ? (
                      <button 
                        onClick={() => handleExternalLink(project.playStoreUrl)}
                        className="flex-1 bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-50"
                      >
                        <Play size={14} />
                        <span>View on Play Store</span>
                      </button>
                    ) : (
                      <>
                        <button 
                          onClick={() => handleExternalLink(project.liveUrl)}
                          className="flex-1 bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-50"
                        >
                          <Eye size={14} />
                          <span>Live Demo</span>
                        </button>
                        <button 
                          onClick={() => handleExternalLink(project.githubUrl)}
                          className="bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-all duration-300 cursor-pointer hover:bg-gray-50"
                          title="View Source Code"
                        >
                          <Github size={14} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gray-100 rounded-3xl p-12 shadow-neumorphic-large">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Collaborating?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your ideas to life with innovative mobile and web solutions.
              </p>
              <button 
                onClick={() => {
                  // You can replace this with your contact form or email
                  window.location.href = 'mailto:your-email@example.com?subject=Project Collaboration';
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;