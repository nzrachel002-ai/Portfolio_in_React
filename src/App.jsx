import { useState } from "react";
import Navbar from "./Portfolio/components/navbar";
import Home from "./Portfolio/components/Home";
import About from "./Portfolio/components/About";
import Skills from "./Portfolio/components/Skills";
import Projects from "./Portfolio/components/Project";
import Contact from "./Portfolio/components/Contact";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
