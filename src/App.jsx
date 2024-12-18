import { useState, useEffect } from "react";
import fileExplorer from "./assets/icons/fileExplorer.svg";
import extensions from "./assets/icons/extensions.svg";
import git from "./assets/icons/git.svg";
import html5 from "./assets/icons/html5.svg";
import javascript from "./assets/icons/javascript.svg";
import nodejs from "./assets/icons/nodejs.svg";
import react from "./assets/icons/react.svg";
import contact from "./assets/icons/contact.svg";
import waveHand from "./assets/icons/waveHand.svg";

import "./App.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillIcon = ({ children }) => (
  <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-indigo-400 bg-indigo-400/10 rounded-xl">
    {children}
  </div>
);

const categoryIcons = {
  "Programming Languages": (
    <SkillIcon>
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    </SkillIcon>
  ),
  "Frontend Development": (
    <SkillIcon>
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    </SkillIcon>
  ),
  "Backend Development": (
    <SkillIcon>
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    </SkillIcon>
  ),
  "Database & Cloud": (
    <SkillIcon>
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    </SkillIcon>
  ),
};

const skillCategories = {
  "Frontend Development": [
    "JavaScript",
    "React.js",
    "TypeScript",
    "Next.js",
    "HTML5",
    "CSS3",
    "TailwindCSS",
  ],
  "Backend Development": ["Node.js", "Express.js", "RESTful APIs"],
  "Database & Cloud": ["MongoDB", "PostgreSQL"],
};

const skillIcons = {
  // Programming Languages
  JavaScript: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  Python: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
    </svg>
  ),
  Java: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
    </svg>
  ),
  TypeScript: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  // Frontend Development
  "React.js": (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  "Next.js": (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
    </svg>
  ),
  HTML5: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  ),
  // Add more icons for other skills...
  "Node.js": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
  ),
  "Express.js": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
  ),
  Django: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
    </svg>
  ),
  "Spring Boot": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.59 5.41a10.94 10.94 0 01.29 14.32A10.89 10.89 0 0112 24C5.37 24 0 18.63 0 12S5.37 0 12 0c3.09 0 5.91 1.28 7.94 3.34l-3.17 3.18C15.14 4.98 13.63 4.34 12 4.34c-4.24 0-7.67 3.43-7.67 7.66 0 4.24 3.43 7.67 7.67 7.67 3.71 0 6.82-2.64 7.52-6.13h-5.85v-4.5h10.27c.11.65.17 1.32.17 2a11.02 11.02 0 01-3.52 8.07z" />
    </svg>
  ),
  "RESTful APIs": (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.18c5.423 0 9.82 4.397 9.82 9.82 0 5.423-4.397 9.82-9.82 9.82-5.423 0-9.82-4.397-9.82-9.82 0-5.423 4.397-9.82 9.82-9.82zM9.999 16.5h4v-4h-4v4zm0-5h4v-4h-4v4z" />
    </svg>
  ),
  MongoDB: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  PostgreSQL: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.11.031C13.111.802 11.595 1.483 9.919 2.382 8.241 3.28 6.538 4.399 4.906 5.757c-1.393 1.16-2.463 2.36-3.13 3.66-.41.81-.63 1.66-.63 2.57 0 1.19.41 2.35 1.08 3.29.45.62 1.01 1.18 1.64 1.66.27.21.56.4.84.58.12.08.24.15.36.22.11.07.22.13.34.19.12.06.24.12.36.18.57.27 1.17.51 1.79.71.62.2 1.27.35 1.93.46.66.11 1.34.17 2.03.17s1.37-.06 2.03-.17c.66-.11 1.31-.26 1.93-.46.62-.2 1.22-.44 1.79-.71.12-.06.24-.12.36-.18.12-.06.23-.12.34-.19.12-.07.24-.14.36-.22.28-.18.57-.37.84-.58.63-.48 1.19-1.04 1.64-1.66.67-.94 1.08-2.1 1.08-3.29 0-.91-.22-1.76-.63-2.57-.67-1.3-1.74-2.5-3.13-3.66-1.63-1.36-3.33-2.48-5.01-3.37-1.68-.9-3.19-1.58-4.35-1.95l-.11-.03A10.325 10.325 0 0017.129 0zM5.319 16.811c-.01-.01-.01-.02-.02-.03l-.04-.05c-.4-.48-.75-1.01-1.05-1.59-.3-.58-.53-1.19-.69-1.84-.16-.64-.24-1.3-.24-1.98 0-.67.08-1.33.24-1.97.16-.64.39-1.25.69-1.83.3-.58.65-1.11 1.05-1.59.01-.01.02-.03.03-.04.01-.01.01-.02.02-.03.39-.46.83-.88 1.31-1.26.48-.37 1-.7 1.55-.97.55-.27 1.13-.49 1.73-.65.6-.16 1.21-.24 1.84-.24.63 0 1.24.08 1.84.24.6.16 1.18.38 1.73.65.55.27 1.07.6 1.55.97.48.38.92.8 1.31 1.26.01.01.01.02.03.03.04.01.01.02.03.03.04.4.48.75 1.01 1.05 1.59.3.58.53 1.19.69 1.83.16.64.24 1.3.24 1.97 0 .68-.08 1.34-.24 1.98-.16.65-.39 1.26-.69 1.84-.3.58-.65 1.11-1.05 1.59l-.03.04c-.01.01-.01.02-.02.03-.39.46-.83.88-1.31 1.26-.48.38-1 .7-1.55.97-.55.27-1.13.49-1.73.65-.6.16-1.21.24-1.84.24-.63 0-1.24-.08-1.84-.24-.6-.16-1.18-.38-1.73-.65-.55-.27-1.07-.59-1.55-.97-.48-.38-.92-.8-1.31-1.26zM16.75 6.22c-.4-.55-.83-1.04-1.3-1.47-.47-.43-.97-.8-1.51-1.11-.54-.31-1.11-.54-1.71-.7-.6-.16-1.22-.24-1.86-.24-.64 0-1.26.08-1.86.24-.6.16-1.17.39-1.71.7-.54.31-1.04.68-1.51 1.11-.47.43-.9.92-1.3 1.47-.4.55-.74 1.13-1.01 1.76-.27.63-.47 1.28-.6 1.97-.13.69-.2 1.4.2 2.12 0 .73.07 1.44.2 2.13.13.69.33 1.35.6 1.98.27.63.61 1.21 1.01 1.76.4.55.83 1.04 1.3 1.47.47.43.97.8 1.51 1.11.54.31 1.11.54 1.71.7.6.16 1.22.24 1.86.24.64 0 1.26-.08 1.86-.24.6-.16 1.17-.39 1.71-.7.54-.31 1.04-.68 1.51-1.11.47-.43.9-.92 1.3-1.47.4-.55.74-1.13 1.01-1.76.27-.63.47-1.29.6-1.98.13-.69.2-1.4.2-2.13 0-.73-.07-1.43-.2-2.12-.13-.69-.33-1.34-.6-1.97-.27-.63-.61-1.21-1.01-1.76z" />
    </svg>
  ),
  MySQL: (
    <svg className="w-6 h-6" viewBox="0 0 128 128">
      <path
        fill="currentColor"
        d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
      ></path>
    </svg>
  ),
  Redis: (
    <svg className="w-6 h-6" viewBox="0 0 128 128">
      <path
        fill="currentColor"
        d="M121.8 93.1c-6.7 3.5-41.5 17.8-49 21.4-7.5 3.6-11.7 3.6-17.7 1-5.9-2.7-42.5-17.6-49.2-20.7-3.3-1.6-5-2.9-5-4.2V78.3c0 0 48-10.5 55.9-13.2 7.9-2.8 10.6-2.9 17.1-.4 6.6 2.5 47.4 9.9 54.2 12.3v12.6c0 1.2-1.5 2.3-6.3 3.5zm0-17.5c-6.7 3.5-41.5 17.8-49 21.4-7.5 3.6-11.7 3.6-17.7 1-5.9-2.7-42.5-17.6-49.2-20.7-3.3-1.6-5-2.9-5-4.2V60.8c0 0 48-10.5 55.9-13.2 7.9-2.8 10.6-2.9 17.1-.4 6.6 2.5 47.4 9.9 54.2 12.3v12.6c0 1.2-1.5 2.3-6.3 3.5zm0-17.5c-6.7 3.5-41.5 17.8-49 21.4-7.5 3.6-11.7 3.6-17.7 1-5.9-2.7-42.5-17.6-49.2-20.7-3.3-1.6-5-2.9-5-4.2V43.3c0 0 48-10.5 55.9-13.2 7.9-2.8 10.6-2.9 17.1-.4 6.6 2.5 47.4 9.9 54.2 12.3v12.6c0 1.2-1.5 2.3-6.3 3.5z"
      ></path>
    </svg>
  ),
  TailwindCSS: (
    <svg
      className="w-4 h-4 sm:w-6 sm:h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
};

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
            icon = <img src={javascript} alt="About" className="w-6 h-6" />;
            break;
          case "skills":
            icon = <img src={react} alt="Skills" className="w-6 h-6" />;
            break;
          case "projects":
            icon = <img src={nodejs} alt="Projects" className="w-6 h-6" />;
            break;
          case "contact":
            icon = <img src={contact} alt="Contact" className="w-6 h-6" />;
            break;
        }

        return (
          <div
            key={section}
            className={`p-2 mb-1 rounded-lg cursor-pointer flex items-center hover:bg-[#37373d] transition-colors duration-200 ${
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
            <span className="pl-2 font-medium capitalize">{section}</span>
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

  useGSAP(() => {
    // Hero section animations
    gsap.from(".hero-title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".hero-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4,
      ease: "power4.out",
    });

    gsap.from(".hero-buttons", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
      ease: "power4.out",
    });

    // About section animations with ScrollTrigger
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    // Skills section animations
    gsap.from(".skills-section", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".projects", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".contact", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });
  });

  return (
    <div className="relative">
      <div className="header w-full flex items-center justify-between bg-neutral-800 text-white top-0 left-0 z-50 sticky h-7 border-b border-[#3c3c3c]">
        {/* Logo Section */}
        <div className="logo pl-2">
          <img
            src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
            alt="Visual Studio Code Styled Portfolio Icon"
            className="w-5 h-5"
          />
        </div>

        {/* Header Menu */}

        {/* App Icons Section */}
        <div className="header-app-icons flex items-center">
          {/* Status Indicators */}
          <div className="rounded-full mr-2 w-3 h-3 bg-red-500" />
          <div className="rounded-full mr-2 w-3 h-3 bg-amber-400" />
          <div className="rounded-full mr-5 w-3 h-3 bg-emerald-400" />
        </div>
      </div>
      <div className="min-h-screen bg-[#212121] flex flex-col lg:flex-row relative">
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarVisible ? "lg:ml-[17.75rem]" : "ml-11"
          } bg-black`}
        >
          <div className="min-h-screen text-[#d4d4d4] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div>
              {" "}
              <div className="fixed left-0 top-0 h-full w-11 bg-neutral-800  flex-col py-4 z-50 border-r border-[#3c3c3c] mt-7 hidden lg:flex">
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
                      alt="File Explorer"
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
                    <img
                      src={extensions}
                      alt="Extensions"
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="h-12 text-[#858585] hover:text-white cursor-pointer flex items-center justify-center">
                    <img src={git} alt="Git" className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {isSidebarVisible && (
                <div className="fixed left-11 top-0 h-full w-60  text-white border-r border-[#3c3c3c] z-40 hidden lg:block mt-7">
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
            </div>
            <div className="space-y-20 px-4 lg:px-8 bg-[#212121]">
              {/* Hero Section */}
              <h1
                id="home"
                className="hero-title text-4xl md:text-7xl text-center font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text pt-16 tracking-tight"
              >
                Welcome to My Portfolio
              </h1>

              <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-8 max-w-4xl">
                <div className="w-full lg:w-1/3 flex justify-center">
                  <img
                    src="/1.jpg"
                    alt="Profile"
                    className="hero-image w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover object-top border-4 border-indigo-500/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                  />
                </div>
                <div className="w-full lg:w-2/3 flex flex-col gap-6 text-center lg:text-left">
                  <div className="hero-text flex items-center gap-3 justify-center lg:justify-start">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-100">
                      Kowshik
                    </h2>
                    <img src={waveHand} alt="Wave Hand" className="w-6 h-6" />
                  </div>

                  <p className="hero-text text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Full Stack Developer passionate about building modern web
                    applications with React and Node.js. I love turning ideas
                    into elegant, scalable solutions.
                  </p>

                  <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="px-8 py-3 text-base sm:text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
                      Download CV
                    </button>
                    <button className="px-8 py-3 text-base sm:text-lg font-bold rounded-xl border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/15 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                      View LinkedIn
                    </button>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div id="about" className="container mx-auto py-12">
                <div className="max-w-6xl mx-auto">
                  <h2 className="about-title text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-transparent bg-clip-text tracking-tight text-center mb-4">
                    About Me
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="space-y-6 md:space-y-8">
                      <p className="about-text text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                        With over 2 years of experience, I have had the
                        privilege of working with companies and innovative
                        startups . My passion lies in creating scalable,
                        user-centric applications that make a real impact.
                      </p>
                      <p className="about-text text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                        I specialize in modern web technologies including React,
                        Node.js. My approach combines technical expertise with
                        creative problem-solving to deliver exceptional digital
                        solutions.
                      </p>
                      <div className="flex flex-col space-y-4 md:space-y-6">
                        <div className="flex items-center space-x-4">
                          <i className="codicon codicon-globe text-indigo-400 text-xl md:text-2xl"></i>
                          <span className="text-base md:text-lg text-gray-200">
                            Available for Remote Work Worldwide
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <i className="codicon codicon-book text-indigo-400 text-xl md:text-2xl"></i>
                          <span className="text-base md:text-lg text-gray-200">
                            Masters in Computer Science
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8 md:space-y-10">
                      {/* <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-xl border border-gray-700/50">
                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6 md:mb-8">
                          Core Strengths
                        </h3>
                        <ul className="space-y-4 md:space-y-6 text-gray-200 text-base md:text-lg">
                          <li className="flex items-center space-x-4">
                            <i className="codicon codicon-check text-emerald-500 text-lg md:text-xl"></i>
                            <span>
                              Enterprise-level Application Architecture
                            </span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <i className="codicon codicon-check text-emerald-500 text-lg md:text-xl"></i>
                            <span>Cloud Infrastructure & DevOps</span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <i className="codicon codicon-check text-emerald-500 text-lg md:text-xl"></i>
                            <span>Team Leadership & Project Management</span>
                          </li>
                        </ul>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl my-3">
                          <div className="p-6 md:p-8 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700/30 hover:border-gray-600/50 transition-colors">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                              2+ Years
                            </h3>
                            <p className="text-gray-400">
                              Professional Experience
                            </p>
                          </div>
                          <div className="p-6 md:p-8 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700/30 hover:border-gray-600/50 transition-colors">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                              8+ Projects
                            </h3>
                            <p className="text-gray-400">
                              Successfully Delivered
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <div className="flex flex-col md:grid  mx-auto">
                        {/* Experience 1 */}
                        <div className="flex md:contents">
                          <div className="col-start-5 col-end-6 mr-4 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                              <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 border-4 border-gray-900 rounded-full bg-indigo-500 shadow"></div>
                          </div>
                          <div className="col-start-6 col-end-10 p-4 my-4">
                            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300">
                              <span className="text-indigo-400 font-semibold">
                                2022 - Present
                              </span>
                              <h3 className="text-2xl font-bold text-gray-100 mt-1">
                                Senior Full Stack Developer
                              </h3>
                              <p className="text-gray-300">Company Name</p>
                              <p className="text-gray-400 mt-2">
                                Led development of enterprise applications using
                                React, Node.js, and cloud technologies.
                                Implemented microservices architecture and
                                improved system performance by 40%.
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                  React
                                </span>
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                  Node.js
                                </span>
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                  AWS
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Experience 2 */}
                        <div className="flex md:contents flex-row-reverse">
                          <div className="col-start-5 col-end-6 mr-4 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                              <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 pointer-events-none"></div>
                            </div>
                          </div>
                        </div>

                        {/* Experience 3 */}
                        <div className="flex md:contents">
                          <div className="col-start-5 col-end-6 mr-4 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                              <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 border-4 border-gray-900 rounded-full bg-pink-500 shadow"></div>
                          </div>
                          <div className="col-start-6 col-end-10 p-4 my-4">
                            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300">
                              <span className="text-indigo-400 font-semibold">
                                2019 - 2020
                              </span>
                              <h3 className="text-2xl font-bold text-gray-100 mt-1">
                                Junior Developer
                              </h3>
                              <p className="text-gray-300">First Company</p>
                              <p className="text-gray-400 mt-2">
                                Started career as a junior developer working on
                                frontend development. Gained extensive
                                experience in modern web technologies and best
                                practices.
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                  HTML/CSS
                                </span>
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                  JavaScript
                                </span>
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                  Git
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="skills" className="skills-section">
                <div className="text-center mb-8">
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 tracking-tight">
                    Professional Skills
                  </h2>
                  <p className="text-base text-gray-300 max-w-2xl mx-auto">
                    Mastering a comprehensive tech stack across frontend,
                    backend, cloud computing and emerging technologies.
                  </p>
                </div>

                <div className=" flex justify-center items-center gap-2  flex-col sm:flex-row  lg:flex-col">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div
                      key={category}
                      className="skill-category backdrop-blur-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl p-4 shadow-lg border border-gray-700/50 hover:border-indigo-500/30 transition duration-300 "
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {categoryIcons[category]}
                        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                          {category}
                        </h3>
                      </div>
                      <div className="gap-2 flex flex-col lg:flex-row">
                        {skills.map((skill) => (
                          <div
                            key={skill}
                            className="group relative rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-3 backdrop-blur shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-gray-700/30 hover:border-indigo-500/20"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                            <div className="relative">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-gray-100 text-sm font-medium">
                                  {skill}
                                </span>
                                {skillIcons[skill] ? (
                                  <div className="text-indigo-400 text-sm">
                                    {skillIcons[skill]}
                                  </div>
                                ) : (
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-300 transition-colors"></div>
                                )}
                              </div>
                              <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform mt-2"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div
                id="projects"
                className=" projects container mx-auto px-4 lg:px-8 mb-6"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-6 tracking-tight">
                    Featured Projects
                  </h2>
                  <p className="text-lg sm:text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
                    A showcase of my most impactful and innovative work. Each
                    project demonstrates my expertise in different areas of
                    software development.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Project Card 1 */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
                    <img
                      src="/project1.jpg"
                      alt="E-Commerce Platform"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                        Enterprise E-Commerce Platform
                      </h3>
                      <p className="text-gray-200 mb-6 text-base">
                        A full-stack e-commerce solution with advanced features
                        like real-time inventory, AI-powered recommendations,
                        and seamless payment integration.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          React
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          Node.js
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          MongoDB
                        </span>
                      </div>
                      <div className="flex gap-6">
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300 font-medium text-base"
                        >
                          Live Demo →
                        </a>
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300 font-medium text-base"
                        >
                          GitHub →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Card 2 */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
                    <img
                      src="/project2.jpg"
                      alt="AI Analytics Dashboard"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                        AI Analytics Dashboard
                      </h3>
                      <p className="text-gray-200 mb-6 text-base">
                        Advanced analytics platform featuring real-time data
                        visualization, predictive modeling, and interactive
                        reporting tools.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          Next.js
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          Python
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          TensorFlow
                        </span>
                      </div>
                      <div className="flex gap-6">
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300 font-medium text-base"
                        >
                          Live Demo →
                        </a>
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300 font-medium text-base"
                        >
                          GitHub →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Card 3 */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
                    <img
                      src="/project3.jpg"
                      alt="Cloud Infrastructure"
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                        Cloud Infrastructure Platform
                      </h3>
                      <p className="text-gray-200 mb-6 text-base">
                        Scalable cloud infrastructure management system with
                        automated deployment, monitoring, and disaster recovery
                        capabilities.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          AWS
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          Docker
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                          Kubernetes
                        </span>
                      </div>
                      <div className="flex gap-6">
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300 font-medium text-base"
                        >
                          Case Study →
                        </a>
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300 font-medium text-base"
                        >
                          GitHub →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div id="contact" className="container mx-auto p-4 sm:p-8 mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mb-4 sm:mb-8 text-center tracking-tight">
                  Contact Me
                </h2>
                <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-700/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <i className="codicon codicon-mail text-xl sm:text-2xl text-indigo-400"></i>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                            Email
                          </h3>
                          <a
                            href="mailto:your.email@example.com"
                            className="text-sm sm:text-base text-indigo-400 hover:text-indigo-300 break-all"
                          >
                            your.email@example.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <i className="codicon codicon-device-mobile text-xl sm:text-2xl text-indigo-400"></i>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                            Phone
                          </h3>
                          <a
                            href="tel:+1234567890"
                            className="text-sm sm:text-base text-indigo-400 hover:text-indigo-300"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <i className="codicon codicon-github text-xl sm:text-2xl text-indigo-400"></i>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                            GitHub
                          </h3>
                          <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-indigo-400 hover:text-indigo-300 break-all"
                          >
                            github.com/yourusername
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <i className="codicon codicon-link-external text-xl sm:text-2xl text-indigo-400"></i>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-200">
                            LinkedIn
                          </h3>
                          <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-indigo-400 hover:text-indigo-300 break-all"
                          >
                            linkedin.com/in/yourusername
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty Sections */}
              <div id="" className="container mx-auto p-4 sm:p-8 mb-6"></div>
              <div id="" className="container mx-auto p-4 sm:p-8 mb-6"></div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center px-4 text-sm z-50">
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
    </div>
  );
}

export default App;
