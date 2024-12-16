const AppContent = () => (
  <>
    <div className="relative">
      <div className="relative">
        <h1 className="text-4xl md:text-7xl text-center font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text pt-6 animate-gradient tracking-tight px-4">
          Welcome to My Digital Universe
        </h1>
        <div
          id="home"
          className="container mx-auto px-4 flex flex-col md:flex-row"
        >
          <div className="hidden md:flex md:flex-[0.5] items-center justify-center"></div>
          <div className="w-full md:flex-1 flex items-center justify-center py-8 md:py-0">
            <img
              src="/public/1.jpg"
              alt="Profile"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full object-cover object-top border-4 border-indigo-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          </div>
          <div className="w-full md:flex-[1.5] flex flex-col justify-center text-center md:text-left mx-auto md:pr-12 gap-5">
            <div className="flex items-center gap-2 py-2 justify-center md:justify-start">
              <span className="text-3xl md:text-4xl font-bold text-gray-100">
                Hi there!
              </span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-wave w-8 h-8 md:w-9 md:h-9"
              >
                <path
                  d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                  fill="#EBA352"
                ></path>
                <path
                  d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                  fill="#EBA352"
                ></path>
                <path
                  d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                  fill="#EBA352"
                ></path>
                <path
                  d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                  fill="#EBA352"
                ></path>
                <path
                  d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                  fill="#FFDD67"
                ></path>
                <path
                  d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                  fill="#EBA352"
                ></path>
              </svg>
            </div>

            <p className="text-lg md:text-xl py-2 text-gray-300 leading-relaxed text-center md:text-left px-4 md:px-0 backdrop-blur-sm">
              Full Stack Developer passionate about building modern web
              applications with React and Node.js. I love turning ideas into
              elegant, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-2 px-4 md:px-0">
              <button className="w-full py-3 md:py-4 text-lg md:text-xl font-bold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
                Download CV
              </button>
              <button className="w-full py-3 md:py-4 text-lg md:text-xl font-bold rounded-xl border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/15 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                View LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const AboutContent = () => (
  <div id="about" className="container mx-auto py-7">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-16 tracking-tight">
        About Me
      </h2>
      <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
        <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700/30 hover:border-gray-600/50 transition-colors">
          <h3 className="text-3xl font-bold text-blue-400 mb-2">2+ Years</h3>
          <p className="text-gray-400">Professional Experience</p>
        </div>
        <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700/30 hover:border-gray-600/50 transition-colors">
          <h3 className="text-3xl font-bold text-blue-400 mb-2">8+ Projects</h3>
          <p className="text-gray-400">Successfully Delivered</p>
        </div>
      </div>
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
