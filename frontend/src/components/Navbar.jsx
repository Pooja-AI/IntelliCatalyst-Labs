import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="navbar">

  <div className="logo">
    IntelliCatalystAI Labs
  </div>

  <div className="menu">
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>

</nav>


);
}

export default Navbar;
