import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Certifications from "./Pages/Certifications";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/education" element={<Education />} ></Route>
        <Route path="/projects" element={<Projects />} ></Route>
        <Route path="/skills" element={<Skills />} ></Route>
        <Route path="/certifications" element={<Certifications />} ></Route>
        <Route path="/achievements" element={<Achievements />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </div>

  );
}

export default App;
