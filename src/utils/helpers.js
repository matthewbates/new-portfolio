import { useState, useEffect } from "react";

import FileSaver, { saveAs } from "file-saver";

import { icons } from "./data";
import resume from "../assets/resume.pdf";

// closes <Sidebar /> when a <Link /> is clicked
export const closeDrawer = (setIsOpen) => {
  setTimeout(() => setIsOpen(false), 750);
};

// downloads resume
export const downloadResume = () => {
  FileSaver.saveAs(resume, "Resume");
};

// closes <Sidebar /> when the user clicks outside
export const useClickOutside = (ref, callback) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      if (!ref.current.parentNode.contains(e.target)) {
        callback();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

// handles the resizing of <HomeIcon /> depending on window.innerWidth
export const useIconStyles = () => {
  const [iconStyles, setIconStyles] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const updatedStyles = icons.map((icon) => {
        let height = window.innerWidth > 820 ? "60px" : "42px";
        return {
          ...icon,
          style: {
            ...icon.style,
            height,
          },
        };
      });
      setIconStyles(updatedStyles);
    };
    // icons will appear on page load and not on initial page resize
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return iconStyles;
};
