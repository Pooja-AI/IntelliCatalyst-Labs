import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import MachineLearning from "./pages/MachineLearning";
import MLProjectDetails from "./pages/MLProjectDetails";
import Deeplearning from "./pages/Deeplearning";
import DLProjectDetails from "./pages/DLProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/machine-learning"
          element={<MachineLearning />}
        />

        <Route
          path="/machine-learning/:id"
          element={<MLProjectDetails />}
        />
      
       <Route
          path="/deep-learning"
          element={<Deeplearning />}
        />

        <Route
          path="/deep-learning/:id"
          element={<DLProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;