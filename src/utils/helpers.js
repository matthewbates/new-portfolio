import FileSaver from "file-saver";
import { useEffect } from "react";

import resume from "../assets/resume.pdf";

// closes <Sidebar /> when a <Link /> is clicked
export const closeDrawer = (setIsOpen) => {
  setTimeout(() => setIsOpen(false), 500);
};

// opens/closes <Sidebar /> when <Burger /> is clicked
export const toggleSidebar = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
};

// downloads resume
export const downloadResume = () => {
  FileSaver.saveAs(resume, "Matthew Bates - Resume");
};

// closes <Sidebar /> if the window exceeds 768px
export const useHandleResize = (setIsOpen) => {
  const handleResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

// scrolls to the top of the page when <Logo /> is clicked in <Navbar />
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

// reformats the date in <Blog />
export const formatDate = (dateStr) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateStr);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

// formats the title in <BlogItem /> that relpaces the "&amp:" text with "&"
export const formatBlogTitle = (title) => {
  const decodedTitle = document.createElement("textarea");
  decodedTitle.innerHTML = title;
  return decodedTitle.value;
};

// sets the duration for <Scroll /> component
export const generateSpeed = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
