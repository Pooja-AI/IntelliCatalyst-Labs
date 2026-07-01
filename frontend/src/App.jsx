import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Books from "./pages/Books";
import AgenticAICookbook   from "./pages/AgenticAICookbook";
import FRAMEWORKS from "./pages/MultiAgentFrameworks";
import MCP from "./pages/MCP";
import A2A from "./pages/A2A";

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

//Agentic AI
import AgenticAI from "./pages/AgenticAI";
import AgenticAIProjectDetails from "./pages/AgenticAIProjectDetails";

//NLP
import NaturalLanguageProcessing from "./pages/NaturalLanguageProcessing";
import NLPProjectDetails from "./pages/NLPProjectDetails";

//Generative AI
import GenerativeAI from "./pages/GenerativeAI";
import GenAIProjectDetails from "./pages/GenAIProjectDetails";

//System Design
import SystemDesign from "./pages/SystemDesign";
import SystemDesignProjectDetails from "./pages/SystemDesignProjectDetails";  

//Data Science
import DataScience from "./pages/DataScience";
import DataScienceProjectDetails from "./pages/DataScienceProjectDetails";

//Multi-Agent AI
import MultiAgent from "./pages/MultiAgentAI";
import MultiAgentProjectDetails from "./pages/MultiAgentProjectDetails";







function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />

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

        {/* Agentic AI */}
        <Route path="/agentic-ai" element={<AgenticAI />} />
        <Route path="/agentic-ai/:id" element={<AgenticAIProjectDetails />} />

        {/* Natural Language Processing */}
        <Route path="/natural-language-processing" element={<NaturalLanguageProcessing />} />
        <Route path="/natural-language-processing/:id" element={<NLPProjectDetails />} />

        {/* Generative AI */}
        <Route path="/generative-ai" element={<GenerativeAI />} />
        <Route path="/generative-ai/:id" element={<GenAIProjectDetails />} />

        {/* System Design */}
        <Route path="/system-design" element={<SystemDesign />} />
        <Route path="/system-design/:id" element={<SystemDesignProjectDetails />} />

        {/* Data Science */}
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/data-science/:id" element={<DataScienceProjectDetails />} />

        {/* Multi-Agent AI */}
        <Route path="/multi-agent-ai" element={<MultiAgent />} />
        <Route path="/multi-agent-ai/:id" element={<MultiAgentProjectDetails />} />

        

        {/* Agentic AI */}
        <Route path="/agentic-cookbook" element={<AgenticAICookbook />}/>

        {/* Multi-Agent AI */}
        <Route path="/multi-agent-cookbook" element={<FRAMEWORKS />} />

        {/* MCP */}
        <Route path="/mcp" element={<MCP />} />

        {/* A2A */}
        <Route path="/a2a" element={<A2A />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;