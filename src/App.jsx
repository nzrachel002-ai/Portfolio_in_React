import Navbar from "./Portfolio/components/navbar";
import Home from "./Portfolio/components/Home";
import About from "./Portfolio/components/About";
import Skills from "./Portfolio/components/Skills";
import Projects from "./Portfolio/components/Project";
import Contact from "./Portfolio/components/Contact";
import "./app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
