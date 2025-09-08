import React, { useState } from "react";
import { Github, Mail, MoveRight, Send, CircleSlash2, Phone, ExternalLink, Eye, Star, Download, Play, Code, Zap, Award, CheckCircle, Menu, X } from "lucide-react";
import { SiReact, SiTailwindcss, SiBootstrap, SiMysql, SiPhp, SiHtml5, SiGithub, SiGmail } from "react-icons/si";
import { FiPhone } from "react-icons/fi"; // Optional: if no SiPhone icon exists


const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const featuredProjects = [
 {
    id: 1,
    title: "Office of Student Affairs Management Information System",
    subtitle: "Raw PHP | Capstone",
    image: "/portfolio/assets/system.png",
    link: "https://github.com/domslaught/modern-portfolio",
  },
  {
    id: 2,
    title: "Modern Website",
    subtitle: "React | Prototype",
    image: "/portfolio/assets/cefi.png",
    link: "https://github.com/domslaught/inventory-system",
  },
  {
    id: 3,
    title: "Inventory System",
    subtitle: "React | Prototype",
    image: "/portfolio/assets/kopi.png",
    link: "https://github.com/domslaught/booking-app",
  },
];


return (
  <div className="min-h-screen bg-white">
    {/* Navigation Bar */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/55 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center font-bold text-xl leading-none tracking-wide font-Orbitron">
            <img src="/portfolio/assets/logo.png" alt="Logo" className="w-12 h-11 mx-1" />
            <span className="text-white">Alter</span>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 font-semibold">
            <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
            <a href="#skills" className="text-white hover:text-blue-200 transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-blue-200 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent border-1 border-white
                         hover:bg-white text-white font-semibold
                         hover:text-indigo-500 px-4 py-3 transition-all duration-300 "
            >
              Let's Talk
              <Send size={18} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
   
       {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
              <a href="#projects" className="text-white hover:text-blue-200 transition-colors">Projects</a>
              <a href="#skills" className="text-white hover:text-blue-200 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>

              {/* Fixed "Let's Talk" Button */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-white
                          hover:bg-white hover:text-indigo-500 text-white font-semibold px-4 py-2 
                          transition-all duration-300"
              >
                Let's Talk
                <Send size={18} />
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>

    {/* Hero Section */}
    <section
      id="home"
      className="relative h-screen pt-20 px-4 sm:px-10 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/portfolio/assets/work.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative container mx-auto max-w-7xl w-full flex items-center justify-center min-h-[85vh]">
        <div className="flex flex-col items-center justify-center text-center max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            <span className="text-indigo-500">Hello! </span>
            I'm Dominic Martinez
          </h1>
          <p className="text-base sm:text-lg text-white mb-8">
            I'm a <span className="text-indigo-500">front-end developer</span> focused on intuitive, user-centered design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 font-bold"
            >
              Hire Me
            </a>
            <a
              href="/portfolio/Martinez.pdf"
              download
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-indigo-500 transition-all duration-300 font-bold flex items-center gap-2"
            >
              Download CV <MoveRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>



    {/* Skills & Services */}
    <section id="skills" className="min-h-[30vh] w-full bg-black relative overflow-hidden py-8 px-4">
      <div className="container mx-auto max-w-7xl h-full flex items-center justify-center border-white">
        {/* Static Skills Cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {[
            { name: "React.js", icon: <SiReact className="h-12 w-12 text-white" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="h-12 w-12 text-white" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="h-12 w-12 text-white" /> },
            { name: "HTML", icon: <SiHtml5 className="h-12 w-12 text-white" /> },
            { name: "PHP", icon: <SiPhp className="h-12 w-12 text-white" /> },
            { name: "SQL", icon: <SiMysql className="h-12 w-12 text-white" /> }
          ].map((skill) => (
            <div
              key={skill.name}
              className="w-40 sm:w-48 h-32 bg-black/80 rounded-md shadow-md hover:scale-105 transition-transform duration-300 p-4 text-center"
            >
              <div className="w-full h-12 flex items-center justify-center mb-2">
                {skill.icon}
              </div>
              <h3 className="font-bold text-white text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section 
      id="projects" 
      className="py-16 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      {/* Rotated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/portfolio/assets/bg1.png')",
          transform: "rotate(180deg)",
          backgroundPosition: "center 5%", // Moves center up
        }}
      />
    
      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          
          {/* Left Title Section */}
          <div className="text-center lg:text-left order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-indigo-500 leading-tight">
              My Projects
            </h2>
            <p className="text-base sm:text-lg text-white max-w-md mx-auto lg:mx-0">
              A showcase of my development journey — from modern websites to complex management systems.
            </p>
          </div>

          {/* Right Image Layout */}
          <div className="space-y-6 order-2">
            {/* Top Project */}
            {featuredProjects[0] && (
              <a
                href={`/projects/${featuredProjects[0].id}`}
                className="block"
              >
                <div className="relative aspect-[6/3] overflow-hidden shadow-lg group border-2 border-white">
                  <img
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">{featuredProjects[0].title}</h3>
                    <p className="text-blue-200 text-sm sm:text-base">{featuredProjects[0].subtitle}</p>
                  </div>
                </div>
              </a>
            )}

            {/* Bottom Two Projects */}
            <div className="grid sm:grid-cols-2 gap-6">
              {featuredProjects.slice(1, 3).map((project) => (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="block"
                >
                  <div className="relative aspect-[6/3] overflow-hidden shadow-md group border-2 border-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-blue-200 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl space-y-16">


        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">


          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Let’s Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/domslaught" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-5 w-5 text-gray-400 hover:text-white fill-current transition-colors cursor-pointer" />
              </a>
              <a href="mailto:domdomriosa@gmail.com">
                <SiGmail className="h-5 w-5 text-gray-400 hover:text-white fill-current transition-colors cursor-pointer" />
              </a>
              <a href="tel:+639914401245">
                <FiPhone className="h-5 w-5 text-gray-400 hover:text-white fill-current transition-colors cursor-pointer" />
              </a>
            </div>
          </div>


          <form
            action="https://formspree.io/f/mnnzbgea"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent border-2 border-indigo-500 font-bold 
                          hover:bg-indigo-500 text-indigo-500
                          hover:text-white px-8 py-3 
                          transition-all duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Dominic Martinez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);
};

export default Portfolio;