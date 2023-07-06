import SQL from "../assets/sql.png";
import GREENSOCK from "../assets/greensock.svg";
import MONGODB from "../assets/mongodb.svg";

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

export const icons = {
  languagesAndFrameworks: {
    javascript: {
      id: 1,
      name: "Javascript",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      label: "JavaScript",
      alt: "javascript-icon",
    },
    sql: {
      id: 2,
      name: "SQL",
      img: SQL,
      label: "SQL",
      alt: "sql-icon",
    },
    ruby: {
      id: 3,
      name: "Ruby",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
      label: "Ruby",
      alt: "ruby-icon",
    },
    rails: {
      id: 4,
      name: "Rails",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      label: "Rails",
      alt: "rails-icon",
    },
  },
  libraries: {
    git: {
      id: 5,
      name: "Git",
      img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      label: "Git",
      alt: "git-icon",
    },
    react: {
      id: 6,
      name: "React",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      label: "React",
      alt: "react-icon",
    },
    nodejs: {
      id: 7,
      name: "Node.js",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      label: "Node.js",
      alt: "nodejs-icon",
    },
    jest: {
      id: 8,
      name: "Jest",
      img: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      label: "Jest",
      alt: "jest-icon",
    },
    mongodb: {
      id: 9,
      name: "MongoDB",
      img: MONGODB,
      label: "MongoDB",
      alt: "mongodb-icon",
    },
  },
  frontendDevelopment: {
    html: {
      id: 10,
      name: "HTML",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      label: "HTML",
      alt: "html-icon",
    },
    css: {
      id: 11,
      name: "CSS",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      label: "CSS",
      alt: "css-icon",
    },
    bootstrap: {
      id: 12,
      name: "Bootstrap",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      label: "Bootstrap",
      alt: "bootstrap-icon",
    },
    greensock: {
      id: 13,
      name: "Greensock",
      img: GREENSOCK,
      label: "Greensock",
      alt: "greensock-icon",
    },
  },
};
