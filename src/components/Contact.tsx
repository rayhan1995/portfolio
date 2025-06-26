import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'consultation'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rayhanfx2@gmail.com',
      href: 'mailto:rayhanfx2@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1766561636',
      href: 'tel:+8801766561636'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Zigatola New Road, Dhanmondi, Dhaka-1209',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rayhan1995',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/silence.rayhan.3',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Whether you need a mobile app, web application, 
              or technical consulting, I'm here to help create something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-100 rounded-3xl p-8 shadow-neumorphic-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full shadow-neumorphic-inset flex items-center justify-center mr-4">
                  <MessageCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl shadow-neumorphic-inset focus:shadow-neumorphic-inset-deep transition-all duration-300 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl shadow-neumorphic-inset focus:shadow-neumorphic-inset-deep transition-all duration-300 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl shadow-neumorphic-inset focus:shadow-neumorphic-inset-deep transition-all duration-300 outline-none"
                    >
                      <option value="consultation">Consultation</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="full-stack">Full-Stack Solution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl shadow-neumorphic-inset focus:shadow-neumorphic-inset-deep transition-all duration-300 outline-none"
                      placeholder="Brief project description"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl shadow-neumorphic-inset focus:shadow-neumorphic-inset-deep transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="animate-spin" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gray-100 rounded-3xl p-8 shadow-neumorphic-large">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-gray-100 rounded-2xl shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-full shadow-neumorphic-inset flex items-center justify-center group-hover:shadow-neumorphic transition-all duration-300">
                        <info.icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">{info.label}</p>
                        <p className="text-gray-800 font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-100 rounded-3xl p-8 shadow-neumorphic-large">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-14 h-14 bg-gray-100 rounded-full shadow-neumorphic hover:shadow-neumorphic-inset flex items-center justify-center transition-all duration-300 text-gray-600 ${social.color} transform hover:scale-110`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gray-100 rounded-3xl p-8 shadow-neumorphic-large">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New Projects</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="text-gray-800 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Consultation</span>
                    <span className="text-gray-800 font-medium">Free initial call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              © 2025 Md Rayhan Uddin Bhuyan. Made with ❤️ & React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;