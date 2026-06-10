import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutPlatform from "./components/AboutPlatform";
import HowItWorks from "./components/HowItWorks";
import Trends from "./components/Trends";
import Future from "./components/Future";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/AICortex-Studio/"
          element={<Navigate to="/AICortex-Studio/home" replace />}
        />
        <Route path="/AICortex-Studio/home" element={<Home />} />
        <Route path="/AICortex-Studio/about" element={<About />} />
        <Route path="/AICortex-Studio/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

