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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-white/20 shadow-md backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center font-bold text-xl leading-none tracking-wide font-Orbitron">
            <img src="/portfolio/assets/logo.png" alt="Logo" className="w-12 h-11 mx-1" />
            <span className="text-gray-400">Alter</span>
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
              className="flex items-center gap-2 bg-transparent border-1 border-whiteq
                         hover:bg-white text-white font-semibold
                         hover:text-purple-700 px-4 py-3 transition-all duration-300 "
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
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
              <a href="#projects" className="text-white hover:text-blue-200 transition-colors">Projects</a>
              <a href="#skills" className="text-white hover:text-blue-200 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 hover:bg-white/30 transition-all duration-300 w-fit">
                Lets Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>

    {/* Hero Section */}
    <section
      id="home"
      className="py-20 px-10 bg-black bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat"
    >

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 py-20 text-center text-white">
        <div className="flex items-center justify-center gap-10 flex-wrap px-6 py-6">
          {/* Left Content: Header, Description, CTA */}
          <div className="max-w-xl">
            <h1 className="text-6xl text-left font-extrabold mb-4">
              <span className="text-purple-600">Hello! </span>
                I'm Dominic Martinez
            </h1>
            <p className="text-lg text-white text-left mb-8">
            I'm a <span className="text-purple-500">front-end developer </span> focused on intuitive, user-centered design. 
            I specialize in bringing digital experiences to life with clean, modern code.
            </p>
            
            {/* CTA Buttons */}
            <div className="text-left flex gap-4 mb-4">
              <a
                href="#contact"
                className="bg-transparent border-2 border-purple-500 font-bold 
                            hover:bg-purple-500 text-purple-500
                            hover:text-white px-8 py-3 
                            transition-all duration-300"
              >
                Hire Me
              </a> 
              

              <a
                href="/Martinez-CV.pdf"
                download
                className="flex items-center gap-2 bg-transparent border-2 border-white font-bold
                          hover:bg-white text-white 
                          hover:text-purple-700 px-7 py-3  
                          transition-all duration-300"
              >
                Download CV <MoveRight size={18} />
              </a>

            </div>

            
          </div>

          {/* Right Content: Lottie Animation */}
          <div className="w-95 h-90 md:w-120 md:h-120 pb-20">
            <dotlottie-wc
              src="https://lottie.host/1be8781d-02fe-4aa0-be1b-34370dfc2db7/CDPM6XYAuB.lottie"
              style={{ width: "100%", height: "100%" }}
              speed="1"
              autoplay
              loop
            />
          </div>
        </div>
      </div>
    </section>

    {/* Skills & Services */}
    <section id="skills" className="h-[30vh] w-[100vw] bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-7xl h-full flex items-center">
        <div className="">
          {/* Left: Static Skills Cards */}
          <div className="relative h-full flex items-center order-1">
            {/* Static skill cards */}
            <div className="relative w-full h-full overflow-hidden flex flex-wrap justify-center items-center">
              {[
                { name: "React.js", color: "gray-500", icon: <SiReact className="h-12 w-12 text-white" /> },
                { name: "TailwindCSS", color: "gray-500", icon: <SiTailwindcss className="h-12 w-12 text-white" /> },
                { name: "Bootstrap", color: "gray-500", icon: <SiBootstrap className="h-12 w-12 text-white" /> },
                { name: "HTML", color: "gray-500", icon: <SiHtml5 className="h-12 w-12 text-white" /> },
                { name: "PHP", color: "gray-500", icon: <SiPhp className="h-12 w-12 text-white" /> },
                { name: "SQL", color: "gray-500", icon: <SiMysql className="h-12 w-12 text-white" /> }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="w-52 h-32 bg-black/80 p-4 text-center"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-2 flex items-center justify-center`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>



      {/* Featured Projects */}
      <section 
        id="projects" 
        className="py-20 px-10 bg-black relative overflow-hidden"
      >
        {/* Rotated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/bg.jpg')",
            transform: "rotate(180deg)",
          }}
        />
        
        {/* Content (not rotated) */}
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            
            {/* Left Title Section */}
            <div className="text-left order-1 lg:order-1">
              <h2 className="text-6xl font-extrabold mb-6 text-purple-500 leading-tight">
                My Projects
              </h2>
              <p className="text-xl text-white max-w-md">
                A showcase of my development journey — from modern websites to complex management systems.
              </p>
            </div>
            
            {/* Right Image Layout */}
            <div className="space-y-6 order-2 lg:order-2">
              {/* Top Full Width Project Image */}
              {featuredProjects[0] && (
                <a
                  href={featuredProjects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[6/3] overflow-hidden shadow-lg group border-3 border-white">
                    <img
                      src={featuredProjects[0].image}
                      alt={featuredProjects[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold">{featuredProjects[0].title}</h3>
                      <p className="text-blue-200">{featuredProjects[0].subtitle}</p>
                    </div>
                  </div>
                </a>
              )}

              {/* Bottom Two Stacked Smaller Project Images */}
              <div className="grid sm:grid-cols-2 gap-6">
                {featuredProjects.slice(1, 3).map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[6/3] overflow-hidden shadow-md group border-3 border-white">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                        <h4 className="text-xl font-semibold">{project.title}</h4>
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
              className="bg-transparent border-2 border-purple-500 font-bold 
                          hover:bg-purple-500 text-purple-500
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