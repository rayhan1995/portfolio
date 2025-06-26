import React from 'react';
import { Code, Smartphone, Globe, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Smartphone, title: 'Mobile Development', desc: 'Flutter & Android' },
    { icon: Globe, title: 'Web Development', desc: 'Laravel & Vue.js' },
    { icon: Code, title: 'Full-Stack', desc: 'End-to-end Solutions' },
    { icon: Briefcase, title: 'ICT Consulting', desc: 'Tech Strategy' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-16">
            <div className="inline-block mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 shadow-neumorphic-large overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
              John Smith
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-6 space-y-2">
              <p>Full-Stack Developer • ICT Specialist • Tech Entrepreneur</p>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Passionate about creating innovative digital solutions that bridge the gap between 
              cutting-edge technology and real-world business needs. With expertise spanning mobile 
              and web development, I transform complex ideas into elegant, scalable applications.
            </p>
            
            <button className="bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-inset px-8 py-3 rounded-full text-gray-700 transition-all duration-300 transform hover:scale-105">
              Let's Build Something Amazing
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="group bg-gray-100 rounded-2xl p-8 shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full shadow-neumorphic-inset flex items-center justify-center mb-6 group-hover:shadow-neumorphic transition-all duration-300">
                  <skill.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* Bio Section */}
          <div className="mt-16 bg-gray-100 rounded-3xl p-8 md:p-12 shadow-neumorphic-large">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    With over 8 years of experience in software development, I've had the privilege 
                    of working on diverse projects ranging from mobile applications that serve 
                    millions of users to enterprise web solutions that streamline business operations.
                  </p>
                  <p>
                    My entrepreneurial journey began with recognizing the gap between technical 
                    possibilities and business realities. This led me to not just build software, 
                    but to create solutions that truly matter.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-6 shadow-neumorphic-inset">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>🎯 50+ Projects Delivered</li>
                    <li>📱 10M+ App Downloads</li>
                    <li>💼 25+ Happy Clients</li>
                    <li>🚀 5 Years Entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;