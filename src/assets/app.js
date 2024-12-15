import { useState, useEffect, useCallback } from "react";
import "./App.css";

// Types and Constants
const SHORTCUTS = {
  TOGGLE_SIDEBAR: { key: "b", ctrl: true },
};

const FILE_ICONS = {
  jsx: { icon: "react", color: "#1c6bc1" },
  css: { icon: "css", color: "#0098e4" },
  html: { icon: "html", color: "#e44d26" },
  js: { icon: "javascript", color: "#f7df1e" },
  json: { icon: "json", color: "#f7df1e" },
  component: { icon: "symbol-class", color: "#23d18b" },
};

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

// Add these component definitions
const AppContent = () => (
  <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
    <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
      Welcome to My Portfolio
    </h2>
    <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
      I&apos;m a Full Stack Developer specializing in modern web technologies.
    </p>
  </div>
);

const AboutContent = () => (
  <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
    <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
      About Me
    </h2>
    <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
      I'm a passionate developer with experience in full-stack development.
    </p>
  </div>
);

const ProjectsContent = () => (
  <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
    <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
      Projects
    </h2>
    <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
      Here are some of my recent projects.
    </p>
  </div>
);

const SkillsContent = () => (
  <div className="bg-gray-900">
    <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
      <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
        Skills
      </h2>
      <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
        Data Structures and Algorithms, Frontend Development, Backend
        Development, Database Management, System Design and Cloud.
      </p>

      <div className="w-full mb-5 pb-5">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mt-8">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  // Core states
  const [activeTab, setActiveTab] = useState("App.jsx");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // File system states
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "App.jsx",
      content: "Welcome Component",
      icon: "react",
      color: "#1c6bc1",
      path: "/src/App.jsx",
      component: "app",
    },
    {
      id: 2,
      name: "About.jsx",
      content: "About Component",
      icon: "react",
      color: "#1c6bc1",
      path: "/src/About.jsx",
      component: "about",
    },
    {
      id: 3,
      name: "Skills.jsx",
      content: "Skills Component",
      icon: "react",
      color: "#1c6bc1",
      path: "/src/Skills.jsx",
      component: "skills",
    },
    {
      id: 4,
      name: "Projects.jsx",
      content: "Projects Component",
      icon: "react",
      color: "#1c6bc1",
      path: "/src/Projects.jsx",
      component: "projects",
    },
  ]);

  // Command palette state
  const [commands] = useState([
    {
      id: "toggle-sidebar",
      label: "Toggle Sidebar",
      shortcut: "Ctrl+B",
      action: () => setIsSidebarVisible((prev) => !prev),
    },
  ]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === SHORTCUTS.TOGGLE_SIDEBAR.key) {
        e.preventDefault();
        setIsSidebarVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Command Palette */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-[600px] mx-auto mt-[10vh] bg-[#252526] shadow-lg rounded">
            <input
              type="text"
              className="w-full bg-[#3c3c3c] text-white p-2 outline-none"
              placeholder="Type '>' to show all commands"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Escape") setIsCommandPaletteOpen(false);
              }}
            />
            <div className="max-h-[300px] overflow-y-auto">
              {commands.map((cmd) => (
                <div
                  key={cmd.id}
                  className="px-2 py-1 hover:bg-[#37373d] cursor-pointer flex justify-between"
                  onClick={() => {
                    cmd.action();
                    setIsCommandPaletteOpen(false);
                  }}
                >
                  <span>{cmd.label}</span>
                  <span className="text-[#858585]">{cmd.shortcut}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Activity Bar */}
      <div className="fixed left-0 top-0 h-full w-12 bg-[#333333] flex flex-col items-center py-2">
        <div className="w-full">
          <div
            className={`h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center border-l-2 
              ${
                isSidebarVisible
                  ? "border-white text-white"
                  : "border-transparent"
              }`}
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <i className="codicon codicon-files"></i>
          </div>
          <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
            <i className="codicon codicon-source-control"></i>
          </div>
          <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
            <i className="codicon codicon-extensions"></i>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="fixed left-12 top-0 h-full w-60 bg-[#252526] border-r border-[#3c3c3c]">
          <div className="p-2 text-sm text-[#bbbbbb] font-semibold uppercase tracking-wide">
            Explorer
          </div>
          <div className="text-[#cccccc]">
            <div
              className="px-2 py-1 hover:bg-[#37373d] cursor-pointer flex items-center"
              onClick={() => setIsExplorerOpen(!isExplorerOpen)}
              onContextMenu={(e) => handleContextMenu(e, "folder")}
            >
              <i
                className={`codicon codicon-chevron-${
                  isExplorerOpen ? "down" : "right"
                } mr-1 text-xs`}
              ></i>
              <i
                className={`codicon codicon-folder${
                  isExplorerOpen ? "-opened" : ""
                } text-[#dcb67a] mr-1`}
              ></i>
              src
            </div>
            {isExplorerOpen &&
              files.map((file) => (
                <div
                  key={file.id}
                  className={`px-6 py-1 hover:bg-[#37373d] cursor-pointer flex items-center ${
                    activeTab === file.name ? "bg-[#37373d]" : ""
                  }`}
                  onClick={() => setActiveTab(file.name)}
                  onContextMenu={(e) => handleContextMenu(e, "file")}
                  data-fileid={file.id}
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", file.name)
                  }
                >
                  <i
                    className={`codicon codicon-${file.icon}`}
                    style={{ color: file.color }}
                  ></i>
                  <span className="ml-1">{file.name}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Main Editor Area */}
      <div className={`${isSidebarVisible ? "ml-72" : "ml-12"} h-screen`}>
        {/* Tab Bar */}
        <div className="h-9 bg-[#252526] flex items-center">
          {files.map((file) => (
            <div
              key={file.id}
              className={`px-3 py-1 flex items-center cursor-pointer ${
                activeTab === file.name
                  ? "bg-[#1e1e1e] text-[#ffffff] border-t border-[#007acc]"
                  : "bg-[#2d2d2d] text-[#969696] hover:bg-[#2d2d2d]"
              }`}
              onClick={() => setActiveTab(file.name)}
            >
              <i
                className={`codicon codicon-${file.icon}`}
                style={{ color: file.color }}
              ></i>
              <span className="ml-1">{file.name}</span>
            </div>
          ))}
        </div>

        {/* Editor Content */}
        <div className="bg-[#1e1e1e] h-[calc(100%-2.25rem)] p-4 text-[#d4d4d4] overflow-auto font-mono">
          {(() => {
            const currentFile = files.find((f) => f.name === activeTab);

            switch (currentFile?.component) {
              case "app":
                return <AppContent />;
              case "about":
                return <AboutContent />;
              case "skills":
                return <SkillsContent />;
              case "projects":
                return <ProjectsContent />;
              default:
                return (
                  <pre className="whitespace-pre-wrap">
                    {currentFile?.content}
                  </pre>
                );
            }
          })()}
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-[#007acc] text-white flex items-center px-2 text-sm">
        <div className="flex-1 flex items-center space-x-2">
          <i className="codicon codicon-check-all"></i>
          <span>Ready</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>UTF-8</span>
          <span>{activeTab.includes(".jsx") ? "JavaScript React" : "CSS"}</span>
          <span>Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  );
}

export default App;
