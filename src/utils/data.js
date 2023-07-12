import SQL from "../assets/sql.png";
import GREENSOCK from "../assets/greensock.svg";
import MONGODB from "../assets/mongodb.svg";

import CODEWARS from "../assets/codewars.png";
import GITHUB from "../assets/github.png";
import LINKEDIN from "../assets/linkedin.png";
import MEDIUM from "../assets/medium.png";

export const TARGET = "_blank";
export const REL = "noopener noreferrer";

export const avatar = {
  img: require("../assets/avatar.png"),
  alt: "avatar",
};

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
    name: "Skills",
  },
  {
    id: 4,
    name: "Projects",
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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    label: "Ruby",
    alt: "ruby-icon",
  },
  {
    id: 4,
    name: "Rails",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
    label: "Rails",
    alt: "rails-icon",
  },

  {
    id: 5,
    name: "Git",
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    label: "Git",
    alt: "git-icon",
  },
  {
    id: 6,
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    label: "React",
    alt: "react-icon",
  },
  {
    id: 7,
    name: "Node.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    label: "Node.js",
    alt: "nodejs-icon",
  },
  {
    id: 8,
    name: "Jest",
    img: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    label: "HTML",
    alt: "html-icon",
  },
  {
    id: 11,
    name: "CSS",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    label: "CSS",
    alt: "css-icon",
  },
  {
    id: 12,
    name: "Bootstrap",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
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
      transform: "scale(1.2)",
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
    text: "I build things for the web.",
  },
];

export const aboutText = [
  {
    id: 1,
    text: "Hello! My name is Matthew and I'm an application developer living in Denver, CO. My interest in technology started back in 2017 with a previous employer where I assisted the IT department develop custom SQL queries for a system migration.",
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
