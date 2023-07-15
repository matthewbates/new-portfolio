import { useState, useEffect } from "react";

import FileSaver, { saveAs } from "file-saver";

import { icons } from "./data";
import resume from "../assets/resume.pdf";

// closes <Sidebar /> when a <Link /> is clicked
export const closeDrawer = (setIsOpen) => {
  setTimeout(() => setIsOpen(false), 750);
};

// opens/closes <Sidebar /> when <Burger /> is clicked
export const toggleSidebar = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
};

// downloads resume
export const downloadResume = () => {
  FileSaver.saveAs(resume, "Resume");
};

// scrolls to the top of the page when <Logo /> is clicked in <Navbar />
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

// closes <Sidebar /> when the user clicks outside
export const useClickOutside = (ref, handler) => {
  const listener = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      if (!ref.current.parentNode.contains(e.target)) {
        handler();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

// handles the resizing of <HomeIcon /> depending on window.innerWidth
export const useIconStyles = () => {
  const [iconStyles, setIconStyles] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const updatedStyles = icons.map((icon) => {
        let height = window.innerWidth > 820 ? "48px" : "42px";
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
