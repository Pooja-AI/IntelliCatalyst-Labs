const rlProjects = [
  {
    id: "grid-world-qlearning",
    title: "Grid World Path Finder using Q-Learning",
    category: "Value-Based RL",
    description: "Find optimal path in grid world using Q-Learning algorithm.",

    problemStatement:
      "Design a reinforcement learning agent that learns the optimal path from a start state to a goal state while avoiding obstacles and maximizing cumulative rewards.",

    architecture:
      "Environment → State Space → Q-Table → Action Selection (Epsilon-Greedy) → Reward System → Policy Update → Optimal Path Extraction",

    workflow: [
      "Initialize grid world environment",
      "Define reward structure for goal, obstacle, and steps",
      "Initialize Q-table",
      "Apply epsilon-greedy exploration",
      "Update Q-values iteratively",
      "Derive optimal policy path"
    ],

    deployment:
      "Deployed as a Python simulation using OpenAI Gym-style custom environment",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Q-Learning", "Reinforcement Learning"]
  },

  {
    id: "cliff-walking",
    title: "Cliff Walking Problem (Safe vs Risky Path Learning)",
    category: "Value-Based RL",
    description: "Learn safe vs risky paths using reinforcement learning.",

    problemStatement:
      "Train an RL agent to navigate from start to goal while avoiding cliff states that produce high negative rewards.",

    architecture:
      "Cliff Environment → State Space → Q-Table → Policy (Epsilon-Greedy) → Reward Penalization → Learning Loop",

    workflow: [
      "Define CliffWalking environment",
      "Initialize Q-table",
      "Apply epsilon-greedy strategy",
      "Train over multiple episodes",
      "Penalize cliff falls heavily",
      "Converge to safe path policy"
    ],

    deployment: "Gym-based simulation environment",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Q-Learning", "Gym Environment"]
  },

  {
    id: "cartpole-dqn",
    title: "CartPole Balancing using Deep Q-Network (DQN)",
    category: "Deep RL",
    description: "Balance pole using Deep Q-Network agent.",

    problemStatement:
      "Train a deep reinforcement learning agent to balance a pole on a moving cart for maximum duration without failure.",

    architecture:
      "Environment → Neural Network (Q-function) → Experience Replay → Target Network → Action Selection → Training Loop",

    workflow: [
      "Initialize CartPole environment",
      "Build deep neural network model",
      "Store experiences in replay buffer",
      "Sample mini-batches for training",
      "Update Q-network and target network",
      "Evaluate balancing performance"
    ],

    deployment:
      "Trained using PyTorch + OpenAI Gym simulation environment",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "DQN", "PyTorch"]
  },

  {
    id: "taxi-v3",
    title: "Taxi V3 Environment RL Agent",
    category: "Value-Based RL",
    description: "Train agent to solve taxi pickup and drop problem.",

    problemStatement:
      "Develop an RL agent that learns optimal pickup and drop-off strategies in a grid-world taxi environment.",

    architecture:
      "Taxi Environment → State Encoding → Q-Table → Action Selection → Reward System → Policy Optimization",

    workflow: [
      "Define Taxi-v3 environment",
      "Encode states (location, passenger, destination)",
      "Initialize Q-table",
      "Train using Q-learning",
      "Optimize pickup/drop strategy",
      "Evaluate success rate"
    ],

    deployment: "OpenAI Gym Taxi-v3 simulation",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "OpenAI Gym", "Q-Learning"]
  },

  {
    id: "stock-trading-rl",
    title: "Stock Trading Simulator using RL",
    category: "Finance RL",
    description: "Simulate stock trading decisions using reinforcement learning.",

    problemStatement:
      "Build an RL agent that learns optimal buy/sell/hold decisions to maximize profit in stock markets.",

    architecture:
      "Market Data → Feature Engineering → Trading Environment → RL Agent → Reward (Profit/Loss) → Policy Learning",

    workflow: [
      "Load historical stock data",
      "Define trading actions (buy/sell/hold)",
      "Create custom trading environment",
      "Define reward based on profit/loss",
      "Train RL agent",
      "Backtest strategy performance"
    ],

    deployment:
      "Python-based backtesting simulation environment",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "RL", "Finance"]
  }
];

export default rlProjects;