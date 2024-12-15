import { useState, useEffect } from "react";

import fileExplorer from "./assets/icons/fileExplorer.svg";
import extensions from "./assets/icons/extensions.svg";
import git from "./assets/icons/git.svg";
import html5 from "./assets/icons/html5.svg";
import javascript from "./assets/icons/javascript.svg";
import nodejs from "./assets/icons/nodejs.svg";
import react from "./assets/icons/react.svg";
import contact from "./assets/icons/contact.svg";

import "./App.css";

const skillCategories = {
  "Programming Languages": [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "TypeScript",
  ],
  "Frontend Development": [
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "TailwindCSS",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "Django",
    "Spring Boot",
    "RESTful APIs",
  ],
  "Database & Cloud": ["MongoDB", "PostgreSQL", "AWS", "Firebase", "Docker"],
};

const AppContent = () => (
  <div id="home" className="container mx-auto px-8 py-24">
    <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-12 animate-gradient tracking-tight">
        Welcome to My Digital Universe
      </h1>
      <p className="text-2xl text-gray-200 leading-relaxed mb-16 font-light">
        I am an innovative Full Stack Developer crafting exceptional digital
        experiences with cutting-edge technologies. Specializing in scalable,
        enterprise-level solutions that drive business growth.
      </p>
      <div className="flex gap-8">
        <button className="px-12 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
          View Projects
        </button>
        <button className="px-12 py-4 text-xl font-bold rounded-full border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/15 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
          Contact Me
        </button>
      </div>
      <div className="mt-24 grid grid-cols-3 gap-10">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
            5+ Years
          </h3>
          <p className="text-gray-300 font-medium">Professional Experience</p>
        </div>
        <div className="p-10 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
            50+ Projects
          </h3>
          <p className="text-gray-300 font-medium">Successfully Delivered</p>
        </div>
        <div className="p-10 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
            100% Rating
          </h3>
          <p className="text-gray-300 font-medium">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </div>
);

const AboutContent = () => (
  <div id="about" className="container mx-auto px-8 py-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-16 tracking-tight">
        About Me
      </h2>
      <div className="grid grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-2xl text-gray-200 leading-relaxed font-light">
            As a seasoned Full Stack Developer with over 5 years of experience,
            I have had the privilege of working with Fortune 500 companies and
            innovative startups alike. My passion lies in creating scalable,
            user-centric applications that make a real impact.
          </p>
          <p className="text-2xl text-gray-200 leading-relaxed font-light">
            I specialize in modern web technologies including React, Node.js,
            and cloud platforms like AWS. My approach combines technical
            expertise with creative problem-solving to deliver exceptional
            digital solutions.
          </p>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <i className="codicon codicon-location text-indigo-400 text-2xl"></i>
              <span className="text-gray-200 text-lg">
                Based in Silicon Valley, CA
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="codicon codicon-globe text-indigo-400 text-2xl"></i>
              <span className="text-gray-200 text-lg">
                Available for Remote Work Worldwide
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="codicon codicon-book text-indigo-400 text-2xl"></i>
              <span className="text-gray-200 text-lg">
                Masters in Computer Science
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-gray-700/50">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-8">
              Core Strengths
            </h3>
            <ul className="space-y-6 text-gray-200 text-lg">
              <li className="flex items-center space-x-4">
                <i className="codicon codicon-check text-emerald-500 text-xl"></i>
                <span>Enterprise-level Application Architecture</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="codicon codicon-check text-emerald-500 text-xl"></i>
                <span>Cloud Infrastructure & DevOps</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="codicon codicon-check text-emerald-500 text-xl"></i>
                <span>Team Leadership & Project Management</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-6">
            <button className="w-full py-4 text-xl font-bold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
              Download CV
            </button>
            <button className="w-full py-4 text-xl font-bold rounded-xl border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/15 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              View LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsContent = () => (
  <div id="projects" className="container mx-auto px-8 py-24">
    <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-10 tracking-tight">
      Featured Projects
    </h2>
    <p className="text-2xl text-gray-200 max-w-4xl mb-16 font-light leading-relaxed">
      A showcase of my most impactful and innovative work. Each project
      demonstrates my expertise in different areas of software development.
    </p>
    <div className="grid grid-cols-3 gap-10">
      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
        <img
          src="/project1.jpg"
          alt="E-Commerce Platform"
          className="w-full h-64 object-cover"
        />
        <div className="p-10">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
            Enterprise E-Commerce Platform
          </h3>
          <p className="text-gray-200 mb-8 text-lg">
            A full-stack e-commerce solution with advanced features like
            real-time inventory, AI-powered recommendations, and seamless
            payment integration.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              MongoDB
            </span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg"
            >
              Live Demo →
            </a>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
        <img
          src="/project2.jpg"
          alt="AI Analytics Dashboard"
          className="w-full h-64 object-cover"
        />
        <div className="p-10">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
            AI Analytics Dashboard
          </h3>
          <p className="text-gray-200 mb-8 text-lg">
            Advanced analytics platform featuring real-time data visualization,
            predictive modeling, and interactive reporting tools.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              Python
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              TensorFlow
            </span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg"
            >
              Live Demo →
            </a>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
        <img
          src="/project3.jpg"
          alt="Cloud Infrastructure"
          className="w-full h-64 object-cover"
        />
        <div className="p-10">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
            Cloud Infrastructure Platform
          </h3>
          <p className="text-gray-200 mb-8 text-lg">
            Scalable cloud infrastructure management system with automated
            deployment, monitoring, and disaster recovery capabilities.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              AWS
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              Docker
            </span>
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              Kubernetes``
            </span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg"
            >
              Case Study →
            </a>
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SkillsContent = () => (
  <div
    id="skills"
    className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
  >
    <div className="container mx-auto px-8 py-24">
      <div className="text-center mb-20">
        <h2 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-10 tracking-tight">
          Professional Skills
        </h2>
        <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
          With over 5 years of experience in software development, I have
          mastered a comprehensive tech stack spanning frontend, backend, cloud
          computing, and emerging technologies.
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className="backdrop-blur-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-12 shadow-2xl border border-gray-700/50"
          >
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-12">
              {category}
            </h3>
            <div className="grid grid-cols-5 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-8 backdrop-blur-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <span className="text-gray-100 text-xl font-semibold block">
                      {skill}
                    </span>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mt-7 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-2 pl-8">
      {["home", "about", "skills", "projects", "contact"].map((section) => {
        let icon;
        switch (section) {
          case "home":
            icon = <img src={html5} alt="Home" className="w-6 h-6" />;
            break;
          case "about":
            icon = <img src={javascript} alt="Home" className="w-6 h-6" />;
            break;
          case "skills":
            icon = <img src={react} alt="Home" className="w-6 h-6" />;
            break;
          case "projects":
            icon = <img src={nodejs} alt="Home" className="w-6 h-6" />;

            break;
          case "contact":
            icon = <img src={contact} alt="Home" className="w-6 h-6" />;
            break;
        }

        return (
          <div
            key={section}
            className={` p-2 mb-1 rounded-lg cursor-pointer flex items-center hover:bg-[#37373d] transition-colors duration-200 ${
              activeSection === section ? "bg-[#37373d]" : ""
            }`}
            onClick={() => {
              const element = document.getElementById(section);
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            {icon}
            <span className="pl-2  font-medium capitalize">{section}.jsx</span>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="header w-full flex items-center justify-between   bg-neutral-800 text-white  top-0 left-0 z-50 sticky h-7 border-b border-[#3c3c3c]">
        {/* Logo Section */}
        <div className="logo pl-2">
          <img
            src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
            alt="Visual Studio Code Styled Portfolio Icon"
            width="20"
            height="20"
          />
        </div>

        {/* Header Menu */}

        {/* App Icons Section */}
        <div className="header-app-icons flex items-center">
          {/* Status Indicators */}
          <div
            className="rounded-full mr-2"
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: "red",
            }}
          />
          <div
            className="rounded-full mr-2"
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: "rgb(251, 191, 36)",
            }}
          />
          <div
            className="rounded-full mr-5"
            style={{
              width: "0.75rem",
              height: "0.75rem",
              backgroundColor: "rgb(52, 211, 153)",
            }}
          />
        </div>
      </div>
      <div className="min-h-screen bg-background flex">
        <div className="fixed left-0 top-0 h-full w-11 bg-neutral-800 flex flex-col py-4 z-50 border-r border-[#3c3c3c] mt-7">
          <div className="space-y-4">
            <div
              className={`h-10 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center border-l-2 ${
                isSidebarVisible
                  ? "border-white text-white"
                  : "border-transparent"
              }`}
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              <img
                src={fileExplorer}
                alt="Visual Studio Code Styled Portfolio Icon"
                width="20"
                height="20"
              />
            </div>
            <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
              <img
                src={extensions}
                alt="Visual Studio Code Styled Portfolio Icon"
                width="20"
                height="20"
              />
            </div>
            <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
              <img
                src={git}
                alt="Visual Studio Code Styled Portfolio Icon"
                width="20"
                height="20"
              />
            </div>
          </div>
        </div>

        <div
          className={`flex-1 ${
            isSidebarVisible ? "sm:ml-[17.75rem]" : "ml-11"
          } bg-black`}
        >
          <div className=" bg-black min-h-screen  text-[#d4d4d4]">
            {isSidebarVisible && (
              <div className="fixed left-11 top-0 h-full w-60 bg-black/90 text-white border-r border-[#3c3c3c] z-40 hidden sm:block mt-7">
                <div className="p-4 text-sm text-[#bbbbbb] font-semibold uppercase tracking-wide">
                  Explorer
                </div>
                <div className="text-[#cccccc]">
                  <div
                    className="px-4 py-2 hover:bg-[#37373d] cursor-pointer flex items-center"
                    onClick={() => setIsExplorerOpen(!isExplorerOpen)}
                  >
                    <i
                      className={`codicon codicon-chevron-${
                        isExplorerOpen ? "down" : "right"
                      } mr-2 text-xs`}
                    ></i>
                    <i
                      className={`codicon codicon-folder${
                        isExplorerOpen ? "-opened" : ""
                      } text-[#dcb67a] mr-2`}
                    ></i>
                    src
                  </div>
                  {isExplorerOpen && <Navbar />}
                </div>
              </div>
            )}
            <div className="space-y-24">
              <AppContent />
              <AboutContent />
              <SkillsContent />
              <ProjectsContent />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 h-6 bg-[#007acc] text-white flex items-center px-4 text-sm z-50">
          <div className="flex-1 flex items-center space-x-3">
            <i className="codicon codicon-check-all"></i>
            <span>Ready</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <span>UTF-8</span>
            <span className="capitalize">{activeSection}</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
