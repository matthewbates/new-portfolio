import { useState, useEffect } from "react";

import axios from "axios";

import { RSSCONVERTER, icons } from "./data";

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

// fetches Medium blogs for <Blog />
export const useFetchBlogs = (setBlogs) => {
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(RSSCONVERTER);
        if (response.status === 200) {
          console.log(response);
          setBlogs(response.data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, [setBlogs]);
};