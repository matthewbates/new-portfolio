import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
