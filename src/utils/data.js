import SQL from "../assets/icons/skills/sql.png";
import GREENSOCK from "../assets/icons/skills/greensock.svg";
import JAVASCRIPT from "../assets/icons/skills/javascript.svg";
import RUBY from "../assets/icons/skills/ruby.png";
import RAILS from "../assets/icons/skills/rails.jpeg";
import GIT from "../assets/icons/skills/git.svg";
import REACT from "../assets/icons/skills/react.svg";
import NODE from "../assets/icons/skills/node_js.svg";
import JEST from "../assets/icons/skills/jest.svg";
import HTML from "../assets/icons/skills/html.svg";
import CSS from "../assets/icons/skills/css.png";
import BOOTSTRAP from "../assets/icons/skills/bootstrap.png";
import MONGODB from "../assets/icons/skills/mongo_db.svg";
import PYTHON from "../assets/icons/skills/python.svg";

import CODEWARS from "../assets/icons/links/codewars.png";
import GITHUB from "../assets/icons/links/github.png";
import LINKEDIN from "../assets/icons/links/linkedin.png";
import MEDIUM from "../assets/icons/links/medium.png";
import CODEPEN from "../assets/icons/links/codepen.svg";

import PERSEPHONE_GRAES from "../assets/projects/persephoneGraes.png";
import MARS_INDUSTRIES from "../assets/projects/marsIndustries.png";
import MB_WEB_DESIGNS from "../assets/projects/mbWebDesigns.png";
import YOUTUBE from "../assets/projects/youtube.png";
import CAMPUS_MAPS from "../assets/projects/campusMaps.png";
import MOUNTAIN_BUDDY from "../assets/projects/mountainBuddy.png";
import MONSTERS_ROLODEX from "../assets/projects/monstersRolodex.png";
import ALGORITHMS from "../assets/projects/algorithms.png";

import {
  mdiSpeedometer,
  mdiLightbulbOn10,
  mdiResponsive,
  mdiRocketLaunchOutline,
  mdiLanguagePython,
} from "@mdi/js";

export const TARGET = "_blank";
export const REL = "noopener noreferrer";

const USERNAME = "matthewhcbates";
const RSSURL = `https://medium.com/feed/@${USERNAME}`;
export const RSS_CONVERTER = `https://api.rss2json.com/v1/api.json?rss_url=${RSSURL}`;

export const ITEMS_PER_PAGE = 4;

export const freelance = [
  {
    id: 1,
    path: mdiSpeedometer,
    size: 4,
    title: "Fast",
    text: "Fast load times and lag-free interaction, my highest priority.",
  },
  {
    id: 2,
    path: mdiLightbulbOn10,
    size: 4,
    title: "Intuitive",
    text: "Strong preference for easy to use, intuitive UI/UX",
  },
  {
    id: 3,
    path: mdiResponsive,
    size: 4,
    title: "Responsive",
    text: "My layouts will work on any device, big or small",
  },
  {
    id: 4,
    path: mdiRocketLaunchOutline,
    size: 4,
    title: "Dynamic",
    text: "Websites don't have to be static - I make pages come to life",
  },
];

export const links = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Projects",
  },
  {
    id: 4,
    name: "Blog",
  },
  {
    id: 5,
    name: "Contact",
  },
];

export const skills = [
  {
    id: 1,
    name: "Javascript",
    img: JAVASCRIPT,
    label: "JavaScript",
    alt: "javascript-icon",
  },
  {
    id: 2,
    name: "SQL",
    img: SQL,
    label: "SQL",
    alt: "sql-icon",
  },
  {
    id: 3,
    name: "Ruby",
    img: RUBY,
    label: "Ruby",
    alt: "ruby-icon",
  },
  {
    id: 4,
    name: "Python",
    img: PYTHON,
    alt: "python-icon",
  },
  // {
  //   id: 4,
  //   name: "Rails",
  //   img: RAILS,
  //   label: "Rails",
  //   alt: "rails-icon",
  // },
  {
    id: 5,
    name: "Git",
    img: GIT,
    label: "Git",
    alt: "git-icon",
  },
  {
    id: 6,
    name: "React",
    img: REACT,
    label: "React",
    alt: "react-icon",
  },
  {
    id: 7,
    name: "Node.js",
    img: NODE,
    label: "Node.js",
    alt: "nodejs-icon",
  },
  {
    id: 8,
    name: "Jest",
    img: JEST,
    label: "Jest",
    alt: "jest-icon",
  },
  {
    id: 9,
    name: "MongoDB",
    img: MONGODB,
    label: "MongoDB",
    alt: "mongodb-icon",
  },
  {
    id: 10,
    name: "HTML",
    img: HTML,
    label: "HTML",
    alt: "html-icon",
  },
  {
    id: 11,
    name: "CSS",
    img: CSS,
    label: "CSS",
    alt: "css-icon",
  },
  {
    id: 12,
    name: "Bootstrap",
    img: BOOTSTRAP,
    label: "Bootstrap",
    alt: "bootstrap-icon",
  },
  {
    id: 13,
    name: "Greensock",
    img: GREENSOCK,
    label: "Greensock",
    alt: "greensock-icon",
  },
];

export const icons = [
  {
    id: 1,
    name: "Codewars",
    image: CODEWARS,
    url: "https://www.codewars.com/users/matthewhcbates",
    className: "icons",
    style: {
      background: "#A8332A",
      borderRadius: "8px",
    },
  },
  {
    id: 2,
    name: "Github",
    image: GITHUB,
    url: "https://www.github.com/matthewbates",
    className: "icons",
    style: {
      transform: "scale(1.19)",
      background: "#ffffff",
    },
  },
  {
    id: 3,
    name: "LinkedIn",
    image: LINKEDIN,
    url: "https://www.linkedin.com/in/matthew-bates-71b7bb79/",
    className: "icons",
  },
  {
    id: 4,
    name: "Medium",
    image: MEDIUM,
    url: "https://www.medium.com/@matthewhcbates",
    className: "icons",
    style: {
      transform: "scale(1.05)",
    },
  },
  {
    id: 5,
    name: "Codepen",
    image: CODEPEN,
    url: "https://codepen.io/matthewbates",
    className: "icons",
  },
];

export const homeText = [
  {
    id: 1,
    text: "Hi, my name is",
  },
  {
    id: 2,
    text: "Matthew Bates",
  },
  {
    id: 3,
    text: "I'm a full-stack software developer.",
  },
];

export const aboutText = [
  {
    id: 1,
    text: "Hello! My name is Matthew and I live in Denver,CO - nice to meet you! My interest in technology started back in 2017 with a previous employer where I assisted the IT department develop custom SQL queries for a system migration.",
  },
  {
    id: 2,
    textOne: "Fast forward to today, I work at the  ",
    hyperlinkTextOne: "University of Denver",
    urlOne: "https://www.du.edu/",
    textTwo: " as an application developer. ",
    textThree: "I also do ",
    hyperlinkTextTwo: "freelance software development",
    urlTwo: "https://soft-lebkuchen-2188b1.netlify.app/",
    textFour:
      " on the side where I design, develop, test, and deploy mobile-optimized sites.",
  },
  {
    id: 3,
    text: "Some of the technologies that I utilize include:",
  },
];

export const contactData = [
  {
    id: 1,
    name: "name",
    type: "text",
    label: "Name",
    error: "Name is required",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    label: "Email",
    error: "Invalid email address",
  },
  {
    id: 3,
    name: "message",
    type: "message",
    label: "Message",
    rows: 8,
    error: "Message is too short",
  },
];

export const projectData = [
  {
    id: 1,
    name: "Persephone Graes Cafe",
    image: PERSEPHONE_GRAES,
    techStack: "React JS · Google Maps/Business Profile API",
    github: "false",
    link: "https://www.persephonegraescafe.com",
    tooltipGithub: "Private Repository",
    tooltipLink: "Website",
  },
  {
    id: 2,
    name: "Mars Industries",
    image: MARS_INDUSTRIES,
    techStack: "React JS · EmailJS · GSAP",
    github: "https://github.com/matthewbates/mars-industries",
    link: "https://www.marsindustriesco.com",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Website",
  },
  {
    id: 3,
    name: "DU Campus Maps",
    image: CAMPUS_MAPS,
    techStack: "React JS · Google Maps/Distance Matrix API",
    github: "false",
    link: "false",
    tooltipGithub: "Private Repository",
    tooltipLink: "Private Website",
  },
  {
    id: 4,
    name: "Algorithms",
    image: ALGORITHMS,
    techStack: "Vanilla JS · Python",
    github: "https://github.com/matthewbates/algorithms",
    link: "false",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Repo-Only ",
  },
  {
    id: 5,
    name: "YouTube Clone",
    image: YOUTUBE,
    techStack: "React JS ·YouTube Data API",
    github: "https://github.com/matthewbates/youtube-clone",
    link: "https://aesthetic-alpaca-04fc9c.netlify.app/",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Website",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Website",
  },
  {
    id: 6,
    name: "MB Web Designs",
    image: MB_WEB_DESIGNS,
    techStack: "React JS · Atlist Maps",
    github: "https://github.com/matthewbates/mb-web-innovations",
    link: "false",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Under Construction",
  },
  {
    id: 7,
    name: "Monsters Rolodex",
    image: MONSTERS_ROLODEX,
    techStack: "React JS Class Components · SCSS",
    github: "https://github.com/matthewbates/monsters",
    link: "https://gleeful-donut-637978.netlify.app/",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Website",
  },
  {
    id: 8,
    name: "Mountain Buddy",
    image: MOUNTAIN_BUDDY,
    techStack: "React JS · Ruby on Rails · OpenWeatherMap API",
    github: "https://github.com/matthewbates/Mountain-Buddy",
    link: "https://vimeo.com/695889451/21156ef4dd?share=copy",
    tooltipGithub: "GitHub Repo",
    tooltipLink: "Website",
  },
];
