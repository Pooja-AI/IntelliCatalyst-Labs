import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Update the path if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="IC Logo" className="logo-icon" />

        <Link to="/" className="logo-text">
          <span className="logo-white">IntelliCatalyst</span>
          <span className="logo-blue">AI Labs</span>
        </Link>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>

      </div>
    </nav>
  );
}

export default Navbar;