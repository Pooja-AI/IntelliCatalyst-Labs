import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// ML
import MachineLearning from "./pages/MachineLearning";
import MLProjectDetails from "./pages/MLProjectDetails";

// DL
import Deeplearning from "./pages/Deeplearning";
import DLProjectDetails from "./pages/DLProjectDetails";

// RL
import ReinforcementLearning from "./pages/ReinforcementLearning";
import RLProjectDetails from "./pages/RLProjectDetails";

// MLOps
import MLOps from "./pages/MLOps";
import MLOpsProjectDetails from "./pages/MLOpsProjectDetails";

//RAG
import RAG from "./pages/RAG";
import RAGProjectDetails from "./pages/RAGProjectDetails";

//LLMOps
import LLMOps from "./pages/LLMOps";
import LLMOpsProjectDetails from "./pages/LLMOpsProjectDetails";






function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />

        {/* Machine Learning */}
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/machine-learning/:id" element={<MLProjectDetails />} />

        {/* Deep Learning */}
        <Route path="/deep-learning" element={<Deeplearning />} />
        <Route path="/deep-learning/:id" element={<DLProjectDetails />} />

        {/* Reinforcement Learning */}
        <Route path="/reinforcement-learning" element={<ReinforcementLearning />} />
        <Route path="/reinforcement-learning/:id" element={<RLProjectDetails />} />

        {/* MLOps */}
        <Route path="/mlops" element={<MLOps />} />
        <Route path="/mlops/:id" element={<MLOpsProjectDetails />} />

        {/* Retrieval-Augmented Generation */}
        <Route path="/retrieval-augmented-generation" element={<RAG />} />
        <Route path="/retrieval-augmented-generation/:id" element={<RAGProjectDetails />} />

        {/* LLMOps */}
        <Route path="/llmops" element={<LLMOps />} />
        <Route path="/llmops/:id" element={<LLMOpsProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;