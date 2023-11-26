import { useEffect } from "react";

import axios from "axios";

import { RSS_CONVERTER } from "./data";

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

export const useBlur = (ref) => {
  const listener = (e) => {
    if (ref.current & !ref.current.contains(e.target)) {
      window.blur();
    }
  };
};

// handles the resizing of <HomeIcon /> depending on window.innerWidth
// export const useIconStyles = () => {
//   const [iconStyles, setIconStyles] = useState([]);

//   useEffect(() => {
//     const handleResize = () => {
//       const updatedStyles = icons.map((icon) => {
//         let height = window.innerWidth > 820 ? "48px" : "42px";
//         return {
//           ...icon,
//           style: {
//             ...icon.style,
//             height,
//           },
//         };
//       });
//       setIconStyles(updatedStyles);
//     };
//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return iconStyles;
// };

// fetches Medium blogs for <Blog />
export const useFetchBlogs = (setBlogs) => {
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(RSS_CONVERTER);
        if (response.status === 200) {
          setBlogs(response.data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, [setBlogs]);
};

export const useScrollPosition = (scrollDirection, setScrollDirection) => {
  useEffect(() => {
    let lastScrollY = window.pageYOffset; // the last scroll position

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset; // the new scroll position
      const direction = scrollY > lastScrollY ? "down" : "up"; // the direction of the scroll
      if (direction !== scrollDirection) setScrollDirection(direction);
      lastScrollY = scrollY ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);
  return scrollDirection;
};
