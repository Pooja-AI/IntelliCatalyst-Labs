import { useState } from "react";

function ArchitectureFlow() {
  const [selected, setSelected] = useState("");

  const nodes = [
    "Data Collection",
    "Data Cleaning",
    "Feature Engineering",
    "Model Training",
    "Model Evaluation",
    "Deployment (FastAPI)",
    "React Frontend"
  ];

  return (
    <div className="section">
      <h2>🏗️ Interactive Architecture</h2>

      <div className="flow">
        {nodes.map((node) => (
          <div
            key={node}
            className="node"
            onClick={() => {
              console.log("Node Clicked:", node);
              setSelected(node);
            }}
          >
            {node}
          </div>
        ))}
      </div>

      {selected && (
        <div className="info-box">
          <h3>{selected}</h3>
          <p>
            {selected === "Data Collection" &&
              "Data collected from CRM and billing systems."}
            {selected === "Model Training" &&
              "Random Forest & XGBoost models trained."}
            {selected === "Deployment (FastAPI)" &&
              "Model exposed as REST API."}
          </p>
        </div>
      )}
    </div>
  );
}

export default ArchitectureFlow;