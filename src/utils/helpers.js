import { useEffect } from "react";

// toggles the <Sidebar /> component
export const toggleSidebar = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
};

// closes <Sidebar /> when a <Link /> is clicked
export const closeDrawer = (setIsOpen) => {
  setTimeout(() => setIsOpen(false), 500);
};

// closes <Sidebar /> when the viewport > 820
export const useResize = (ref, callback) => {
  const handleResize = (e) => {
    if (e.currentTarget.innerWidth > 820) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, callback]);
};

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
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, callback]);
};

export const useScrollResize = (ref, callback, visible, setVisible) => {
  const prevYScroll = window.pageYOffset;
  const handleScrollResize = () => {
    const currentYScroll = window.pageYOffset;
    if (currentYScroll >= prevYScroll || prevYScroll < 10) {
      setVisible(currentYScroll);
      prevYScroll = currentYScroll;
    }
    useEffect(() => {
      window.addEventListener("mousedown", handleScrollResize);
      return () => window.removeEventListener("mousedown", handleScrollResize);
    }, [visible]);
  };

  useEffect(() => {
    document.addEventListener("", handleScrollResize);
    return () => document.removeEventListener("", handleScrollResize);
  }, [ref, callback]);
};
