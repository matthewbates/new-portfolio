import FileSaver from "file-saver";

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
