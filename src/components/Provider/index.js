import { useState, useEffect, createContext } from "react";

import CONSTANTS from "../../utils/constants";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"));

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const color = theme === "light" && "#ffffff";
  const backgroundColor =
    theme === "light"
      ? `${CONSTANTS.colors.royalBlue}`
      : // : `${CONSTANTS.colors.gray_3}`;
        "#22272e";
  const borderRadius = theme === "light" ? "#000000" : "#ffffff";
  const transition = "0.3s ease";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.borderRadius = borderRadius;
  document.body.style.transition = transition;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
