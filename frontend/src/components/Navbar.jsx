import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AICortex Studio</div>

      <div className="menu">
        <Link to="/AICortex-Studio/">Home</Link>
        <Link to="/AICortex-Studio/projects">Projects</Link>
        <Link to="/AICortex-Studio/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;