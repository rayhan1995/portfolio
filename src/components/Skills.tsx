import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Settings, 
  Code,
  Layers,
  Shield,
  Zap,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-green-600',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Android Native', level: 90 },
        { name: 'iOS Development', level: 75 },
        { name: 'React Native', level: 80 }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'text-blue-600',
      skills: [
        { name: 'Laravel', level: 95 },
        { name: 'Vue.js', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'text-purple-600',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      color: 'text-orange-600',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Firebase', level: 90 },
        { name: 'Docker', level: 85 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      color: 'text-red-600',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Nginx', level: 75 }
      ]
    },
    {
      title: 'Architecture & Design',
      icon: Layers,
      color: 'text-indigo-600',
      skills: [
        { name: 'System Design', level: 90 },
        { name: 'Microservices', level: 85 },
        { name: 'API Design', level: 95 },
        { name: 'UI/UX Design', level: 75 }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Shield
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2022',
      icon: Cloud
    },
    {
      title: 'Flutter Certified Developer',
      issuer: 'Google',
      year: '2021',
      icon: Code
    },
    {
      title: 'Laravel Certified',
      issuer: 'Laravel',
      year: '2020',
      icon: Zap
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set built through years of hands-on experience 
              and continuous learning in cutting-edge technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-gray-100 rounded-3xl p-8 shadow-neumorphic hover:shadow-neumorphic-large transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gray-100 rounded-full shadow-neumorphic-inset flex items-center justify-center mr-4`}>
                    <category.icon className={`${category.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 shadow-neumorphic-inset">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 delay-300`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}

          {/*
          <div className="bg-gray-100 rounded-3xl p-12 shadow-neumorphic-large">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-gray-100 rounded-2xl p-6 shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full shadow-neumorphic-inset flex items-center justify-center mx-auto mb-4 group-hover:shadow-neumorphic transition-all duration-300">
                    <cert.icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          */}

          {/* Technologies I Love */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Technologies I Love Working With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Flutter', 'Laravel', 'Vue.js', 'React', 'Node.js', 
                'AWS', 'Docker', 'MySQL', 'Firebase', 'Git',
                'TypeScript', 'PHP', 'Dart', 'JavaScript', 'Linux', 'Nginx'
              ].map((tech) => (
                <span 
                  key={tech}
                  className="bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-6 py-3 rounded-full text-gray-700 transition-all duration-300 transform hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-neumorphic">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-neumorphic">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>

             {/*

            <div className="bg-gray-100 rounded-2xl p-8 shadow-neumorphic">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Professional Certifications</div>
            </div>
            */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;