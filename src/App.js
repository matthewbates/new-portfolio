import "./App.css";

import { useState, useEffect } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Home isOpen={isOpen} />
          <About />
          <Projects />
          <Blog />
          <Contact />
          <ScrollToTop />
          <Footer />
        </div>
      {/* )} */}
    </>
  );
}
