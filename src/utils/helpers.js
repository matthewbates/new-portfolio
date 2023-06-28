import { useState, useEffect } from "react";

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
