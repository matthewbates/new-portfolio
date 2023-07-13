import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Projects />
      <Contact />
      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  );
}

export default App;
