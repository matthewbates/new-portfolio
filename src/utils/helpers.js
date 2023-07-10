import { useEffect } from "react";

// closes <Sidebar /> when a <Link /> is clicked
export const closeDrawer = (setIsOpen) => {
  setTimeout(() => setIsOpen(false), 750);
};

// closes <Sidebar /> when the viewport > 820
// export const useResize = (ref, callback) => {
//   const handleResize = (e) => {
//     if (e.currentTarget.innerWidth > 820) {
//       callback();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [ref, callback]);
// };

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
