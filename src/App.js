import "./App.css";

import { useState, useEffect, useContext } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { ThemeContext } from "./components/Provider";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div className="App">
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          theme={theme}
          toggle={toggleTheme}
        />
        <Home isOpen={isOpen} theme={theme} />
        <About theme={theme} />
        <Projects />
        <Blog theme={theme} />
        <Contact theme={theme} />
        <ScrollToTop />
        <Footer />
      </div>
      {/* )} */}
    </>
  );
}
