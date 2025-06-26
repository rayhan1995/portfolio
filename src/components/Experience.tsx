import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Code, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications serving 100K+ users daily.',
      achievements: [
        'Architected microservices infrastructure reducing load times by 60%',
        'Led team of 5 developers in agile development cycles',
        'Implemented CI/CD pipelines improving deployment efficiency by 80%'
      ],
      technologies: ['Laravel', 'Vue.js', 'AWS', 'Docker', 'MySQL']
    },
    {
      title: 'Mobile App Developer',
      company: 'InnovateMobile',
      location: 'Austin, TX',
      period: '2020 - 2022',
      type: 'Contract',
      description: 'Specialized in Flutter development for cross-platform mobile applications.',
      achievements: [
        'Developed 8 mobile apps with 500K+ combined downloads',
        'Achieved 4.8+ average rating across all published apps',
        'Reduced development time by 40% through reusable component library'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Google Play Console']
    },
    {
      title: 'ICT Consultant & Entrepreneur',
      company: 'SmithTech Consulting',
      location: 'Remote',
      period: '2019 - Present',
      type: 'Self-employed',
      description: 'Providing technical consulting and building digital solutions for small to medium businesses.',
      achievements: [
        'Successfully consulted for 25+ businesses on digital transformation',
        'Generated $500K+ revenue through custom software solutions',
        'Built and sold 2 SaaS products to enterprise clients'
      ],
      technologies: ['Business Strategy', 'Project Management', 'Technical Architecture', 'Client Relations']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of growth, innovation, and impactful contributions to the tech industry
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-blue-300"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full shadow-neumorphic-small flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-gray-100 rounded-2xl p-8 shadow-neumorphic hover:shadow-neumorphic-large transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <span className="bg-gray-200 shadow-neumorphic-inset px-3 py-1 rounded-full text-sm text-gray-600">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Trophy size={16} className="mr-2 text-yellow-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Code size={16} className="mr-2 text-green-600" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-200 shadow-neumorphic-inset px-3 py-1 rounded-full text-xs text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '25+' }
            {/*  { label: 'App Downloads', value: '10M+' } */}
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center bg-gray-100 rounded-2xl p-8 shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;